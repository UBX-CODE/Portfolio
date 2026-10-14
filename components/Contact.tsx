import React from 'react';
import { SOCIAL_LINKS, PERSONAL_INFO } from '../constants';
import { ArrowUpRight, MapPin } from 'lucide-react';
import { ScrollReveal } from './ui/ScrollReveal';

const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="relative bg-brand-light py-24 md:py-32 overflow-hidden text-brand-charcoal"
    >
      <div className="container relative z-10 mx-auto px-6 md:px-12 max-w-[2000px]">

        {/* ── Top Header Line (Expands Infinitely) ── */}
        <div className="relative flex items-center justify-between mb-10">
          <div className="absolute -left-[100vw] -right-[100vw] top-1/2 h-px border-b border-dashed border-brand-charcoal/15 pointer-events-none -z-10" />
          
          {/* Intersections on the header line */}
          <span className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 text-brand-charcoal/30 font-mono text-xs select-none pointer-events-none">+</span>
          <span className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 text-brand-charcoal/30 font-mono text-xs select-none pointer-events-none">+</span>

          <span className="text-[10px] font-sans font-bold tracking-widest uppercase text-brand-charcoal/50 bg-brand-light px-3 py-1">
            03 — Contact
          </span>

          <div className="flex items-center gap-2 text-[10px] font-sans font-bold tracking-widest uppercase text-brand-charcoal/50 bg-brand-light px-3 py-1">
            <MapPin size={11} />
            {PERSONAL_INFO.location}
          </div>
        </div>

        {/* ── Outer Framed Box with Infinite Grid Lines & Corner Markers ── */}
        <div className="relative bg-brand-charcoal/[0.015] backdrop-blur-[2px]">
          
          {/* Infinite Boundary Horizontal Lines */}
          <div className="absolute -left-[100vw] -right-[100vw] top-0 h-px border-b border-dashed border-brand-charcoal/20 pointer-events-none z-10" />
          <div className="absolute -left-[100vw] -right-[100vw] bottom-0 h-px border-b border-dashed border-brand-charcoal/20 pointer-events-none z-10" />

          {/* Infinite Vertical Lines */}
          <div className="absolute -top-[1000px] -bottom-[1000px] left-0 w-px border-r border-dashed border-brand-charcoal/20 pointer-events-none z-10" />
          <div className="absolute -top-[1000px] -bottom-[1000px] right-0 w-px border-r border-dashed border-brand-charcoal/20 pointer-events-none z-10" />

          {/* Plus Crosshairs (+) at Corner Intersections */}
          <span className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 text-brand-charcoal/40 font-mono text-xs select-none pointer-events-none z-20">+</span>
          <span className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 text-brand-charcoal/40 font-mono text-xs select-none pointer-events-none z-20">+</span>
          <span className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 text-brand-charcoal/40 font-mono text-xs select-none pointer-events-none z-20">+</span>
          <span className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 text-brand-charcoal/40 font-mono text-xs select-none pointer-events-none z-20">+</span>

          {/* ── Top Row: Minimal Headline & Status ── */}
          <div className="relative p-8 md:p-14 lg:p-16">
            {/* Infinite Middle Horizontal Line */}
            <div className="absolute -left-[100vw] -right-[100vw] bottom-0 h-px border-b border-dashed border-brand-charcoal/20 pointer-events-none z-10" />
            
            {/* Crosshairs on the middle line */}
            <span className="absolute left-0 bottom-0 -translate-x-1/2 translate-y-1/2 text-brand-charcoal/40 font-mono text-xs select-none pointer-events-none z-20">+</span>
            <span className="absolute right-0 bottom-0 translate-x-1/2 translate-y-1/2 text-brand-charcoal/40 font-mono text-xs select-none pointer-events-none z-20">+</span>

            <ScrollReveal direction="up" distance={20}>
              <div className="flex flex-col gap-6 max-w-3xl">


                {/* Minimal Heading with Refined Font Style */}
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-sans font-light tracking-tight text-brand-charcoal leading-[1.15]">
                  Let's work together.
                </h2>

                <p className="font-sans text-brand-charcoal/70 text-sm md:text-base leading-relaxed max-w-xl font-normal">
                  Whether you have an engineering challenge, an ambitious project, or just want to discuss ideas — my inbox is always open.
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* ── Bottom Row: Actions & Social Links ── */}
          <div className="grid grid-cols-1 md:grid-cols-12 relative">
            {/* Vertical Divider Line between columns */}
            <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-px border-r border-dashed border-brand-charcoal/20 pointer-events-none z-10" />
            <span className="hidden md:inline-block absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 text-brand-charcoal/40 font-mono text-xs select-none pointer-events-none z-20">+</span>
            <span className="hidden md:inline-block absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 text-brand-charcoal/40 font-mono text-xs select-none pointer-events-none z-20">+</span>

            {/* Left Column: Direct CTA */}
            <div className="md:col-span-6 p-8 md:p-12 flex flex-col sm:flex-row items-start sm:items-center gap-5 border-b md:border-b-0 border-dashed border-brand-charcoal/15">
              <a
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=ujjawalbhardwajj@gmail.com`}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 bg-brand-charcoal text-brand-light px-6 py-3.5 text-[11px] font-sans font-bold tracking-widest uppercase hover:bg-brand-charcoal/80 transition-all duration-300 shadow-sm"
              >
                <span>Say Hello</span>
                <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a
                href={`mailto:ujjawal.bhardwajj@gmail.com`}
                className="font-sans text-xs md:text-sm font-medium text-brand-charcoal/60 hover:text-brand-charcoal transition-colors tracking-wide underline underline-offset-4 decoration-brand-charcoal/20 hover:decoration-brand-charcoal"
              >
                ujjawal.bhardwajj@gmail.com
              </a>
            </div>

            {/* Right Column: Social Links */}
            <div className="md:col-span-6 p-8 md:p-12 flex items-center md:justify-end gap-3 flex-wrap">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2.5 border border-dashed border-brand-charcoal/20 px-5 py-3 hover:border-brand-charcoal/50 hover:bg-brand-charcoal/[0.04] transition-all duration-200"
                >
                  <link.icon className="w-4 h-4 text-brand-charcoal/60 group-hover:text-brand-charcoal transition-colors" />
                  <span className="font-sans text-[11px] font-bold tracking-widest uppercase text-brand-charcoal/70 group-hover:text-brand-charcoal transition-colors">
                    {link.name}
                  </span>
                  <ArrowUpRight
                    size={12}
                    className="text-brand-charcoal/30 group-hover:text-brand-charcoal group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                  />
                </a>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;