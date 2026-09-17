import { useScrollReveal } from "../../hooks";
import { IdentityBadges } from "./IdentityBadges";
import { MapPin, Mail } from "lucide-react";

export function AboutSection() {
  const { ref } = useScrollReveal({ threshold: 0.1, triggerOnce: true });

  return (
    <section
      ref={ref}
      id="about"
      className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8"
      aria-labelledby="about-title"
    >
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <h2 id="about-title" className="font-display text-display-lg text-fg mb-4">
            About
          </h2>
        </div>

        <div className="space-y-8">
          <div className="prose prose-invert max-w-none">
            <p className="font-ui text-body-lg text-fg-muted leading-relaxed mb-6">
              I'm a student developer who learns by building. Not by reading tutorials, not by following courses —
              by having an idea, realizing I don't know how to build it, and figuring it out along the way.
            </p>

            <p className="font-ui text-body-lg text-fg-muted leading-relaxed mb-6">
              That approach has led me through a lot of different territories: a local AI assistant that started as a
              200-line Python script and grew into a modular system with plugin architecture. A healthcare management
              application built with React and Supabase that taught me real full-stack architecture. Years of Minecraft
              server administration that accidentally taught me JVM tuning, proxy networks, and infrastructure as code.
              ESP8266 experiments that taught me the constraints of embedded development. A home lab that taught me
              networking, containerization, and the joy of owning your data.
            </p>

            <p className="font-ui text-body-lg text-fg-muted leading-relaxed mb-6">
              I don't claim expertise in all of these. Some I'm comfortable with, some I'm actively learning,
              some I've moved on from. The common thread is curiosity — wanting to understand how things work
              by actually making them work (or breaking them in the process).
            </p>

            <p className="font-ui text-body-lg text-fg-muted leading-relaxed">
              Currently focused on: local AI systems, observable infrastructure, and bridging software with hardware.
              Always open to collaborating on interesting problems.
            </p>
          </div>

          <IdentityBadges />

          <div className="grid sm:grid-cols-2 gap-4 pt-8 border-t border-border">
            <div className="flex items-center gap-3 p-4 bg-bg-card border border-border rounded-xl">
              <MapPin className="h-5 w-5 text-accent" aria-hidden="true" />
              <div>
                <p className="font-ui text-caption text-fg-subtle">Location</p>
                <p className="font-ui text-body-sm text-fg">Earth (GMT+0)</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-bg-card border border-border rounded-xl">
              <Mail className="h-5 w-5 text-accent" aria-hidden="true" />
              <div>
                <p className="font-ui text-caption text-fg-subtle">Contact</p>
                <a href="mailto:zeyroxviper@example.com" className="font-ui text-body-sm text-fg hover:text-accent transition-colors font-mono">
                  zeyroxviper@example.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}