import { useState } from "react";
import { useScrollReveal } from "../../hooks";
import { ProjectCard } from "./ProjectCard";
import { ProjectDetail } from "./ProjectDetail";
import { projects, type ProjectStatus } from "./projects.data";
import { sound } from "../../utils/sound";
import { motion, AnimatePresence } from "framer-motion";

type FilterType = "all" | ProjectStatus;

export function ProjectGrid({ featuredOnly = false }: { featuredOnly?: boolean }) {
  const [filter, setFilter] = useState<FilterType>("all");
  const [expandedProject, setExpandedProject] = useState<string | null>(null);
  const { ref } = useScrollReveal({ threshold: 0.1, triggerOnce: true });

  const filteredProjects = projects.filter((p) => {
    if (featuredOnly && !p.featured) return false;
    if (filter === "all") return true;
    return p.status === filter;
  });

  const handleExpand = (projectId: string) => {
    sound.playClick();
    setExpandedProject(projectId);
  };

  const handleClose = () => {
    sound.playClick();
    setExpandedProject(null);
  };

  const handleFilterChange = (newFilter: FilterType) => {
    sound.playClick();
    setFilter(newFilter);
  };

  const filters: { id: FilterType; label: string }[] = [
    { id: "all", label: featuredOnly ? "Featured" : "All Projects" },
    { id: "active", label: "Active" },
    { id: "building", label: "Building" },
    { id: "experimental", label: "Experimental" },
    { id: "archived", label: "Archived" },
  ];

  return (
    <section id="projects" className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8" ref={ref}>
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lime-400/10 border border-lime-400/20 text-lime-300 font-mono text-[10px] uppercase tracking-wider mb-3">
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-radar" />
              Source Code & Experiments
            </div>
            <h2 className="font-display-bold text-display-lg text-fg mb-3">Projects</h2>
            <p className="font-ui text-body-lg text-fg-muted max-w-2xl">
              The core of what I do. Each project represents a problem I wanted to solve, a technology I wanted to understand,
              or an idea I had to build. No tutorials, no templates — just honest experimentation.
            </p>
          </div>

          {/* Interactive Filter Pills */}
          <div className="flex flex-wrap gap-1.5 p-1 rounded-xl bg-[#0c100d] border border-white/10 backdrop-blur-md self-start md:self-auto">
            {filters.map((f) => {
              const isSelected = filter === f.id;
              return (
                <button
                  key={f.id}
                  onClick={() => handleFilterChange(f.id)}
                  onMouseEnter={() => sound.playHover()}
                  className={`relative px-3 py-1.5 font-mono text-caption rounded-lg transition-all duration-200 ${
                    isSelected
                      ? "text-lime-200 bg-lime-400/20 border border-lime-400/40 shadow-[0_0_12px_rgba(182,243,106,0.2)]"
                      : "text-fg-subtle hover:text-fg hover:bg-white/[0.04]"
                  }`}
                >
                  {f.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Project Grid with Framer Motion Layout Animations */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          role="list"
          aria-label="Projects"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.94, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.94, y: 15 }}
                transition={{ duration: 0.28, ease: "easeOut" }}
                role="listitem"
              >
                <ProjectCard
                  project={project}
                  isExpanded={expandedProject === project.id}
                  onExpand={() => handleExpand(project.id)}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {expandedProject && (
          <ProjectDetail
            project={projects.find((p) => p.id === expandedProject)!}
            onClose={handleClose}
          />
        )}
      </div>
    </section>
  );
}
