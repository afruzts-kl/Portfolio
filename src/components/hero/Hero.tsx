"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "../../utils/cn";
import { useReducedMotion, useScrollReveal } from "../../hooks";
import { HeroTerminal } from "./HeroTerminal";
import { HeroActions } from "./HeroActions";
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
        "relative flex min-h-[84vh] items-center justify-center overflow-hidden px-4 pt-24 pb-16 sm:px-6 lg:px-8",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      )}
      style={{
        transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
      }}
      aria-labelledby="hero-title"
    >
      <div className="absolute inset-0 grid-bg opacity-25" aria-hidden="true" />
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

      <div className="relative mx-auto w-full max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="space-y-7">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 rounded-full border border-lime-300/30 bg-lime-300/10 px-3 py-1.5 font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-lime-100 shadow-[0_0_15px_rgba(182,243,106,0.15)]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent shadow-[0_0_12px_var(--color-accent)]" />
                </span>
                First-year CSE student · systems builder
              </span>
              <h1
                id="hero-title"
                className="max-w-3xl font-display-bold text-display-xl text-fg leading-[0.9] text-balance text-pretty tracking-tight"
              >
                I turn curiosity into{" "}
                <span className="shimmer-text">
                  working systems.
                </span>
              </h1>
            </div>

            <p className="max-w-xl font-body text-body-lg text-fg-muted leading-relaxed">
              I'm Afruz T S, a first-year CSE student at Ilahia College of Engineering. I build AI tools,
              full-stack apps, infrastructure, Minecraft systems, and hardware experiments — learning by building,
              breaking, and figuring out what makes things work.
            </p>

            <div className="flex flex-wrap gap-x-6 gap-y-2 border-y border-lime-100/10 py-3 font-mono text-[10px] uppercase tracking-[0.14em] text-fg-subtle">
              <span className="hover:text-lime-200 transition-colors cursor-default"><span className="mr-2 text-accent">01</span>Software</span>
              <span className="hover:text-cyan-200 transition-colors cursor-default"><span className="mr-2 text-accent">02</span>Infrastructure</span>
              <span className="hover:text-emerald-200 transition-colors cursor-default"><span className="mr-2 text-accent">03</span>Experiments</span>
            </div>

            <div className="flex flex-wrap items-center gap-3 text-caption text-fg-subtle">
              <button
                onClick={() => {
                  window.dispatchEvent(new CustomEvent("trigger-matrix-rain"));
                }}
                title="Click for a surprise!"
                className="rounded-full border border-border bg-bg-card/80 px-3 py-1.5 font-mono uppercase tracking-[0.12em] text-lime-100 transition-all hover:border-lime-400 hover:shadow-[0_0_15px_rgba(182,243,106,0.3)] hover:scale-105 active:scale-95"
              >
                <span className="text-accent">~/</span>portfolio
              </button>
              <a
                href="https://github.com/afruzts-kl"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-border bg-bg-card/80 px-3 py-1.5 font-mono uppercase tracking-[0.12em] text-sky-200 transition-all hover:border-sky-400 hover:shadow-[0_0_15px_rgba(56,189,248,0.3)] hover:scale-105"
              >
                <span className="text-accent">//</span> afruzts-kl@github
              </a>
              <span className="rounded-full border border-border bg-bg-card/80 px-3 py-1.5 font-mono uppercase tracking-[0.12em] text-fuchsia-200">
                <span className="text-accent">//</span> mr_ats
              </span>
            </div>

            <HeroActions
              onPrimaryClick={scrollToProjects}
              onSecondaryClick={() => window.open("https://github.com/afruzts-kl", "_blank", "noopener,noreferrer")}
            />
          </div>

          <div className="relative lg:pl-6">
            <div className="absolute -inset-5 rounded-[2rem] bg-gradient-to-br from-lime-300/15 via-cyan-400/10 to-transparent blur-2xl animate-pulse-glow" aria-hidden="true" />
            <HeroTerminal />
          </div>
        </div>

        <button
          onClick={scrollToProjects}
          className="absolute bottom-4 left-1/2 hidden -translate-x-1/2 rounded-full border border-border bg-bg-card/50 p-2 text-fg-muted transition-all duration-300 hover:border-lime-300/50 hover:text-lime-100 hover:scale-110 sm:block"
          aria-label="Scroll to projects"
        >
          <ChevronDown className="h-5 w-5 animate-bounce" aria-hidden="true" />
        </button>
      </div>
    </section>
  );
}
