import { cn } from "../../utils/cn";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";
import { useState, useEffect } from "react";

interface HeaderProps {
  onNavigate?: (section: string) => void;
}

export function Header({ onNavigate }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "process", label: "How I Build" },
    { id: "building", label: "Building" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
  ];

  const handleNavClick = (id: string) => {
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
        "fixed top-0 left-0 right-0 z-50 transition-all duration-normal ease-out-expo",
        scrolled ? "bg-bg/80 backdrop-blur-md border-b border-border" : "bg-transparent"
      )}
      role="banner"
    >
      <nav
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-display text-display-sm text-fg">Afruz T S</span>
            <span className="hidden sm:inline font-mono text-caption text-fg-subtle px-2 py-0.5 bg-bg-elevated border border-border rounded">
              CSE STUDENT • BUILDER
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="font-ui text-body-sm text-fg-muted hover:text-fg transition-colors duration-fast relative py-1"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent scale-x-0 origin-left transition-transform duration-fast ease-out-expo group-hover:scale-x-100" />
              </button>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://github.com/afruzts-kl"
              target="_blank"
              rel="noopener noreferrer"
              className="text-fg-muted hover:text-accent transition-colors duration-fast p-2 rounded-lg hover:bg-bg-elevated"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/afruz-t-s-9b6541436/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-fg-muted hover:text-accent transition-colors duration-fast p-2 rounded-lg hover:bg-bg-elevated"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:afruzts@gmail.com"
              className="text-fg-muted hover:text-accent transition-colors duration-fast p-2 rounded-lg hover:bg-bg-elevated"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>

          <button
            className="md:hidden p-2 rounded-lg text-fg-muted hover:text-fg hover:bg-bg-elevated transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
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