import React from 'react';
import { motion } from 'framer-motion';
import { RESUME_DATA } from '../data';
import { GraduationCap, Award } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-brand-yellow font-bold tracking-widest uppercase text-sm mb-3">About Me</h2>
            <h3 className="text-4xl md:text-5xl font-heading font-bold text-white mb-8">
              Code, Create, <span className="text-brand-red">Innovate.</span>
            </h3>

            <p className="text-gray-400 text-lg leading-relaxed mb-8 border-l-4 border-brand-red pl-6">
              {RESUME_DATA.about}
            </p>

            <div className="space-y-6">
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-brand-orange/30 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-brand-orange/20 rounded-lg text-brand-orange">
                    <GraduationCap size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-1">Education</h4>
                    <p className="text-brand-yellow font-medium">{RESUME_DATA.education.degree}</p>
                    <p className="text-gray-400 text-sm">{RESUME_DATA.education.school} | {RESUME_DATA.education.years}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-brand-orange/30 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-brand-red/20 rounded-lg text-brand-red">
                    <Award size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-3">Certifications</h4>
                    <div className="flex flex-wrap gap-2">
                      {RESUME_DATA.certifications.slice(0, 6).map((cert, index) => (
                        <span key={index} className="text-xs bg-white/10 px-3 py-1 rounded-full text-gray-300">
                          {cert.issuer}: {cert.name}
                        </span>
                        
                      ))}
                      <spam className="text-xs bg-white/10 px-3 py-1 rounded-full text-gray-300">Google Cloud : Generative AI Learning Path </spam>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Abstract Visual */}
          {/* <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-full min-h-[400px] flex items-center justify-center"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-brand-red/20 to-brand-orange/20 rounded-3xl blur-3xl" />
            <img 
              src="/3.jpg" 
              alt="Abstract Workspace" 
              className="relative z-10 rounded-3xl shadow-2xl object-cover w-full h-[500px]"
            /> */}

          {/* Floating Stats Card */}
          {/* <div className="absolute -bottom-6 -left-6 bg-brand-dark p-6 rounded-xl border border-white/10 shadow-xl z-20">
              <p className="text-4xl font-bold text-white">5+</p>
              <p className="text-gray-400 text-sm uppercase tracking-wide mt-1">Projects Completed</p>
            </div>
          </motion.div> */}

        </div>
      </div>
    </section>
  );
};

export default About;