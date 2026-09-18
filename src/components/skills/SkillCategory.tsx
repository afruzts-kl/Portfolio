import { useReducedMotion } from "../../hooks";
import { motion } from "framer-motion";
import type { SkillCategory } from "./skills.data";
import { levelStyles } from "./skills.data";
import { TiltCard } from "../ui";
import { sound } from "../../utils/sound";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Globe: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  ),
  Database: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    </svg>
  ),
  Cpu: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <rect x="9" y="9" width="6" height="6" />
      <path d="M9 1v2M15 1v2M9 21v2M15 21v2M1 9h2M1 15h2M21 9h2M21 15h2" />
    </svg>
  ),
  Server: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <rect x="2" y="2" width="20" height="8" rx="2" />
      <rect x="2" y="14" width="20" height="8" rx="2" />
      <line x1="6" y1="6" x2="6.01" y2="6" />
      <line x1="6" y1="18" x2="6.01" y2="18" />
    </svg>
  ),
  Gamepad2: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <line x1="6" y1="11" x2="10" y2="11" />
      <line x1="8" y1="9" x2="8" y2="13" />
      <line x1="14" y1="11" x2="18" y2="11" />
      <line x1="16" y1="9" x2="16" y2="13" />
      <rect x="2" y="3" width="20" height="18" rx="2" />
    </svg>
  ),
};

interface SkillCategoryCardProps {
  category: SkillCategory;
  index: number;
  highlightLevel?: string | null;
}

export function SkillCategoryCard({ category, index, highlightLevel }: SkillCategoryCardProps) {
  const reducedMotion = useReducedMotion();
  const Icon = iconMap[category.icon] || iconMap.Cpu;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: reducedMotion ? 0 : 0.4, delay: index * 0.08, ease: "easeOut" }}
      className="h-full"
    >
      <TiltCard className="h-full flex flex-col justify-between p-6">
        <div>
          <div className="flex items-start gap-4 mb-6">
            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(182,243,106,0.3)] transition-all duration-300">
              <Icon className="h-6 w-6" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-display-semibold text-display-sm text-fg group-hover:text-lime-200 transition-colors">
                {category.title}
              </h3>
              <p className="font-body text-body-sm text-fg-muted mt-1 leading-relaxed">
                {category.description}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2" role="list" aria-label={`${category.title} skills`}>
            {category.skills
              .slice()
              .sort((a, b) => {
                const order = { proficient: 0, comfortable: 1, learning: 2 };
                return order[a.level] - order[b.level];
              })
              .map((skill) => {
                const style = levelStyles[skill.level];
                const isHighlighted = !highlightLevel || highlightLevel === "all" || highlightLevel === skill.level;
                const isDimmed = highlightLevel && highlightLevel !== "all" && highlightLevel !== skill.level;

                return (
                  <span
                    key={skill.name}
                    onMouseEnter={() => sound.playHover()}
                    className={`font-ui text-body-sm px-3 py-1 rounded-full border transition-all duration-200 hover:scale-105 ${
                      isDimmed ? "opacity-30 grayscale" : "opacity-100"
                    } ${
                      highlightLevel && highlightLevel === skill.level
                        ? "ring-2 ring-accent/60 shadow-[0_0_12px_rgba(182,243,106,0.25)]"
                        : ""
                    }`}
                    style={{
                      color: style.color,
                      backgroundColor: isHighlighted ? style.bg : "transparent",
                      borderColor: style.border,
                    }}
                    role="listitem"
                  >
                    {skill.name}
                  </span>
                );
              })}
          </div>
        </div>
      </TiltCard>
    </motion.div>
  );
}