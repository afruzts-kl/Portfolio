import { useScrollReveal } from "../../hooks";
import { Github, Linkedin, Mail, Send } from "lucide-react";

export function ContactSection() {
  const { ref } = useScrollReveal({ threshold: 0.1, triggerOnce: true });

  const links = [
    {
      id: "github",
      label: "GitHub",
      description: "Code, repositories, contributions",
      href: "https://github.com/afruzts-kl",
      icon: Github,
    },
    {
      id: "linkedin",
      label: "LinkedIn",
      description: "Professional background, connections",
      href: "https://www.linkedin.com/in/afruz-t-s-9b6541436/",
      icon: Linkedin,
    },
    {
      id: "email",
      label: "Email",
      description: "Direct contact, collaborations",
      href: "mailto:afruzts@gmail.com",
      icon: Mail,
    },
  ];

  return (
    <section
      ref={ref}
      id="contact"
      className="py-12 lg:py-20 px-4 sm:px-6 lg:px-8"
      aria-labelledby="contact-title"
    >
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <h2 id="contact-title" className="font-display text-display-lg text-fg mb-4">
            Get In Touch
          </h2>
          <p className="font-ui text-body-lg text-fg-muted max-w-2xl mx-auto">
            Want to talk about a project, tech, or collaboration?
            Email is best for anything substantial.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 mb-16">
          {links.map((link) => (
            <a
              key={link.id}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-6 bg-bg-card border border-border rounded-2xl transition-all duration-normal hover:border-border-hover hover:shadow-card-hover"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center transition-colors group-hover:bg-accent/10">
                  <link.icon className="h-6 w-6 text-fg-muted group-hover:text-accent transition-colors" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-display text-display-sm text-fg">{link.label}</h3>
                  <p className="font-ui text-caption text-fg-muted">{link.description}</p>
                </div>
              </div>
              <div className="flex items-center justify-end">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity text-fg-muted">
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </span>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center pt-8 border-t border-border">
          <a
            href="mailto:afruzts@gmail.com?subject=Hello from your portfolio"
            className="inline-flex items-center gap-2 font-ui font-medium px-7 py-3.5 text-body bg-accent text-bg rounded-xl hover:bg-accent-dim transition-colors duration-fast focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
          >
            <Send className="h-5 w-5" aria-hidden="true" />
            Send an Email
          </a>
        </div>

        <p className="font-ui text-body-sm text-fg-muted mt-8 text-center">
          <span className="font-mono text-accent">//</span> No contact forms, no newsletters, no tracking. Just a direct line.
        </p>
      </div>
    </section>
  );
}