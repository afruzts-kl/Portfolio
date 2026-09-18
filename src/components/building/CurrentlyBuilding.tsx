import { motion } from "framer-motion";
import { Terminal, Cpu, Globe, Gamepad2, Bot, Database, Radio, Server } from "lucide-react";
import { BuildingCard } from "./BuildingCard";

interface LabProject {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  year: string;
  type: string;
  icon: typeof Terminal;
}

// These are projects and experiments from the portfolio — not a list of things
// Afruz is claiming to be actively building right now.
const labProjects: LabProject[] = [
  {
    id: "jarvis-ai",
    title: "Jarvis AI Assistant",
    description: "A local voice-first assistant exploring speech recognition, memory, local models, TTS, and Windows automation.",
    techStack: ["Python", "Faster-Whisper", "Ollama", "PyAutoGUI"],
    year: "2026",
    type: "AI / Automation",
    icon: Bot,
  },
  {
    id: "health-care",
    title: "Health Care v2",
    description: "A React + Supabase healthcare application with authentication, database-backed equipment, and technician workflows.",
    techStack: ["React", "TypeScript", "Supabase", "PostgreSQL"],
    year: "2026",
    type: "Full Stack",
    icon: Database,
  },
  {
    id: "gods-own-smp",
    title: "God's Own SMP",
    description: "A Minecraft server ecosystem that became a hands-on lab for plugins, permissions, economy, voice chat, and administration.",
    techStack: ["Purpur", "Java", "LuckPerms", "DiscordSRV"],
    year: "2026",
    type: "Server / Infra",
    icon: Gamepad2,
  },
  {
    id: "home-network",
    title: "Home Network Lab",
    description: "Real-world experiments with multiple routers, Wi-Fi relay, remote access, Docker services, DNS, and networking constraints.",
    techStack: ["Wi-Fi", "Docker", "Cloudflare", "Tailscale"],
    year: "2026",
    type: "Networking",
    icon: Globe,
  },
  {
    id: "esp8266-monitor",
    title: "ESP8266 Network Monitor",
    description: "A small embedded monitor that collects Wi-Fi/network telemetry and sends useful updates to Discord.",
    techStack: ["ESP8266", "Arduino", "C++", "Discord Webhooks"],
    year: "2026",
    type: "IoT",
    icon: Radio,
  },
  {
    id: "immich-lab",
    title: "Immich Self-Hosting Lab",
    description: "A Docker + WSL experiment exploring private photo storage, persistent volumes, DNS, tunnels, and remote access.",
    techStack: ["Docker", "WSL", "Cloudflare", "Tailscale"],
    year: "2026",
    type: "Self Hosting",
    icon: Server,
  },
  {
    id: "minecraft-create",
    title: "Modded Minecraft Server Lab",
    description: "A Forge/Mohist/Create environment used to learn loader compatibility, plugins, ports, Java runtimes, and voice chat.",
    techStack: ["Forge", "Mohist", "Create", "Java 21"],
    year: "2025",
    type: "Server / Modding",
    icon: Gamepad2,
  },
  {
    id: "discord-telemetry",
    title: "Discord Network Telemetry",
    description: "Early ESP8266 experiments connecting embedded hardware to a real online service through compact Discord webhook messages.",
    techStack: ["ESP8266", "Arduino C++", "HTTP", "Discord"],
    year: "2025",
    type: "IoT / Webhooks",
    icon: Cpu,
  },
];

export function CurrentlyBuilding() {
  return (
    <section id="building" className="relative px-4 py-20 sm:px-6 lg:px-8 lg:py-28" aria-labelledby="building-title">
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-amber-300/15 bg-amber-300/5 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-amber-200/80">
            <Terminal className="h-3 w-3" aria-hidden="true" /> project_lab // git log
          </span>
          <h2 id="building-title" className="mt-4 font-display-bold text-display-lg text-fg">
            Things I&apos;ve Built &amp; Explored
          </h2>
          <p className="mt-4 max-w-3xl font-ui text-body-lg text-fg-muted">
            Not everything here is a current project. This is the messy, practical trail of experiments, builds, fixes, and rabbit holes that shaped how I learn.
          </p>
        </motion.div>

        <div className="grid gap-5 lg:grid-cols-[0.9fr_1.5fr] lg:items-start">
          <motion.div
            className="overflow-hidden rounded-2xl border border-border bg-[#080c0b]/90 shadow-2xl shadow-black/20"
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
          >
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 font-mono text-[11px] text-fg-subtle">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-300/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
                <span className="ml-2">~/afruz/projects</span>
              </div>
              <span>git log --oneline</span>
            </div>

            <div className="p-5 font-mono text-[11px] leading-7 sm:p-6">
              <div className="text-accent">$ git log --oneline --decorate</div>
              <div className="mt-3 text-fg-muted">
                <p><span className="text-lime-300">●</span> jarvis-ai <span className="text-fg-subtle">— voice + memory</span></p>
                <p><span className="text-cyan-300">●</span> health-care-v2 <span className="text-fg-subtle">— full-stack app</span></p>
                <p><span className="text-purple-300">●</span> gods-own-smp <span className="text-fg-subtle">— server systems</span></p>
                <p><span className="text-yellow-300">●</span> home-lab <span className="text-fg-subtle">— networking + self-hosting</span></p>
              </div>

              <div className="my-5 h-px bg-white/10" />
              <div className="text-accent">$ git status</div>
              <p className="mt-2 text-fg-muted">On branch <span className="text-fg">main</span></p>
              <p className="text-fg-subtle">History is still being written.</p>
              <p className="mt-4 text-fg-muted"><span className="text-accent">→</span> build</p>
              <p className="text-fg-muted"><span className="text-accent">→</span> break</p>
              <p className="text-fg-muted"><span className="text-accent">→</span> debug</p>
              <p className="text-fg-muted"><span className="text-accent">→</span> learn</p>
              <p className="text-fg-muted"><span className="text-accent">→</span> repeat<span className="ml-1 animate-pulse text-accent">█</span></p>
            </div>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2" role="list" aria-label="Selected projects and experiments">
            {labProjects.map((project, index) => (
              <motion.div
                key={project.id}
                role="listitem"
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{ delay: Math.min(index * 0.045, 0.25) }}
              >
                <BuildingCard project={project} />
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex items-center justify-center gap-3 font-mono text-[10px] uppercase tracking-[0.16em] text-fg-subtle">
          <span className="h-px w-12 bg-white/10" />
          <span><span className="text-accent">●</span> build / learn / improve / repeat</span>
          <span className="h-px w-12 bg-white/10" />
        </div>
      </div>
    </section>
  );
}
