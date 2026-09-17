import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "../../utils/cn";
import { useReducedMotion } from "../../hooks";

interface GlowTextProps extends HTMLAttributes<HTMLSpanElement> {
  intensity?: "subtle" | "medium" | "strong";
  color?: "accent" | "fg" | "warning" | "info";
}

export const GlowText = forwardRef<HTMLSpanElement, GlowTextProps>(
  ({ className, intensity = "medium", color = "accent", children, style, ...props }, ref) => {
    const reducedMotion = useReducedMotion();

    const intensities = {
      subtle: "0 0 10px",
      medium: "0 0 20px, 0 0 40px",
      strong: "0 0 30px, 0 0 60px, 0 0 90px",
    };

    const colors = {
      accent: "var(--accent)",
      fg: "var(--fg)",
      warning: "var(--warning)",
      info: "var(--info)",
    };

    const glowColor = colors[color];
    const glowSpread = intensities[intensity];

    const textShadow = reducedMotion
      ? undefined
      : `${glowSpread} ${glowColor}`;

    return (
      <span
        ref={ref}
        className={cn("relative", className)}
        style={{
          ...style,
          textShadow,
          transition: reducedMotion ? "none" : "text-shadow 0.3s ease-out",
        }}
        {...props}
      >
        {children}
      </span>
    );
  }
);

GlowText.displayName = "GlowText";

interface GradientTextProps extends HTMLAttributes<HTMLSpanElement> {
  from?: string;
  to?: string;
  via?: string;
}

export const GradientText = forwardRef<HTMLSpanElement, GradientTextProps>(
  ({ className, from = "var(--fg)", to = "var(--fg-muted)", via, children, ...props }, ref) => {
    const gradient = via
      ? `linear-gradient(135deg, ${from}, ${via}, ${to})`
      : `linear-gradient(135deg, ${from}, ${to})`;

    return (
      <span
        ref={ref}
        className={cn("bg-clip-text text-transparent", className)}
        style={{
          background: gradient,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
        {...props}
      >
        {children}
      </span>
    );
  }
);

GradientText.displayName = "GradientText";