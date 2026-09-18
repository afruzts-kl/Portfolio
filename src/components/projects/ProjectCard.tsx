import { useState } from "react";
import { cn } from "../../utils/cn";
import { ExternalLink, ChevronRight, Clock, Github } from "lucide-react";
import type { Project } from "./projects.data";
import { TiltCard } from "../ui";
import { statusLabels } from "./projects.data";
import { sound } from "../../utils/sound";

interface ProjectCardProps {
  project: Project;
  onClick?: () => void;
  isExpanded?: boolean;
  onExpand?: () => void;
}

export function ProjectCard({ project, onClick, isExpanded = false, onExpand }: ProjectCardProps) {
  const [hovered, setHovered] = useState(false);
  const statusInfo = statusLabels[project.status];

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    sound.playClick();
    onExpand?.();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      sound.playClick();
      onExpand?.();
    }
  };

  return (
    <TiltCard
      className={cn(
        "relative overflow-hidden flex flex-col h-full cursor-pointer transition-all duration-300",
        isExpanded && "ring-2 ring-accent/60 shadow-[0_0_30px_rgba(182,243,106,0.25)]"
      )}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick || onExpand}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-expanded={isExpanded}
      aria-label={`View ${project.title} details`}
    >
      <div className="relative z-10 flex flex-col h-full space-y-4">
        {/* Header and Status */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 min-w-0">
            <h3 className="font-display-semibold text-display-sm text-fg truncate group-hover:text-lime-200 transition-colors">
              {project.title}
            </h3>
            <p className="font-body text-body-sm text-fg-muted mt-1.5 line-clamp-2 leading-relaxed">
              {project.shortDescription}
            </p>
          </div>
          <span
            className="inline-flex items-center gap-1.5 flex-shrink-0 font-mono text-[11px] px-2.5 py-1 rounded-full border shadow-sm"
            style={{
              borderColor: statusInfo.color,
              color: statusInfo.color,
              backgroundColor: `${statusInfo.color}15`,
            }}
          >
            <span
              className="h-1.5 w-1.5 rounded-full"
              style={{ backgroundColor: statusInfo.color }}
            />
            {statusInfo.label}
          </span>
        </div>

        {/* Tech Stack Badges */}
        <div className="flex flex-wrap gap-1.5" role="list" aria-label="Technologies used">
          {project.techStack.slice(0, 6).map((tech) => (
            <span
              key={tech}
              onMouseEnter={() => sound.playHover()}
              className="font-mono text-caption text-fg-subtle px-2 py-0.5 bg-bg-elevated/90 border border-border/80 rounded transition-all duration-200 hover:border-accent/60 hover:text-accent hover:scale-105"
              role="listitem"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 6 && (
            <span className="font-mono text-caption text-fg-subtle px-2 py-0.5 bg-bg-elevated border border-border rounded">
              +{project.techStack.length - 6}
            </span>
          )}
        </div>

        {/* Footer Meta & Actions */}
        <div className="flex items-center gap-4 text-caption text-fg-subtle border-t border-white/5 pt-4 mt-auto">
          {project.startDate && (
            <span className="flex items-center gap-1.5 font-mono text-fg-subtle">
              <Clock className="h-3.5 w-3.5 text-accent/70" aria-hidden="true" />
              {project.startDate}{project.endDate ? ` – ${project.endDate}` : " – Present"}
            </span>
          )}
          <div className="flex items-center gap-2 ml-auto">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-lg text-fg-muted hover:text-accent hover:bg-white/5 transition-colors"
                onClick={(e) => e.stopPropagation()}
                aria-label={`${project.title} GitHub repository`}
              >
                <Github className="h-4 w-4" aria-hidden="true" />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-mono text-xs text-lime-300 hover:text-lime-200 px-2 py-1 rounded bg-lime-300/10 border border-lime-300/30 transition-colors"
                onClick={(e) => e.stopPropagation()}
                aria-label={`${project.title} live demo`}
              >
                <ExternalLink className="h-3 w-3" aria-hidden="true" />
                Live
              </a>
            )}
            <button
              onClick={handleClick}
              className="flex items-center gap-1 font-ui text-body-sm text-fg-muted hover:text-accent transition-colors p-1 rounded hover:bg-bg-elevated"
              aria-label={`Expand ${project.title}`}
            >
              <span>Details</span>
              <ChevronRight
                className={cn("h-4 w-4 transition-transform duration-200", hovered && "translate-x-1 text-accent")}
                aria-hidden="true"
              />
            </button>
          </div>
        </div>
      </div>
    </TiltCard>
  );
}
