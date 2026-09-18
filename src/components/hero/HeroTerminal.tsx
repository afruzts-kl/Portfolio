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
    <div className="w-full max-w-xl hidden sm:block">
      <TypingTerminal
        commands={terminalCommands}
        prompt="afruzts@portfolio:~$"
        loop={false}
        className="h-[180px]"
      />
    </div>
  );
}