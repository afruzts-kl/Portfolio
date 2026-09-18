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
    shortDescription: "A personal AI assistant with voice interaction, local memory, and computer automation capabilities.",
    fullDescription:
      "Jarvis started as a simple voice-activated Python script and evolved into a modular AI assistant with speech recognition (Faster-Whisper), text-to-speech, local long-term memory using sentence transformers, and computer automation via PyAutoGUI. It can execute commands, answer questions, control the system, and integrate with Discord for remote interaction. The project went through multiple iterations — from a single-file script to a modular architecture with plugin support.",
    whyBuilt:
      "I wanted a truly local AI assistant that doesn't rely on cloud APIs, respects privacy, and can actually control my computer. Most 'AI assistants' are just chat interfaces — I wanted something that could take actions.",
    whatLearned: [
      "Audio processing pipelines and real-time speech recognition trade-offs",
      "Vector embeddings for semantic memory retrieval",
      "Local LLM optimization (quantization, context windows)",
      "Cross-platform automation challenges (Windows/Linux)",
      "Discord bot architecture and slash command handling",
      "Hotkey systems and emergency stop mechanisms",
    ],
    techStack: [
      "Python",
      "Faster-Whisper",
      "Sentence Transformers",
      "PyAutoGUI",
      "Discord.py",
      "pynput",
      "edge-tts / pyttsx3",
      "Ollama / llama.cpp",
    ],
    challenges: [
      "Balancing accuracy vs. latency in speech recognition",
      "Memory management for long-term context without cloud",
      "Reliable cross-platform keyboard/mouse automation",
      "Handling ambiguous voice commands gracefully",
      "Discord rate limits and connection stability",
    ],
    improvements: [
      "Add plugin system for extensible commands",
      "Implement better wake word detection",
      "Add web UI for remote monitoring",
      "Optimize model loading times",
      "Add multi-language support",
    ],
    status: "experimental",
    githubUrl: "https://github.com/afruzts-kl/jarvis-ai-assistant",
    screenshots: [],
    startDate: "2023-06",
    endDate: "2024-12",
    featured: true,
  },
  {
    id: "healthcare-management",
    title: "Healthcare Management Web App",
    shortDescription: "A full-stack web application for healthcare equipment management with authentication, role-based access, and real-time workflows.",
    fullDescription:
      "A modern React + Vite + Supabase application for managing healthcare equipment, technicians, and workflows. Features include JWT authentication with Supabase Auth, role-based access control (admin, technician, viewer), equipment CRUD with status tracking, assignment workflows, maintenance scheduling, and audit logging. Built with a clean component architecture, React Query for server state, and TypeScript throughout.",
    whyBuilt:
      "To demonstrate I can build a real production-grade application with proper architecture, authentication, database design, and deployment — not just static sites or tutorials.",
    whatLearned: [
      "Supabase Auth + Row Level Security patterns",
      "PostgreSQL schema design for multi-tenant data",
      "React Query for server state management",
      "Type-safe API layers with Zod validation",
      "Component composition and reusable UI patterns",
      "CI/CD with GitHub Actions and Vercel",
    ],
    techStack: [
      "React 18",
      "TypeScript",
      "Vite",
      "Supabase (Auth, Database, Realtime)",
      "React Query",
      "Zod",
      "Tailwind CSS",
      "React Hook Form",
    ],
    challenges: [
      "Designing RLS policies for complex permission hierarchies",
      "Optimizing Supabase queries to avoid N+1 problems",
      "Handling offline-first scenarios gracefully",
      "Managing complex form state with validation",
    ],
    improvements: [
      "Add real-time notifications for equipment updates",
      "Implement PDF report generation",
      "Add mobile-responsive technician dashboard",
      "Integrate with calendar for maintenance scheduling",
    ],
    status: "active",
    githubUrl: "https://github.com/afruzts-kl/healthcare-management",
    liveUrl: "https://healthcare-management-demo.vercel.app",
    screenshots: [],
    startDate: "2024-03",
    endDate: "2024-11",
    featured: true,
  },
  {
    id: "minecraft-infrastructure",
    title: "Minecraft Server Infrastructure",
    shortDescription: "Production-grade Minecraft server ecosystems with custom plugins, proxy networks, Discord integration, and performance optimization.",
    fullDescription:
      "Years of experience building and administering Minecraft server networks using Paper/Purpur, Forge, and Mohist. Implemented complex proxy setups (Velocity/BungeeCord), custom LuckPerms permission hierarchies, Vault-based economy systems, land claim management (GriefPrevention/FTB Chunks), Discord SRV integration for cross-platform chat, voice chat (PlugMan/Simple Voice Chat), and performance tuning for 100+ concurrent players. Includes automated backup systems, monitoring, and remote administration via RCON/SSH.",
    whyBuilt:
      "Started as playing with friends, evolved into learning real systems administration: networking, process management, plugin development, database optimization, and infrastructure as code.",
    whatLearned: [
      "Java JVM tuning and garbage collection optimization",
      "Proxy network architecture (Velocity/BungeeCord)",
      "LuckPerms advanced permission modeling",
      "Plugin development (Spigot/Paper API)",
      "Docker containerization for game servers",
      "Network topology: Cloudflare Tunnel, Tailscale, SRV records",
      "Database optimization (MariaDB/PostgreSQL for plugins)",
      "Automated deployment and backup strategies",
    ],
    techStack: [
      "Paper / Purpur / Forge / Mohist",
      "Velocity / BungeeCord",
      "LuckPerms",
      "Vault",
      "GriefPrevention / FTB Chunks",
      "DiscordSRV",
      "Simple Voice Chat",
      "Docker",
      "MariaDB / PostgreSQL",
      "Cloudflare Tunnel / Tailscale",
      "Linux administration",
    ],
    challenges: [
      "Debugging plugin conflicts in modded environments",
      "Optimizing tick rates under heavy load",
      "Managing cross-server data synchronization",
      "Securing remote access without exposing ports",
      "Handling version migrations (1.12 → 1.20+)",
    ],
    improvements: [
      "Infrastructure as Code with Terraform/Ansible",
      "Custom plugin for unified economy across proxies",
      "Grafana/Prometheus monitoring stack",
      "Automated blue-green deployments",
    ],
    status: "active",
    githubUrl: "https://github.com/afruzts-kl/minecraft-infrastructure",
    screenshots: [],
    startDate: "2022-01",
    featured: true,
  },
  {
    id: "esp8266-iot-experiments",
    title: "ESP8266 / IoT Experiments",
    shortDescription: "Wi-Fi enabled microcontroller projects for presence detection, Discord notifications, and home automation prototypes.",
    fullDescription:
      "A collection of ESP8266/NodeMCU projects exploring Wi-Fi connectivity, webhook integrations, and sensor data collection. Projects include: presence detection via Wi-Fi probe requests → Discord notifications, environmental sensor logging (temperature, humidity, motion) to local InfluxDB, relay control for smart-home prototyping, OTA firmware updates, and a captive portal for Wi-Fi configuration. Code written in Arduino C++ with PlatformIO.",
    whyBuilt:
      "Curiosity about bridging software and physical hardware. Wanted to understand the constraints of embedded development — limited memory, no OS, real-time requirements.",
    whatLearned: [
      "Embedded C++ memory management (heap fragmentation)",
      "Wi-Fi stack behavior and reconnection logic",
      "MQTT vs. HTTP webhooks for IoT communication",
      "Deep sleep modes for battery optimization",
      "OTA update mechanisms",
      "Sensor calibration and noise filtering",
    ],
    techStack: [
      "ESP8266 / NodeMCU",
      "Arduino Framework (PlatformIO)",
      "C++",
      "MQTT / HTTP Webhooks",
      "Discord Webhooks",
      "InfluxDB / Grafana",
      "Home Assistant (integration)",
    ],
    challenges: [
      "Unstable Wi-Fi causing watchdog resets",
      "Limited RAM (80KB) requiring careful string handling",
      "Flash wear from frequent writes",
      "Power supply noise affecting sensor readings",
    ],
    improvements: [
      "Migrate to ESP32 for more resources",
      "Implement proper mesh networking",
      "Add secure boot and signed firmware",
      "Design custom PCBs for permanent installations",
    ],
    status: "archived",
    githubUrl: "https://github.com/afruzts-kl/esp8266-experiments",
    screenshots: [],
    startDate: "2023-01",
    endDate: "2024-06",
    featured: false,
  },
  {
    id: "home-networking-lab",
    title: "Home Networking & Self-Hosting Lab",
    shortDescription: "Multi-router topology, wireless bridging, self-hosted services with Docker, Cloudflare Tunnels, and Tailscale mesh networking.",
    fullDescription:
      "A hands-on home lab exploring enterprise-grade networking concepts in a residential setting. Configured multiple routers in AP/bridge mode, VLAN segmentation for IoT/guest/trusted networks, wireless bridging for hard-to-reach areas, and a self-hosted services stack (NGINX Proxy Manager, Portainer, Uptime Kuma, Vaultwarden, Immich, Jellyfin) behind Cloudflare Tunnels with Tailscale for secure remote access. All orchestrated with Docker Compose and documented.",
    whyBuilt:
      "Wanted to own my data and services instead of relying on cloud providers. Also a practical way to learn networking, DNS, TLS, container orchestration, and security hardening.",
    whatLearned: [
      "VLAN configuration and inter-VLAN routing",
      "Wireless bridging vs. mesh vs. wired backhaul trade-offs",
      "Cloudflare Tunnel (Argo) for zero-trust ingress",
      "Tailscale ACLs and subnet routers",
      "Docker Compose service orchestration",
      "Reverse proxy configuration (NGINX/Caddy)",
      "Certificate management (Let's Encrypt, CF Origin CA)",
      "Backup strategies for self-hosted data",
    ],
    techStack: [
      "Ubiquiti / OpenWrt / pfSense",
      "VLANs (802.1Q)",
      "Wireless Bridging (WDS / 4addr)",
      "Cloudflare Tunnel",
      "Tailscale",
      "Docker / Docker Compose",
      "NGINX Proxy Manager / Caddy",
      "Portainer",
      "Linux networking (ip, iptables, nftables)",
    ],
    challenges: [
      "Double NAT issues with ISP equipment",
      "Wireless interference in dense environments",
      "Cloudflare Tunnel connection stability",
      "Service discovery in container networks",
      "Power outage recovery and UPS integration",
    ],
    improvements: [
      "Add 10GbE backbone between switches",
      "Implement proper HA for critical services",
      "Add network monitoring (NetBox, LibreNMS)",
      "Migrate to Kubernetes (k3s) for orchestration",
    ],
    status: "building",
    githubUrl: "https://github.com/afruzts-kl/home-lab",
    screenshots: [],
    startDate: "2024-08",
    featured: true,
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