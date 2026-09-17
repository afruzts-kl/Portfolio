import { useReducedMotion } from "../../hooks";
import { motion } from "framer-motion";
import type { SkillCategory } from "./skills.data";
import { levelStyles } from "./skills.data";

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
}

export function SkillCategoryCard({ category, index }: SkillCategoryCardProps) {
  const reducedMotion = useReducedMotion();
  const Icon = iconMap[category.icon] || iconMap.Cpu;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: reducedMotion ? 0 : 0.4, delay: index * 0.08, ease: "easeOut" }}
      className="group bg-bg-card border border-border rounded-2xl p-6 transition-all duration-normal hover:border-border-hover hover:shadow-card-hover"
    >
      <div className="flex items-start gap-4 mb-6">
        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent group-hover:scale-110 transition-transform duration-fast">
          <Icon className="h-6 w-6" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-display text-display-sm text-fg">{category.title}</h3>
          <p className="font-ui text-body-sm text-fg-muted mt-1">{category.description}</p>
        </div>
      </div>

      <div className="space-y-3" role="list" aria-label={`${category.title} skills`}>
        {category.skills.map((skill) => {
          const style = levelStyles[skill.level];
          return (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: reducedMotion ? 0 : 0.2, delay: index * 0.08 + 0.1 }}
              className="group relative"
              role="listitem"
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="font-ui text-body-sm text-fg">{skill.name}</span>
                <span
                  className="font-mono text-caption px-2 py-0.5 rounded"
                  style={{ color: style.color, backgroundColor: style.bg }}
                >
                  {style.label}
                </span>
              </div>
              <div className="h-1.5 bg-bg-elevated rounded-full overflow-hidden">
                <motion.div
                  className="h-full rounded-full"
                  style={{ backgroundColor: style.color }}
                  initial={{ width: 0 }}
                  animate={{ width: skill.level === "learning" ? "25%" : skill.level === "comfortable" ? "60%" : "90%" }}
                  transition={{ duration: reducedMotion ? 0 : 0.8, delay: index * 0.08 + 0.15, ease: "easeOut" }}
                />
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}