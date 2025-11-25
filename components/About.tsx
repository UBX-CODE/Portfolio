import React from 'react';
import { motion } from 'framer-motion';
import { RESUME_DATA } from '../data';
import { GraduationCap, Award } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="ml-20 container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="will-change-transform "
          >
            <h2 className="text-brand-yellow font-bold tracking-widest uppercase text-sm mb-3">About Me</h2>
            <h3 className="text-2xl md:text-4xl font-heading font-bold text-white mb-8">
              Code, Create, <span className="text-brand-red">Innovate.</span>
            </h3>

            <p className="text-gray-400 text-sm leading-relaxed mb-8 border-l-2 border-brand-red pl-2">
              {RESUME_DATA.about}
            </p>

            <div className="space-y-5">
              <div className="bg-white/5 p-4 rounded-xl border border-white/10 hover:border-brand-orange/30 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-brand-orange/20 rounded-lg text-brand-orange">
                    <GraduationCap size={24} />
                  </div>
                  <div>
                    <h4 className="text-md font-bold text-white mb-1">Education</h4>
                    <p className="text-brand-yellow font-medium">{RESUME_DATA.education.degree}</p>
                    <p className="text-gray-400 text-sm">{RESUME_DATA.education.school} | {RESUME_DATA.education.years}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 p-4 rounded-xl border border-white/10 hover:border-brand-orange/30 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-brand-red/20 rounded-lg text-brand-red">
                    <Award size={24} />
                  </div>
                  <div>
                    <h4 className="text-md font-bold text-white mb-3">Certifications</h4>
                    <div className="flex flex-wrap gap-2">
                      {RESUME_DATA.certifications.slice(0, 6).map((cert, index) => (
                        <span key={index} className="text-xs bg-white/10 px-3 py-1 rounded-full text-gray-300">
                          {cert.issuer}: {cert.name}
                        </span>

                      ))}
                      <span className="text-xs bg-white/10 px-3 py-1 rounded-full text-gray-300">Google Cloud : Generative AI Learning Path </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;