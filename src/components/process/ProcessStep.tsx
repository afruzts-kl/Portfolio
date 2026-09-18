import { cn } from "../../utils/cn";
import { motion } from "framer-motion";
import { sound } from "../../utils/sound";

interface ProcessStepProps {
  step: {
    id: string;
    number: string;
    title: string;
    description: string;
    icon: string;
    label: string;
    examples: string[];
  };
  index: number;
  isLast: boolean;
  Icon: React.ComponentType<{ className?: string }>;
}

export function ProcessStep({ step, index, isLast, Icon }: ProcessStepProps) {
  return (
    <motion.article
      className={cn(
        "relative flex gap-5 lg:gap-8 group",
        index % 2 === 1 && "lg:flex-row-reverse"
      )}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, delay: Math.min(index * 0.06, 0.3), ease: "easeOut" }}
      onMouseEnter={() => sound.playHover()}
    >
      <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-lime-200/30 bg-[#101710] shadow-[0_0_24px_rgba(182,243,106,0.12)] transition-transform duration-300 group-hover:scale-110 group-hover:border-lime-200/70 lg:h-14 lg:w-14">
        <span className="font-mono text-xs font-bold text-accent">{step.number}</span>
      </div>

      {!isLast && (
        <div
          className="absolute left-6 top-14 bottom-[-4rem] w-px bg-gradient-to-b from-lime-300/50 via-white/10 to-transparent lg:left-7"
          aria-hidden="true"
        />
      )}

      <div className="min-w-0 flex-1 lg:max-w-[calc(50%-2.5rem)]">
        <div className="relative overflow-hidden rounded-3xl border border-white/8 bg-gradient-to-br from-white/[0.055] to-white/[0.015] p-6 backdrop-blur-xl transition-all duration-300 group-hover:-translate-y-1 group-hover:border-lime-300/30 group-hover:shadow-[0_20px_60px_rgba(0,0,0,0.35),0_0_35px_rgba(182,243,106,0.08)] lg:p-7">
          <div className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-lime-300/5 blur-2xl transition-opacity group-hover:opacity-100" />
          <div className="relative flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-lime-300/15 bg-lime-300/8 text-accent">
              <Icon className="h-5 w-5" />
            </div>
            <div className="min-w-0">
              <div className="mb-2 flex flex-wrap items-center gap-2">
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent/80">{step.label}</span>
                <span className="h-1 w-1 rounded-full bg-white/20" />
                <span className="font-mono text-[10px] text-fg-subtle">phase_{step.id}</span>
              </div>
              <h3 className="font-display-semibold text-display-sm text-fg">{step.title}</h3>
              <p className="mt-2 font-ui text-body-sm leading-7 text-fg-muted">{step.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {step.examples.map((example) => (
                  <span key={example} className="rounded-full border border-white/8 bg-black/20 px-2.5 py-1 font-mono text-[10px] text-fg-subtle transition-colors group-hover:border-lime-300/15 group-hover:text-fg-muted">
                    {example}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
