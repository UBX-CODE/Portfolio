import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { RESUME_DATA } from '../data';

const Skills: React.FC = () => {
  const allSkills = RESUME_DATA.skills.flatMap(s => s.items);

  // Distribute skills across 3 rows for the marquee
  const row1 = allSkills.slice(0, Math.ceil(allSkills.length / 3));
  const row2 = allSkills.slice(Math.ceil(allSkills.length / 3), Math.ceil(allSkills.length * 2 / 3));
  const row3 = allSkills.slice(Math.ceil(allSkills.length * 2 / 3));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const SkillRow = ({ items, direction = 'left', speed = 20 }: { items: string[], direction?: 'left' | 'right', speed?: number }) => {
    const rowRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const el = rowRef.current;
      if (!el) return;

      const context = gsap.context(() => {
        const tl = gsap.timeline({
          repeat: -1,
          defaults: { ease: "none" }
        });

        if (direction === 'left') {
          tl.to(el, {
            xPercent: -25,
            duration: speed,
          });
        } else {
          gsap.set(el, { xPercent: -25 });
          tl.to(el, {
            xPercent: 0,
            duration: speed,
          });
        }
      }, rowRef);

      return () => context.revert();
    }, [direction, speed]);

    return (
      <div className="w-full overflow-hidden py-2 relative">
        <div className="absolute left-0 top-0 bottom-0 w-12 md:w-32 z-10 bg-gradient-to-r from-[#0a0a0a] to-transparent pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-12 md:w-32 z-10 bg-gradient-to-l from-[#0a0a0a] to-transparent pointer-events-none"></div>

        <div ref={rowRef} className="flex w-max gap-4 px-2 will-change-transform">
          {[...items, ...items, ...items, ...items].map((skill, i) => (
            <div
              key={i}
              className="px-6 py-3 md:px-8 md:py-4 bg-[#1A1A1A] border border-white/5 rounded-lg text-gray-400 font-medium text-sm md:text-base whitespace-nowrap hover:bg-brand-red hover:text-white hover:border-brand-red transition-colors duration-300 cursor-default shadow-lg"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    );
  };

  const floatingIcons = [
    { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", x: "5%", y: "10%", size: 80 },
    { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", x: "90%", y: "20%", size: 90 },
    { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", x: "15%", y: "60%", size: 85 },
    { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", x: "85%", y: "70%", size: 95 },
    { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", x: "5%", y: "35%", size: 75 },
    { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", x: "95%", y: "40%", size: 75 },
    { icon: "https://cdn.worldvectorlogo.com/logos/gsap-greensock.svg", x: "45%", y: "15%", size: 70 },
    { icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg", x: "40%", y: "35%", size: 80 },
    { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg", x: "10%", y: "85%", size: 90 },
    { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", x: "75%", y: "5%", size: 80, className: "invert" },
    { icon: "https://devicon-website.vercel.app/api/figma/original.svg", x: "85%", y: "92%", size: 105 },
    { icon: "https://devicon-website.vercel.app/api/docker/original.svg", x: "15%", y: "92%", size: 105 },
    { icon: "https://devicon-website.vercel.app/api/vscode/original.svg", x: "46%", y: "65%", size: 105 },
    { icon: "https://devicon-website.vercel.app/api/mysql/original.svg", x: "62%", y: "81%", size: 105 },
    { icon: "https://devicon-website.vercel.app/api/mongodb/original.svg", x: "69%", y: "41%", size: 105 },
  ];

  return (
    <section id="skills" className="py-24 bg-brand-dark overflow-hidden relative">
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

      <div className="container mx-auto px-6 mb-16 text-center relative z-10">
        <h2 className="text-brand-orange font-bold tracking-widest uppercase text-sm mb-3">My Expertise</h2>
        <h3 className="text-4xl md:text-5xl font-heading font-bold text-white">
          Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-yellow">Skills</span>
        </h3>
      </div>

      {/* Infinite Marquee Section */}
      <div className="flex flex-col gap-6 md:gap-8 mb-24 opacity-80 hover:opacity-100 transition-opacity duration-500 relative z-10">
        <SkillRow items={row1} direction="left" speed={40} />
        <SkillRow items={row2} direction="right" speed={50} />
        <SkillRow items={row3} direction="left" speed={45} />
      </div>

      {/* Detailed Cards Grid */}
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {RESUME_DATA.skills.map((skillGroup, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-[rgba(255,255,255,0.03)] backdrop-blur-xl rounded-2xl p-8 border border-[rgba(255,255,255,0.1)] shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] hover:bg-[rgba(255,255,255,0.08)] hover:border-[rgba(255,255,255,0.2)] transition-all duration-300 hover:-translate-y-2 group"
            >
              <h4 className="text-xl font-bold text-white mb-6 pb-4 border-b border-white/10 group-hover:border-brand-red/30 transition-colors">
                {skillGroup.category}
              </h4>
              <div className="space-y-3">
                {skillGroup.items.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle2 size={16} className="text-brand-red group-hover:text-brand-orange transition-colors" />
                    <span className="text-gray-300 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;