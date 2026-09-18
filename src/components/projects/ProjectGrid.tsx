import { useState } from "react";
import { useStaggeredReveal } from "../../hooks";
import { ProjectCard } from "./ProjectCard";
import { ProjectDetail } from "./ProjectDetail";
import { projects, getFeaturedProjects } from "./projects.data";

export function ProjectGrid({ featuredOnly = false }: { featuredOnly?: boolean }) {
  const projectList = featuredOnly ? getFeaturedProjects() : projects;
  const [expandedProject, setExpandedProject] = useState<string | null>(null);
  const { ref, visibleIndices } = useStaggeredReveal(projectList.length, { threshold: 0.1, triggerOnce: true });

  const handleExpand = (projectId: string) => {
    setExpandedProject(projectId);
  };

  const handleClose = () => {
    setExpandedProject(null);
  };

  return (
    <section id="projects" className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8" ref={ref}>
      <div className="mx-auto max-w-7xl">
        <div className="mb-12">
          <h2 className="font-display text-display-lg text-fg mb-4">Projects</h2>
          <p className="font-ui text-body-lg text-fg-muted max-w-2xl">
            The core of what I do. Each project represents a problem I wanted to solve, a technology I wanted to understand,
            or an idea I had to build. No tutorials, no templates — just honest experimentation.
          </p>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          role="list"
          aria-label="Projects"
        >
          {projectList.map((project, index) => (
            <div key={project.id} role="listitem">
              {visibleIndices.has(index) ? (
                <ProjectCard
                  project={project}
                  isExpanded={expandedProject === project.id}
                  onExpand={() => handleExpand(project.id)}
                />
              ) : (
                <div className="h-[400px] animate-pulse bg-bg-elevated rounded-2xl border border-border" aria-hidden="true" />
              )}
            </div>
          ))}
        </div>

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
