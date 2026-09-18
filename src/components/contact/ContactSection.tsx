import { useScrollReveal } from "../../hooks";
import { Github, Linkedin, Mail, Send, ArrowUpRight } from "lucide-react";
import { TiltCard } from "../ui";
import { sound } from "../../utils/sound";

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
      className="py-16 lg:py-20 px-4 sm:px-6 lg:px-8"
      aria-labelledby="contact-title"
    >
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lime-400/10 border border-lime-400/20 text-lime-300 font-mono text-[10px] uppercase tracking-wider mb-3">
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-radar" />
            Direct Communication
          </div>
          <h2 id="contact-title" className="font-display-bold text-display-lg text-fg mb-4">
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
              onClick={() => sound.playClick()}
              onMouseEnter={() => sound.playHover()}
              className="block"
            >
              <TiltCard className="h-full flex flex-col justify-between p-6">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 group-hover:bg-accent/20 group-hover:shadow-[0_0_15px_rgba(182,243,106,0.3)]">
                    <link.icon className="h-6 w-6 text-accent" aria-hidden="true" />
                  </div>
                  <h3 className="font-display-semibold text-display-sm text-fg group-hover:text-lime-200 transition-colors">
                    {link.label}
                  </h3>
                  <p className="font-ui text-caption text-fg-muted mt-1 leading-relaxed">
                    {link.description}
                  </p>
                </div>
                <div className="flex items-center justify-end mt-4 pt-3 border-t border-white/5">
                  <span className="text-fg-subtle group-hover:text-accent transition-colors flex items-center gap-1 font-mono text-xs">
                    Connect <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </TiltCard>
            </a>
          ))}
        </div>

        <div className="text-center pt-8 border-t border-white/5">
          <a
            href="mailto:afruzts@gmail.com?subject=Hello from your portfolio"
            onClick={() => sound.playClick()}
            onMouseEnter={() => sound.playHover()}
            className="inline-flex items-center gap-2 font-ui font-medium px-8 py-4 text-body bg-accent text-bg rounded-xl shadow-[0_0_25px_rgba(182,243,106,0.25)] hover:shadow-[0_0_35px_rgba(182,243,106,0.45)] hover:bg-accent-dim hover:scale-105 active:scale-95 transition-all duration-300"
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
