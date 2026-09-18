import { useState } from "react";
import { sound } from "../../utils/sound";
import { Terminal as TerminalIcon, Sparkles } from "lucide-react";
import { useReducedMotion } from "../../hooks";

type CommandKey = "whoami" | "projects" | "neofetch" | "status";

interface CommandData {
  cmd: string;
  output: string[];
}

const commandsMap: Record<CommandKey, CommandData> = {
  whoami: {
    cmd: "whoami",
    output: [
      "user: afruzts@portfolio",
      "role: CSE Student • Developer • Systems Builder",
      "affiliation: Ilahia College of Engineering",
      "motto: 'turn curiosity into working systems'",
    ],
  },
  projects: {
    cmd: "cat projects/active",
    output: [
      "jarvis-ai-assistant        [Experimental]  Local voice AI & automation",
      "health-care-v2              [Active]        React + Supabase healthcare platform",
      "gods-own-smp               [Active]        Minecraft server ecosystem",
      "home-lab + immich          [Building]      Self-hosting + remote access",
    ],
  },
  neofetch: {
    cmd: "neofetch --summary",
    output: [
      "os: Arch Linux / Windows 11",
      "host: Dual-boot Dev Rig + Self-Hosted Lab",
      "shell: zsh / bash / pwsh",
      "languages: TypeScript, Python, Java, C++, SQL",
      "infra: Docker Compose, NGINX, Cloudflare, Tailscale",
    ],
  },
  status: {
    cmd: "systemctl status builder.service",
    output: [
      "● builder.service - Active Curiosity Loop",
      "     Loaded: loaded (/etc/systemd/system/builder.service; enabled)",
      "     Active: active (running) since college admission",
      "     Tasks: continuous learning, debugging, shipping real code",
    ],
  },
};

export function HeroTerminal() {
  const reducedMotion = useReducedMotion();
  const [activeCmd, setActiveCmd] = useState<CommandKey>("whoami");
  const [displayedLines, setDisplayedLines] = useState<string[]>(commandsMap.whoami.output);
  const [typedCmd, setTypedCmd] = useState(commandsMap.whoami.cmd);
  const [isTyping, setIsTyping] = useState(false);

  const runCommand = (key: CommandKey) => {
    if (isTyping && activeCmd === key) return;
    sound.playClick();
    setActiveCmd(key);

    if (reducedMotion) {
      setTypedCmd(commandsMap[key].cmd);
      setDisplayedLines(commandsMap[key].output);
      return;
    }

    setIsTyping(true);
    setTypedCmd("");
    setDisplayedLines([]);

    const fullCmd = commandsMap[key].cmd;
    let charIndex = 0;

    const typeInterval = setInterval(() => {
      charIndex++;
      setTypedCmd(fullCmd.slice(0, charIndex));
      sound.playKey();

      if (charIndex >= fullCmd.length) {
        clearInterval(typeInterval);
        setTimeout(() => {
          setDisplayedLines(commandsMap[key].output);
          setIsTyping(false);
          sound.playHover();
        }, 120);
      }
    }, 28);
  };


  return (
    <div className="system-console relative mx-auto w-full max-w-xl group">
      <div className="system-orbit system-orbit-one animate-float" aria-hidden="true" />
      <div className="system-orbit system-orbit-two animate-pulse-glow" aria-hidden="true" />

      <div className="relative overflow-hidden rounded-2xl border border-lime-300/25 bg-[#0c100d]/95 p-3 shadow-[0_28px_80px_rgba(0,0,0,0.6)] backdrop-blur-2xl transition-all duration-300 hover:border-lime-300/40">
        {/* Terminal Header Bar */}
        <div className="mb-3 flex flex-wrap items-center justify-between gap-2 rounded-xl border border-white/5 bg-white/[0.03] px-3.5 py-2.5">
          <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-fg-muted">
            <div className="flex gap-1.5 mr-1">
              <span className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-lime-400 shadow-[0_0_8px_#b6f36a]" />
            </div>
            <TerminalIcon className="h-3.5 w-3.5 text-accent" />
            <span>sys.console</span>
          </div>

          <div className="flex items-center gap-2 font-mono text-[10px] text-lime-300/90">
            <span className="inline-flex items-center gap-1.5 rounded bg-lime-400/10 px-2 py-0.5 border border-lime-400/20">
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-ping" />
              LIVE TELEMETRY
            </span>
          </div>
        </div>

        {/* Interactive Quick Command Switcher Pills */}
        <div className="mb-3 flex flex-wrap gap-1.5 px-1" role="tablist" aria-label="Terminal commands">
          {(["whoami", "projects", "neofetch", "status"] as CommandKey[]).map((key) => {
            const isCurrent = activeCmd === key;
            return (
              <button
                key={key}
                role="tab"
                aria-selected={isCurrent}
                onClick={() => runCommand(key)}
                onMouseEnter={() => sound.playHover()}
                className={`rounded-lg px-2.5 py-1 font-mono text-[11px] transition-all duration-200 ${
                  isCurrent
                    ? "bg-lime-400/20 text-lime-300 border border-lime-400/40 shadow-[0_0_12px_rgba(182,243,106,0.2)]"
                    : "bg-white/[0.02] text-fg-subtle border border-white/5 hover:border-lime-400/20 hover:text-fg-muted"
                }`}
              >
                ${commandsMap[key].cmd.split(" ")[0]}
              </button>
            );
          })}
        </div>

        {/* Terminal Screen Body */}
        <div className="h-[200px] overflow-y-auto rounded-xl border border-white/5 bg-black/45 p-3.5 font-mono text-xs leading-relaxed text-fg select-text">
          <div className="flex items-center gap-2 text-lime-400/90 mb-2">
            <span className="text-accent font-semibold">afruzts@portfolio:~$</span>
            <span className="text-fg">{typedCmd}</span>
            <span className="h-4 w-2 bg-accent inline-block animate-blink align-middle" />
          </div>

          <div className="space-y-1 text-fg-muted">
            {displayedLines.map((line, idx) => (
              <div
                key={idx}
                className={`transition-opacity duration-200 ${
                  line.includes("[Active]")
                    ? "text-lime-300 font-medium"
                    : line.includes("[Experimental]")
                    ? "text-amber-300"
                    : line.includes("[Building]")
                    ? "text-cyan-300"
                    : "text-fg-muted"
                }`}
              >
                {line.startsWith("●") ? (
                  <span className="text-lime-400 font-bold">{line}</span>
                ) : (
                  line
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Live System Counter Footer */}
        <div className="mt-2.5 grid grid-cols-3 gap-px overflow-hidden rounded-xl border border-white/5 bg-white/5">
          {[
            ["08+", "projects explored"],
            ["∞", "curiosity"],
            ["24/7", "learning"],
          ].map(([value, label]) => (
            <div
              key={label}
              onMouseEnter={() => sound.playHover()}
              className="bg-[#0c100d] px-3.5 py-2.5 transition-colors hover:bg-white/[0.04]"
            >
              <div className="flex items-center gap-1">
                <p className="font-display text-base font-semibold leading-none text-fg">{value}</p>
                <Sparkles className="h-2.5 w-2.5 text-accent opacity-60" />
              </div>
              <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.11em] text-fg-subtle">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
