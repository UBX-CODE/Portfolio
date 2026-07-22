import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { RESUME_DATA } from '../data';
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react';
import { ScrollReveal } from './ui/ScrollReveal';

const ProjectCard = ({ project, index }: { project: any; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const numberY = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
  const imgY = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  return (
    <div ref={ref} className="relative flex flex-col md:flex-row items-center md:items-start gap-12 md:gap-24">
      {/* Left Column: Vertical Title & Info */}
      <div className="w-full md:w-1/3 flex flex-col justify-start relative pt-12 md:pt-0">
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
            <div className="flex gap-2 flex-wrap">
              {project.technologies.map((tech: string, i: number) => (
                <span
                  key={i}
                  className="font-sans text-[10px] tracking-widest uppercase text-brand-charcoal/70 px-3 py-1 border border-brand-charcoal/5 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
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
        {/* Background Number Parallax */}
        <motion.div style={{ y: numberY }} className="absolute -top-24 md:-top-40 right-0 z-0 pointer-events-none select-none">
          <span className="font-sans text-[12rem] md:text-[22rem] font-black text-brand-charcoal/[0.04] leading-none tracking-tighter">
            {String(index + 1).padStart(2, '0')}
          </span>
        </motion.div>

        <ScrollReveal direction="right" distance={36} className="relative z-10 w-full aspect-[6/3] bg-brand-charcoal/0 p-4 md:p-0">
          <motion.div style={{ y: imgY }} className="w-full h-full overflow-hidden rounded-xl">
            {project.images && project.images.length > 0 ? (
              <img
                src={project.images[0]}
                alt={project.title}
                className="w-full h-full object-cover shadow-sm md:shadow-2xl grayscale-[30%] transition-all duration-1000 ease-out scale-100 group-hover:scale-105"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center font-playfair italic text-brand-charcoal/20 text-2xl border border-brand-charcoal/10">
                No Image Available
              </div>
            )}
          </motion.div>
        </ScrollReveal>
      </div>
    </div>
  );
};

import useMeasure from 'react-use-measure';

const Projects: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const [measureRef, bounds] = useMeasure();

  const setRefs = (el: HTMLElement | null) => {
    containerRef.current = el;
    measureRef(el);
  };

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const generatePath = (w: number, h: number) => {
    if (!w || !h) return "M 0 0";
    
    const cx = w * 0.5;
    // R controls the bulge width. 0.25w ensures it only reaches 75% right and 25% left, keeping it far from edges.
    const R = Math.min(w * 0.25, 200); 
    const v = h * 0.33; // 1/3 down for first loop
    const L = Math.min(v * 0.3, 300); // Vertical size of the teardrop loops
    
    // Helper to format points
    const pt = (x: number, y: number) => `${x.toFixed(1)} ${y.toFixed(1)}`;
    
    // Anchor Points
    const P0 = [cx, -100];
    const P1 = [cx, v];
    const P2 = [cx, v + L];
    const P3 = [cx, v * 2];
    const P4 = [cx, v * 2 + L];
    const P5 = [cx, h + 100];
    
    // Tangents (dx, dy) dictating the direction and curve intensity at each anchor
    const T0 = [0, 200]; 
    const T1 = [R * 1.5, R * 1.5];   // down-right into loop 1
    const T2 = [-R * 1.5, R * 1.5];  // down-left out of loop 1
    const T3 = [-R * 1.5, R * 1.5];  // down-left into loop 2
    const T4 = [R * 1.5, R * 1.5];   // down-right out of loop 2
    const T5 = [0, 200];
    
    let path = `M ${pt(P0[0], P0[1])} `;
    
    // Segment 1: Start to Loop 1
    path += `C ${pt(P0[0]+T0[0], P0[1]+T0[1])}, ${pt(P1[0]-T1[0], P1[1]-T1[1])}, ${pt(P1[0], P1[1])} `;
    // Loop 1 (Right side)
    path += `C ${pt(P1[0]+T1[0], P1[1]+T1[1])}, ${pt(P2[0]-T2[0], P2[1]-T2[1])}, ${pt(P2[0], P2[1])} `;
    // Segment 2: Loop 1 to Loop 2
    path += `C ${pt(P2[0]+T2[0], P2[1]+T2[1])}, ${pt(P3[0]-T3[0], P3[1]-T3[1])}, ${pt(P3[0], P3[1])} `;
    // Loop 2 (Left side)
    path += `C ${pt(P3[0]+T3[0], P3[1]+T3[1])}, ${pt(P4[0]-T4[0], P4[1]-T4[1])}, ${pt(P4[0], P4[1])} `;
    // Segment 3: Loop 2 to End
    path += `C ${pt(P4[0]+T4[0], P4[1]+T4[1])}, ${pt(P5[0]-T5[0], P5[1]-T5[1])}, ${pt(P5[0], P5[1])} `;
    
    return path;
  };

  const planePath = generatePath(bounds.width, bounds.height);
  const planeDistance = useTransform(scrollYProgress, [0.05, 0.95], ["0%", "100%"]);
  // We fade in the path slightly later and fade out before the end so it looks natural
  const pathDraw = useTransform(scrollYProgress, [0.05, 0.95], [0, 1]);

  return (
    <section ref={setRefs} id="projects" className="py-24 relative bg-brand-light overflow-hidden">
      
      {/* Full-height Paper Plane Animation Layer */}
      {bounds.height > 0 && (
        <div className="absolute inset-0 pointer-events-none z-0 hidden lg:block opacity-40 dark:opacity-60">
          <svg viewBox={`0 0 ${bounds.width} ${bounds.height}`} className="w-full h-full absolute inset-0">
            <motion.path 
              d={planePath}
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeDasharray="8 8"
              className="text-brand-charcoal/30"
              style={{ pathLength: pathDraw }}
            />
          </svg>
          <motion.div 
            className="absolute top-0 left-0 w-8 h-8 text-brand-charcoal drop-shadow-md"
            style={{
              offsetPath: `path('${planePath}')`,
              offsetDistance: planeDistance,
              offsetRotate: "auto",
            }}
          >
            {/* Paper Plane Icon facing right natively */}
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full rotate-90 scale-125">
              <path d="M2 12L22 2L15 22L11 13M22 2L11 13" stroke="currentColor" strokeWidth="1" strokeLinejoin="round"/>
            </svg>
          </motion.div>
        </div>
      )}

      <div className="container mx-auto px-6 relative z-10 max-w-[1200px]">
        
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
            <ProjectCard  key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;