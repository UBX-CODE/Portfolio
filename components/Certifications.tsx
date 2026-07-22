import React from 'react';
import { motion } from 'framer-motion';
import { RESUME_DATA } from '../data';
import { ScrollReveal } from './ui/ScrollReveal';
import { Award } from 'lucide-react';

const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-24 relative bg-brand-light overflow-hidden">
      <div className="container mx-auto px-6 relative z-10 max-w-[1200px]">
        {/* Title Area */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 border-b border-brand-charcoal/10 pb-6 gap-4">
          <h2 className="text-sm tracking-[0.4em] uppercase font-sans font-bold text-brand-charcoal">
            Certifications
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {RESUME_DATA.certifications.map((cert, index) => (
            <ScrollReveal key={index} direction="up" distance={30} delay={index * 0.1}>
              <motion.div
                initial="rest"
                whileHover="hover"
                variants={{
                  rest: {
                    boxShadow: '0 8px 30px rgb(0 0 0 / 0.06)',
                    borderColor: 'rgb(26 26 26 / 0.05)',
                    y: 0,
                  },
                  hover: {
                    boxShadow: '0 20px 50px rgb(0 0 0 / 0.1)',
                    borderColor: 'rgb(140 130 115 / 0.2)',
                    y: -5,
                  },
                }}
                className="relative z-10 border bg-brand-light p-8 rounded-[2rem] transition-all duration-500 ease-out h-full flex flex-col justify-between group"
              >
                <div>
                  <div className="text-brand-charcoal/30 mb-6 group-hover:text-brand-charcoal/80 transition-colors duration-500">
                    <Award size={32} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-sans text-xl font-bold text-brand-charcoal mb-4">
                    {cert.name}
                  </h3>
                </div>
                <div className="mt-8 flex items-center justify-between border-t border-brand-charcoal/10 pt-4">
                  <span className="font-sans text-xs tracking-[0.1em] uppercase text-brand-charcoal/50">
                    Issuer
                  </span>
                  <span className="font-sans text-sm font-bold tracking-wide text-brand-charcoal/80">
                    {cert.issuer}
                  </span>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
