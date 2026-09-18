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
    screenshots: [],
    startDate: "2025",
    endDate: "Present",
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
    screenshots: [],
    startDate: "2026",
    endDate: "Present",
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
    screenshots: [],
    startDate: "2024",
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
    screenshots: [],
    startDate: "2025",
    endDate: "2026",
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
    screenshots: [],
    startDate: "2025",
    featured: true,
  },

  {
    id: "gods-own-smp",
    title: "God's Own SMP",
    shortDescription: "A custom Minecraft server ecosystem built around community features, economy, claims, voice chat, and administration.",
    fullDescription:
      "God's Own SMP is my hands-on Minecraft infrastructure project. I have configured a Purpur-based server with plugins for land claims, economy, shops, permissions, player information, login UI, Discord integration, and Simple Voice Chat. The project is also an ongoing exercise in server administration, troubleshooting plugin dependencies, tuning configuration, and keeping a public game server maintainable.",
    whyBuilt:
      "Minecraft started as gaming, but running a real server turned it into a practical systems project. It gives me a place to experiment with networking, permissions, databases, plugins, monitoring, and community-facing features.",
    whatLearned: [
      "Plugin dependency management and compatibility debugging",
      "LuckPerms, Vault, economy and permissions workflows",
      "Server performance and TPS troubleshooting",
      "Discord and in-game service integration",
      "Remote administration and secure server access",
    ],
    techStack: [
      "Purpur 1.21.x",
      "LuckPerms",
      "Vault",
      "EconomyShopGUI",
      "ChestShop",
      "UltimateLandClaim",
      "DiscordSRV",
      "Simple Voice Chat",
      "PacketEvents",
    ],
    challenges: [
      "Keeping plugins compatible across Minecraft versions",
      "Diagnosing configuration and dependency failures",
      "Balancing gameplay features with server performance",
      "Designing permissions without making administration painful",
    ],
    improvements: [
      "Add richer server telemetry and dashboards",
      "Automate backups and plugin configuration deployment",
      "Build custom community-focused plugins",
      "Improve onboarding and streaming-friendly authentication",
    ],
    status: "active",
    screenshots: [],
    startDate: "2025",
    endDate: "Present",
    featured: true,
  },
  {
    id: "health-care-v2",
    title: "Health Care v2",
    shortDescription: "A full-stack healthcare management platform with Supabase authentication, database workflows, and role-aware dashboards.",
    fullDescription:
      "Health Care v2 is a modern web application I have been developing with React, Vite, TypeScript and Supabase. The project includes authentication, healthcare equipment records, technicians, status workflows, role-aware access, and structured database operations. I have also worked through real integration issues such as Row Level Security, schema constraints, duplicate keys, and deployment/build problems.",
    whyBuilt:
      "I wanted to move beyond tutorial-level CRUD and learn what happens when a frontend, authentication layer, database, and real workflows all have to work together.",
    whatLearned: [
      "Supabase authentication and database integration",
      "PostgreSQL constraints and realistic data modelling",
      "TypeScript component architecture",
      "Debugging production-style integration failures",
      "Git workflows, rebasing and conflict resolution",
      "Vercel-style deployment and build troubleshooting",
    ],
    techStack: [
      "React",
      "TypeScript",
      "Vite",
      "Supabase",
      "PostgreSQL",
      "Tailwind CSS",
      "Git / GitHub",
    ],
    challenges: [
      "Designing database records that satisfy real constraints",
      "Handling authentication and role-based flows",
      "Resolving Git conflicts during active development",
      "Keeping the UI and backend data model in sync",
    ],
    improvements: [
      "Add richer analytics and reporting",
      "Improve mobile workflows for technicians",
      "Add automated tests and CI checks",
      "Expand audit history and notifications",
    ],
    status: "active",
    screenshots: [],
    startDate: "2026",
    endDate: "Present",
    featured: true,
  },
  {
    id: "discord-network-monitor",
    title: "ESP8266 Network Monitor",
    shortDescription: "An ESP8266 experiment that turns network telemetry into lightweight Discord notifications.",
    fullDescription:
      "A practical embedded networking experiment using an ESP8266/NodeMCU to collect network information and report it through a Discord webhook. The project explored Wi-Fi signal strength, IP information, connectivity checks, uptime, ping-style measurements and the constraints of sending network telemetry from a tiny microcontroller.",
    whyBuilt:
      "I wanted a small physical device that could tell me what was happening on my network without needing a full computer running all the time.",
    whatLearned: [
      "ESP8266 networking and Wi-Fi reconnect behaviour",
      "HTTP requests and Discord webhooks",
      "Memory constraints on microcontrollers",
      "Telemetry formatting and lightweight status reporting",
      "Debugging firmware performance bottlenecks",
    ],
    techStack: ["ESP8266 / NodeMCU", "Arduino C++", "Wi-Fi", "HTTP", "Discord Webhooks"],
    challenges: [
      "Working within limited RAM and flash resources",
      "Keeping Wi-Fi connections stable",
      "Avoiding overly expensive network operations",
    ],
    improvements: [
      "Add a small OLED status display",
      "Add configurable thresholds and alerts",
      "Store historical measurements locally",
    ],
    status: "experimental",
    screenshots: [],
    startDate: "2025",
    endDate: "2026",
    featured: false,
  },
  {
    id: "immich-self-hosting",
    title: "Self-Hosted Immich Lab",
    shortDescription: "A Windows Docker lab for self-hosting a private photo platform and learning secure remote access.",
    fullDescription:
      "I experimented with running Immich through Docker on Windows/WSL, then explored how to make a self-hosted service reachable remotely using Cloudflare and Tailscale. The project became a practical lesson in containers, persistent volumes, DNS, tunnels, remote access, and troubleshooting platform-specific setup issues.",
    whyBuilt:
      "I wanted to understand what it actually takes to own and operate a useful service at home instead of treating hosting as a black box.",
    whatLearned: [
      "Docker and WSL-based service deployment",
      "Persistent storage and container lifecycle management",
      "DNS and subdomain configuration",
      "Cloudflare Tunnel and Tailscale concepts",
      "Troubleshooting Windows networking and paths",
    ],
    techStack: ["Docker", "Docker Compose", "WSL", "Immich", "Cloudflare", "Tailscale", "Windows"],
    challenges: [
      "Container networking and persistent storage paths",
      "Windows-specific Docker/WSL behaviour",
      "Remote access without casually exposing services",
    ],
    improvements: [
      "Move critical services to a dedicated Linux host",
      "Add automated backups",
      "Add monitoring and uptime alerts",
    ],
    status: "experimental",
    screenshots: [],
    startDate: "2026",
    endDate: "2026",
    featured: false,
  },
  {
    id: "home-network-relay",
    title: "Home Network Relay",
    shortDescription: "A real-world multi-router network experiment connecting a second home over a wireless relay link.",
    fullDescription:
      "A practical home networking setup using multiple routers, access-point mode and a wireless relay between two nearby homes. I have used it to investigate coverage, throughput, latency, gaming performance, routing behaviour and the trade-offs between wireless relay links and a wired or point-to-point backhaul.",
    whyBuilt:
      "The goal was simple: extend an existing internet connection to another nearby home using the hardware already available, then learn why the connection behaved differently for downloads and games.",
    whatLearned: [
      "Access point versus router versus relay modes",
      "Latency and throughput behaviour over wireless hops",
      "Double NAT and routing considerations",
      "Line-of-sight and interference effects",
      "Why a wired backhaul can change network performance dramatically",
    ],
    techStack: ["Fiber Internet", "Genexis", "TP-Link", "Wi-Fi Relay", "Ethernet", "DNS / Routing"],
    challenges: [
      "Limited line of sight between buildings",
      "Trees, walls and electrical infrastructure affecting the link",
      "Large difference between raw link speed and gaming/download experience",
    ],
    improvements: [
      "Use a dedicated point-to-point wireless bridge",
      "Add a wired or fiber backhaul where practical",
      "Improve directional alignment and link monitoring",
    ],
    status: "building",
    screenshots: [],
    startDate: "2025",
    endDate: "Present",
    featured: false,
  },
  {
    id: "portfolio-lab",
    title: "This Portfolio",
    shortDescription: "An interactive portfolio built as a small product: animated UI, project explorer, terminal interactions, and responsive design.",
    fullDescription:
      "This portfolio is itself a project. I am using React, TypeScript, Tailwind CSS, Framer Motion and custom effects to turn a conventional portfolio into an interactive personal lab. It includes project detail views, animated reveals, terminal-style interactions, sound effects, responsive navigation and accessibility-conscious reduced-motion handling.",
    whyBuilt:
      "A portfolio should show how I think and build, not just list technologies. I wanted the interface to feel like a small extension of my development environment.",
    whatLearned: [
      "Designing motion without making a page unusable",
      "Component composition and reusable UI primitives",
      "Responsive interaction patterns",
      "TypeScript build and lint discipline",
      "Balancing visual effects with performance",
    ],
    techStack: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vite", "Lucide"],
    challenges: [
      "Keeping many animations from competing for attention",
      "Making interactive cards keyboard accessible",
      "Maintaining visual consistency across sections",
    ],
    improvements: [
      "Add real project screenshots and demos",
      "Add a downloadable CV",
      "Add a lightweight project search",
      "Add live GitHub project metadata when useful",
    ],
    status: "active",
    screenshots: [],
    startDate: "2026",
    endDate: "Present",
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