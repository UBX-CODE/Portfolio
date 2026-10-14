import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface LoaderProps {
  onComplete?: () => void;
}

const Loader: React.FC<LoaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      // Dynamic non-linear acceleration mimicking real asset initialization
      const step = current < 25 ? 3.5 : current < 65 ? 2.2 : current < 90 ? 3.8 : 4.2;
      current = Math.min(100, current + step);
      setProgress(current);

      if (current >= 100) {
        clearInterval(interval);
        // Brief visual pause at 100% before curtain slide
        setTimeout(() => {
          setIsExiting(true);
        }, 320);
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ y: '0%' }}
      animate={{ y: isExiting ? '-100%' : '0%' }}
      transition={{
        duration: 0.85,
        ease: [0.76, 0, 0.24, 1], // NeoLeaf / Awwwards standard curtain curve
      }}
      onAnimationComplete={() => {
        if (isExiting && onComplete) {
          onComplete();
        }
      }}
      className="fixed inset-0 z-[9999] flex flex-col justify-between bg-[#0e0e0e] text-white p-6 md:p-12 overflow-hidden select-none pointer-events-auto"
    >
      {/* ── Infinite Dashed Grid Lines & Boundary Crosshairs (+) ── */}
      <div className="absolute -left-[100vw] -right-[100vw] top-12 h-px border-b border-dashed border-white/10 pointer-events-none" />
      <div className="absolute -left-[100vw] -right-[100vw] bottom-12 h-px border-b border-dashed border-white/10 pointer-events-none" />
      <div className="absolute -top-[1000px] -bottom-[1000px] left-12 w-px border-r border-dashed border-white/10 pointer-events-none hidden md:block" />
      <div className="absolute -top-[1000px] -bottom-[1000px] right-12 w-px border-r border-dashed border-white/10 pointer-events-none hidden md:block" />

      {/* Crosshairs at grid intersections */}
      <span className="absolute top-12 left-12 -translate-x-1/2 -translate-y-1/2 text-white/30 font-mono text-xs select-none pointer-events-none hidden md:block">+</span>
      <span className="absolute top-12 right-12 translate-x-1/2 -translate-y-1/2 text-white/30 font-mono text-xs select-none pointer-events-none hidden md:block">+</span>
      <span className="absolute bottom-12 left-12 -translate-x-1/2 translate-y-1/2 text-white/30 font-mono text-xs select-none pointer-events-none hidden md:block">+</span>
      <span className="absolute bottom-12 right-12 translate-x-1/2 translate-y-1/2 text-white/30 font-mono text-xs select-none pointer-events-none hidden md:block">+</span>

      {/* ── Top Bar Metadata ── */}
      <div className="relative z-10 flex items-center justify-between text-[10px] md:text-[11px] font-mono uppercase tracking-widest text-white/40 pt-1">
        <div className="flex items-center gap-3">
          <span>UBX</span>
        </div>
      </div>

      {/* ── Center Stage: NeoLeaf Typography with Dual-Layer Liquid Text Fill ── */}
      <div className="relative z-10 my-auto flex flex-col items-center justify-center w-full max-w-[1200px] mx-auto px-4">
        <div className="relative inline-block w-full text-center">
          
          {/* Base Layer: Dark Muted Graphite */}
          <h1 className="text-[17vw] sm:text-[15vw] md:text-[13vw] lg:text-[145px] font-sans font-black tracking-tighter leading-none text-[#242424] select-none uppercase">
            Ujjawal
          </h1>

          {/* Fill Layer: Bright Crisp White (Unmasked from left to right as progress increases) */}
          <h1
            aria-hidden="true"
            style={{
              clipPath: `inset(0 ${100 - progress}% 0 0)`,
            }}
            className="text-[17vw] sm:text-[15vw] md:text-[13vw] lg:text-[145px] font-sans font-black tracking-tighter leading-none text-[#FFFFFF] select-none uppercase absolute inset-0 pointer-events-none transition-[clip-path] duration-75 ease-out"
          >
            Ujjawal
          </h1>

          {/* Bottom Right Status Counter (Exact NeoLeaf layout: 'loading... X %') */}
          <div className="absolute right-0 top-full mt-16 md:mt-1 flex items-center font-mono text-xs md:text-sm tracking-wider select-none text-white/90">
            <span className="text-white/40 mr-2 lowercase">loading...</span>
            <span className="inline-block w-8 text-right font-bold text-white font-mono">
              {Math.round(progress)}
            </span>
            <span className="text-white/60 ml-1">%</span>
          </div>

          {/* Sleek 1px Technical Progress Bar */}
          <div className="absolute -bottom-7 md:-bottom-8 left-0 right-0 h-px bg-white/[0.08] overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-white/40 via-white to-white transition-all duration-75 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Loader;
