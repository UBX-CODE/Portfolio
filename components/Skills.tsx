import React from 'react';
import { motion } from 'framer-motion';
import { RESUME_DATA } from '../data';
import { LogoCloud } from '@/components/ui/logo-cloud-3';

const Skills: React.FC = () => {

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

  return (
    <section id="skills" className="py-24 overflow-hidden relative">
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
      <div className="mb-24 relative z-10">
        <LogoCloud logos={logos} />
      </div>

      {/* Detailed Cards Grid */}
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8"
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
                  <div key={idx} className="flex items-center gap-3 group/item">
                    <div className="h-[1px] w-0 group-hover/item:w-6 bg-gradient-to-r from-brand-red to-transparent transition-all duration-300 ease-out" />
                    <span className="text-gray-400 font-medium group-hover/item:text-gray-200 transition-colors group-hover/item:translate-x-1 duration-300">{item}</span>
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
    src: "https://devicon-website.vercel.app/api/threejs/original.svg?color=%23FFFFFF",
    alt: "Three.js",
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

