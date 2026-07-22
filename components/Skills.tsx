import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Boxes, Binary, Database, LayoutGrid, Network } from 'lucide-react';
import { RESUME_DATA } from '../data';
import { SkillCategory } from '../types';
import { TextReveal } from './ui/TextReveal';

type SkillIcon = {
  src?: string;
  invert?: boolean;
  LucideIcon?: React.ComponentType<{ className?: string; strokeWidth?: number }>;
};

const SKILL_ICONS: Record<string, SkillIcon> = {
  Java: { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
  Python: { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  SQL: { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  JavaScript: { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  TypeScript: { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  'Next.js': { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', invert: true },
  'React.js': { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  'Node.js': { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  'Express.js': { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', invert: true },
  HTML: { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  CSS: { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  'Tailwind CSS': { src: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg' },
  MySQL: { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  MongoDB: { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  Firebase: { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
  PostgreSQL: { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  'AWS (Basics)': { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg', invert: true },
  'Git/GitHub': { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', invert: true },
  Postman: { src: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg' },
  'VS Code': { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
  Linux: { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
  OOP: { LucideIcon: Boxes },
  DSA: { LucideIcon: Binary },
  'System Design': { LucideIcon: LayoutGrid },
  DBMS: { LucideIcon: Database },
  'Computer Networks': { LucideIcon: Network },
};

const POPUP_POSITIONS = [
  { top: '-14%', left: '6%', rotate: -14 },
  { top: '-20%', left: '50%', rotate: 0, centerX: true },
  { top: '-14%', right: '6%', rotate: 14 },
  { top: '42%', left: '-12%', rotate: -10 },
  { top: '42%', right: '-12%', rotate: 10 },
  { bottom: '-14%', left: '18%', rotate: -8 },
  { bottom: '-14%', right: '18%', rotate: 8 },
];

const SkillPopupIcon: React.FC<{ item: string; index: number }> = ({ item, index }) => {
  const icon = SKILL_ICONS[item];
  if (!icon) return null;

  const pos = POPUP_POSITIONS[index % POPUP_POSITIONS.length];
  const { centerX, rotate, ...positionStyles } = pos;

  return (
    <motion.div
      variants={{
        rest: {
          opacity: 0,
          scale: 0.35,
          y: 16,
          x: centerX ? '-50%' : 0,
          rotate: rotate * 0.5,
        },
        hover: {
          opacity: 1,
          scale: 1,
          y: 0,
          x: centerX ? '-50%' : 0,
          rotate,
          transition: {
            type: 'spring',
            stiffness: 380,
            damping: 22,
            delay: index * 0.06,
          },
        },
      }}
      style={{
        position: 'absolute',
        ...positionStyles,
        zIndex: 20,
      }}
      className="pointer-events-none"
    >
      {icon.src ? (
        <img
          src={icon.src}
          alt={item}
          className="h-10 w-10 object-contain drop-shadow-md md:h-12 md:w-12"
          style={icon.invert ? { filter: 'invert(1)' } : undefined}
        />
      ) : icon.LucideIcon ? (
        <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-brand-charcoal/10 bg-brand-light shadow-md md:h-12 md:w-12">
          <icon.LucideIcon className="h-5 w-5 text-brand-charcoal md:h-6 md:w-6" strokeWidth={1.5} />
        </div>
      ) : null}
    </motion.div>
  );
};

const SkillCard: React.FC<{
  skillGroup: SkillCategory;
  index: number;
  colSpan: string;
  borderRadius: string;
}> = ({ skillGroup, index, colSpan, borderRadius }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100 + (index % 3) * 40, -100 - (index % 3) * 40]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  return (
    <motion.div ref={ref} style={{ y, opacity }} className={`${colSpan} relative`}>
      <motion.div
        className="relative"
        initial="rest"
        whileHover="hover"
        animate="rest"
      >
        {/* Hover popup logos */}
        {skillGroup.items.map((item, idx) => (
          <SkillPopupIcon key={item} item={item} index={idx} />
        ))}

        {/* Card */}
        <motion.div
          variants={{
            rest: {
              boxShadow: '0 8px 30px rgb(0 0 0 / 0.06)',
              borderColor: 'rgb(26 26 26 / 0.05)',
            },
            hover: {
              boxShadow: '0 20px 50px rgb(0 0 0 / 0.1)',
              borderColor: 'rgb(140 130 115 / 0.2)',
            },
          }}
          className={`
            ${borderRadius}
            relative z-10 border bg-brand-light p-8 md:p-10
            transition-colors duration-500 ease-out
          `}
        >
          <div className="mb-8 flex items-center justify-between border-b border-brand-charcoal/10 pb-6">
            <h4 className="font-sans text-xl font-bold text-brand-charcoal">{skillGroup.category}</h4>
            <span className="font-sans text-4xl font-light text-brand-charcoal/10">
              {String(index + 1).padStart(2, '0')}
            </span>
          </div>

          <div className="flex flex-wrap gap-3">
            {skillGroup.items.map((item, idx) => (
              <SkillPill
                item={item}
                idx={idx}
                total={skillGroup.items.length}
                scrollYProgress={scrollYProgress}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const SkillPill = ({
  item,
  idx,
  total,
  scrollYProgress,
}: {
  item: string;
  idx: number;
  total: number;
  scrollYProgress: ReturnType<typeof useScroll>['scrollYProgress'];
}) => {
  const animationEnd = 0.6;
  const start = (idx / total) * animationEnd;
  const end = start + (1 / total) * animationEnd;

  const scale = useTransform(scrollYProgress, [start, end], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [start, end], [0, 1]);
  const pillY = useTransform(scrollYProgress, [start, end], [9, 0]);

  return (
    <motion.div
      style={{ scale, opacity, y: pillY }}
      className="rounded-full border border-brand-charcoal/5 bg-brand-charcoal/[0.04] px-4 py-2"
    >
      <span className="font-sans text-sm font-medium text-brand-charcoal/70">{item}</span>
    </motion.div>
  );
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="relative overflow-hidden py-24">
      <div className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(to_right,#8c827315_1px,transparent_1px),linear-gradient(to_bottom,#8c827315_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
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
      <div className="container relative z-10 mx-auto mb-16 flex flex-col items-center px-6 text-center">
        <div className="flex items-center justify-center tracking-[0.1em] gap-3 text-4xl font-sans text-brand-charcoal/70 md:text-5xl">
          <TextReveal text="Technical" delay={0.1} />
          <TextReveal text="Skills" delay={0.3} />
        </div>
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <div className="grid grid-cols-1 gap-x-6 gap-y-16 md:grid-cols-2 lg:grid-cols-6">
          {RESUME_DATA.skills.map((skillGroup, index) => {
            const colSpan = index < 3 ? 'lg:col-span-2' : 'lg:col-span-3';
            const borderRadius =
              index % 2 === 0 ? 'rounded-[2rem] rounded-tr-[4rem]' : 'rounded-[2rem] rounded-bl-[4rem]';

            return (
              <SkillCard
                key={skillGroup.category}
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
