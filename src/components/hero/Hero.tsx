"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "../../utils/cn";
import { useReducedMotion, useScrollReveal } from "../../hooks";
import { HeroTerminal } from "./HeroTerminal";
import { HeroActions } from "./HeroActions";
import { GradientText } from "../ui";
import { ChevronDown } from "lucide-react";

export function Hero() {
  const { ref: scrollRef, isVisible } = useScrollReveal({ threshold: 0.1, triggerOnce: true });
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [cursorVisible, setCursorVisible] = useState(false);
  const heroRef = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;

    const handleMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
      setCursorVisible(true);
    };

    const handleLeave = () => {
      setCursorVisible(false);
    };

    const hero = heroRef.current;
    if (!hero) return;

    hero.addEventListener("mousemove", handleMove);
    hero.addEventListener("mouseleave", handleLeave);

    return () => {
      hero.removeEventListener("mousemove", handleMove);
      hero.removeEventListener("mouseleave", handleLeave);
    };
  }, [reducedMotion]);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={(el) => {
        heroRef.current = el;
        scrollRef.current = el;
      }}
      id="hero"
      className={cn(
        "relative min-h-[70vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 pb-12",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      )}
      style={{
        transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
      }}
      aria-labelledby="hero-title"
    >
      <div className="absolute inset-0 grid-bg opacity-20" aria-hidden="true" />
      <div className="absolute inset-0 radial-glow" aria-hidden="true" />

      {!reducedMotion && cursorVisible && (
        <div
          className="hero-cursor-glow visible"
          style={{
            left: cursorPos.x,
            top: cursorPos.y,
          }}
          aria-hidden="true"
        />
      )}

      <div className="relative mx-auto max-w-7xl w-full">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          <div className="space-y-7">
            <div className="space-y-3">
              <span className="font-ui text-caption text-accent uppercase tracking-wider">
                FIRST-YEAR CSE STUDENT • DEVELOPER • BUILDER
              </span>
              <h1
                id="hero-title"
                className="font-display-bold text-display-xl text-fg leading-tight text-balance text-pretty"
              >
                I turn curiosity into{" "}
                <GradientText from="var(--color-accent)" to="var(--color-accent-dim)">
                  working systems.
                </GradientText>
              </h1>
            </div>

            <p className="font-body text-body-lg text-fg-muted max-w-xl leading-relaxed">
              I'm Afruz T S, a first-year CSE student at Ilahia College of Engineering. I build AI tools,
              full-stack apps, infrastructure, Minecraft systems, and hardware experiments — learning by
              building, breaking, and figuring out what makes things work.
            </p>

            <div className="flex flex-wrap items-center gap-3 text-caption text-fg-subtle">
              <span className="font-mono-text px-2 py-1 bg-bg-card border border-border rounded">
                <span className="text-accent">~/</span>portfolio
              </span>
              <span className="font-mono-text px-2 py-1 bg-bg-card border border-border rounded">
                <span className="text-accent">//</span> afruzts-kl@github
              </span>
              <span className="font-mono-text px-2 py-1 bg-bg-card border border-border rounded">
                <span className="text-accent">//</span> mr_ats on Discord
              </span>
            </div>

            <HeroActions
              onPrimaryClick={scrollToProjects}
              onSecondaryClick={() => window.open("https://github.com/afruzts-kl", "_blank", "noopener,noreferrer")}
            />
          </div>

          <div className="relative">
            <HeroTerminal />
          </div>
        </div>

        <button
          onClick={scrollToProjects}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:block p-2 rounded-full bg-bg-card/50 border border-border text-fg-muted hover:text-accent hover:border-accent/50 transition-all duration-300 animate-bounce"
          aria-label="Scroll to projects"
        >
          <ChevronDown className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>
    </section>
  );
}