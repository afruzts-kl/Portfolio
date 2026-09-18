import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// Console easter egg
if (import.meta.env.DEV) {
  console.log(
    `%c👋 Hey there, curious developer!
%cYou found the console. That means you're either debugging or just nosy — either way, I like your style.

%cWhat you're looking at:
%c• React 18 + TypeScript + Vite 5
%c• Tailwind CSS v4 (via @tailwindcss/vite)
%c• Framer Motion for animations
%c• Zero UI libraries — everything custom

%cProjects are real. Skills are honest. No fake metrics, no testimonials, no fluff.

%cWant to see the code? https://github.com/afruzts-kl

%cP.S. Try the Konami code ↑↑↓↓←→←→BA...`,
    'font-size: 14px; color: #22c55e; font-weight: bold;',
    'font-size: 12px; color: #94a3b8;',
    'font-size: 12px; color: #64748b;',
    'font-size: 12px; color: #22c55e;',
    'font-size: 12px; color: #94a3b8;',
    'font-size: 12px; color: #64748b;',
    'font-size: 12px; color: #f59e0b;'
  );
}

// Konami code easter egg
if (typeof window !== 'undefined') {
  const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA'];
  let konamiIndex = 0;

  window.addEventListener('keydown', (e) => {
    if (e.code === konamiCode[konamiIndex]) {
      konamiIndex++;
      if (konamiIndex === konamiCode.length) {
        konamiIndex = 0;
        triggerKonamiEasterEgg();
      }
    } else {
      konamiIndex = 0;
    }
  });

  function triggerKonamiEasterEgg() {
    const messages = [
      "🎮 Konami code activated! You're a true gamer.",
      "✨ Achievement unlocked: 'Curious Developer'",
      "🚀 Initiating hyperspace jump to GitHub...",
      "🎯 Easter egg found! There's no prize, but you have my respect.",
      "💾 Saving game... Just kidding, this is a website.",
      "🔧 Developer mode: ENGAGED",
    ];

    const message = messages[Math.floor(Math.random() * messages.length)];

    // Trigger matrix rain animation
    window.dispatchEvent(new CustomEvent("trigger-matrix-rain"));

    // Create a toast notification
    const toast = document.createElement('div');
    toast.textContent = message;
    toast.style.cssText = `
      position: fixed;
      bottom: 2rem;
      right: 2rem;
      padding: 1rem 1.5rem;
      background: var(--color-bg-card);
      border: 1px solid var(--color-border);
      border-left: 4px solid var(--color-accent);
      border-radius: 0.75rem;
      color: var(--color-fg);
      font-family: var(--font-ui);
      font-size: 0.875rem;
      box-shadow: var(--shadow-lg);
      z-index: 9999;
      animation: slideIn 0.3s ease-out;
      max-width: 320px;
    `;

    // Add animation keyframes if not already added
    if (!document.getElementById('konami-toast-style')) {
      const style = document.createElement('style');
      style.id = 'konami-toast-style';
      style.textContent = `
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(100%); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideOut {
          from { opacity: 1; transform: translateX(0); }
          to { opacity: 0; transform: translateX(100%); }
        }
      `;
      document.head.appendChild(style);
    }

    document.body.appendChild(toast);

    setTimeout(() => {
      toast.style.animation = 'slideOut 0.3s ease-in forwards';
      setTimeout(() => toast.remove(), 300);
    }, 5000);
  }
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)