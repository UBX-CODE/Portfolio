import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, FileText } from 'lucide-react';

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 90]);
  const textY = useTransform(scrollY, [0, 1000], [0, 180]);

  return (
    <section id="home" className="relative min-h-[100svh] w-full flex flex-col items-center justify-start bg-brand-light text-brand-charcoal overflow-hidden pt-36 md:pt-18">

      {/* Background Image & Large Text Area */}
      <div className="relative w-full flex-grow mt-12 md:mt-16 flex items-end justify-center z-10 min-h-[40vh]">
        
        {/* Huge Subtle Text */}
        <motion.div 
          style={{ y: textY }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden pb-10"
        >
          <span className="text-[20vw] font-sans font-black text-brand-charcoal/[0.04] tracking-tighter leading-none translate-y-10">
            UJJAWAL
          </span>
        </motion.div>

        {/* Foreground Character Image */}
        <motion.div 
          style={{ y: y1 }}
          className="relative z-10 w-[90%] md:w-[425px] max-w-[600px] flex justify-center items-end bottom-0 pb-16"
        >
          <img 
            src="/me4.png" 
            alt="Ujjawal" 
            className="w-full aspect-[784/1172] object-cover object-top grayscale mix-blend-multiply dark:hidden"
            style={{ 
              maskImage: 'linear-gradient(to bottom, rgba(184, 177, 177, 1) 50%, rgba(0,0,0,0) 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)' 
            }}
          />
          <img 
            src="/img6.png" 
            alt="Ujjawal Dark" 
            className="w-full md:h-130 object-cover object-top grayscale hidden dark:block"
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
          </div>

          {/* ── Resume Button — centred in the bar ── */}
          <motion.a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="group flex items-center gap-2.5 border border-brand-charcoal/15 rounded-full px-5 py-2 hover:bg-brand-charcoal hover:border-brand-charcoal transition-all duration-300 normal-case tracking-normal"
          >
            <FileText
              size={12}
              className="text-brand-charcoal/60 group-hover:text-brand-light transition-colors"
            />
            <span className="text-[10px] font-sans font-bold tracking-[0.15em] uppercase text-brand-charcoal/70 group-hover:text-brand-light transition-colors">
              Resume
            </span>
            <ArrowUpRight
              size={10}
              className="text-brand-charcoal/40 group-hover:text-brand-light group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
            />
          </motion.a>


        </div>
      </div>

    </section>
  );
};

export default Hero;