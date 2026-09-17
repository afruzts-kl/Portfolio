import { Hash, Terminal, MessageSquare } from "lucide-react";

export function IdentityBadges() {
  return (
    <div className="space-y-4">
      <h3 className="font-ui text-body-sm text-fg-subtle uppercase tracking-wider">Online Identity</h3>
      <div className="flex flex-wrap gap-3">
        <div className="flex items-center gap-3 p-4 bg-bg-card border border-border rounded-xl">
          <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
            <Terminal className="h-5 w-5" aria-hidden="true" />
          </div>
          <div>
            <p className="font-ui text-caption text-fg-subtle">Primary Handle</p>
            <p className="font-mono text-body-sm text-fg">ZeyroxViper</p>
            <p className="font-ui text-caption text-fg-muted">GitHub, Technical</p>
          </div>
        </div>

        <div className="flex items-center gap-3 p-4 bg-bg-card border border-border rounded-xl">
          <div className="w-10 h-10 rounded-lg bg-warning/10 flex items-center justify-center text-warning">
            <Hash className="h-5 w-5" aria-hidden="true" />
          </div>
          <div>
            <p className="font-ui text-caption text-fg-subtle">Gaming / Discord</p>
            <p className="font-mono text-body-sm text-fg">MR_ATS</p>
            <p className="font-ui text-caption text-fg-muted">Discord, Gaming</p>
          </div>
        </div>

        <div className="flex items-center gap-3 p-4 bg-bg-card border border-border rounded-xl">
          <div className="w-10 h-10 rounded-lg bg-info/10 flex items-center justify-center text-info">
            <MessageSquare className="h-5 w-5" aria-hidden="true" />
          </div>
          <div>
            <p className="font-ui text-caption text-fg-subtle">Communication</p>
            <p className="font-mono text-body-sm text-fg">zeyroxviper@example.com</p>
            <p className="font-ui text-caption text-fg-muted">Email, Professional</p>
          </div>
        </div>
      </div>

      <p className="font-ui text-body-sm text-fg-muted pt-4 border-t border-border">
        <span className="font-mono text-accent">//</span> One person, different contexts. The code is the same.
      </p>
    </div>
  );
}