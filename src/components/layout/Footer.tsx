import { useEffect, useState } from "react";
import { Github, Linkedin, Mail, Heart, Code2, Coffee } from "lucide-react";

const taglines = [
  "Built with curiosity, questionable amounts of debugging, and too many tabs.",
  "No frameworks were harmed in the making of this portfolio.",
  "Powered by coffee, git commit --amend, and rubber duck debugging.",
  "Student developer. Professional googler. Occasional breaker of things.",
  "The best code is the code you delete. The worst is the code you forget.",
  "Ship it. Break it. Learn. Repeat.",
  "localhost:3000 is where the magic happens.",
  "Warning: May contain traces of TypeScript and late-night commits.",
];

function getInitialTagline(): string {
  if (typeof window === "undefined") return taglines[0];
  const savedIndex = sessionStorage.getItem("footer-tagline-index");
  const index = savedIndex ? parseInt(savedIndex, 10) : 0;
  return taglines[index];
}

export function Footer() {
  const currentYear = new Date().getFullYear();
  const [tagline, setTagline] = useState(getInitialTagline);

  useEffect(() => {
    const savedIndex = sessionStorage.getItem("footer-tagline-index");
    const index = savedIndex ? parseInt(savedIndex, 10) : 0;
    const nextIndex = (index + 1) % taglines.length;
    setTagline(taglines[nextIndex]);
    sessionStorage.setItem("footer-tagline-index", nextIndex.toString());
  }, []);

  return (
    <footer
      className="border-t border-border bg-bg-elevated/50"
      role="contentinfo"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 lg:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          <div>
            <h3 className="font-display text-display-sm text-fg mb-4">Afruz T S</h3>
            <p className="font-ui text-body text-fg-muted leading-relaxed max-w-xs">
              First-year CSE student building software, AI experiments, infrastructure, and hardware projects.
              Curious about systems, infrastructure, and the intersection of software and hardware.
            </p>
          </div>

          <div>
            <h4 className="font-ui text-body-sm text-fg-subtle uppercase tracking-wider mb-4">Connect</h4>
            <div className="flex flex-col gap-3">
              <a
                href="https://github.com/afruzts-kl"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 font-ui text-body text-fg-muted hover:text-accent transition-colors duration-fast group"
              >
                <Github className="h-5 w-5 transition-transform duration-fast group-hover:translate-x-1" aria-hidden="true" />
                <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/afruz-t-s-9b6541436/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 font-ui text-body text-fg-muted hover:text-accent transition-colors duration-fast group"
              >
                <Linkedin className="h-5 w-5 transition-transform duration-fast group-hover:translate-x-1" aria-hidden="true" />
                <span>LinkedIn</span>
              </a>
              <a
                href="mailto:afruzts@gmail.com"
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
            <p className="font-ui text-body text-fg-muted mt-6 leading-relaxed italic">
              {tagline}
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-ui text-caption text-fg-subtle">
            © {currentYear} Afruz T S. All rights reserved.
          </p>
          <p className="font-mono text-caption text-fg-subtle">
            <span className="text-accent">//</span> No frameworks were harmed in the making of this portfolio
          </p>
        </div>
      </div>
    </footer>
  );
}
