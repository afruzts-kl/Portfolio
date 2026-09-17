import { useEffect, useRef } from "react";
import { cn } from "../../utils/cn";
import { X, Github, ExternalLink, Clock, FolderGit2, Terminal, Zap, Bug, Lightbulb, ArrowUpRight } from "lucide-react";
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
  { key: "overview", label: "Overview", icon: Terminal, description: (project: Project) => project.fullDescription },
  { key: "why", label: "Why I Built This", icon: Lightbulb, description: (project: Project) => project.whyBuilt },
  { key: "learned", label: "What I Learned", icon: Zap, render: (project: Project) => project.whatLearned },
  { key: "challenges", label: "Challenges", icon: Bug, render: (project: Project) => project.challenges },
  { key: "improvements", label: "Future Improvements", icon: ArrowUpRight, render: (project: Project) => project.improvements },
];

export function ProjectDetail({ project, onClose }: ProjectDetailProps) {
  const reducedMotion = useReducedMotion();
  const overlayRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

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
                <h2 id="project-detail-title" className="font-display text-display-md text-fg truncate">
                  {project.title}
                </h2>
                <span
                  className="flex-shrink-0 font-mono text-caption px-2 py-1 rounded border"
                  style={{ borderColor: statusInfo.color, color: statusInfo.color }}
                >
                  {statusInfo.label}
                </span>
              </div>
              <p className="font-ui text-body text-fg-muted">{project.shortDescription}</p>
            </div>
            <button
              onClick={onClose}
              className="flex-shrink-0 p-2 rounded-lg text-fg-muted hover:text-fg hover:bg-bg-elevated transition-colors"
              aria-label="Close project details"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="p-6 space-y-8">
            <div className="flex flex-wrap gap-2" role="list" aria-label="Technologies">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-caption text-fg-subtle px-3 py-1.5 bg-bg-elevated border border-border rounded-full hover:border-accent/50 hover:text-accent transition-colors"
                  role="listitem"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="grid sm:grid-cols-2 gap-4 text-caption text-fg-subtle border-t border-border pt-4">
              {project.startDate && (
                <div className="flex items-center gap-2 font-mono">
                  <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>
                    Started: {project.startDate}{project.endDate ? ` · Ended: ${project.endDate}` : " · Ongoing"}
                  </span>
                </div>
              )}
              <div className="flex items-center gap-2 font-mono">
                <FolderGit2 className="h-3.5 w-3.5" aria-hidden="true" />
                <span>Repository</span>
              </div>
            </div>

            <AnimatePresence mode="wait">
              {sectionConfig.map((section) => (
                <motion.div
                  key={section.key}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: reducedMotion ? 0 : 0.2 }}
                  className="space-y-4"
                >
                  <div className="flex items-center gap-2">
                    <section.icon className="h-5 w-5 text-accent" aria-hidden="true" />
                    <h3 className="font-display text-display-sm text-fg">{section.label}</h3>
                  </div>
                  {section.render ? (
                    <ul className="space-y-2 pl-7" role="list">
                      {section.render(project).map((item, i) => (
                        <li key={i} className="font-ui text-body text-fg relative">
                          <span className="absolute -left-7 top-0.5 text-accent font-mono">›</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="font-ui text-body text-fg-muted leading-relaxed pl-7">
                      {section.description(project)}
                    </p>
                  )}
                </motion.div>
              ))}
            </AnimatePresence>

            <div className="flex flex-wrap gap-3 pt-4 border-t border-border">
              {project.githubUrl && (
                <Button
                  variant="outline"
                  size="md"
                  onClick={() => window.open(project.githubUrl, "_blank", "noopener,noreferrer")}
                  aria-label={`View ${project.title} on GitHub`}
                >
                  <Github className="h-4 w-4" aria-hidden="true" />
                  View Code
                </Button>
              )}
              {project.liveUrl && (
                <Button
                  variant="primary"
                  size="md"
                  onClick={() => window.open(project.liveUrl, "_blank", "noopener,noreferrer")}
                  aria-label={`View ${project.title} live demo`}
                >
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                  Live Demo
                </Button>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}