import { cn } from "../../utils/cn";
import { useScrollReveal } from "../../hooks";
import { HeroTerminal } from "./HeroTerminal";
import { HeroActions } from "./HeroActions";
import { GradientText } from "../ui";

export function Hero() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1, triggerOnce: true });

  return (
    <section
      ref={ref}
      id="hero"
      className={cn(
        "relative min-h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 pb-16",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      )}
      style={{
        transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
      }}
      aria-labelledby="hero-title"
    >
      <div className="absolute inset-0 grid-bg opacity-20" aria-hidden="true" />
      <div className="absolute inset-0 radial-glow" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-2">
              <span className="font-ui text-caption text-accent uppercase tracking-wider">
                STUDENT • DEVELOPER • BUILDER
              </span>
              <h1
                id="hero-title"
                className="font-display text-display-xl text-fg leading-tight text-balance"
              >
                I build things,{" "}
                <GradientText from="var(--color-accent)" to="var(--color-accent-dim)">
                  break things
                </GradientText>{" "}
                and figure out how they work.
              </h1>
            </div>

            <p className="font-ui text-body-lg text-fg-muted max-w-xl leading-relaxed">
              Student developer exploring the intersection of software, infrastructure, and hardware.
              From AI assistants and full-stack applications to game server ecosystems and IoT experiments —
              I learn by building, breaking, and debugging.
            </p>

            <div className="flex flex-wrap items-center gap-3 text-caption text-fg-subtle">
              <span className="font-mono px-2 py-1 bg-bg-card border border-border rounded">
                <span className="text-accent">~/</span>portfolio
              </span>
              <span className="font-mono px-2 py-1 bg-bg-card border border-border rounded">
                <span className="text-accent">//</span> zeyroxviper@github
              </span>
              <span className="font-mono px-2 py-1 bg-bg-card border border-border rounded">
                <span className="text-accent">//</span> MR_ATS on Discord
              </span>
            </div>

            <HeroActions
              onPrimaryClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              onSecondaryClick={() => window.open("https://github.com/zeyroxviper", "_blank", "noopener,noreferrer")}
            />
          </div>

          <div className="relative">
            <HeroTerminal />
          </div>
        </div>

        <div className="mt-16 lg:mt-24 flex items-center justify-center gap-8 text-caption text-fg-subtle">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" aria-hidden="true" />
            <span className="font-mono">Live</span>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <span className="font-mono">Last commit: <span className="text-fg">2 hours ago</span></span>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <span className="font-mono">Status: <span className="text-accent">Building</span></span>
          </div>
        </div>
      </div>
    </section>
  );
}