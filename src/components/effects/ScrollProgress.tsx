import { motion, useScroll, useSpring } from "framer-motion";
import { useReducedMotion } from "../../hooks";

export function ScrollProgress() {
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 24,
    restDelta: 0.001,
  });

  if (reducedMotion) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-[2px] bg-transparent pointer-events-none">
      <motion.div
        className="h-full origin-left bg-gradient-to-r from-lime-400 via-cyan-400 to-emerald-300 shadow-[0_0_12px_rgba(182,243,106,0.8)]"
        style={{ scaleX }}
      />
    </div>
  );
}
