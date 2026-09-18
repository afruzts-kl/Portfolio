import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import { sound } from "../../utils/sound";

interface MatrixRainProps {
  onClose: () => void;
}

export function MatrixRain({ onClose }: MatrixRainProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    sound.playSuccess();
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const characters = "0123456789ABCDEF<>{}/*[]+=~λπ$#_!?:;AFRUZ";
    const fontSize = 14;
    const columns = Math.floor(width / fontSize);
    const drops: number[] = Array.from({ length: columns }, () => Math.floor(Math.random() * -50));

    let animationId: number;

    const render = () => {
      ctx.fillStyle = "rgba(9, 11, 10, 0.08)";
      ctx.fillRect(0, 0, width, height);

      ctx.fillStyle = "#b6f36a";
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = characters[Math.floor(Math.random() * characters.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        // Head of column is bright white/lime
        ctx.fillStyle = Math.random() > 0.85 ? "#ffffff" : "#b6f36a";
        ctx.fillText(text, x, y);

        if (y > height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }

      animationId = requestAnimationFrame(render);
    };

    render();

    const timer = setTimeout(() => {
      onClose();
    }, 8000);

    return () => {
      cancelAnimationFrame(animationId);
      clearTimeout(timer);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-black/85 backdrop-blur-sm animate-in">
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full pointer-events-none" />
      <div className="relative z-10 flex flex-col items-center text-center p-6 bg-[#0c100d]/90 border border-lime-300/40 rounded-2xl shadow-[0_0_50px_rgba(182,243,106,0.25)] max-w-md mx-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lime-300/10 border border-lime-300/30 text-lime-200 font-mono text-xs mb-3">
          <span className="h-2 w-2 rounded-full bg-accent animate-ping" />
          EASTER EGG DETECTED
        </div>
        <h3 className="font-display text-2xl text-fg font-bold">System Override Active</h3>
        <p className="font-ui text-fg-muted text-sm mt-2">
          You triggered the developer matrix matrix mode. Curiosity rewarded!
        </p>
        <button
          onClick={() => {
            sound.playClick();
            onClose();
          }}
          className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-accent text-bg font-mono text-sm font-semibold hover:bg-accent-dim transition-colors"
        >
          <X className="h-4 w-4" />
          Exit Simulation
        </button>
      </div>
    </div>
  );
}
