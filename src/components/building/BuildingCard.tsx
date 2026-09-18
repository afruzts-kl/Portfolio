import { Github, Clock, FileText } from "lucide-react";
import { Card } from "../ui";

interface BuildingCardProps {
  project: {
    id: string;
    title: string;
    description: string;
    techStack: string[];
    status: "planning" | "active" | "paused";
    startDate?: string;
    githubUrl?: string;
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
    <Card variant="interactive" padding="lg" className="h-full flex flex-col relative overflow-hidden">
      <div
        className="absolute left-0 top-0 bottom-0 w-1"
        style={{ backgroundColor: status.color }}
        aria-hidden="true"
      />
      <div className="flex items-start justify-between gap-4 mb-4 relative">
        <div className="flex-1 min-w-0">
          <h3 className="font-display text-display-sm text-fg">{project.title}</h3>
          <span
            className="inline-flex items-center gap-1.5 font-mono text-caption px-2 py-1 rounded border mt-2"
            style={{ borderColor: status.color, color: status.color, backgroundColor: status.bg }}
          >
            {status.label}
          </span>
        </div>
      </div>

      <p className="font-ui text-body text-fg-muted mb-4 flex-1">{project.description}</p>

      <div className="flex flex-wrap gap-1.5 mb-4" role="list" aria-label="Technologies">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="font-mono text-caption text-fg-subtle px-2 py-1 bg-bg-elevated border border-border rounded"
            role="listitem"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="space-y-2 text-caption text-fg-subtle border-t border-border pt-4 mt-auto">
        {project.startDate && (
          <div className="flex items-center gap-2 font-mono">
            <Clock className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Started: {project.startDate}</span>
          </div>
        )}
        {project.notes && (
          <div className="flex items-center gap-2 font-mono">
            <FileText className="h-3.5 w-3.5" aria-hidden="true" />
            <span>{project.notes}</span>
          </div>
        )}
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-mono hover:text-accent transition-colors inline-flex"
            aria-label={`${project.title} on GitHub`}
          >
            <Github className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Repository</span>
          </a>
        )}
      </div>
    </Card>
  );
}