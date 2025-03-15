// src/hooks/useParallax.ts
import { useEffect, useRef, useState } from "react";

interface ParallaxOptions {
  speed?: number;
  direction?: "vertical" | "horizontal";
  reverse?: boolean;
  disabled?: boolean;
}

export const useParallax = <T extends HTMLElement>({
  speed = 0.1,
  direction = "vertical",
  reverse = false,
  disabled = false,
}: ParallaxOptions = {}) => {
  const elementRef = useRef<T>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (disabled) return;

    const handleScroll = () => {
      if (!elementRef.current) return;

      const scrollPosition = window.scrollY;
      const elemRect = elementRef.current.getBoundingClientRect();
      const elemTop = elemRect.top + scrollPosition;
      const viewportHeight = window.innerHeight;

      // Calculate relative position when element comes into view
      const relativePosition =
        (scrollPosition + viewportHeight - elemTop) /
        (viewportHeight + elemRect.height);
      const clampedPosition = Math.max(0, Math.min(1, relativePosition));

      // Apply parallax effect
      const movement = (clampedPosition - 0.5) * 2 * speed * 100;
      const factor = reverse ? -1 : 1;

      if (direction === "vertical") {
        setPosition({ x: 0, y: movement * factor });
      } else {
        setPosition({ x: movement * factor, y: 0 });
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initialize position

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [speed, direction, reverse, disabled]);

  return {
    ref: elementRef,
    style: { transform: `translate(${position.x}px, ${position.y}px)` },
  };
};

export default useParallax;
