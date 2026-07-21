import React from 'react';
import { motion } from 'framer-motion';
import { RESUME_DATA } from '../data';
import { ScrollReveal } from './ui/ScrollReveal';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 md:py-48 relative bg-brand-light text-brand-charcoal overflow-hidden">
      
      <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-[1600px] flex flex-col md:flex-row gap-12 md:gap-32">
        
        {/* Left Side: Title */}
        <div className="md:w-1/4 flex flex-col justify-start pt-2">
          <div className="flex items-center gap-3">
             <h2 className="text-xs font-sans font-bold tracking-widest text-brand-charcoal/60 uppercase">
               About Me
             </h2>
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="md:w-3/4 flex flex-col">
          <ScrollReveal 
            direction="up"
            distance={36}
            className="space-y-12"
          >
            <h3 className="text-2xl md:text-4xl lg:text-5xl font-sans font-medium leading-[1.3] text-brand-charcoal tracking-tight max-w-4xl">
              I am a digital artisan, blending logic with creativity to forge systems that are powerful, efficient, and visually compelling.
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <p className="font-sans text-brand-charcoal/70 leading-relaxed text-sm md:text-[15px] font-medium tracking-wide">
                {RESUME_DATA.about}
              </p>
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-1 border-l border-brand-charcoal/10 pl-6">
                  <span className="text-3xl font-sans font-medium text-brand-charcoal tracking-tighter">10+</span>
                  <span className="text-[11px] font-sans font-semibold tracking-widest text-brand-charcoal/50 uppercase">Projects Delivered</span>
                </div>
                <div className="flex flex-col gap-1 border-l border-brand-charcoal/10 pl-6">
                  <span className="text-3xl font-sans font-medium text-brand-charcoal tracking-tighter">03+</span>
                  <span className="text-[11px] font-sans font-semibold tracking-widest text-brand-charcoal/50 uppercase">Years Coding</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
};

export default About;