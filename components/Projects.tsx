import React from 'react';
import { motion } from 'framer-motion';
import { RESUME_DATA } from '../data';
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react';
import { TextReveal } from './ui/TextReveal';
import { ScrollReveal } from './ui/ScrollReveal';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-[linear-gradient(to_right,#8c827315_1px,transparent_1px),linear-gradient(to_bottom,#8c827315_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="flex gap-3 text-4xl md:text-5xl font-playfair text-brand-charcoal">
            <TextReveal text="Featured" delay={0.1} />
            <TextReveal text="Projects" wordClassName="italic text-brand-accent" delay={0.3} />
          </div>
          <a
            href={`https://github.com/${RESUME_DATA.github}`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-brand-charcoal/60 hover:text-brand-charcoal transition-colors border-b border-transparent hover:border-brand-charcoal pb-1"
          >
            View Github Profile <ExternalLink size={16} />
          </a>
        </div>

        <div className="flex flex-col gap-6 max-w-5xl mx-auto">
          {RESUME_DATA.projects.map((project, index) => (
            <ScrollReveal
              key={index}
              scaleStart={0.95}
              distance={60}
              className="group relative bg-white/60 backdrop-blur-sm rounded-[2rem] p-8 md:p-10 border border-brand-charcoal/10 hover:border-brand-charcoal/20 transition-all duration-500 shadow-sm"
            >
              <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-10">
                <div className="flex-grow">
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="font-sans text-2xl md:text-3xl font-bold text-brand-charcoal tracking-wide group-hover:text-brand-accent transition-colors">
                      {project.title}
                    </h4>

                    <div className="flex gap-3 md:hidden">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 bg-black/5 rounded-full text-brand-charcoal/60 hover:text-brand-charcoal hover:bg-black/10 transition-colors"
                      >
                        <Github size={18} />
                      </a>
                      <a
                        href={project.link2}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 bg-black/5 rounded-full text-brand-charcoal/60 hover:text-brand-charcoal hover:bg-black/10 transition-colors"
                      >
                        <ArrowUpRight size={18} />
                      </a>
                    </div>
                  </div>

                  <p className="text-brand-charcoal/70 text-base leading-relaxed mb-8 max-w-2xl">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="px-4 py-1.5 rounded-full bg-black/5 text-xs font-medium text-brand-charcoal/80 border border-black/5 hover:bg-black/10 transition-colors">
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
                    className="p-3 bg-black/5 rounded-xl text-brand-charcoal/60 hover:text-brand-charcoal hover:bg-black/10 transition-colors group-hover:scale-110 duration-300"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href={project.link2}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 bg-black/5 rounded-xl text-brand-charcoal/60 hover:text-brand-charcoal hover:bg-black/10 transition-colors group-hover:scale-110 duration-300"
                  >
                    <ArrowUpRight size={20} />
                  </a>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;