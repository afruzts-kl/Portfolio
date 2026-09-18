import { useStaggeredReveal } from "../../hooks";
import { BuildingCard } from "./BuildingCard";

interface BuildingProject {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  status: "planning" | "active" | "paused";
  startDate?: string;
  githubUrl?: string;
  notes?: string;
}

const buildingProjects: BuildingProject[] = [
  {
    id: "local-ai-assistant-v2",
    title: "Local AI Assistant v2",
    description: "Rebuilding Jarvis with a proper plugin architecture, better memory management, and a web UI for monitoring. Moving from experimental scripts to a maintainable system.",
    techStack: ["Python", "FastAPI", "React", "Ollama", "SQLite", "WebSockets"],
    status: "active",
    startDate: "2025-01",
    githubUrl: "https://github.com/afruzts-kl/local-ai-assistant-v2",
    notes: "Core engine done. Working on plugin system and web dashboard.",
  },
  {
    id: "home-lab-monitoring",
    title: "Home Lab Monitoring Stack",
    description: "Grafana + Prometheus + Loki for full observability of self-hosted services. Custom dashboards for Docker containers, network traffic, and system health.",
    techStack: ["Grafana", "Prometheus", "Loki", "Promtail", "Docker", "Node Exporter"],
    status: "active",
    startDate: "2025-02",
    githubUrl: "https://github.com/afruzts-kl/homelab-monitoring",
    notes: "Dashboards configured. Working on alerting rules and log aggregation.",
  },
  {
    id: "minecraft-plugin-suite",
    title: "Custom Minecraft Plugin Suite",
    description: "Unified plugin replacing 10+ separate plugins: economy, claims, chat, Discord sync, and admin tools. Built on Paper API with modern Gradle setup.",
    techStack: ["Java", "Paper API", "Gradle", "MariaDB", "Discord4J"],
    status: "planning",
    startDate: "2025-03",
    githubUrl: "https://github.com/afruzts-kl/mc-plugin-suite",
    notes: "Architecture designed. Starting core module implementation.",
  },
  {
    id: "esp32-sensor-network",
    title: "ESP32 Sensor Network",
    description: "Mesh network of ESP32 sensors for whole-home environmental monitoring. Custom PCB design, ESP-NOW protocol, battery optimization.",
    techStack: ["ESP32", "ESP-NOW", "PlatformIO", "KiCad", "MQTT", "Home Assistant"],
    status: "paused",
    startDate: "2024-11",
    githubUrl: "https://github.com/afruzts-kl/esp32-sensor-network",
    notes: "PCB v1 designed. Waiting for parts. Firmware prototype working on breadboard.",
  },
];

const statusConfig = {
  planning: { label: "Planning", color: "var(--info)", bg: "var(--info)/10" },
  active: { label: "Active", color: "var(--accent)", bg: "var(--accent)/10" },
  paused: { label: "Paused", color: "var(--warning)", bg: "var(--warning)/10" },
};

export function CurrentlyBuilding() {
  const { ref, visibleIndices } = useStaggeredReveal(buildingProjects.length, { threshold: 0.1, triggerOnce: true });

  return (
    <section
      ref={ref}
      id="building"
      className="py-12 lg:py-20 px-4 sm:px-6 lg:px-8"
      aria-labelledby="building-title"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12">
          <h2 id="building-title" className="font-display text-display-lg text-fg mb-4">
            Currently Building
          </h2>
          <p className="font-ui text-body-lg text-fg-muted max-w-2xl">
            Active experiments and works in progress. These are the things occupying my terminal right now.
            Some will ship, some will become learning experiences, some will sit in a branch for months.
          </p>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          role="list"
          aria-label="Current projects"
        >
          {buildingProjects.map((project, index) => (
            <div key={project.id} role="listitem">
              {visibleIndices.has(index) ? (
                <BuildingCard project={project} statusConfig={statusConfig} />
              ) : (
                <div className="h-[350px] animate-pulse bg-bg-elevated rounded-2xl border border-border" aria-hidden="true" />
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="font-ui text-body-sm text-fg-muted">
            <span className="font-mono text-accent">//</span> Want to see the code? Most repos are public on{" "}
            <a href="https://github.com/afruzts-kl" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline font-mono">
              GitHub
            </a>
            {"."}
          </p>
        </div>
      </div>
    </section>
  );
}