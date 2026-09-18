import { motion } from "framer-motion";
import { BuildingCard } from "./BuildingCard";

interface BuildingProject {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  status: "planning" | "active" | "paused";
  startDate?: string;
  notes?: string;
}

const buildingProjects: BuildingProject[] = [
  {
    id: "jarvis-v2",
    title: "Jarvis — faster voice + memory",
    description: "Improving the local assistant so voice input, responses, memory, and computer actions feel less like separate scripts and more like one system.",
    techStack: ["Python", "Faster-Whisper", "Ollama", "PyAutoGUI"],
    status: "active",
    startDate: "2026",
    notes: "Latency and memory are the current focus.",
  },
  {
    id: "health-care-v2",
    title: "Health Care v2",
    description: "Continuing a React + Supabase healthcare application with database-backed equipment and technician workflows.",
    techStack: ["React", "TypeScript", "Supabase", "PostgreSQL"],
    status: "active",
    startDate: "2026",
    notes: "Backend schema and application flows are evolving together.",
  },
  {
    id: "gods-own-smp",
    title: "God's Own SMP",
    description: "Keeping a real Minecraft server ecosystem running while improving its plugins, permissions, economy, voice chat, and player experience.",
    techStack: ["Purpur", "Java", "LuckPerms", "DiscordSRV"],
    status: "active",
    startDate: "2026",
    notes: "Infrastructure + gameplay systems.",
  },
  {
    id: "home-lab",
    title: "Home Lab & Remote Access",
    description: "Experimenting with Docker services, Cloudflare, Tailscale, and better networking between the home and a nearby second location.",
    techStack: ["Docker", "Cloudflare", "Tailscale", "Wi-Fi"],
    status: "active",
    startDate: "2026",
    notes: "The wireless link is the current bottleneck.",
  },
];

const statusConfig = {
  planning: { label: "Planning", color: "var(--info)", bg: "rgba(56,189,248,.08)" },
  active: { label: "Active", color: "var(--accent)", bg: "rgba(182,243,106,.08)" },
  paused: { label: "Paused", color: "var(--warning)", bg: "rgba(251,191,36,.08)" },
};

export function CurrentlyBuilding() {
  return (
    <section id="building" className="relative px-4 py-20 sm:px-6 lg:px-8 lg:py-28" aria-labelledby="building-title">
      <div className="mx-auto max-w-7xl">
        <motion.div className="mb-12" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <span className="inline-flex rounded-full border border-amber-300/15 bg-amber-300/5 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-amber-200/80">terminal // active_branches</span>
          <h2 id="building-title" className="mt-4 font-display-bold text-display-lg text-fg">Currently Building</h2>
          <p className="mt-4 max-w-2xl font-ui text-body-lg text-fg-muted">The projects occupying my terminal right now. Some are polished, some are messy, and some are here specifically because I still don't know how to make them work.</p>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2" role="list" aria-label="Current projects">
          {buildingProjects.map((project, index) => (
            <motion.div key={project.id} role="listitem" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ delay: index * 0.07 }}>
              <BuildingCard project={project} statusConfig={statusConfig} />
            </motion.div>
          ))}
        </div>

        <div className="mt-10 flex items-center justify-center gap-3 font-mono text-[10px] uppercase tracking-[0.16em] text-fg-subtle">
          <span className="h-px w-12 bg-white/10" />
          <span><span className="text-accent">●</span> live work, not a roadmap</span>
          <span className="h-px w-12 bg-white/10" />
        </div>
      </div>
    </section>
  );
}
