"use client";

import { forwardRef, useRef, useEffect, useState, type ButtonHTMLAttributes } from "react";
import { cn } from "../../utils/cn";
import { useReducedMotion } from "../../hooks";

interface MagneticButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  strength?: number;
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  loading?: boolean;
}

export const MagneticButton = forwardRef<HTMLButtonElement, MagneticButtonProps>(
  (
    {
      className,
      children,
      strength = 0.3,
      variant = "primary",
      size = "md",
      loading,
      disabled,
      onMouseMove,
      onMouseLeave,
      onMouseEnter,
      ...props
    },
    ref
  ) => {
    const buttonRef = useRef<HTMLButtonElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const reducedMotion = useReducedMotion();

    const baseStyles = "relative inline-flex items-center justify-center font-ui font-medium overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg disabled:opacity-50 disabled:cursor-not-allowed";

    const variants = {
      primary: "bg-accent text-bg hover:bg-accent-dim",
      secondary: "bg-bg-elevated text-fg border border-border hover:border-border-hover hover:bg-bg-card",
      ghost: "text-fg-muted hover:text-fg hover:bg-bg-elevated",
      outline: "border-2 border-accent text-accent hover:bg-accent/10",
    };

    const sizes = {
      sm: "px-3 py-1.5 text-caption gap-1.5",
      md: "px-5 py-2.5 text-body-sm gap-2",
      lg: "px-7 py-3.5 text-body gap-2.5",
    };

    useEffect(() => {
      if (reducedMotion) return;

      const button = buttonRef.current;
      if (!button) return;

      const handleMouseMove = (e: MouseEvent) => {
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        setPosition({
          x: x * strength,
          y: y * strength,
        });

        onMouseMove?.(e as unknown as React.MouseEvent<HTMLButtonElement>);
      };

      const handleMouseLeave = (e: MouseEvent) => {
        setPosition({ x: 0, y: 0 });
        onMouseLeave?.(e as unknown as React.MouseEvent<HTMLButtonElement>);
      };

      const handleMouseEnter = (e: MouseEvent) => {
        onMouseEnter?.(e as unknown as React.MouseEvent<HTMLButtonElement>);
      };

      button.addEventListener("mousemove", handleMouseMove);
      button.addEventListener("mouseleave", handleMouseLeave);
      button.addEventListener("mouseenter", handleMouseEnter);

      return () => {
        button.removeEventListener("mousemove", handleMouseMove);
        button.removeEventListener("mouseleave", handleMouseLeave);
        button.removeEventListener("mouseenter", handleMouseEnter);
      };
    }, [strength, reducedMotion, onMouseMove, onMouseLeave, onMouseEnter]);

    const magneticStyle = reducedMotion
      ? undefined
      : {
          transform: `translate(${position.x}px, ${position.y}px)`,
          transition: "transform 0.15s ease-out",
        };

    const contentStyle = reducedMotion
      ? undefined
      : {
          transform: `translate(${-position.x * 0.5}px, ${-position.y * 0.5}px)`,
          transition: "transform 0.15s ease-out",
        };

    return (
      <button
        ref={(el) => {
          buttonRef.current = el;
          if (typeof ref === "function") ref(el);
          else if (ref) ref.current = el;
        }}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        disabled={disabled || loading}
        style={magneticStyle}
        {...props}
      >
        <span style={contentStyle} className="relative z-10 flex items-center gap-2">
          {loading && (
            <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
          )}
          {children}
        </span>
        <span
          className="absolute inset-0 bg-accent/20 opacity-0 hover:opacity-100 transition-opacity duration-300"
          aria-hidden="true"
        />
      </button>
    );
  }
);

MagneticButton.displayName = "MagneticButton";