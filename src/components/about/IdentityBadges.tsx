import { useState } from "react";
import { Hash, Terminal, MessageSquare, Check, Copy } from "lucide-react";
import { sound } from "../../utils/sound";
import { TiltCard } from "../ui";

export function IdentityBadges() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    sound.playSuccess();
    navigator.clipboard.writeText("afruzts@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-4">
      <h3 className="font-ui text-body-sm text-fg-subtle uppercase tracking-wider">Online Identity</h3>
      <div className="grid sm:grid-cols-3 gap-3">
        {/* GitHub / Technical */}
        <a
          href="https://github.com/afruzts-kl"
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => sound.playHover()}
          className="block"
        >
          <TiltCard className="p-4 h-full flex items-center gap-3 transition-colors hover:border-lime-300/40">
            <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent group-hover:scale-110 transition-transform">
              <Terminal className="h-5 w-5" aria-hidden="true" />
            </div>
            <div>
              <p className="font-ui text-caption text-fg-subtle">Primary Handle</p>
              <p className="font-mono text-body-sm text-fg group-hover:text-lime-200">afruzts-kl</p>
              <p className="font-ui text-caption text-fg-muted">GitHub, Technical</p>
            </div>
          </TiltCard>
        </a>

        {/* Discord / Gaming */}
        <div onMouseEnter={() => sound.playHover()}>
          <TiltCard className="p-4 h-full flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-warning/10 border border-warning/20 flex items-center justify-center text-warning group-hover:scale-110 transition-transform">
              <Hash className="h-5 w-5" aria-hidden="true" />
            </div>
            <div>
              <p className="font-ui text-caption text-fg-subtle">Gaming / Discord</p>
              <p className="font-mono text-body-sm text-fg">mr_ats</p>
              <p className="font-ui text-caption text-fg-muted">Discord, Gaming</p>
            </div>
          </TiltCard>
        </div>

        {/* Email / Communication with Copy action */}
        <button
          onClick={copyEmail}
          onMouseEnter={() => sound.playHover()}
          className="text-left w-full cursor-pointer"
        >
          <TiltCard className="p-4 h-full flex items-center justify-between gap-2 transition-colors hover:border-cyan-400/40">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-info/10 border border-info/20 flex items-center justify-center text-info group-hover:scale-110 transition-transform">
                <MessageSquare className="h-5 w-5" aria-hidden="true" />
              </div>
              <div>
                <p className="font-ui text-caption text-fg-subtle">Communication</p>
                <p className="font-mono text-body-sm text-fg truncate">afruzts@gmail.com</p>
                <p className="font-ui text-caption text-fg-muted">
                  {copied ? <span className="text-lime-400 font-semibold">Copied!</span> : "Click to copy"}
                </p>
              </div>
            </div>
            <div className="text-fg-subtle p-1.5 rounded-md group-hover:text-cyan-300">
              {copied ? <Check className="h-4 w-4 text-lime-400" /> : <Copy className="h-4 w-4" />}
            </div>
          </TiltCard>
        </button>
      </div>

      <p className="font-ui text-body-sm text-fg-muted pt-4 border-t border-white/5">
        <span className="font-mono text-accent">//</span> One person, different contexts. The code is the same.
      </p>
    </div>
  );
}