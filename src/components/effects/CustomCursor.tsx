import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useReducedMotion } from "../../hooks";

export function CustomCursor() {
  const reducedMotion = useReducedMotion();
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  useEffect(() => {
    if (reducedMotion) return;

    // Check if device has a fine pointer (mouse)
    const hasMouse = window.matchMedia("(pointer: fine)").matches;
    if (!hasMouse) return;

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const isInteractive = target.closest("a, button, [role='button'], input, textarea, .cursor-pointer");
      setIsHovered(!!isInteractive);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [reducedMotion, isVisible, cursorX, cursorY]);

  if (reducedMotion || !isVisible) return null;

  return (
    <>
      {/* Outer reactive ring */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999] rounded-full border border-lime-300/40 mix-blend-screen"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: isClicking ? 24 : isHovered ? 48 : 32,
          height: isClicking ? 24 : isHovered ? 48 : 32,
          borderColor: isHovered ? "rgba(182, 243, 106, 0.85)" : "rgba(182, 243, 106, 0.35)",
          backgroundColor: isHovered ? "rgba(182, 243, 106, 0.08)" : "transparent",
        }}
        transition={{ duration: 0.15, ease: "easeOut" }}
        aria-hidden="true"
      />

      {/* Inner sharp dot */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[10000] rounded-full bg-lime-300 shadow-[0_0_8px_rgba(182,243,106,0.9)]"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: isClicking ? 8 : isHovered ? 6 : 4,
          height: isClicking ? 8 : isHovered ? 6 : 4,
          opacity: 0.9,
        }}
        transition={{ duration: 0.08 }}
        aria-hidden="true"
      />
    </>
  );
}
