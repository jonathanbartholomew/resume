// src/hooks/useIntersectionObserver.ts
import { useEffect, useRef, useState, RefObject } from "react";

interface IntersectionObserverOptions {
  threshold?: number | number[];
  rootMargin?: string;
  root?: Element | null;
  once?: boolean;
}

function useIntersectionObserver<T extends HTMLElement>({
  threshold = 0.1,
  rootMargin = "0px",
  root = null,
  once = false,
}: IntersectionObserverOptions = {}): {
  ref: RefObject<T>;
  isVisible: boolean;
} {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<T>(null);
  const wasSeen = useRef(false); // For the "once" option

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Skip if element was already seen and "once" is true
    if (once && wasSeen.current) return;

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;
      const newIsVisible = entry.isIntersecting;

      setIsVisible(newIsVisible);

      if (once && newIsVisible) {
        wasSeen.current = true;
      }
    };

    const observerOptions: IntersectionObserverInit = {
      threshold,
      rootMargin,
      root,
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );
    observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [root, rootMargin, threshold, once]);

  return { ref: elementRef, isVisible };
}

export default useIntersectionObserver;
