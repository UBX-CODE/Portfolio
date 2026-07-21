import React from 'react';
import { RESUME_DATA } from '../data';
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react';
import { ScrollReveal } from './ui/ScrollReveal';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 relative bg-brand-light overflow-hidden">
      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        
        {/* Title Area */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 md:mb-32 border-b border-brand-charcoal/10 pb-6 gap-4">
          <h2 className="text-sm tracking-[0.4em] uppercase font-sans font-bold text-brand-charcoal">
            Selected Works
          </h2>
          <a
            href={`https://github.com/${RESUME_DATA.github}`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-[10px] font-sans tracking-[0.2em] uppercase text-brand-charcoal/60 hover:text-brand-charcoal transition-colors group"
          >
            Github Profile <ExternalLink size={12} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>

        <div className="flex flex-col gap-32 md:gap-48">
          {RESUME_DATA.projects.map((project, index) => (
            <div key={index} className="relative flex flex-col md:flex-row items-center md:items-start gap-12 md:gap-24">
              
              {/* Left Column: Vertical Title & Info */}
              <div className="w-full md:w-1/3 flex flex-col justify-start relative pt-12 md:pt-0">
                {/* Vertical Project Name (Mobile: Horizontal) */}
                <div className="md:absolute md:-left-20 md:top-2 md:-rotate-90 md:-translate-x-full md:origin-top-right mb-8 md:mb-0">
                  <h3 className="font-sans text-5xl md:text-[5rem] font-black uppercase tracking-tighter text-brand-charcoal leading-none whitespace-nowrap">
                    {project.title}
                  </h3>
                </div>

                <ScrollReveal direction="left" distance={27} className="md:pl-20">
                  <p className="font-serif text-[15px] leading-relaxed text-brand-charcoal/80 mb-10 border-l border-brand-charcoal/30 pl-6 text-justify">
                    {project.description}
                  </p>
                  
                  <div className="mb-10">
                    <h4 className="text-[10px] font-sans tracking-[0.2em] uppercase text-brand-charcoal/40 mb-4 border-b border-brand-charcoal/10 pb-2 inline-block">Technologies</h4>
                    <ul className="flex flex-col gap-2">
                      {project.technologies.map((tech, i) => (
                        <li key={i} className="font-sans text-[11px] tracking-widest uppercase text-brand-charcoal/80 flex items-center gap-2">
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex gap-6">
                    <a href={project.link} target="_blank" rel="noreferrer" className="text-brand-charcoal hover:text-brand-red transition-colors">
                      <Github size={22} strokeWidth={1.5} />
                    </a>
                    {project.link2 && (
                      <a href={project.link2} target="_blank" rel="noreferrer" className="text-brand-charcoal hover:text-brand-red transition-colors">
                        <ArrowUpRight size={24} strokeWidth={1.5} />
                      </a>
                    )}
                  </div>
                </ScrollReveal>
              </div>

              {/* Right Column: Image and Number */}
              <div className="w-full md:w-3/4 relative mt-10 md:mt-0">
                {/* Background Number */}
                <div className="absolute -top-24 md:-top-40 right-0 z-0 pointer-events-none select-none">
                  <span className="font-sans text-[12rem] md:text-[22rem] font-black text-black/[0.04] leading-none tracking-tighter">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                <ScrollReveal direction="right" distance={36} className="relative z-10 w-full aspect-[5/3] group bg-black/0 p-4 md:p-7 rounded-[20px]">
                  {project.images && project.images.length > 0 ? (
                    <img
                      src={project.images[0]}
                      alt={project.title}
                      className="w-full h-full object-cover rounded-[20px] shadow-sm md:shadow-2xl object-top grayscale-[30%] group-hover:grayscale-0 transition-all duration-1000 ease-out scale-100 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center font-playfair italic text-brand-charcoal/20 text-2xl border border-brand-charcoal/10">
                      No Image Available
                    </div>
                  )}
                </ScrollReveal>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;