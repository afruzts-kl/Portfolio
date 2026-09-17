import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "./useReducedMotion";

interface UseScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export function useScrollReveal<T extends HTMLElement>(
  options: UseScrollRevealOptions = {}
) {
  const { threshold = 0.1, rootMargin = "0px 0px -50px 0px", triggerOnce = true } = options;
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<T>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) {
      setIsVisible(true);
      return;
    }

    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold, rootMargin, triggerOnce, reducedMotion]);

  return { ref: elementRef, isVisible };
}

export function useStaggeredReveal<T extends HTMLElement>(
  count: number,
  options: UseScrollRevealOptions = {}
) {
  const [visibleIndices, setVisibleIndices] = useState<Set<number>>(new Set());
  const elementRef = useRef<T>(null);
  const reducedMotion = useReducedMotion();
  const { threshold = 0.1, rootMargin = "0px 0px -50px 0px", triggerOnce = true } = options;

  useEffect(() => {
    if (reducedMotion) {
      setVisibleIndices(new Set(Array.from({ length: count }, (_, i) => i)));
      return;
    }

    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          for (let i = 0; i < count; i++) {
            setTimeout(() => {
              setVisibleIndices((prev) => new Set([...prev, i]));
            }, i * 100);
          }
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setVisibleIndices(new Set());
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [count, threshold, rootMargin, triggerOnce, reducedMotion]);

  return { ref: elementRef, visibleIndices };
}