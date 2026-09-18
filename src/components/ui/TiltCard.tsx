import { useState, useRef, type ReactNode, type HTMLAttributes } from "react";
import { useReducedMotion } from "../../hooks";
import { cn } from "../../utils/cn";
import { sound } from "../../utils/sound";

interface TiltCardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
  maxTilt?: number;
  glowColor?: string;
  enableSound?: boolean;
}

export function TiltCard({
  children,
  className,
  maxTilt = 7,
  glowColor = "rgba(182, 243, 106, 0.14)",
  enableSound = true,
  ...props
}: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const [coords, setCoords] = useState({ x: 0.5, y: 0.5 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reducedMotion || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setCoords({ x, y });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (enableSound) sound.playHover();
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setCoords({ x: 0.5, y: 0.5 });
  };

  const tiltX = isHovered && !reducedMotion ? (coords.y - 0.5) * -maxTilt : 0;
  const tiltY = isHovered && !reducedMotion ? (coords.x - 0.5) * maxTilt : 0;

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`,
        transition: isHovered ? "transform 0.1s ease-out" : "transform 0.45s ease-out",
      }}
      className={cn(
        "group relative rounded-2xl border border-border/80 bg-bg-card/75 p-6 backdrop-blur-md transition-shadow duration-300 hover:border-lime-300/40 hover:shadow-[0_20px_45px_rgba(0,0,0,0.45),0_0_30px_rgba(182,243,106,0.12)]",
        className
      )}
      {...props}
    >
      {/* Dynamic Cursor Spotlight */}
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(450px circle at ${coords.x * 100}% ${coords.y * 100}%, ${glowColor}, transparent 65%)`,
        }}
        aria-hidden="true"
      />

      {/* Cyber Corner Accents */}
      <div className="pointer-events-none absolute left-2 top-2 h-2 w-2 border-l border-t border-lime-300/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="pointer-events-none absolute right-2 top-2 h-2 w-2 border-r border-t border-lime-300/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="pointer-events-none absolute bottom-2 left-2 h-2 w-2 border-b border-l border-lime-300/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="pointer-events-none absolute bottom-2 right-2 h-2 w-2 border-b border-r border-lime-300/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      {/* Card Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
