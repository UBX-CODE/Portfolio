import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-[100svh] w-full flex flex-col items-center justify-center bg-brand-light text-brand-charcoal overflow-hidden">
      
      {/* Subtle radial gradient background */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(circle_at_50%_50%,#ffffff_0%,transparent_70%)] opacity-50" />

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-[linear-gradient(to_right,#8c827315_1px,transparent_1px),linear-gradient(to_bottom,#8c827315_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      {/* Content */}
      <div className="container mx-auto px-6 z-10 relative flex flex-col items-center text-center">
        
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-sm md:text-base tracking-widest uppercase font-sans mb-4 text-brand-accent"
        >
          Portfolio
        </motion.p>

        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-5xl md:text-7xl lg:text-8xl font-playfair leading-tight mb-6"
        >
          Ujjawal <br className="md:hidden" />
          <span className="italic text-brand-accent">Bhardwaj.</span>
        </motion.h1>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-sm md:text-lg font-sans text-brand-charcoal/70 max-w-lg leading-relaxed mb-10"
        >
          Full-stack developer crafting agentic AI agents that think, act, and ship value on their own.
        </motion.p>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <a
            href="/UJJAWAL_RESUME.pdf"
            download
            className="group relative px-6 py-3 bg-brand-charcoal rounded-full overflow-hidden flex items-center justify-center gap-3 text-brand-light font-sans text-sm tracking-wide hover:bg-brand-charcoal/90 transition-colors shadow-lg shadow-black/10"
          >
            <span>Resume</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>

    </section>
  );
};

export default Hero;