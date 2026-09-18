export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  icon: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  level: "learning" | "comfortable" | "proficient";
  years?: number;
}

export const skillCategories: SkillCategory[] = [
  {
    id: "web",
    title: "Web Development",
    description: "Building modern, performant web applications with React ecosystem",
    icon: "Globe",
    skills: [
      { name: "React 18", level: "proficient" },
      { name: "TypeScript", level: "proficient" },
      { name: "Vite", level: "proficient" },
      { name: "Tailwind CSS", level: "proficient" },
      { name: "Next.js", level: "comfortable" },
      { name: "React Query", level: "comfortable" },
      { name: "Zustand", level: "comfortable" },
      { name: "HTML5 / CSS3", level: "proficient" },
      { name: "Framer Motion", level: "comfortable" },
    ],
  },
  {
    id: "backend",
    title: "Backend & Data",
    description: "APIs, databases, and server-side architecture",
    icon: "Database",
    skills: [
      { name: "Supabase", level: "proficient" },
      { name: "PostgreSQL", level: "comfortable" },
      { name: "REST API Design", level: "comfortable" },
      { name: "GraphQL", level: "learning" },
      { name: "Node.js", level: "comfortable" },
      { name: "Authentication (JWT, OAuth)", level: "comfortable" },
      { name: "Row Level Security", level: "comfortable" },
    ],
  },
  {
    id: "ai-automation",
    title: "AI & Automation",
    description: "Local AI, speech processing, and system automation",
    icon: "Cpu",
    skills: [
      { name: "Python", level: "proficient" },
      { name: "Faster-Whisper", level: "comfortable" },
      { name: "Sentence Transformers", level: "comfortable" },
      { name: "Ollama / llama.cpp", level: "comfortable" },
      { name: "PyAutoGUI / pynput", level: "comfortable" },
      { name: "Discord.py", level: "comfortable" },
      { name: "Edge TTS / pyttsx3", level: "learning" },
    ],
  },
  {
    id: "infrastructure",
    title: "Infrastructure & DevOps",
    description: "Containerization, networking, and self-hosted systems",
    icon: "Server",
    skills: [
      { name: "Docker / Docker Compose", level: "proficient" },
      { name: "Git / GitHub Actions", level: "proficient" },
      { name: "Linux Administration", level: "comfortable" },
      { name: "Cloudflare Tunnel", level: "comfortable" },
      { name: "Tailscale", level: "comfortable" },
      { name: "NGINX / Caddy", level: "comfortable" },
      { name: "VLANs / Networking", level: "learning" },
      { name: "Kubernetes (k3s)", level: "learning" },
    ],
  },
  {
    id: "game-infra",
    title: "Game Server Infrastructure",
    description: "Minecraft ecosystem, proxy networks, and plugin development",
    icon: "Gamepad2",
    skills: [
      { name: "Paper / Purpur / Forge", level: "proficient" },
      { name: "Velocity / BungeeCord", level: "comfortable" },
      { name: "LuckPerms (Advanced)", level: "proficient" },
      { name: "Vault Economy", level: "comfortable" },
      { name: "Plugin Development (Spigot API)", level: "comfortable" },
      { name: "DiscordSRV Integration", level: "comfortable" },
      { name: "JVM Tuning / GC Optimization", level: "learning" },
      { name: "MariaDB / PostgreSQL for Plugins", level: "comfortable" },
    ],
  },
  {
    id: "hardware-iot",
    title: "Hardware & IoT",
    description: "Embedded development, sensors, and hardware-software integration",
    icon: "Cpu",
    skills: [
      { name: "ESP8266 / NodeMCU", level: "comfortable" },
      { name: "Arduino Framework (C++)", level: "comfortable" },
      { name: "PlatformIO", level: "comfortable" },
      { name: "MQTT / HTTP Webhooks", level: "comfortable" },
      { name: "Sensor Integration", level: "learning" },
      { name: "OTA Updates", level: "learning" },
      { name: "PCB Design (KiCad)", level: "learning" },
    ],
  },
];

export const levelStyles = {
  learning: { label: "Learning", color: "var(--color-info)", bg: "var(--color-info)/15", border: "var(--color-info)/30" },
  comfortable: { label: "Comfortable", color: "var(--color-warning)", bg: "var(--color-warning)/15", border: "var(--color-warning)/30" },
  proficient: { label: "Proficient", color: "var(--color-accent)", bg: "var(--color-accent)/15", border: "var(--color-accent)/30" },
} as const;