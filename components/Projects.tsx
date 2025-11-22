import React from 'react';
import { motion } from 'framer-motion';
import { RESUME_DATA } from '../data';
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-brand-dark relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-brand-red font-bold tracking-widest uppercase text-sm mb-3">Portfolio</h2>
            <h3 className="text-4xl md:text-5xl font-heading font-bold text-white">
              Featured <span className="italic font-serif text-brand-yellow">Projects</span>
            </h3>
          </div>
          <a
            href={`https://github.com/${RESUME_DATA.github}`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors border-b border-transparent hover:border-white pb-1"
          >
            View Github Profile <ExternalLink size={16} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {RESUME_DATA.projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-[#111] rounded-3xl overflow-hidden border border-white/5 hover:border-brand-orange/50 transition-all duration-500 will-change-transform"
            >
              {/* Hover Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-brand-red/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="p-8 flex flex-col h-full">
                <div className="flex justify-between items-start mb-6">
                  <span className="px-3 py-1 rounded-full bg-white/5 text-xs font-medium text-brand-yellow border border-white/10">
                    {project.type}
                  </span>
                  <div className="flex gap-3">
                    <a href={project.link} className="p-2 bg-white/5 rounded-full text-gray-400 hover:text-white hover:bg-brand-red transition-colors">
                      <Github size={18} />
                    </a>
                    <a href={project.link} className="p-2 bg-white/5 rounded-full text-gray-400 hover:text-white hover:bg-brand-orange transition-colors">
                      <ArrowUpRight size={18} />
                    </a>
                  </div>
                </div>

                <h4 className="text-2xl font-bold text-white mb-3 group-hover:text-brand-orange transition-colors">
                  {project.title}
                </h4>

                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="text-xs font-medium text-gray-500 bg-black px-2 py-1 rounded border border-white/5">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;