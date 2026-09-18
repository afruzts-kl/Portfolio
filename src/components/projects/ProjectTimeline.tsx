import { cn } from "../../utils/cn";
import { useScrollReveal } from "../../hooks";
import { projects } from "./projects.data";
import { statusLabels } from "./projects.data";
import { ExternalLink } from "lucide-react";
import { useReducedMotion } from "../../hooks";
import { sound } from "../../utils/sound";

const timelineData = [
  { year: "2024", label: "Full-Stack Foundations", projects: ["healthcare-management", "esp8266-iot-experiments"] },
  { year: "2025", label: "Systems & Automation", projects: ["jarvis-ai-assistant", "minecraft-infrastructure", "home-networking-lab", "discord-network-monitor"] },
  { year: "2026", label: "Shipping & Going Deeper", projects: ["health-care-v2", "immich-self-hosting", "home-network-relay", "portfolio-lab"] },
];

export function ProjectTimeline() {
  const reducedMotion = useReducedMotion();
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1, triggerOnce: true });

  return (
    <section
      ref={ref}
      id="timeline"
      className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8"
      aria-labelledby="timeline-title"
    >
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 lg:mb-16 text-center">
          <h2 id="timeline-title" className="font-display-bold text-display-lg text-fg mb-4">
            Project Timeline
          </h2>
          <p className="font-body text-body-lg text-fg-muted max-w-2xl mx-auto">
            How the work evolved over time. Not a straight line — more like a git history with messy commits,
            branch experiments, and the occasional force push.
          </p>
        </div>

        <div className="relative">
          {/* Desktop timeline line */}
          <div
            className="hidden lg:block absolute left-6 top-0 bottom-0 w-0.5"
            style={{ background: "linear-gradient(180deg, var(--color-accent) 0%, var(--color-border) 100%)" }}
            aria-hidden="true"
          />

          {timelineData.map((era, eraIndex) => (
            <div
              key={era.year}
              className={cn(
                "relative",
                "lg:pl-16 lg:pb-12 lg:last:pb-0",
                isVisible && !reducedMotion ? "animate-in" : ""
              )}
              style={{
                transitionDelay: `${eraIndex * 100}ms`,
              }}
            >
              {/* Desktop dot */}
              <div className="hidden lg:absolute lg:left-0 lg:top-2 lg:flex lg:items-center lg:justify-center lg:w-12 lg:h-12">
                <div
                  className="relative z-10 w-3 h-3 rounded-full border-2 border-bg"
                  style={{ backgroundColor: "var(--color-accent)" }}
                  aria-hidden="true"
                />
                <div
                  className="absolute w-3 h-3 rounded-full"
                  style={{
                    backgroundColor: "var(--color-accent)",
                    opacity: 0.3,
                    transform: reducedMotion ? "scale(1)" : "scale(2)",
                    transition: "transform 1s ease-out, opacity 1s ease-out",
                  }}
                  aria-hidden="true"
                />
              </div>

              {/* Mobile: inline year badge */}
              <div className="lg:hidden flex items-center gap-3 mb-4">
                <div
                  className="flex-shrink-0 w-8 h-8 rounded-full border-2 border-bg flex items-center justify-center"
                  style={{ backgroundColor: "var(--color-accent)" }}
                  aria-hidden="true"
                />
                <div>
                  <span className="font-display-semibold text-display-sm text-fg">{era.year}</span>
                  <span className="font-body text-body-sm text-fg-muted ml-2">{era.label}</span>
                </div>
              </div>

              {/* Desktop year label */}
              <div className="hidden lg:block mb-2">
                <span className="font-display-semibold text-display-sm text-fg">{era.year}</span>
                <span className="font-body text-body-sm text-fg-muted ml-3">{era.label}</span>
              </div>

              <div className="space-y-3">
                {era.projects.map((projectId) => {
                  const project = projects.find((p) => p.id === projectId);
                  if (!project) return null;
                  const statusInfo = statusLabels[project.status];

                  return (
                    <div
                      key={project.id}
                      onMouseEnter={() => sound.playHover()}
                      className="group relative bg-bg-card/85 border border-border/80 rounded-xl p-4 transition-all duration-300 hover:border-lime-400/40 hover:shadow-[0_10px_30px_rgba(0,0,0,0.4),0_0_20px_rgba(182,243,106,0.1)] hover:-translate-y-0.5"
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-display-medium text-display-sm text-fg truncate group-hover:text-lime-200 transition-colors">{project.title}</h3>
                            <span
                              className="flex-shrink-0 font-mono text-caption px-2 py-0.5 rounded border"
                              style={{ borderColor: statusInfo.color, color: statusInfo.color, backgroundColor: `${statusInfo.color}15` }}
                            >
                              {statusInfo.label}
                            </span>
                          </div>
                          <p className="font-body text-body-sm text-fg-muted line-clamp-2 leading-relaxed">{project.shortDescription}</p>
                          <div className="flex flex-wrap gap-1.5 mt-2">
                            {project.techStack.slice(0, 4).map((tech) => (
                              <span
                                key={tech}
                                className="font-mono text-caption text-fg-subtle px-2 py-0.5 bg-bg-elevated border border-border/60 rounded transition-colors hover:text-accent hover:border-accent/40"
                              >
                                {tech}
                              </span>
                            ))}
                            {project.techStack.length > 4 && (
                              <span className="font-mono text-caption text-fg-subtle px-2 py-0.5">
                                +{project.techStack.length - 4}
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="flex items-center gap-2 shrink-0">
                          {project.liveUrl && (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2 rounded-lg text-lime-300 hover:text-accent hover:bg-lime-400/10 transition-colors"
                              aria-label={`${project.title} live demo`}
                            >
                              <ExternalLink className="h-4 w-4" />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}

          {/* Desktop end dot */}
          <div className="hidden lg:relative lg:pl-16 lg:pt-8">
            <div className="absolute left-0 top-2 flex items-center justify-center w-12 h-12">
              <div className="relative z-10 w-3 h-3 rounded-full border-2 border-bg" style={{ backgroundColor: "var(--color-border)" }} aria-hidden="true" />
            </div>
            <div className="text-center py-8">
              <p className="font-body text-body text-fg-muted mb-4">The story continues...</p>
              <p className="font-mono-text text-caption text-fg-subtle">
                <span className="text-accent">//</span> Next commit in progress
              </p>
            </div>
          </div>

          {/* Mobile end */}
          <div className="lg:hidden text-center py-8 pt-4 border-t border-border">
            <p className="font-body text-body text-fg-muted mb-4">The story continues...</p>
            <p className="font-mono-text text-caption text-fg-subtle">
              <span className="text-accent">//</span> Next commit in progress
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
