import { useState } from "react";
import { cn } from "../../utils/cn";
import { ExternalLink, Github, ChevronRight, Clock } from "lucide-react";
import type { Project } from "./projects.data";
import { Card } from "../ui";
import { statusLabels } from "./projects.data";

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
    onExpand?.();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onExpand?.();
    }
  };

  return (
    <Card
      variant="interactive"
      padding="lg"
      className={cn(
        "relative overflow-hidden flex flex-col h-full",
        isExpanded && "ring-2 ring-accent/50"
      )}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-expanded={isExpanded}
      aria-label={`View ${project.title} details`}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-accent/5 via-transparent to-transparent opacity-0 transition-opacity duration-500" aria-hidden="true" />

      <div className="relative z-10 space-y-4">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 min-w-0">
            <h3 className="font-display text-display-sm text-fg truncate">{project.title}</h3>
            <p className="font-ui text-body-sm text-fg-muted mt-1 line-clamp-2">{project.shortDescription}</p>
          </div>
          <span
            className="flex-shrink-0 font-mono text-caption px-2 py-1 rounded border"
            style={{
              borderColor: statusInfo.color,
              color: statusInfo.color,
            }}
          >
            {statusInfo.label}
          </span>
        </div>

        <div className="flex flex-wrap gap-1.5" role="list" aria-label="Technologies used">
          {project.techStack.slice(0, 6).map((tech) => (
            <span
              key={tech}
              className="font-mono text-caption text-fg-subtle px-2 py-1 bg-bg-elevated border border-border rounded transition-colors hover:border-accent/50 hover:text-accent"
              role="listitem"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 6 && (
            <span className="font-mono text-caption text-fg-subtle px-2 py-1 bg-bg-elevated border border-border rounded">
              +{project.techStack.length - 6} more
            </span>
          )}
        </div>

        <div className="flex items-center gap-4 text-caption text-fg-subtle border-t border-border pt-4 mt-auto">
          {project.startDate && (
            <span className="flex items-center gap-1.5 font-mono">
              <Clock className="h-3.5 w-3.5" aria-hidden="true" />
              {project.startDate}{project.endDate ? ` – ${project.endDate}` : " – Present"}
            </span>
          )}
          <div className="flex items-center gap-2 ml-auto">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-accent transition-colors"
                onClick={(e) => e.stopPropagation()}
                aria-label={`${project.title} on GitHub`}
              >
                <Github className="h-3.5 w-3.5" aria-hidden="true" />
                <span className="font-mono">Code</span>
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-accent transition-colors"
                onClick={(e) => e.stopPropagation()}
                aria-label={`${project.title} live demo`}
              >
                <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                <span className="font-mono">Live</span>
              </a>
            )}
            <button
              onClick={handleClick}
              className="flex items-center gap-1.5 font-ui text-body-sm text-fg-muted hover:text-accent transition-colors p-1 rounded hover:bg-bg-elevated"
              aria-label={`Expand ${project.title}`}
            >
              <span>Details</span>
              <ChevronRight className={cn("h-4 w-4 transition-transform", hovered && "translate-x-1")} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </Card>
  );
}