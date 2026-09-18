import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-bg text-fg">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-8%] top-0 h-[28rem] w-[28rem] rounded-full bg-violet-500/10 blur-3xl" />
        <div className="absolute right-[-10%] top-[18%] h-[24rem] w-[24rem] rounded-full bg-sky-500/10 blur-3xl" />
        <div className="absolute bottom-8 left-1/3 h-[18rem] w-[18rem] rounded-full bg-fuchsia-500/10 blur-3xl" />
      </div>
      <Header />
      <main className="relative z-10 flex-1 pt-16" id="main-content">
        {children}
      </main>
      <Footer />
    </div>
  );
}