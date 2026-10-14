import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ScrollReveal } from './ui/ScrollReveal';

const About: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"]);

  return (
    <section ref={containerRef} id="about" className="py-24 md:py-36 relative bg-brand-light text-brand-charcoal overflow-hidden">
      
      {/* Background Dot/Grid Pattern */}
      <div className="pointer-events-none absolute inset-0 z-0 [background-size:24px_24px] opacity-40 dark:opacity-20" />

      {/* Parallax Background Text */}
      <motion.div 
        style={{ y: bgY }}
        className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none opacity-5"
      >
        <span className="text-[25vw] font-sans font-black tracking-tighter whitespace-nowrap">
          UBX
        </span>
      </motion.div>

      {/* Main Container */}
      <motion.div style={{ y: contentY }} className="container mx-auto px-6 md:px-12 relative z-10 max-w-[2000px]">
        
        {/* Section Top Header Divider Line (Expands Infinitely) */}
        <div className="relative flex items-center mb-10">
          <div className="absolute -left-[100vw] -right-[100vw] top-1/2 h-px border-b border-dashed border-brand-charcoal/15 pointer-events-none -z-10" />
          
          {/* Intersections on the header line */}
          <span className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 text-brand-charcoal/30 font-mono text-xs select-none pointer-events-none">+</span>
          <span className="hidden md:inline-block absolute left-1/4 top-1/2 -translate-x-1/2 -translate-y-1/2 text-brand-charcoal/30 font-mono text-xs select-none pointer-events-none">+</span>
          <span className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 text-brand-charcoal/30 font-mono text-xs select-none pointer-events-none">+</span>

          <span className="text-[10px] font-sans font-bold tracking-widest uppercase text-brand-charcoal/50 bg-brand-light px-3 py-1">
            01 — About
          </span>
        </div>

        {/* Outer Framed Box with Infinite Grid Lines & Corner Markers */}
        <div className="relative bg-brand-charcoal/[0.015] backdrop-blur-[2px]">
          
          {/* ── Infinite Boundary Horizontal Lines ── */}
          {/* Top Line */}
          <div className="absolute -left-[100vw] -right-[100vw] top-0 h-px border-b border-dashed border-brand-charcoal/20 pointer-events-none z-10" />
          {/* Bottom Line */}
          <div className="absolute -left-[100vw] -right-[100vw] bottom-0 h-px border-b border-dashed border-brand-charcoal/20 pointer-events-none z-10" />

          {/* ── Infinite Vertical Lines ── */}
          {/* Left Vertical Line */}
          <div className="absolute -top-[1000px] -bottom-[1000px] left-0 w-px border-r border-dashed border-brand-charcoal/20 pointer-events-none z-10" />
          {/* Column Divider Line (Desktop: 25% for 3 cols) */}
          <div className="hidden md:block absolute -top-[1000px] -bottom-[1000px] left-1/4 w-px border-r border-dashed border-brand-charcoal/20 pointer-events-none z-10" />
          {/* Right Vertical Line */}
          <div className="absolute -top-[1000px] -bottom-[1000px] right-0 w-px border-r border-dashed border-brand-charcoal/20 pointer-events-none z-10" />

          {/* ── Plus Crosshair Markers (+) at Boundary Intersections ── */}
          {/* Top Row Intersections */}
          <span className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 text-brand-charcoal/40 font-mono text-xs select-none pointer-events-none z-20">+</span>
          <span className="hidden md:inline-block absolute top-0 left-1/4 -translate-x-1/2 -translate-y-1/2 text-brand-charcoal/40 font-mono text-xs select-none pointer-events-none z-20">+</span>
          <span className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 text-brand-charcoal/40 font-mono text-xs select-none pointer-events-none z-20">+</span>

          {/* Bottom Row Intersections */}
          <span className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 text-brand-charcoal/40 font-mono text-xs select-none pointer-events-none z-20">+</span>
          <span className="hidden md:inline-block absolute bottom-0 left-1/4 -translate-x-1/2 translate-y-1/2 text-brand-charcoal/40 font-mono text-xs select-none pointer-events-none z-20">+</span>
          <span className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 text-brand-charcoal/40 font-mono text-xs select-none pointer-events-none z-20">+</span>

          {/* Grid Layout Separating Content into Blocks */}
          <div className="grid grid-cols-1 md:grid-cols-12 relative z-0">
            
            {/* Left Block: Title & Subtitle */}
            <div className="md:col-span-3 p-6 md:p-10 border-b md:border-b-0 border-dashed border-brand-charcoal/15 flex flex-col justify-between gap-6">
              <div className="flex items-center gap-3">
                <h2 className="text-xs font-sans font-bold tracking-widest text-brand-charcoal/70 uppercase">
                  About Me
                </h2>
              </div>
              <div className="hidden md:block">
                <span className="text-[11px] font-sans font-semibold tracking-wider text-brand-charcoal/40 uppercase">
                  Fullstack AI Engineer
                </span>
              </div>
            </div>

            {/* Right Column: Content Blocks */}
            <div className="md:col-span-9 flex flex-col">
              
              {/* Top Block: Quote / Main Headline */}
              <div className="relative p-6 md:p-10 lg:p-12">
                {/* Infinite Middle Horizontal Line - dynamically positioned at bottom-0 */}
                <div className="absolute -left-[100vw] -right-[100vw] bottom-0 h-px border-b border-dashed border-brand-charcoal/20 pointer-events-none z-10" />
                
                {/* Crosshairs on the middle line */}
                <span className="hidden md:inline-block absolute -left-[33.333%] bottom-0 -translate-x-1/2 translate-y-1/2 text-brand-charcoal/40 font-mono text-xs select-none pointer-events-none z-20">+</span>
                <span className="hidden md:inline-block absolute left-0 bottom-0 -translate-x-1/2 translate-y-1/2 text-brand-charcoal/40 font-mono text-xs select-none pointer-events-none z-20">+</span>
                <span className="absolute right-0 bottom-0 translate-x-1/2 translate-y-1/2 text-brand-charcoal/40 font-mono text-xs select-none pointer-events-none z-20">+</span>

                <ScrollReveal direction="up" distance={24}>
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-sans font-medium leading-[1.3] text-brand-charcoal tracking-tight">
                    Ideas are easy. Building them well is the craft.
                  </h3>
                </ScrollReveal>
              </div>

              {/* Bottom Row: Story Bio + Stat Cards */}
              <div className="grid grid-cols-1 lg:grid-cols-12">
                
                {/* Left Cell: Bio Narrative */}
                <div className="lg:col-span-7 p-6 md:p-10 border-b lg:border-b-0 lg:border-r border-dashed border-brand-charcoal/15">
                  <ScrollReveal direction="up" distance={20} delay={0.1}>
                    <p className="font-sans text-brand-charcoal/70 leading-relaxed text-sm md:text-[15px] font-medium tracking-wide">
                      I'm a developer passionate about building scalable backend systems, designing reliable architectures, and exploring the potential of Agentic AI. My work revolves around engineering robust APIs, optimizing data flows, and understanding how systems perform under real-world demands.
                      <br /><br />
                      With a strong interest in system design, backend engineering, and AI-driven automation, I enjoy building applications that go beyond basic functionality—combining efficient architecture with intelligent workflows. I believe great software is built on the right engineering decisions, continuous experimentation, and the ability to turn complex problems into practical, scalable solutions.
                    </p>
                  </ScrollReveal>
                </div>

                {/* Right Cell: Stats in Clean Dashed Blocks */}
                <div className="lg:col-span-5 p-6 md:p-10 flex flex-col justify-center gap-4">
                  <ScrollReveal direction="up" distance={20} delay={0.2}>
                    <div className="flex flex-col gap-4">
                      {/* Stat 1 */}
                      <div className="border border-dashed border-brand-charcoal/20 p-5 bg-brand-charcoal/[0.02] hover:border-brand-charcoal/40 transition-colors">
                        <span className="text-3xl md:text-4xl font-sans font-medium text-brand-charcoal tracking-tighter block mb-1">
                          10+
                        </span>
                        <span className="text-[11px] font-sans font-semibold tracking-widest text-brand-charcoal/50 uppercase">
                          Projects Delivered
                        </span>
                      </div>

                      {/* Stat 2 */}
                      <div className="border border-dashed border-brand-charcoal/20 p-5 bg-brand-charcoal/[0.02] hover:border-brand-charcoal/40 transition-colors">
                        <span className="text-3xl md:text-4xl font-sans font-medium text-brand-charcoal tracking-tighter block mb-1">
                          03+
                        </span>
                        <span className="text-[11px] font-sans font-semibold tracking-widest text-brand-charcoal/50 uppercase">
                          Years Coding
                        </span>
                      </div>
                    </div>
                  </ScrollReveal>
                </div>

              </div>

            </div>

          </div>

        </div>

      </motion.div>
    </section>
  );
};

export default About;