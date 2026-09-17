import { useEffect, useRef, useState, useCallback } from "react";
import { useReducedMotion } from "./useReducedMotion";

interface TypewriterConfig {
  strings: string[];
  typeSpeed?: number;
  deleteSpeed?: number;
  pauseDuration?: number;
  loop?: boolean;
}

export function useTypewriter(config: TypewriterConfig) {
  const {
    strings,
    typeSpeed = 50,
    deleteSpeed = 30,
    pauseDuration = 2000,
    loop = true,
  } = config;

  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const reducedMotion = useReducedMotion();
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isMountedRef = useRef(true);

  const type = useCallback<() => void>(() => {
    if (!isMountedRef.current) return;

    const currentString = strings[currentIndex];

    if (isDeleting) {
      const nextText = currentString.slice(0, currentText.length - 1);
      setCurrentText(nextText);

      if (nextText.length === 0) {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % strings.length);
        timeoutRef.current = setTimeout(type, pauseDuration);
      } else {
        timeoutRef.current = setTimeout(type, deleteSpeed);
      }
    } else {
      const nextText = currentString.slice(0, currentText.length + 1);
      setCurrentText(nextText);

      if (nextText === currentString) {
        if (loop || currentIndex < strings.length - 1) {
          setIsDeleting(true);
          timeoutRef.current = setTimeout(type, pauseDuration);
        }
      } else {
        timeoutRef.current = setTimeout(type, typeSpeed);
      }
    }
  }, [currentText, currentIndex, isDeleting, strings, typeSpeed, deleteSpeed, pauseDuration, loop]);

  useEffect(() => {
    isMountedRef.current = true;
    if (reducedMotion) {
      setCurrentText(strings[0]);
      return () => {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
      };
    }

    type();

    return () => {
      isMountedRef.current = false;
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [type, reducedMotion, strings]);

  return currentText;
}