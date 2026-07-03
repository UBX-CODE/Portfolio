import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { SOCIAL_LINKS, PERSONAL_INFO } from '../constants';
import { Send, MapPin } from 'lucide-react';
import { TextReveal } from './ui/TextReveal';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const SocialLink: React.FC<{ link: any, index: number, total: number, scrollYProgress: MotionValue<number> }> = ({ link, index, total, scrollYProgress }) => {
  const start = index / total;
  const end = start + (1 / total);

  const y = useTransform(scrollYProgress, [start, end], [20, 0]);
  const opacity = useTransform(scrollYProgress, [start, end], [0, 1]);

  return (
    <motion.a
      style={{ y, opacity }}
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col items-center justify-center p-4 rounded-xl bg-white/60 border border-black/5 hover:bg-white/80 hover:border-black/10 transition-all duration-300 shadow-sm group"
    >
      <link.icon className="w-8 h-8 text-brand-charcoal/60 group-hover:text-brand-charcoal mb-2 transition-colors" />
      <span className="text-sm font-sans text-brand-charcoal/60 group-hover:text-brand-charcoal">{link.name}</span>
    </motion.a>
  );
};

const Contact: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLElement>(null);
  const boxRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 95%", "center center"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [30, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  useGSAP(() => {
    if (!boxRef.current) return;
    gsap.to(boxRef.current, {
      opacity: 0,
      rotation: 360,
      borderRadius: "50%",
      scale: 1.5,
      scrollTrigger: {
        trigger: boxRef.current,
        start: "top 80%",
        end: "top 30%",
        scrub: 2,
      }
    });
  }, { scope: containerRef });

  return (
    <section id="contact" ref={containerRef} className="py-24 relative overflow-hidden">
      {/* Decorative GSAP Box */}
      <div
        ref={boxRef}
        className="absolute bottom-10 right-10 md:bottom-20 md:right-20 w-40 h-40 md:w-64 md:h-64 bg-brand-accent/30 pointer-events-none z-0"
      />

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-[linear-gradient(to_right,#8c827315_1px,transparent_1px),linear-gradient(to_bottom,#8c827315_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center relative z-10">
        <motion.div
          ref={ref}
          style={{ scale, y, opacity }}
          className="bg-white/60 border border-black/5 rounded-3xl p-8 md:p-16 backdrop-blur-sm shadow-sm"
        >
          <h2 className="text-brand-charcoal/60 font-sans tracking-wider uppercase mb-4 text-sm">Contact Me</h2>
          <div className="flex justify-center items-center gap-3 text-4xl md:text-5xl font-playfair text-brand-charcoal mb-6">
            <TextReveal text="Let's Work" delay={0.1} />
            <TextReveal text="Together" wordClassName="italic text-brand-accent" delay={0.3} />
          </div>
          <p className="text-brand-charcoal/70 font-sans text-lg mb-10 max-w-2xl mx-auto">
            Whether you have a question, a project proposal, or just want to say hi,
            my inbox is always open. I'll try my best to get back to you!
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=ujjwalsharma1910@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-8 py-4 bg-brand-charcoal hover:bg-brand-charcoal/90 text-brand-light font-sans rounded-full transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
            >
              <Send className="mr-2 w-5 h-5" />
              Say Hello
            </a>
            <div className="flex items-center text-brand-charcoal/70 font-sans">
              <MapPin className="mr-2 w-5 h-5" />
              {PERSONAL_INFO.location}
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
            {SOCIAL_LINKS.map((link, index) => (
              <SocialLink key={link.name} link={link} index={index} total={SOCIAL_LINKS.length} scrollYProgress={scrollYProgress} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;