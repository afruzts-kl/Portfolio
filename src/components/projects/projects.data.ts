export type ProjectStatus = "building" | "experimental" | "active" | "archived" | "completed";

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  whyBuilt: string;
  whatLearned: string[];
  techStack: string[];
  challenges: string[];
  improvements: string[];
  status: ProjectStatus;
  githubUrl?: string;
  liveUrl?: string;
  screenshots?: string[];
  startDate?: string;
  endDate?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "jarvis-ai-assistant",
    title: "Jarvis AI Assistant",
    shortDescription: "A local voice-first AI assistant that can listen, reason, remember, speak, and control a Windows PC.",
    fullDescription: "Jarvis is my ongoing personal AI experiment. It combines Faster-Whisper speech recognition, local language models, text-to-speech, semantic memory, hotkeys, and computer automation. Recent iterations focus on making voice interaction faster, keeping long-term memory useful, and making actions safer and more controllable.",
    whyBuilt: "I wanted an assistant that could do more than chat: something local that could interact with the computer and evolve as I learned more about AI systems.",
    whatLearned: ["Speech-to-text latency and audio pipelines", "Semantic memory with embeddings", "Local model trade-offs", "Windows automation", "Hotkey and emergency-stop design"],
    techStack: ["Python", "Faster-Whisper", "Sentence Transformers", "Ollama", "PyAutoGUI", "pygame"],
    challenges: ["Voice dictation latency", "Reliable automation", "Keeping memory relevant", "Coordinating local AI components"],
    improvements: ["Faster streaming responses", "Safer action confirmation", "Plugin architecture", "Better web dashboard"],
    status: "building",
    startDate: "2026",
    featured: true,
  },
  {
    id: "health-care-v2",
    title: "Health Care v2",
    shortDescription: "A full-stack healthcare management platform built around React, TypeScript, Supabase, authentication, and structured equipment data.",
    fullDescription: "Health Care v2 is a real web application project exploring authentication, database-backed workflows, equipment and technician records, role-aware interfaces, and deployment. The project uses Supabase for the backend and is being developed as a practical full-stack system rather than a static demo.",
    whyBuilt: "I wanted to move beyond frontend-only projects and learn how a real application connects UI, authentication, SQL data, validation, and deployment.",
    whatLearned: ["Supabase authentication", "PostgreSQL constraints and schema design", "React component architecture", "TypeScript data modelling", "Git workflows and deployment debugging"],
    techStack: ["React", "TypeScript", "Vite", "Supabase", "PostgreSQL", "Tailwind CSS"],
    challenges: ["Database constraints", "Git merge conflicts", "Authentication flow", "Keeping frontend and database models aligned"],
    improvements: ["Realtime notifications", "More role-specific dashboards", "Reports and exports", "Better mobile workflows"],
    status: "active",
    githubUrl: "https://github.com/athul-web/health-care-v2",
    startDate: "2026",
    featured: true,
  },
  {
    id: "gods-own-smp",
    title: "God's Own SMP",
    shortDescription: "A Minecraft server ecosystem where game administration became a hands-on systems and infrastructure lab.",
    fullDescription: "God's Own SMP is my current Minecraft server project. I have worked with Purpur, permissions, economy, land claims, auctions, shops, Discord integration, TAB displays, login flows, and Simple Voice Chat. The server has also pushed me into debugging plugins, networking, remote administration, and performance issues.",
    whyBuilt: "It started with playing Minecraft with friends and grew into a surprisingly deep way to learn servers, networking, Java plugins, permissions, and administration.",
    whatLearned: ["Minecraft server administration", "Plugin compatibility", "Permissions and economy systems", "Remote administration", "Server networking and performance"],
    techStack: ["Purpur", "Java", "LuckPerms", "Vault", "EconomyShopGUI", "DiscordSRV", "Simple Voice Chat"],
    challenges: ["Plugin conflicts", "Version compatibility", "Permission configuration", "Reliable remote access"],
    improvements: ["Custom plugins", "Better monitoring", "Automated backups", "More polished player UX"],
    status: "active",
    startDate: "2026",
    featured: true,
  },
  {
    id: "home-network-lab",
    title: "Home Network Lab",
    shortDescription: "A real-world networking experiment connecting multiple routers, wireless relay links, and self-hosted services across nearby locations.",
    fullDescription: "My home network experiments have involved an ISP router, access-point mode, wireless relay between buildings, custom LAN addressing, and testing the limits of an inexpensive long-distance Wi-Fi link. The same lab led into remote access, Docker services, Cloudflare, Tailscale, and learning when wired links or better line-of-sight matter more than configuration tweaks.",
    whyBuilt: "I wanted to understand networking by dealing with real constraints instead of only drawing topologies in a textbook.",
    whatLearned: ["AP and relay modes", "Latency vs bandwidth trade-offs", "LAN addressing", "Remote access", "Cloudflare and Tailscale basics"],
    techStack: ["TP-Link", "Genexis", "Wi-Fi relay", "Docker", "Cloudflare", "Tailscale"],
    challenges: ["Trees and walls between links", "Wireless interference", "Low relay throughput", "Double-NAT and routing"],
    improvements: ["Wired backhaul", "Better directional links", "Network monitoring", "Cleaner topology documentation"],
    status: "building",
    startDate: "2026",
    featured: true,
  },
  {
    id: "immich-self-hosting",
    title: "Immich Self-Hosting Lab",
    shortDescription: "A Docker/WSL self-hosting experiment for running a private photo platform and learning secure remote access.",
    fullDescription: "I experimented with running Immich on Windows through Docker and WSL, then explored ways to expose the service securely using Cloudflare and Tailscale. The project was less about the app itself and more about understanding containers, persistent storage, DNS, tunnels, and remote access.",
    whyBuilt: "Self-hosting is a practical way to learn what normally gets hidden behind a cloud provider's infrastructure.",
    whatLearned: ["Docker on Windows", "WSL paths and volumes", "DNS and subdomains", "Cloudflare Tunnel concepts", "Tailscale remote access"],
    techStack: ["Docker", "WSL", "Immich", "Cloudflare", "Tailscale"],
    challenges: ["Windows/WSL filesystem paths", "Tunnel configuration", "Container lifecycle", "Remote access setup"],
    improvements: ["Move services to a dedicated Linux host", "Automated backups", "Monitoring and alerts"],
    status: "experimental",
    startDate: "2026",
    featured: true,
  },
  {
    id: "esp8266-network-monitor",
    title: "ESP8266 Network Monitor",
    shortDescription: "A tiny Wi-Fi device experiment that reports network information and telemetry to Discord.",
    fullDescription: "Using an ESP8266/NodeMCU and Arduino, I experimented with reading Wi-Fi state, signal information, IP details, ping/uptime-style telemetry, and sending updates through Discord webhooks. The project forced me to work within embedded memory and reliability constraints.",
    whyBuilt: "I wanted to connect a physical microcontroller to the network services I was already using and see how far a small board could go.",
    whatLearned: ["ESP8266 Wi-Fi APIs", "Arduino C++", "HTTP webhooks", "Embedded memory constraints", "Reconnect handling"],
    techStack: ["ESP8266", "NodeMCU", "Arduino C++", "Wi-Fi", "Discord Webhooks"],
    challenges: ["Limited RAM", "Wi-Fi reliability", "HTTP overhead", "Avoiding memory-heavy strings"],
    improvements: ["OLED status display", "Better telemetry", "OTA updates", "Low-power mode"],
    status: "experimental",
    startDate: "2026",
    featured: false,
  },
  {
    id: "wifi-presence-detector",
    title: "Wi-Fi Presence Detector",
    shortDescription: "An IoT experiment exploring whether a device can infer presence from phones already connected to the local network.",
    fullDescription: "I explored using an ESP8266 and a phone on the same LAN as the basis for a simple presence-detection experiment. The goal was to understand local network visibility, polling, false positives, and how small IoT devices can trigger automation from network state.",
    whyBuilt: "It was a simple bridge between networking and automation: use something already present on the LAN to trigger a useful action.",
    whatLearned: ["LAN device discovery", "Polling vs events", "ESP8266 networking", "Automation triggers", "False-positive handling"],
    techStack: ["ESP8266", "Arduino", "Wi-Fi", "HTTP", "Home automation"],
    challenges: ["Devices changing IPs", "Sleep and Wi-Fi power saving", "Reliable presence logic"],
    improvements: ["Use stable device identifiers", "MQTT events", "Multiple-device logic"],
    status: "archived",
    startDate: "2026",
    featured: false,
  },
  {
    id: "minecraft-create-server",
    title: "Modded Minecraft / Create Server Lab",
    shortDescription: "A second Minecraft environment used to learn modded server administration, Forge/Mohist compatibility, and plugin boundaries.",
    fullDescription: "I also experimented with a modded Minecraft environment using Mohist, Forge, Create, and server-side plugins. Debugging version mismatches, port conflicts, invalid plugin jars, and voice-chat compatibility became a practical introduction to mixed mod/plugin ecosystems.",
    whyBuilt: "Modded Minecraft is a surprisingly useful sandbox for learning how multiple runtimes, loaders, plugins, and network services interact.",
    whatLearned: ["Forge and Mohist environments", "Create mod compatibility", "Java version issues", "Port conflicts", "Plugin/mod boundaries"],
    techStack: ["Minecraft 1.20.1", "Mohist", "Forge", "Create", "Java 21", "DiscordSRV"],
    challenges: ["Loader compatibility", "Port conflicts", "Plugin packaging", "Voice chat setup"],
    improvements: ["Cleaner server isolation", "Documented modpack", "Automated startup and backups"],
    status: "archived",
    startDate: "2025",
    endDate: "2025",
    featured: false,
  },
  {
    id: "discord-network-webhook",
    title: "Discord Network Telemetry",
    shortDescription: "Small ESP8266 experiments turning network telemetry into readable Discord notifications.",
    fullDescription: "A focused set of experiments around Discord webhooks: collect useful network information on an ESP8266, format it into compact messages, and deliver it to a Discord channel. It became one of my early examples of connecting embedded hardware to a real online service.",
    whyBuilt: "Because seeing a tiny board send a useful message to a real service is a much better learning experience than another disconnected LED demo.",
    whatLearned: ["JSON payloads", "HTTP POST requests", "Webhook formatting", "Wi-Fi reconnect logic"],
    techStack: ["ESP8266", "Arduino C++", "Discord Webhooks", "HTTP"],
    challenges: ["Payload size", "Connection failures", "Memory usage"],
    improvements: ["Structured telemetry", "Retry queues", "More useful alerts"],
    status: "completed",
    startDate: "2025",
    endDate: "2025",
    featured: false,
  },
];

export function getProjectsByStatus(status: ProjectStatus): Project[] {
  return projects.filter((p) => p.status === status);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}

export function getProjectById(id: string): Project | undefined {
  return projects.find((p) => p.id === id);
}

export const statusLabels: Record<ProjectStatus, { label: string; color: string }> = {
  building: { label: "Building", color: "var(--info)" },
  experimental: { label: "Experimental", color: "var(--warning)" },
  active: { label: "Active", color: "var(--accent)" },
  archived: { label: "Archived", color: "var(--fg-muted)" },
  completed: { label: "Completed", color: "var(--fg)" },
};
