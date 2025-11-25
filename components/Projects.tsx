import React from 'react';
import { motion } from 'framer-motion';
import { RESUME_DATA } from '../data';
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24  relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
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

        <div className="flex flex-col gap-6 max-w-5xl mx-auto">
          {RESUME_DATA.projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-[#0a0a0a] rounded-[2rem] p-8 md:p-10 border border-white/5 hover:border-white/10 transition-all duration-500"
            >
              <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-10">
                <div className="flex-grow">
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="font-oswald text-3xl md:text-4xl font-bold text-white uppercase tracking-wide group-hover:text-brand-yellow transition-colors">
                      {project.title}
                    </h4>

                    <div className="flex gap-3 md:hidden">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 bg-white/5 rounded-full text-gray-400 hover:text-white hover:bg-brand-dark transition-colors"
                      >
                        <Github size={18} />
                      </a>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 bg-white/5 rounded-full text-gray-400 hover:text-white hover:bg-brand-dark transition-colors"
                      >
                        <ArrowUpRight size={18} />
                      </a>
                    </div>
                  </div>

                  <p className="text-gray-400 text-base leading-relaxed mb-8 max-w-2xl">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="px-4 py-1.5 rounded-full bg-white/5 text-xs font-medium text-gray-400 border border-white/5 hover:bg-white/10 hover:text-white transition-colors">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="hidden md:flex gap-3 flex-shrink-0 items-start">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 bg-white/5 rounded-xl text-gray-400 hover:text-white hover:bg-brand-dark transition-colors group-hover:scale-110 duration-300"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 bg-white/5 rounded-xl text-gray-400 hover:text-white hover:bg-brand-dark transition-colors group-hover:scale-110 duration-300"
                  >
                    <ArrowUpRight size={20} />
                  </a>
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