// src/App.tsx
import { useState, useEffect } from "react";
import Header from "@components/Header";
import Footer from "@components/Footer";
import Hero from "@components/sections/Hero";
import About from "@components/sections/About";
import Experience from "@components/sections/Experience";
import Skills from "@components/sections/Skills";
import Projects from "@components/sections/Projects";
import Contact from "@components/sections/Contact";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading assets
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-primary-dark flex items-center justify-center">
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 border-4 border-secondary border-t-transparent rounded-full animate-spin"></div>
          <h1 className="mt-6 text-2xl font-bold">
            <span className="text-gradient">Loading</span>
          </h1>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-primary-dark">
      <Header />

      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
