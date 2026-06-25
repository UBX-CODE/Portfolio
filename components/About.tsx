import React from 'react';
import { motion } from 'framer-motion';
import { RESUME_DATA } from '../data';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-32 relative bg-brand-light text-brand-charcoal overflow-hidden">
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-[linear-gradient(to_right,#8c827315_1px,transparent_1px),linear-gradient(to_bottom,#8c827315_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      <div className="container mx-auto px-6 relative z-10 max-w-5xl">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-sm tracking-widest uppercase font-sans text-brand-accent mb-4"
          >
            About
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-playfair leading-tight"
          >
            Code. Create. <br className="md:hidden" />
            <span className="italic text-brand-accent">Innovate.</span>
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-20">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-6 flex flex-col justify-center"
          >
            <p className="font-sans text-brand-charcoal/80 leading-relaxed text-lg mb-8">
              {RESUME_DATA.about}
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:col-span-6 space-y-8"
          >
            <div className="pb-8 border-b border-brand-charcoal/10">
              <h4 className="text-xl font-playfair italic mb-4">Education</h4>
              <p className="font-sans font-medium text-brand-charcoal">{RESUME_DATA.education.degree}</p>
              <p className="font-sans text-sm text-brand-charcoal/60 mt-1">{RESUME_DATA.education.school} | {RESUME_DATA.education.years}</p>
            </div>

            <div>
              <h4 className="text-xl font-playfair italic mb-4">Certifications</h4>
              <div className="flex flex-wrap gap-2">
                {RESUME_DATA.certifications.slice(0, 6).map((cert, index) => (
                  <span key={index} className="text-xs font-sans px-3 py-1.5 rounded-full border border-brand-charcoal/20 text-brand-charcoal/80 bg-white/50">
                    {cert.name}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default About;