import { Clock, FileText } from "lucide-react";
import { TiltCard } from "../ui";
import { sound } from "../../utils/sound";

interface BuildingCardProps {
  project: {
    id: string;
    title: string;
    description: string;
    techStack: string[];
    status: "planning" | "active" | "paused";
    startDate?: string;
    notes?: string;
  };
  statusConfig: {
    planning: { label: string; color: string; bg: string };
    active: { label: string; color: string; bg: string };
    paused: { label: string; color: string; bg: string };
  };
}

export function BuildingCard({ project, statusConfig }: BuildingCardProps) {
  const status = statusConfig[project.status];

  return (
    <TiltCard className="h-full flex flex-col relative overflow-hidden">
      <div
        className="absolute left-0 top-0 bottom-0 w-1"
        style={{ backgroundColor: status.color }}
        aria-hidden="true"
      />
      <div className="flex items-start justify-between gap-4 mb-4 relative">
        <div className="flex-1 min-w-0">
          <h3 className="font-display-semibold text-display-sm text-fg group-hover:text-lime-200 transition-colors">
            {project.title}
          </h3>
          <span
            className="inline-flex items-center gap-1.5 font-mono text-[11px] px-2.5 py-1 rounded-full border mt-2"
            style={{ borderColor: status.color, color: status.color, backgroundColor: status.bg }}
          >
            <span
              className={`h-2 w-2 rounded-full relative flex items-center justify-center`}
            >
              <span
                className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                style={{ backgroundColor: status.color }}
              />
              <span
                className="relative inline-flex rounded-full h-1.5 w-1.5"
                style={{ backgroundColor: status.color }}
              />
            </span>
            {status.label}
          </span>
        </div>
      </div>

      <p className="font-ui text-body text-fg-muted mb-4 flex-1 leading-relaxed">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-1.5 mb-4" role="list" aria-label="Technologies">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            onMouseEnter={() => sound.playHover()}
            className="font-mono text-caption text-fg-subtle px-2 py-0.5 bg-bg-elevated/90 border border-border/70 rounded transition-all duration-200 hover:border-accent/60 hover:text-accent hover:scale-105"
            role="listitem"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="space-y-2 text-caption text-fg-subtle border-t border-white/5 pt-4 mt-auto">
        {project.startDate && (
          <div className="flex items-center gap-2 font-mono">
            <Clock className="h-3.5 w-3.5 text-accent/70" aria-hidden="true" />
            <span>Started: {project.startDate}</span>
          </div>
        )}
        {project.notes && (
          <div className="flex items-center gap-2 font-mono text-fg-muted">
            <FileText className="h-3.5 w-3.5 text-accent/70" aria-hidden="true" />
            <span>{project.notes}</span>
          </div>
        )}
      </div>
    </TiltCard>
  );
}
