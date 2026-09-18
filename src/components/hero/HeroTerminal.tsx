import { TypingTerminal } from "../ui";

const terminalCommands = [
  {
    command: "whoami",
    output: ["afruzts@portfolio", "CSE student • developer • builder"],
    delay: 400,
  },
  {
    command: "cat projects/active",
    output: [
      "jarvis-ai-assistant        [Experimental]",
      "healthcare-management      [Active]",
      "minecraft-infrastructure   [Active]",
      "home-networking-lab        [Building]",
    ],
    delay: 400,
  },
];

export function HeroTerminal() {
  return (
    <div className="system-console relative mx-auto w-full max-w-xl">
      <div className="system-orbit system-orbit-one" aria-hidden="true" />
      <div className="system-orbit system-orbit-two" aria-hidden="true" />
      <div className="relative overflow-hidden rounded-2xl border border-lime-200/20 bg-[#0c100d]/90 p-2 shadow-[0_28px_80px_rgba(0,0,0,0.48)] backdrop-blur-xl">
        <div className="mb-2 flex items-center justify-between rounded-xl border border-white/5 bg-white/[0.025] px-3 py-2">
          <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.14em] text-fg-subtle">
            <span className="h-2 w-2 rounded-full bg-accent shadow-[0_0_12px_var(--color-accent)]" />
            system.console
          </div>
          <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-lime-100/80">online</span>
        </div>
        <TypingTerminal
          commands={terminalCommands}
          prompt="afruzts@portfolio:~$"
          loop={false}
          className="h-[180px] border-white/10 bg-black/25 shadow-none"
        />
        <div className="grid grid-cols-3 gap-px overflow-hidden rounded-xl border border-white/5 bg-white/5 mt-2">
          {[['04', 'live builds'], ['∞', 'curiosity'], ['24/7', 'learning']].map(([value, label]) => (
            <div key={label} className="bg-[#0c100d] px-3 py-2.5">
              <p className="font-display text-base leading-none text-fg">{value}</p>
              <p className="mt-1 font-mono text-[8px] uppercase tracking-[0.11em] text-fg-subtle">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
