import { cn } from "../../utils/cn";
import { useReducedMotion } from "../../hooks";
import { motion } from "framer-motion";
import { sound } from "../../utils/sound";

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
      className={cn("relative flex gap-6 lg:pl-16 group", !isVisible && "opacity-0")}
      initial={!reducedMotion && !isVisible ? { opacity: 0, x: -30 } : false}
      animate={isVisible ? { opacity: 1, x: 0 } : false}
      transition={{ duration: reducedMotion ? 0 : 0.5, delay: index * 0.1, ease: "easeOut" }}
      onMouseEnter={() => sound.playHover()}
    >
      {/* Step Circle with Pulsing Glow */}
      <div
        className="relative flex-shrink-0 w-12 h-12 lg:w-10 lg:h-10 rounded-full border-2 border-bg flex items-center justify-center z-10 transition-transform duration-300 group-hover:scale-110 shadow-[0_0_15px_rgba(182,243,106,0.3)]"
        style={{ backgroundColor: "var(--accent)" }}
      >
        <span className="font-mono text-xs font-bold text-bg">{step.number}</span>
        {!isLast && !reducedMotion && (
          <motion.div
            className="absolute left-1/2 top-10 w-0.5 h-full -translate-x-1/2"
            style={{ background: "linear-gradient(180deg, var(--accent) 0%, rgba(255,255,255,0.08) 100%)" }}
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.8, delay: index * 0.1 + 0.3, ease: "easeOut" }}
            aria-hidden="true"
          />
        )}
      </div>

      {/* Step Card Container */}
      <div className="flex-1 pt-1 lg:pt-0">
        <div className="rounded-2xl border border-white/5 bg-bg-card/70 p-5 backdrop-blur-md transition-all duration-300 group-hover:border-lime-400/30 group-hover:bg-bg-elevated/90 group-hover:shadow-[0_15px_35px_rgba(0,0,0,0.4),0_0_20px_rgba(182,243,106,0.1)] group-hover:-translate-y-0.5">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent transition-transform duration-300 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(182,243,106,0.3)]">
              <Icon className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-display-semibold text-display-sm text-fg group-hover:text-lime-200 transition-colors">
                {step.title}
              </h3>
              <p className="font-ui text-body text-fg-muted mt-2 leading-relaxed">
                {step.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}