import { useScrollReveal } from "../../hooks";
import { Github, Linkedin, Mail, ExternalLink, Send } from "lucide-react";

export function ContactSection() {
  const { ref } = useScrollReveal({ threshold: 0.1, triggerOnce: true });

  const links = [
    {
      id: "github",
      label: "GitHub",
      description: "Code, repositories, contributions",
      href: "https://github.com/zeyroxviper",
      icon: Github,
      primary: true,
    },
    {
      id: "linkedin",
      label: "LinkedIn",
      description: "Professional background, connections",
      href: "https://linkedin.com/in/zeyroxviper",
      icon: Linkedin,
      primary: false,
    },
    {
      id: "email",
      label: "Email",
      description: "Direct contact, collaborations",
      href: "mailto:zeyroxviper@example.com",
      icon: Mail,
      primary: false,
    },
  ];

  return (
    <section
      ref={ref}
      id="contact"
      className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8"
      aria-labelledby="contact-title"
    >
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <h2 id="contact-title" className="font-display text-display-lg text-fg mb-4">
            Get In Touch
          </h2>
          <p className="font-ui text-body-lg text-fg-muted max-w-2xl mx-auto">
            Open to interesting conversations, collaboration opportunities, or just saying hello.
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
              <div className="flex items-center justify-between">
                <span className="font-mono text-caption text-fg-subtle">
                  {link.primary ? "Primary" : "Secondary"}
                </span>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity">
                  <ExternalLink className="h-4 w-4 text-fg-muted" aria-hidden="true" />
                </span>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center pt-8 border-t border-border">
          <a
            href="mailto:zeyroxviper@example.com?subject=Hello from your portfolio"
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