import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { RESUME_DATA } from '../data';
import { SkillCategory } from '../types';
import { LogoCloud } from '@/components/ui/logo-cloud-3';
import { TextReveal } from './ui/TextReveal';

const SkillCard: React.FC<{ 
  skillGroup: SkillCategory, 
  index: number, 
  colSpan: string, 
  borderRadius: string 
}> = ({ 
  skillGroup, 
  index, 
  colSpan, 
  borderRadius 
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 95%", "center center"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [60, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ y, opacity }}
      className={`
        ${colSpan} ${borderRadius}
        bg-white/40 backdrop-blur-xl p-8 md:p-10
        border border-brand-charcoal/5 shadow-[0_8px_30px_rgb(0,0,0,0.04)]
        hover:bg-white hover:border-brand-accent/30 hover:shadow-2xl hover:-translate-y-2
        transition-all duration-500 ease-out group
      `}
    >
      <div className="flex items-center justify-between mb-8 pb-6 border-b border-brand-charcoal/10 group-hover:border-brand-accent/20 transition-colors duration-500">
        <h4 className="text-xl font-bold font-sans text-brand-charcoal transition-colors duration-500">
          {skillGroup.category}
        </h4>
        <span className="text-brand-charcoal/10 group-hover:text-brand-accent/20 font-sans text-4xl font-light transition-colors duration-500">
          0{index + 1}
        </span>
      </div>
      
      <div className="flex flex-wrap gap-3">
        {skillGroup.items.map((item, idx) => {
          // Stagger pills based on scroll progress
          const start = idx / skillGroup.items.length;
          const end = start + (1 / skillGroup.items.length);
          // Use useTransform conditionally inside loop is a violation of rules of hooks, 
          // but since the length is static, it's technically safe. 
          // To be perfectly safe, we map at the top level or just use the same hook.
          // Wait, calling hooks inside map is generally bad practice in React.
          // Let's create a sub-component for Pill to obey hooks rules.
          return <SkillPill key={idx} item={item} idx={idx} total={skillGroup.items.length} scrollYProgress={scrollYProgress} />;
        })}
      </div>
    </motion.div>
  );
};

const SkillPill = ({ item, idx, total, scrollYProgress }: any) => {
  const start = idx / total;
  const end = start + (1 / total);
  
  const scale = useTransform(scrollYProgress, [start, end], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [start, end], [0, 1]);
  const y = useTransform(scrollYProgress, [start, end], [10, 0]);

  return (
    <motion.div 
      style={{ scale, opacity, y }}
      className="flex items-center gap-2 px-4 py-2 rounded-full border border-brand-charcoal/5 bg-white/50 group-hover:bg-brand-light/50 group/item hover:!bg-brand-accent hover:!border-brand-accent transition-all duration-300"
    >
      <span className="text-brand-charcoal/70 font-sans text-sm font-medium group-hover/item:!text-brand-light transition-colors duration-300">
        {item}
      </span>
    </motion.div>
  );
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 overflow-hidden relative">
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-[linear-gradient(to_right,#8c827315_1px,transparent_1px),linear-gradient(to_bottom,#8c827315_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      {/* Floating Background Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {floatingIcons.map((item, i) => (
          <motion.img
            key={i}
            src={item.icon}
            alt="tech-icon"
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: [0.2, 0.4, 0.2],
              y: [0, -20, 0],
              rotate: [0, 10, -10, 0]
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5
            }}
            style={{
              position: 'absolute',
              left: item.x,
              top: item.y,
              width: item.size,
              filter: `blur(3px) ${item.className ? 'invert(1)' : ''}`,
            }}
            className="object-contain z-0 will-change-transform"
          />
        ))}
      </div>

      <div className="container mx-auto px-6 mb-16 text-center relative z-10 flex flex-col items-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-brand-charcoal/60 font-bold tracking-widest uppercase text-sm mb-3 font-sans"
        >
          My Expertise
        </motion.h2>
        <div className="flex justify-center items-center gap-3 text-4xl md:text-5xl font-playfair text-brand-charcoal">
          <TextReveal text="Technical" delay={0.1} />
          <TextReveal text="Skills" wordClassName="italic text-brand-accent" delay={0.3} />
        </div>
      </div>

      {/* Infinite Marquee Section */}
      <div className="mb-24 relative z-10">
        <LogoCloud logos={logos} />
      </div>

      {/* Detailed Cards Grid */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
          {RESUME_DATA.skills.map((skillGroup, index) => {
            // Determine column span for 3-2 grid layout
            const colSpan = index < 3 ? 'lg:col-span-2' : 'lg:col-span-3';
            // Alternate border radius for unique shapes
            const borderRadius = index % 2 === 0 
              ? 'rounded-[2rem] rounded-tr-[4rem]' 
              : 'rounded-[2rem] rounded-bl-[4rem]';
            
            return (
              <SkillCard 
                key={index}
                skillGroup={skillGroup}
                index={index}
                colSpan={colSpan}
                borderRadius={borderRadius}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

const logos = [
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    alt: "Java",
  },
  {
    src: "https://www.vectorlogo.zone/logos/netlify/netlify-icon.svg",
    alt: "Netlify",
  },
  {
    src: "https://devicon-website.vercel.app/api/nextjs/original.svg?color=%23FFFFFF",
    alt: "Next.js",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    alt: "Figma",
  },
  {
    src: "https://cdn.worldvectorlogo.com/logos/gsap-greensock.svg",
    alt: "GSAP",
  },
  {
    src: "https://www.vectorlogo.zone/logos/framer/framer-icon.svg",
    alt: "Framer Motion",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    alt: "Python",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    alt: "JavaScript",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    alt: "CSS",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    alt: "HTML",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
    alt: "Tailwind CSS",
  },
  {
    src: "https://devicon-website.vercel.app/api/github/original.svg?color=%23FFFFFF",
    alt: "GitHub",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    alt: "React.js",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    alt: "Node.js",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    alt: "MongoDB",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    alt: "MySQL",
  },
  {
    src: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
    alt: "Postman",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
    alt: "Firebase",
  },
  {
    src: "https://devicon-website.vercel.app/api/express/original.svg?color=%23F9F9F9",
    alt: "Express.js",
  },
];

const floatingIcons = [
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", x: "5%", y: "10%", size: 80 },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", x: "90%", y: "20%", size: 90 },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", x: "15%", y: "60%", size: 85 },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", x: "85%", y: "70%", size: 95 },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", x: "5%", y: "35%", size: 75 },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", x: "95%", y: "40%", size: 75 },
  { icon: "https://cdn.worldvectorlogo.com/logos/gsap-greensock.svg", x: "35%", y: "5%", size: 70 },
  { icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg", x: "40%", y: "35%", size: 80 },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg", x: "10%", y: "85%", size: 90 },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", x: "65%", y: "5%", size: 80, className: "invert" },
  { icon: "https://devicon-website.vercel.app/api/figma/original.svg", x: "85%", y: "85%", size: 105 },
  { icon: "https://devicon-website.vercel.app/api/docker/original.svg", x: "45%", y: "87%", size: 105 },
  { icon: "https://devicon-website.vercel.app/api/vscode/original.svg", x: "46%", y: "65%", size: 105 },
  { icon: "https://devicon-website.vercel.app/api/mysql/original.svg", x: "62%", y: "81%", size: 105 },
  { icon: "https://devicon-website.vercel.app/api/mongodb/original.svg", x: "69%", y: "41%", size: 105 },
];

export default Skills;

