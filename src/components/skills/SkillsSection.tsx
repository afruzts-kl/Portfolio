import { useState } from "react";
import { useScrollReveal } from "../../hooks";
import { SkillCategoryCard } from "./SkillCategory";
import { skillCategories } from "./skills.data";
import { sound } from "../../utils/sound";

type LevelFilter = "all" | "proficient" | "comfortable" | "learning";

export function SkillsSection() {
  const { ref } = useScrollReveal({ threshold: 0.1, triggerOnce: true });
  const [activeLevel, setActiveLevel] = useState<LevelFilter>("all");

  const filterOptions: { id: LevelFilter; label: string; color: string }[] = [
    { id: "all", label: "All Levels", color: "var(--color-fg)" },
    { id: "proficient", label: "Proficient", color: "var(--color-accent)" },
    { id: "comfortable", label: "Comfortable", color: "var(--color-warning)" },
    { id: "learning", label: "Learning", color: "var(--color-info)" },
  ];

  const handleFilterClick = (level: LevelFilter) => {
    sound.playClick();
    setActiveLevel(level);
  };

  return (
    <section
      ref={ref}
      id="skills"
      className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8"
      aria-labelledby="skills-title"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-300 font-mono text-[10px] uppercase tracking-wider mb-3">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-radar" />
              Technical Competencies
            </div>
            <h2 id="skills-title" className="font-display-bold text-display-lg text-fg mb-3">
              Skills & Technologies
            </h2>
            <p className="font-ui text-body-lg text-fg-muted max-w-2xl">
              Organized by domain, not proficiency bars. These are the tools I reach for when building things.
              Levels reflect honest self-assessment — learning means I'm actively exploring, proficient means I've built production things with it.
            </p>
          </div>

          {/* Interactive Level Filter Tabs */}
          <div className="flex flex-wrap gap-1.5 p-1 rounded-xl bg-[#0c100d] border border-white/10 backdrop-blur-md self-start md:self-auto">
            {filterOptions.map((opt) => {
              const isSelected = activeLevel === opt.id;
              return (
                <button
                  key={opt.id}
                  onClick={() => handleFilterClick(opt.id)}
                  onMouseEnter={() => sound.playHover()}
                  className={`px-3 py-1.5 font-mono text-caption rounded-lg transition-all duration-200 ${
                    isSelected
                      ? "bg-lime-400/20 text-lime-300 border border-lime-400/40 shadow-[0_0_12px_rgba(182,243,106,0.2)]"
                      : "text-fg-subtle hover:text-fg hover:bg-white/[0.04]"
                  }`}
                >
                  {opt.label}
                </button>
              );
            })}
          </div>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          role="list"
          aria-label="Skill categories"
        >
          {skillCategories.map((category, index) => (
            <SkillCategoryCard
              key={category.id}
              category={category}
              index={index}
              highlightLevel={activeLevel}
            />
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