import { motion } from "framer-motion";
import { ProcessStep } from "./ProcessStep";

const processSteps = [
  {
    id: "idea",
    number: "01",
    title: "Find the problem",
    label: "curiosity",
    description: "A problem annoys me or an idea gets stuck in my head. I start with a small question instead of waiting for a perfect project brief.",
    icon: "Lightbulb",
    examples: ["Jarvis", "smart home", "healthcare"],
  },
  {
    id: "prototype",
    number: "02",
    title: "Make it real",
    label: "prototype",
    description: "I pick the simplest tools that can prove the idea: Python for AI, React for interfaces, Supabase for data, or an ESP8266 when the project needs hardware.",
    icon: "FlaskConical",
    examples: ["Python", "React", "Supabase", "ESP8266"],
  },
  {
    id: "break",
    number: "03",
    title: "Break things",
    label: "failure",
    description: "Dependencies clash, audio is slow, a database constraint rejects data, or a wireless link performs badly. Those failures become the next clues.",
    icon: "Bug",
    examples: ["logs", "latency", "constraints", "networking"],
  },
  {
    id: "debug",
    number: "04",
    title: "Understand why",
    label: "debug",
    description: "Instead of patching symptoms, I trace the system: read logs, isolate variables, test assumptions, and change one thing at a time.",
    icon: "Search",
    examples: ["Docker", "Git", "SQL", "Wi-Fi"],
  },
  {
    id: "iterate",
    number: "05",
    title: "Iterate until useful",
    label: "iteration",
    description: "The useful version is rarely the first version. I improve the architecture, interface, reliability, and workflow as the real requirements become clearer.",
    icon: "BookOpen",
    examples: ["refactor", "test", "measure", "repeat"],
  },
  {
    id: "ship",
    number: "06",
    title: "Put it to work",
    label: "ship",
    description: "A project becomes valuable when it can actually be used. That might mean a deployed web app, a working server, a self-hosted service, or hardware that responds.",
    icon: "ArrowUpRight",
    examples: ["Vercel", "Docker", "Minecraft", "IoT"],
  },
];

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Lightbulb: ({ className }) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 18h6"/><path d="M10 22h4"/><path d="M8.5 14.5C7.55 13.62 7 12.39 7 11a5 5 0 0 1 10 0c0 1.39-.55 2.62-1.5 3.5-.7.65-1.5 1.2-1.5 2.5h-4c0-1.3-.8-1.85-1.5-2.5Z"/></svg>,
  FlaskConical: ({ className }) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 3h6"/><path d="M10 3v7l-5 8.5A2 2 0 0 0 6.7 21h10.6a2 2 0 0 0 1.7-2.5L14 10V3"/><path d="M8 15h8"/></svg>,
  Bug: ({ className }) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 9h6v7a3 3 0 0 1-6 0V9Z"/><path d="M12 6V3"/><path d="M8 5 6 3"/><path d="M16 5l2-2"/><path d="M5 10H2"/><path d="M22 10h-3"/><path d="M5 16H2"/><path d="M22 16h-3"/></svg>,
  Search: ({ className }) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></svg>,
  BookOpen: ({ className }) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 5a3 3 0 0 1 3-3h4a2 2 0 0 1 2 2v17a3 3 0 0 0-3-3H3V5Z"/><path d="M21 5a3 3 0 0 0-3-3h-4a2 2 0 0 0-2 2v17a3 3 0 0 1 3-3h6V5Z"/></svg>,
  ArrowUpRight: ({ className }) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M7 17 17 7"/><path d="M7 7h10v10"/></svg>,
};

export function ProcessSection() {
  return (
    <section id="process" className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-28" aria-labelledby="process-title">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(182,243,106,0.07),transparent_38%)]" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-lime-300/15 bg-lime-300/5 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-accent/80">
            <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_10px_var(--color-accent)]" /> build_loop.exe
          </div>
          <h2 id="process-title" className="font-display text-display-lg text-fg">How I Build</h2>
          <p className="mx-auto mt-4 max-w-2xl font-ui text-body-lg text-fg-muted">Curiosity → prototype → break → understand → improve → ship. Then the next idea starts the loop again.</p>
        </motion.div>

        <div className="relative space-y-8 lg:space-y-10">
          <div className="absolute left-6 top-6 bottom-6 w-px bg-gradient-to-b from-lime-300/50 via-white/10 to-transparent lg:left-1/2 lg:-translate-x-1/2" aria-hidden="true" />
          {processSteps.map((step, index) => (
            <ProcessStep key={step.id} step={step} index={index} isLast={index === processSteps.length - 1} Icon={iconMap[step.icon]} />
          ))}
        </div>

        <div className="mt-16 rounded-3xl border border-lime-300/10 bg-lime-300/[0.025] p-6 text-center backdrop-blur-md">
          <p className="font-mono text-xs text-fg-subtle"><span className="text-accent">$</span> git status --short</p>
          <p className="mt-2 font-ui text-body-sm text-fg-muted">Still learning. Still building. Still finding things worth breaking.</p>
        </div>
      </div>
    </section>
  );
}
