import { TypingTerminal } from "../ui";

const terminalCommands = [
  {
    command: "whoami",
    output: ["zeyroxviper@portfolio", "Student • Developer • Builder"],
    delay: 300,
  },
  {
    command: "cat ~/.config/identity",
    output: [
      "HANDLES:",
      "  MR_ATS        →  Discord / Gaming",
      "  ZeyroxViper   →  GitHub / Technical",
    ],
    delay: 300,
  },
  {
    command: "ls projects/",
    output: [
      "jarvis-ai-assistant/        [Experimental]",
      "healthcare-management/      [Active]",
      "minecraft-infrastructure/   [Active]",
      "esp8266-iot-experiments/    [Archived]",
      "home-networking-lab/        [Building]",
    ],
    delay: 300,
  },
  {
    command: "cat motto.txt",
    output: ["I build things, break things, and figure out how they work."],
    delay: 300,
  },
];

export function HeroTerminal() {
  return (
    <div className="w-full max-w-2xl">
      <TypingTerminal
        commands={terminalCommands}
        prompt="zeyroxviper@portfolio:~$"
        loop={true}
        className="h-[320px] sm:h-[360px]"
      />
    </div>
  );
}