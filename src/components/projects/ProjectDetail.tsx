import { useEffect, useRef, useState } from "react";
import { cn } from "../../utils/cn";
import { X, ExternalLink, Clock, Terminal, Zap, Bug, Lightbulb, ArrowUpRight, ChevronDown } from "lucide-react";
import type { Project } from "./projects.data";
import { Button } from "../ui";
import { useReducedMotion } from "../../hooks";
import { motion, AnimatePresence } from "framer-motion";
import { statusLabels } from "./projects.data";

interface ProjectDetailProps {
  project: Project;
  onClose: () => void;
}

const sectionConfig = [
  { key: "overview", label: "Overview", icon: Terminal, description: (project: Project) => project.fullDescription, defaultOpen: true },
  { key: "why", label: "Why I Built This", icon: Lightbulb, description: (project: Project) => project.whyBuilt, defaultOpen: false },
  { key: "learned", label: "What I Learned", icon: Zap, render: (project: Project) => project.whatLearned, defaultOpen: false },
  { key: "challenges", label: "Challenges", icon: Bug, render: (project: Project) => project.challenges, defaultOpen: false },
  { key: "improvements", label: "Future Improvements", icon: ArrowUpRight, render: (project: Project) => project.improvements, defaultOpen: false },
];

type SectionConfig = typeof sectionConfig[0];

export function ProjectDetail({ project, onClose }: ProjectDetailProps) {
  const reducedMotion = useReducedMotion();
  const overlayRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [openSections, setOpenSections] = useState<Record<string, boolean>>(
    sectionConfig.reduce((acc, s) => ({ ...acc, [s.key]: s.defaultOpen }), {})
  );

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const statusInfo = statusLabels[project.status];

  const toggleSection = (key: string) => {
    setOpenSections((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <AnimatePresence>
      <motion.div
        ref={overlayRef}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-bg/90 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: reducedMotion ? 0 : 0.2 }}
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-detail-title"
      >
        <motion.div
          ref={contentRef}
          className={cn(
            "relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-bg-card border border-border rounded-2xl",
            reducedMotion ? "" : "shadow-glow-lg"
          )}
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: reducedMotion ? 0 : 0.3, ease: "easeOut" }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="sticky top-0 z-10 bg-bg-card/95 backdrop-blur-sm border-b border-border rounded-t-2xl px-6 py-4 flex items-start justify-between gap-4">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3 mb-2">
                <h2 id="project-detail-title" className="font-display-semibold text-display-md text-fg truncate">
                  {project.title}
                </h2>
                <span
                  className="flex-shrink-0 font-mono-text text-caption px-2 py-1 rounded border"
                  style={{ borderColor: statusInfo.color, color: statusInfo.color, backgroundColor: `${statusInfo.color}15` }}
                >
                  {statusInfo.label}
                </span>
              </div>
              <p className="font-body text-body text-fg-muted">{project.shortDescription}</p>
            </div>
            <button
              onClick={onClose}
              className="flex-shrink-0 p-2 rounded-lg text-fg-muted hover:text-fg hover:bg-bg-elevated transition-colors"
              aria-label="Close project details"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="p-6 space-y-6">
            <div className="flex flex-wrap gap-2" role="list" aria-label="Technologies">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="font-mono-text text-caption text-fg-subtle px-3 py-1.5 bg-bg-elevated border border-border rounded-full hover:border-accent/50 hover:text-accent transition-colors"
                  role="listitem"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-4 text-caption text-fg-subtle border-t border-border pt-4">
              {project.startDate && (
                <div className="flex items-center gap-2 font-mono-text">
                  <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>
                    Started: {project.startDate}{project.endDate ? ` · Ended: ${project.endDate}` : " · Ongoing"}
                  </span>
                </div>
              )}
            </div>

            <div className="space-y-4" role="region" aria-label="Project details">
              {sectionConfig.map((section: SectionConfig) => (
                <motion.div
                  key={section.key}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: reducedMotion ? 0 : 0.2 }}
                  className="border border-border rounded-xl overflow-hidden bg-bg-elevated/50"
                >
                  <button
                    onClick={() => toggleSection(section.key)}
                    className="w-full px-5 py-4 flex items-center gap-3 bg-transparent hover:bg-bg-card/50 transition-colors text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
                    aria-expanded={openSections[section.key]}
                    aria-controls={`section-${section.key}`}
                  >
                    <section.icon className="h-5 w-5 text-accent flex-shrink-0" aria-hidden="true" />
                    <h3 className="font-display-medium text-display-sm text-fg flex-1">{section.label}</h3>
                    <ChevronDown
                      className={cn(
                        "h-5 w-5 text-fg-muted flex-shrink-0 transition-transform duration-200",
                        openSections[section.key] && "rotate-180"
                      )}
                      aria-hidden="true"
                    />
                  </button>

                  <AnimatePresence mode="wait">
                    {openSections[section.key] && (
                      <motion.div
                        id={`section-${section.key}`}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: reducedMotion ? 0 : 0.25, ease: "easeOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-5 pt-0 border-t border-border/50">
                          {section.render ? (
                            <ul className="space-y-3 pl-7" role="list">
                              {section.render(project).map((item, i) => (
                                <li key={i} className="font-body text-body text-fg relative">
                                  <span className="absolute -left-7 top-0.5 text-accent font-mono-text">›</span>
                                  {item}
                                </li>
                              ))}
                            </ul>
                          ) : (
                            <p className="font-body text-body text-fg-muted leading-relaxed pl-7">
                              {section.description(project)}
                            </p>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>

            {project.liveUrl && (
              <div className="flex flex-wrap gap-3 pt-4 border-t border-border">
                <Button
                  variant="primary"
                  size="md"
                  onClick={() => window.open(project.liveUrl, "_blank", "noopener,noreferrer")}
                  aria-label={`View ${project.title} live demo`}
                >
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                  Live Demo
                </Button>
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
