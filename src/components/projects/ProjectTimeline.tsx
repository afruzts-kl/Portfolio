import { cn } from "../../utils/cn";
import { useScrollReveal } from "../../hooks";
import { projects } from "./projects.data";
import { statusLabels } from "./projects.data";
import { Github, ExternalLink } from "lucide-react";
import { useReducedMotion } from "../../hooks";

const timelineData = [
  { year: "2022", label: "Foundations", projects: ["minecraft-infrastructure"] },
  { year: "2023", label: "Experimentation", projects: ["jarvis-ai-assistant", "esp8266-iot-experiments"] },
  { year: "2024", label: "Full-Stack & Infrastructure", projects: ["healthcare-management", "home-networking-lab"] },
  { year: "2025", label: "Current Focus", projects: [] },
];

export function ProjectTimeline() {
  const reducedMotion = useReducedMotion();
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1, triggerOnce: true });

  return (
    <section
      ref={ref}
      id="timeline"
      className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8"
      aria-labelledby="timeline-title"
    >
      <div className="mx-auto max-w-4xl">
        <div className="mb-16 text-center">
          <h2 id="timeline-title" className="font-display text-display-lg text-fg mb-4">
            Project Timeline
          </h2>
          <p className="font-ui text-body-lg text-fg-muted max-w-2xl mx-auto">
            How the work evolved over time. Not a straight line — more like a git history with messy commits,
            branch experiments, and the occasional force push.
          </p>
        </div>

        <div className="relative">
          <div
            className="absolute left-6 top-0 bottom-0 w-0.5"
            style={{ background: "linear-gradient(180deg, var(--color-accent) 0%, var(--color-border) 100%)" }}
            aria-hidden="true"
          />

          {timelineData.map((era, eraIndex) => (
            <div
              key={era.year}
              className={cn(
                "relative pl-16 pb-12 last:pb-0",
                isVisible && !reducedMotion ? "animate-in" : ""
              )}
              style={{
                transitionDelay: `${eraIndex * 100}ms`,
              }}
            >
              <div className="absolute left-0 top-2 flex items-center justify-center w-12 h-12">
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

              <div className="mb-2">
                <span className="font-display text-display-sm text-fg">{era.year}</span>
                <span className="font-ui text-body-sm text-fg-muted ml-3">{era.label}</span>
              </div>

              <div className="space-y-3">
                {era.projects.map((projectId) => {
                  const project = projects.find((p) => p.id === projectId);
                  if (!project) return null;
                  const statusInfo = statusLabels[project.status];

                  return (
                    <div
                      key={project.id}
                      className="group relative bg-bg-card border border-border rounded-xl p-4 transition-all duration-fast hover:border-border-hover hover:shadow-card-hover"
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-display text-display-sm text-fg truncate">{project.title}</h3>
                            <span
                              className="flex-shrink-0 font-mono text-caption px-2 py-0.5 rounded border"
                              style={{ borderColor: statusInfo.color, color: statusInfo.color }}
                            >
                              {statusInfo.label}
                            </span>
                          </div>
                          <p className="font-ui text-body-sm text-fg-muted line-clamp-2">{project.shortDescription}</p>
                          <div className="flex flex-wrap gap-1.5 mt-2">
                            {project.techStack.slice(0, 4).map((tech) => (
                              <span
                                key={tech}
                                className="font-mono text-caption text-fg-subtle px-2 py-0.5 bg-bg-elevated border border-border rounded"
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
                          {project.githubUrl && (
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2 rounded-lg text-fg-muted hover:text-accent hover:bg-bg-elevated transition-colors"
                              aria-label={`${project.title} on GitHub`}
                            >
                              <Github className="h-4 w-4" />
                            </a>
                          )}
                          {project.liveUrl && (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2 rounded-lg text-fg-muted hover:text-accent hover:bg-bg-elevated transition-colors"
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

          <div className="relative pl-16 pt-8">
            <div className="absolute left-0 top-2 flex items-center justify-center w-12 h-12">
              <div className="relative z-10 w-3 h-3 rounded-full border-2 border-bg" style={{ backgroundColor: "var(--color-border)" }} aria-hidden="true" />
            </div>
            <div className="text-center py-8">
              <p className="font-ui text-body text-fg-muted mb-4">The story continues...</p>
              <p className="font-mono text-caption text-fg-subtle">
                <span className="text-accent">//</span> Next commit in progress
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}