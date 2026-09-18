import { cn } from "../../utils/cn";
import { Menu, X, Github, Linkedin, Mail, Volume2, VolumeX } from "lucide-react";
import { useState, useEffect } from "react";
import { sound } from "../../utils/sound";

interface HeaderProps {
  onNavigate?: (section: string) => void;
}

export function Header({ onNavigate }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("projects");
  const [isSoundOn, setIsSoundOn] = useState(() => sound.isEnabled());

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Determine active section
      const sections = ["projects", "skills", "process", "building", "about", "contact"];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom >= 140) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleAudio = () => {
    const nextState = sound.toggle();
    setIsSoundOn(nextState);
  };

  const navItems = [
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "process", label: "How I Build" },
    { id: "building", label: "Building" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
  ];

  const handleNavClick = (id: string) => {
    sound.playClick();
    if (onNavigate) {
      onNavigate(id);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out-expo",
        scrolled ? "border-b border-lime-100/10 bg-[#090b0a]/80 backdrop-blur-xl shadow-[0_10px_40px_rgba(2,6,23,0.4)]" : "bg-transparent"
      )}
      role="banner"
    >
      <nav
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="font-display text-display-sm text-fg tracking-tight">Afruz T S</span>
            <span className="hidden sm:inline-flex items-center gap-1.5 font-mono text-[10px] text-lime-300/90 px-2 py-0.5 bg-lime-300/10 border border-lime-300/25 rounded">
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-radar" />
              CSE STUDENT • BUILDER
            </span>
          </div>

          <div className="hidden md:flex items-center gap-1 rounded-full border border-white/5 bg-white/[0.03] p-1 backdrop-blur-md">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  onMouseEnter={() => sound.playHover()}
                  className={cn(
                    "relative px-3.5 py-1.5 rounded-full font-ui text-body-sm transition-all duration-300",
                    isActive
                      ? "text-lime-200 bg-lime-400/15 border border-lime-400/30 shadow-[0_0_15px_rgba(182,243,106,0.2)]"
                      : "text-fg-muted hover:text-fg hover:bg-white/[0.05]"
                  )}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          <div className="hidden lg:flex items-center gap-2.5">
            {/* Audio Toggle with animated visualizer */}
            <button
              onClick={toggleAudio}
              className={cn(
                "group relative flex items-center gap-2 rounded-lg border px-2.5 py-1.5 font-mono text-caption transition-all duration-300",
                isSoundOn
                  ? "border-lime-400/40 bg-lime-400/10 text-lime-300 shadow-[0_0_15px_rgba(182,243,106,0.15)]"
                  : "border-border bg-bg-elevated/70 text-fg-subtle hover:border-lime-300/30 hover:text-fg-muted"
              )}
              title={isSoundOn ? "Mute interactive audio FX" : "Enable interactive audio FX"}
              aria-label={isSoundOn ? "Mute audio" : "Enable audio"}
            >
              {isSoundOn ? (
                <>
                  <Volume2 className="h-4 w-4 text-accent" />
                  <span className="flex items-center gap-0.5 h-3">
                    <span className="w-0.5 h-2.5 bg-accent rounded animate-pulse" />
                    <span className="w-0.5 h-3 bg-accent rounded animate-pulse [animation-delay:150ms]" />
                    <span className="w-0.5 h-1.5 bg-accent rounded animate-pulse [animation-delay:300ms]" />
                  </span>
                </>
              ) : (
                <>
                  <VolumeX className="h-4 w-4" />
                  <span>FX OFF</span>
                </>
              )}
            </button>

            <a
              href="https://github.com/afruzts-kl"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => sound.playHover()}
              className="text-fg-muted hover:text-accent transition-colors duration-fast p-2 rounded-lg hover:bg-bg-elevated hover:shadow-[0_0_15px_rgba(182,243,106,0.15)]"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/afruz-t-s-9b6541436/"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => sound.playHover()}
              className="rounded-lg border border-transparent p-2 text-fg-muted transition-all duration-300 hover:border-cyan-400/30 hover:bg-cyan-500/5 hover:text-cyan-200"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:afruzts@gmail.com"
              onMouseEnter={() => sound.playHover()}
              className="rounded-lg border border-transparent p-2 text-fg-muted transition-all duration-300 hover:border-lime-400/30 hover:bg-lime-500/5 hover:text-lime-200"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={toggleAudio}
              className="p-2 rounded-lg border border-border bg-bg-elevated text-fg-muted"
              aria-label="Toggle audio"
            >
              {isSoundOn ? <Volume2 className="h-4 w-4 text-accent" /> : <VolumeX className="h-4 w-4" />}
            </button>
            <button
              className="p-2 rounded-lg text-fg-muted hover:text-fg hover:bg-bg-elevated transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        <div
          id="mobile-menu"
          className={cn(
            "md:hidden overflow-hidden transition-all duration-normal ease-out-expo",
            isMobileMenuOpen ? "max-h-96 opacity-100 pt-4 pb-6" : "max-h-0 opacity-0"
          )}
          role="navigation"
          aria-label="Mobile navigation"
        >
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="font-ui text-body text-fg-muted hover:text-fg transition-colors text-left py-2 px-2 rounded-lg hover:bg-bg-elevated"
              >
                {item.label}
              </button>
            ))}
            <div className="flex items-center gap-4 pt-4 border-t border-border">
              <a
                href="https://github.com/afruzts-kl"
                target="_blank"
                rel="noopener noreferrer"
                className="text-fg-muted hover:text-accent transition-colors p-2 rounded-lg hover:bg-bg-elevated"
                aria-label="GitHub"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/afruz-t-s-9b6541436/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-fg-muted hover:text-accent transition-colors p-2 rounded-lg hover:bg-bg-elevated"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="mailto:afruzts@gmail.com"
                className="text-fg-muted hover:text-accent transition-colors p-2 rounded-lg hover:bg-bg-elevated"
                aria-label="Email"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
