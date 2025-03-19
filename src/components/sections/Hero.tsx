// src/components/sections/Hero.tsx
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleParallax = () => {
      if (!parallaxRef.current || !textRef.current) return;

      const scrollPosition = window.scrollY;
      const parallaxElement = parallaxRef.current;
      const textElement = textRef.current;

      // Parallax effect for background elements
      const translateY = scrollPosition * 0.5;
      parallaxElement.style.transform = `translateY(${translateY}px)`;

      // Fade out text as user scrolls down
      const opacity = Math.max(1 - scrollPosition / 700, 0);
      textElement.style.opacity = opacity.toString();
    };

    window.addEventListener("scroll", handleParallax);

    return () => {
      window.removeEventListener("scroll", handleParallax);
    };
  }, []);

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background elements with parallax effect */}
      <div ref={parallaxRef} className="absolute inset-0 z-0">
        <div className="absolute top-1/4 -left-20 w-80 h-80 rounded-full bg-secondary/10 filter blur-3xl"></div>
        <div className="absolute bottom-1/3 -right-20 w-80 h-80 rounded-full bg-accent/10 filter blur-3xl"></div>
        <div className="absolute top-2/3 left-1/3 w-60 h-60 rounded-full bg-highlight/10 filter blur-3xl"></div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-grid-pattern bg-[length:50px_50px] opacity-20"></div>
      </div>

      {/* Content container */}
      <div
        ref={textRef}
        className="relative z-10 container mx-auto px-4 text-center"
      >
        <motion.h1
          className="text-4xl md:text-7xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="inline-block">Jonathan</span>{" "}
          <span className="inline-block text-gradient">Bartholomew</span>
        </motion.h1>

        <motion.h2
          className="text-2xl md:text-4xl font-semibold mb-6 text-text-secondary"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Full Stack Developer
        </motion.h2>

        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-secondary/20 text-secondary-light">
            React.js
          </span>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-highlight/20 text-highlight-light">
            TypeScript
          </span>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-accent/20 text-accent-light">
            PHP
          </span>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-secondary/20 text-secondary-light">
            AWS
          </span>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-highlight/20 text-highlight-light">
            SQL
          </span>
        </motion.div>

        <motion.p
          className="text-xl max-w-2xl mx-auto mb-10 text-text-secondary"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          Bringing ideas to life with clean code and modern technologies.
          Specialized in building responsive and scalable web applications.
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <a href="#projects" className="btn btn-primary">
            View My Work
          </a>
          <a href="#contact" className="btn btn-outline">
            Contact Me
          </a>
        </motion.div>
      </div>
      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <svg
            className="w-6 h-6 text-white/50"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
