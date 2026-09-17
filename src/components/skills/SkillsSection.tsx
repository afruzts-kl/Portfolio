import { useScrollReveal } from "../../hooks";
import { SkillCategoryCard } from "./SkillCategory";
import { skillCategories } from "./skills.data";

export function SkillsSection() {
  const { ref } = useScrollReveal({ threshold: 0.1, triggerOnce: true });

  return (
    <section
      ref={ref}
      id="skills"
      className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8"
      aria-labelledby="skills-title"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h2 id="skills-title" className="font-display text-display-lg text-fg mb-4">
            Skills & Technologies
          </h2>
          <p className="font-ui text-body-lg text-fg-muted max-w-2xl mx-auto">
            Organized by domain, not proficiency bars. These are the tools I reach for when building things.
            Levels reflect honest self-assessment — learning means I'm actively exploring, proficient means I've built production things with it.
          </p>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          role="list"
          aria-label="Skill categories"
        >
          {skillCategories.map((category, index) => (
            <SkillCategoryCard key={category.id} category={category} index={index} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="font-ui text-body-sm text-fg-muted max-w-xl mx-auto">
            <span className="font-mono text-accent">//</span> Always adding to this list. The best way to learn a new technology is to build something real with it.
          </p>
        </div>
      </div>
    </section>
  );
}