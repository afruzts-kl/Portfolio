import { useState, useEffect, type ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { CyberCanvas, CustomCursor, ScrollProgress, ScrollToTop, MatrixRain } from "../effects";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [showMatrix, setShowMatrix] = useState(false);

  useEffect(() => {
    const handleMatrixTrigger = () => setShowMatrix(true);
    window.addEventListener("trigger-matrix-rain", handleMatrixTrigger);
    return () => window.removeEventListener("trigger-matrix-rain", handleMatrixTrigger);
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-bg text-fg selection:bg-lime-400 selection:text-black">
      <div className="noise-overlay pointer-events-none fixed inset-0 z-[1]" aria-hidden="true" />
      <ScrollProgress />
      <CustomCursor />
      <CyberCanvas />
      
      {showMatrix && <MatrixRain onClose={() => setShowMatrix(false)} />}

      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="animate-pulse-glow absolute left-[-8%] top-0 h-[32rem] w-[32rem] rounded-full bg-lime-400/10 blur-[120px]" />
        <div className="animate-float absolute right-[-10%] top-[20%] h-[30rem] w-[30rem] rounded-full bg-cyan-500/10 blur-[130px]" />
        <div className="animate-pulse-glow absolute bottom-12 left-1/4 h-[24rem] w-[24rem] rounded-full bg-emerald-500/10 blur-[110px]" />
        <div className="absolute left-1/2 top-[38%] h-px w-[60vw] -translate-x-1/2 bg-gradient-to-r from-transparent via-lime-300/10 to-transparent" />
      </div>

      <Header />
      <main className="relative z-10 flex-1 pt-16" id="main-content">
        {children}
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}