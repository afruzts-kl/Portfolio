import { useStaggeredReveal } from "../../hooks";
import { ProcessStep } from "./ProcessStep";

const processSteps = [
  {
    id: "idea",
    number: "01",
    title: "Idea",
    description: "A problem annoys me, or a curiosity sparks. Could be anything — \"I wish my lights turned on automatically\" or \"How does speech recognition actually work?\"",
    icon: "Lightbulb",
  },
  {
    id: "experiment",
    number: "02",
    title: "Experiment",
    description: "Throw code at the wall. Prototype fast, use whatever tools are handy. No architecture planning yet — just see if the core concept works.",
    icon: "FlaskConical",
  },
  {
    id: "break",
    number: "03",
    title: "Break",
    description: "It fails. Dependencies conflict, hardware doesn't respond, the model hallucinates, the server crashes. This is where the real learning starts.",
    icon: "Bug",
  },
  {
    id: "debug",
    number: "04",
    title: "Debug",
    description: "Read logs, trace execution, add instrumentation, rubber-duck the problem. Understand *why* it broke, not just *that* it broke.",
    icon: "Search",
  },
  {
    id: "learn",
    number: "05",
    title: "Learn",
    description: "Extract the lesson. Document what went wrong. Understand the underlying system better. This knowledge compounds across projects.",
    icon: "BookOpen",
  },
  {
    id: "improve",
    number: "06",
    title: "Improve",
    description: "Refactor with proper architecture. Add tests. Handle edge cases. Make it maintainable. Then ship it — or archive it and move to the next idea.",
    icon: "ArrowUpRight",
  },
];

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Lightbulb: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M12 2a6 6 0 0 0-6 6v6" />
      <path d="M12 2a6 6 0 0 1 6 6v6" />
      <path d="M12 14v8" />
      <path d="M8 14h8" />
    </svg>
  ),
  FlaskConical: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M10 2v7.31" />
      <path d="M14 2v7.31" />
      <path d="M8.5 2h7" />
      <path d="M7 16.3c0 .9.7 1.6 1.5 1.6h9c.9 0 1.5-.7 1.5-1.6" />
      <path d="M6.28 13.72 10 9.5 14 13.72" />
      <path d="M8 6h8" />
    </svg>
  ),
  Bug: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M12 20h8" />
      <path d="M12 4h8" />
      <path d="M4.93 12.53 8 9.46" />
      <path d="M16 9.46l3.07 3.07" />
      <path d="M17.84 14.14 12 20" />
      <path d="M6.16 14.16 12 20" />
      <path d="M8 16h8" />
      <path d="M8 8h8" />
    </svg>
  ),
  Search: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  ),
  BookOpen: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  ),
  ArrowUpRight: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M7 17L17 7" />
      <path d="M7 7h10v10" />
    </svg>
  ),
};

export function ProcessSection() {
  const { ref, visibleIndices } = useStaggeredReveal(processSteps.length, { threshold: 0.1, triggerOnce: true });

  return (
    <section
      ref={ref}
      id="process"
      className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8"
      aria-labelledby="process-title"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 id="process-title" className="font-display text-display-lg text-fg mb-4">
            How I Build
          </h2>
          <p className="font-ui text-body-lg text-fg-muted max-w-2xl mx-auto">
            Not a linear process. More like a loop — each cycle teaches something that makes the next one better.
          </p>
        </div>

        <div className="relative">
          <div
            className="hidden lg:block absolute left-[30px] top-16 bottom-16 w-0.5"
            style={{ background: "linear-gradient(180deg, var(--color-accent) 0%, var(--color-border) 50%, transparent 100%)" }}
            aria-hidden="true"
          />

          <div className="space-y-12 lg:space-y-16">
            {processSteps.map((step, index) => (
              <ProcessStep
                key={step.id}
                step={step}
                index={index}
                isVisible={visibleIndices.has(index)}
                isLast={index === processSteps.length - 1}
                Icon={iconMap[step.icon]}
              />
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="font-ui text-body text-fg-muted max-w-xl mx-auto">
            <span className="font-mono text-accent">//</span> The cycle never really ends. Every "improvement" becomes the next "idea" — or reveals a new problem to solve.
          </p>
        </div>
      </div>
    </section>
  );
}