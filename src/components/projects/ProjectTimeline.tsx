import { cn } from "../../utils/cn";
import { useScrollReveal } from "../../hooks";
import { projects } from "./projects.data";
import { statusLabels } from "./projects.data";
import { ExternalLink } from "lucide-react";
import { sound } from "../../utils/sound";

const timelineData = [
  { year: "2025", label: "Servers & experiments", projects: ["minecraft-create-server", "discord-network-webhook"] },
  { year: "2026", label: "AI · full-stack · infrastructure", projects: ["jarvis-ai-assistant", "health-care-v2", "gods-own-smp", "home-network-lab", "immich-self-hosting", "esp8266-network-monitor", "wifi-presence-detector"] },
];

export function ProjectTimeline() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.05, triggerOnce: true });

  return (
    <section ref={ref} id="timeline" className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28" aria-labelledby="timeline-title">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center lg:mb-16">
          <span className="inline-flex rounded-full border border-cyan-300/15 bg-cyan-300/5 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-cyan-200/80">git log --oneline</span>
          <h2 id="timeline-title" className="mt-4 font-display-bold text-display-lg text-fg">The Build History</h2>
          <p className="mx-auto mt-4 max-w-2xl font-ui text-body-lg text-fg-muted">From tinkering with servers and microcontrollers to building AI, full-stack apps, and a home lab.</p>
        </div>

        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-lime-300/50 via-cyan-300/20 to-transparent lg:left-1/2 lg:-translate-x-1/2" aria-hidden="true" />
          <div className="space-y-12">
            {timelineData.map((era, eraIndex) => (
              <div key={era.year} className={cn("relative transition-all duration-700", isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5")} style={{ transitionDelay: `${eraIndex * 120}ms` }}>
                <div className="mb-5 flex items-center gap-4 lg:justify-center">
                  <div className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-lime-300/30 bg-[#0b100c] shadow-[0_0_20px_rgba(182,243,106,0.12)]">
                    <span className="h-2 w-2 rounded-full bg-accent" />
                  </div>
                  <div>
                    <span className="font-display-semibold text-display-sm text-fg">{era.year}</span>
                    <span className="ml-3 font-mono text-xs text-fg-subtle">{era.label}</span>
                  </div>
                </div>

                <div className="grid gap-4 pl-12 lg:grid-cols-2 lg:pl-0">
                  {era.projects.map((projectId, index) => {
                    const project = projects.find((p) => p.id === projectId);
                    if (!project) return null;
                    const statusInfo = statusLabels[project.status];
                    return (
                      <article key={project.id} className={cn("group rounded-2xl border border-white/8 bg-white/[0.025] p-5 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-lime-300/25 hover:bg-white/[0.045]", index % 2 === 1 && "lg:translate-y-8")} onMouseEnter={() => sound.playHover()}>
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <span className="font-mono text-[10px] uppercase tracking-[0.16em]" style={{ color: statusInfo.color }}>{statusInfo.label}</span>
                            <h3 className="mt-1 font-display-semibold text-display-sm text-fg group-hover:text-lime-200">{project.title}</h3>
                          </div>
                          {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="rounded-lg border border-white/8 p-2 text-fg-subtle hover:border-lime-300/30 hover:text-accent" aria-label={`${project.title} repository`}><ExternalLink className="h-4 w-4" /></a>}
                        </div>
                        <p className="mt-3 font-ui text-body-sm leading-6 text-fg-muted">{project.shortDescription}</p>
                        <div className="mt-4 flex flex-wrap gap-1.5">
                          {project.techStack.slice(0, 4).map((tech) => <span key={tech} className="rounded-full border border-white/8 bg-black/20 px-2 py-1 font-mono text-[10px] text-fg-subtle">{tech}</span>)}
                        </div>
                      </article>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
