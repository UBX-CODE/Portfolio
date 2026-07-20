import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 100]);
  const textY = useTransform(scrollY, [0, 1000], [0, 200]);

  return (
    <section id="home" className="relative min-h-[100svh] w-full flex flex-col items-center justify-start bg-brand-light text-brand-charcoal overflow-hidden pt-36 md:pt-18">
      


      {/* Main Headline */}
      {/* <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="text-center font-caveat font-bold text-[16vw] md:text-[8.5rem] leading-[0.9] tracking-tight max-w-[95%] md:max-w-5xl z-20 pt-8"
      >
        Portfolio <br className="hidden md:block" />
        <span className="text-brand-orange">Ujjawal Bhardwaj</span>
      </motion.h1> */}

      {/* Subheading / Description */}
      {/* <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-center font-sans text-[13px] md:text-[15px] font-medium leading-relaxed text-brand-charcoal/70 mt-8 md:mt-5 max-w-[90%] md:max-w-xl z-20"
      >
        Full-stack developer crafting agentic AI agents that think, act, and ship value on their own.
      </motion.p> */}

      {/* Action Buttons */}
      {/* <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="flex flex-col sm:flex-row items-center gap-4 mt-10 md:mt-12 z-20"
      >
        <a 
          href="#contact"
          className="flex items-center gap-3 bg-brand-charcoal text-brand-light px-6 py-3 rounded-full text-xs font-semibold tracking-wide hover:bg-brand-charcoal/90 transition-all shadow-lg"
        >
          Start Project
          <ArrowUpRight size={14} />
        </a>
        <a 
          href="#projects"
          className="flex items-center gap-3 border border-brand-charcoal/20 px-6 py-3 rounded-full text-xs font-semibold tracking-wide hover:border-brand-charcoal transition-all"
        >
          Explore Work
          <span className="w-1.5 h-1.5 rounded-full bg-brand-charcoal"></span>
        </a>
      </motion.div> */}

      {/* Background Image & Large Text Area */}
      <div className="relative w-full flex-grow mt-12 md:mt-16 flex items-end justify-center z-10 min-h-[40vh]">
        
        {/* Huge Subtle Text */}
        <motion.div 
          style={{ y: textY }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden pb-10"
        >
          <span className="text-[20vw] font-sans font-black text-black/[0.04] tracking-tighter leading-none translate-y-10">
            UJJAWAL
          </span>
        </motion.div>

        {/* Foreground Character Image */}
        <motion.div 
          style={{ y: y1 }}
          className="relative z-10 w-[90%] md:w-[500px] max-w-[600px] flex justify-center items-end bottom-0 pb-16"
        >
          <img 
            src="/me4.png" 
            alt="Ujjawal" 
            className="w-full h-auto object-cover object-top grayscale mix-blend-multiply"
            style={{ 
              maskImage: 'linear-gradient(to bottom, rgba(184, 177, 177, 1) 50%, rgba(0,0,0,0) 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)' 
            }}
          />
        </motion.div>
      </div>

      {/* Bottom Stats Bar */}
      <div className="absolute bottom-0 w-full px-6 md:px-12 pb-6 z-30">
        <div className="border-b border-brand-charcoal/10 w-full flex justify-between items-end pb-4 font-sans text-[9px] md:text-[11px] font-bold tracking-widest text-brand-charcoal/60 uppercase">
          <div className="flex items-center gap-3">
            <span className="text-brand-charcoal font-black text-sm">3+</span> 
            <span>Years Experience</span>
            <span className="w-1 h-1 rounded-full bg-brand-orange hidden md:block"></span>
          </div>
          <div className="flex items-center gap-3">
            <span className="w-1 h-1 rounded-full bg-brand-orange hidden md:block"></span>
            <span>Innovative Solutions</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="w-1 h-1 rounded-full bg-brand-orange hidden md:block"></span>
            <span>Global Reach</span>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;