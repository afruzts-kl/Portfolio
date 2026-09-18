import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cn } from "../../utils/cn";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  loading?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", loading, disabled, children, ...props }, ref) => {
    const baseStyles = "group inline-flex items-center justify-center font-ui font-medium transition-all duration-300 ease-out-expo focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-300 focus-visible:ring-offset-2 focus-visible:ring-offset-bg disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.98] hover:-translate-y-0.5";

    const variants = {
      primary: "bg-accent text-bg shadow-[0_18px_40px_rgba(182,243,106,0.22)] hover:bg-accent-dim hover:shadow-[0_22px_48px_rgba(182,243,106,0.34)]",
      secondary: "bg-bg-elevated/80 text-fg border border-border hover:border-lime-300/50 hover:bg-bg-card/90 shadow-[0_12px_30px_rgba(15,23,42,0.35)]",
      ghost: "text-fg-muted hover:text-fg hover:bg-bg-elevated/80",
      outline: "border border-lime-300/40 bg-lime-300/5 text-lime-100 hover:bg-lime-300/10 hover:border-lime-200 shadow-[0_10px_24px_rgba(182,243,106,0.12)]",
    };

    const sizes = {
      sm: "px-3 py-1.5 text-caption gap-1.5",
      md: "px-5 py-2.5 text-body-sm gap-2",
      lg: "px-7 py-3.5 text-body gap-2.5",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        disabled={disabled || loading}
        {...props}
      >
        {loading && (
          <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>
        )}
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
