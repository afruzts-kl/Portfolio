import { useState, useEffect } from "react";
import { cn } from "../../utils/cn";
import { useReducedMotion } from "../../hooks";

interface TerminalLine {
  type: "prompt" | "output" | "error" | "success";
  content: string;
  prompt?: string;
}

interface TerminalProps {
  lines: TerminalLine[];
  className?: string;
  showCursor?: boolean;
  cursorText?: string;
}

export function Terminal({ lines, className, showCursor = true, cursorText = "_" }: TerminalProps) {
  return (
    <div
      className={cn(
        "font-mono text-body-sm bg-bg border border-border rounded-xl overflow-hidden",
        className
      )}
      role="log"
      aria-live="polite"
    >
      <div className="bg-bg-elevated border-b border-border px-4 py-3 flex items-center gap-2">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-danger" />
          <div className="w-3 h-3 rounded-full bg-warning" />
          <div className="w-3 h-3 rounded-full bg-accent" />
        </div>
        <span className="font-ui text-caption text-fg-muted ml-2">terminal</span>
      </div>
      <div className="p-4 space-y-1 max-h-96 overflow-y-auto">
        {lines.map((line, index) => (
          <div key={index} className="flex gap-2 items-start min-h-[1.5rem]">
            {line.type === "prompt" && (
              <span className="text-accent whitespace-nowrap shrink-0 select-none">
                {line.prompt || "~/portfolio $"}
              </span>
            )}
            {line.type !== "prompt" && (
              <span className="text-fg-subtle whitespace-nowrap shrink-0 select-none">
                {line.type === "error" ? "✗" : line.type === "success" ? "✓" : "›"}
              </span>
            )}
            <span
              className={cn(
                "whitespace-pre-wrap break-words flex-1",
                line.type === "output" && "text-fg",
                line.type === "error" && "text-danger",
                line.type === "success" && "text-accent",
                line.type === "prompt" && "text-fg"
              )}
            >
              {line.content}
            </span>
          </div>
        ))}
        {showCursor && (
          <div className="flex gap-2 items-start min-h-[1.5rem]">
            <span className="text-accent whitespace-nowrap shrink-0 select-none">~/portfolio $</span>
            <span className="text-fg whitespace-pre-wrap break-words flex-1">
              <span className="relative">
                <span className="bg-accent text-bg px-0.5 animate-blink">{cursorText}</span>
              </span>
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

interface TypingTerminalProps {
  commands: Array<{
    command: string;
    output?: string[];
    delay?: number;
  }>;
  className?: string;
  prompt?: string;
  loop?: boolean;
}

function getInitialLines(commands: TypingTerminalProps["commands"], prompt: string): TerminalLine[] {
  const finalLines: TerminalLine[] = [];
  commands.forEach((cmd) => {
    finalLines.push({ type: "prompt", content: cmd.command, prompt });
    if (cmd.output) {
      cmd.output.forEach((out) => finalLines.push({ type: "output", content: out }));
    }
  });
  return finalLines;
}

export function TypingTerminal({ commands, className, prompt = "~/portfolio $", loop = true }: TypingTerminalProps) {
  const reducedMotion = useReducedMotion();
  const [lines, setLines] = useState<TerminalLine[]>([]);

  useEffect(() => {
    if (reducedMotion) {
      setLines(getInitialLines(commands, prompt));
      return;
    }

    let cancelled = false;
    const runSequence = async () => {
      for (let i = 0; i < commands.length; ) {
        if (cancelled) return;

        const cmd = commands[i];
        const fullCommand = cmd.command;

        await new Promise((r) => setTimeout(r, cmd.delay || 500));

        if (cancelled) return;
        setLines((prev) => [...prev, { type: "prompt", content: fullCommand, prompt }]);

        if (cmd.output) {
          for (const out of cmd.output) {
            await new Promise((r) => setTimeout(r, 200));
            if (cancelled) return;
            setLines((prev) => [...prev, { type: "output", content: out }]);
          }
        }

        await new Promise((r) => setTimeout(r, 800));

        i++;
        if (i >= commands.length && loop) {
          await new Promise((r) => setTimeout(r, 2000));
          if (cancelled) return;
          setLines([]);
          i = 0;
        } else if (i >= commands.length && !loop) {
          break;
        }
      }
    };

    runSequence();

    return () => {
      cancelled = true;
    };
  }, [commands, prompt, loop, reducedMotion]);

  return <Terminal lines={lines} className={className} showCursor={!reducedMotion} />;
}
