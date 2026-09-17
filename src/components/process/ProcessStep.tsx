import { cn } from "../../utils/cn";
import { useReducedMotion } from "../../hooks";
import { motion } from "framer-motion";

interface ProcessStepProps {
  step: {
    id: string;
    number: string;
    title: string;
    description: string;
    icon: string;
  };
  index: number;
  isVisible: boolean;
  isLast: boolean;
  Icon: React.ComponentType<{ className?: string }>;
}

export function ProcessStep({ step, index, isVisible, isLast, Icon }: ProcessStepProps) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      className={cn("relative flex gap-6 lg:pl-16", !isVisible && "opacity-0")}
      initial={!reducedMotion && !isVisible ? { opacity: 0, x: -30 } : false}
      animate={isVisible ? { opacity: 1, x: 0 } : false}
      transition={{ duration: reducedMotion ? 0 : 0.5, delay: index * 0.1, ease: "easeOut" }}
    >
      <div className="relative flex-shrink-0 w-12 h-12 lg:w-8 lg:h-8 rounded-full border-2 border-bg flex items-center justify-center z-10" style={{ backgroundColor: "var(--accent)" }}>
        <span className="font-mono text-caption text-bg">{step.number}</span>
        {!isLast && !reducedMotion && (
          <motion.div
            className="absolute left-1/2 top-12 w-0.5 h-full -translate-x-1/2"
            style={{ background: "linear-gradient(180deg, var(--accent) 0%, var(--border) 100%)" }}
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.8, delay: index * 0.1 + 0.3, ease: "easeOut" }}
            aria-hidden="true"
          />
        )}
      </div>

      <div className="flex-1 pt-2 lg:pt-0">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
            <Icon className="h-6 w-6" />
          </div>
          <div>
            <h3 className="font-display text-display-sm text-fg">{step.title}</h3>
            <p className="font-ui text-body text-fg-muted mt-2 leading-relaxed">{step.description}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}