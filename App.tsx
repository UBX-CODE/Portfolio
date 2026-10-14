import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Activity from './components/Activity';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Loader from './components/Loader';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Ensure dark theme is removed
    document.documentElement.classList.remove('dark');

    // Initialize Lenis for smooth scrolling
    // Disable on mobile for better performance and native feel
    const isMobile = window.innerWidth < 768;

    let lenis: Lenis | null = null;

    if (!isMobile) {
      lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
      });
    }

    function raf(time: number) {
      if (lenis) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
    }

    if (!isMobile) {
      requestAnimationFrame(raf);
    }

    return () => {
      if (lenis) lenis.destroy();
    };
  }, []);

  return (
    <div className="bg-brand-light min-h-screen text-brand-charcoal font-sans selection:bg-brand-accent selection:text-brand-light relative">
      <AnimatePresence mode="wait">
        {isLoading && <Loader onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      <Navbar />
      <main>
        <Hero />
        <About />
        <Activity />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
};

export default App;