import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { sound } from "../../utils/sound";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(progress);
      }
      setIsVisible(window.scrollY > 280);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    sound.playClick();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const radius = 18;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.7, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.7, y: 20 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          onClick={scrollToTop}
          onMouseEnter={() => sound.playHover()}
          className="fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-xl border border-lime-300/30 bg-[#0c100d]/90 text-lime-200 shadow-[0_10px_30px_rgba(0,0,0,0.5),0_0_20px_rgba(182,243,106,0.15)] backdrop-blur-md transition-all duration-300 hover:border-lime-300 hover:shadow-[0_0_25px_rgba(182,243,106,0.35)] active:scale-95"
          aria-label="Scroll back to top"
        >
          {/* Progress Ring */}
          <svg className="absolute inset-0 -rotate-90" width="48" height="48">
            <circle
              cx="24"
              cy="24"
              r={radius}
              stroke="rgba(255, 255, 255, 0.08)"
              strokeWidth="2.5"
              fill="transparent"
            />
            <circle
              cx="24"
              cy="24"
              r={radius}
              stroke="#b6f36a"
              strokeWidth="2.5"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              fill="transparent"
              style={{ transition: "stroke-dashoffset 0.1s ease-out" }}
            />
          </svg>
          <ArrowUp className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
