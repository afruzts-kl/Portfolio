import type { ComponentType } from "react";
import { ArrowUpRight } from "lucide-react";
import { TiltCard } from "../ui";
import { sound } from "../../utils/sound";

interface BuildingCardProps {
  project: {
    id: string;
    title: string;
    description: string;
    techStack: string[];
    year: string;
    type: string;
    icon: ComponentType<{ className?: string }>;
  };
}

export function BuildingCard({ project }: BuildingCardProps) {
  const Icon = project.icon;

  return (
    <TiltCard className="group h-full min-h-[210px] overflow-hidden border border-white/10 bg-bg-card/80 p-5 transition-colors duration-300 hover:border-accent/35">
      <div className="flex items-start justify-between gap-4">
        <div className="flex min-w-0 items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-accent/20 bg-accent/5 text-accent transition-transform duration-300 group-hover:scale-105">
            <Icon className="h-5 w-5" aria-hidden="true" />
          </div>
          <div className="min-w-0">
            <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-fg-subtle">{project.type}</p>
            <h3 className="mt-1 font-display-semibold text-display-xs text-fg transition-colors group-hover:text-lime-200">
              {project.title}
            </h3>
          </div>
        </div>
        <span className="shrink-0 rounded-full border border-white/10 px-2 py-1 font-mono text-[9px] text-fg-subtle">
          {project.year}
        </span>
      </div>

      <p className="mt-4 font-ui text-sm leading-6 text-fg-muted">{project.description}</p>

      <div className="mt-5 flex flex-wrap gap-1.5" role="list" aria-label={`${project.title} technologies`}>
        {project.techStack.map((tech) => (
          <span
            key={tech}
            onMouseEnter={() => sound.playHover()}
            className="rounded border border-white/10 bg-bg-elevated/70 px-2 py-1 font-mono text-[9px] text-fg-subtle transition-all duration-200 hover:border-accent/40 hover:text-accent"
            role="listitem"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-5 flex items-center justify-between border-t border-white/5 pt-3 font-mono text-[9px] uppercase tracking-[0.12em] text-fg-subtle">
        <span>explored / built</span>
        <ArrowUpRight className="h-3.5 w-3.5 opacity-40 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent group-hover:opacity-100" aria-hidden="true" />
      </div>
    </TiltCard>
  );
}
