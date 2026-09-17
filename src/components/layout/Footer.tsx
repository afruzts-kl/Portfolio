import { Github, Linkedin, Mail, Heart, Code2, Coffee } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="border-t border-border bg-bg-elevated/50"
      role="contentinfo"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          <div>
            <h3 className="font-display text-display-sm text-fg mb-4">Zeyrox Viper</h3>
            <p className="font-ui text-body text-fg-muted leading-relaxed max-w-xs">
              Student developer who builds things, breaks things, and figures out how they work.
              Curious about systems, infrastructure, and the intersection of software and hardware.
            </p>
          </div>

          <div>
            <h4 className="font-ui text-body-sm text-fg-subtle uppercase tracking-wider mb-4">Connect</h4>
            <div className="flex flex-col gap-3">
              <a
                href="https://github.com/zeyroxviper"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 font-ui text-body text-fg-muted hover:text-accent transition-colors duration-fast group"
              >
                <Github className="h-5 w-5 transition-transform duration-fast group-hover:translate-x-1" aria-hidden="true" />
                <span>GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/zeyroxviper"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 font-ui text-body text-fg-muted hover:text-accent transition-colors duration-fast group"
              >
                <Linkedin className="h-5 w-5 transition-transform duration-fast group-hover:translate-x-1" aria-hidden="true" />
                <span>LinkedIn</span>
              </a>
              <a
                href="mailto:zeyroxviper@example.com"
                className="flex items-center gap-3 font-ui text-body text-fg-muted hover:text-accent transition-colors duration-fast group"
              >
                <Mail className="h-5 w-5 transition-transform duration-fast group-hover:translate-x-1" aria-hidden="true" />
                <span>Email</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-ui text-body-sm text-fg-subtle uppercase tracking-wider mb-4">Built With</h4>
            <div className="flex flex-wrap gap-2">
              {[
                { icon: Code2, label: "React + Vite" },
                { icon: Heart, label: "TypeScript" },
                { icon: Coffee, label: "Tailwind CSS" },
                { icon: Code2, label: "Framer Motion" },
              ].map((item) => (
                <span
                  key={item.label}
                  className="flex items-center gap-1.5 font-ui text-caption text-fg-subtle px-3 py-1.5 bg-bg-card border border-border rounded-full"
                >
                  <item.icon className="h-3.5 w-3.5" aria-hidden="true" />
                  {item.label}
                </span>
              ))}
            </div>
            <p className="font-ui text-body text-fg-muted mt-6 leading-relaxed">
              Built with curiosity, questionable amounts of debugging, and too many tabs.
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-ui text-caption text-fg-subtle">
            © {currentYear} Zeyrox Viper. All rights reserved.
          </p>
          <p className="font-mono text-caption text-fg-subtle">
            <span className="text-accent">//</span> No frameworks were harmed in the making of this portfolio
          </p>
        </div>
      </div>
    </footer>
  );
}