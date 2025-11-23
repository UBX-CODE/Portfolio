import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Loader from './components/Loader';

import Chatbot from './components/Chatbot';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
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

    // Simulate loading for smooth entrance
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => {
      clearTimeout(timer);
      if (lenis) lenis.destroy();
    };
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="bg-brand-dark min-h-screen text-white font-sans selection:bg-brand-red selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
};

export default App;