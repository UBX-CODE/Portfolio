import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { SOCIAL_LINKS, PERSONAL_INFO } from '../constants';
import { ArrowUpRight, MapPin } from 'lucide-react';

/* ---------- Social Link Pill ---------- */
const SocialPill: React.FC<{
  link: any;
  index: number;
  total: number;
  progress: MotionValue<number>;
}> = ({ link, index, total, progress }) => {
  const start = index / total;
  const end = start + 1 / total;
  const y = useTransform(progress, [start, end], [18, 0]);
  const opacity = useTransform(progress, [start, end], [0, 1]);

  return (
    <motion.a
      style={{ y, opacity }}
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-3 border border-brand-charcoal/10 rounded-full px-5 py-3 hover:border-brand-charcoal/40 hover:bg-brand-charcoal hover:text-brand-light transition-all duration-300"
    >
      <link.icon className="w-4 h-4 text-brand-charcoal/60 group-hover:text-brand-light transition-colors" />
      <span className="font-sans text-[11px] font-bold tracking-widest uppercase text-brand-charcoal/70 group-hover:text-brand-light transition-colors">
        {link.name}
      </span>
      <ArrowUpRight
        size={12}
        className="text-brand-charcoal/30 group-hover:text-brand-light group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
      />
    </motion.a>
  );
};

/* ---------- Contact ---------- */
const Contact: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);

  /* Heading reveal */
  const { scrollYProgress: headingProgress } = useScroll({
    target: headingRef,
    offset: ['start 90%', 'center center'],
  });
  const headingY = useTransform(headingProgress, [0, 1], [36, 0]);
  const headingOpacity = useTransform(headingProgress, [0, 1], [0, 1]);

  /* CTA card reveal */
  const { scrollYProgress: ctaProgress } = useScroll({
    offset: ['start 100%', 'center center'],
  });
  const ctaY = useTransform(ctaProgress, [0, 1], [18, 0]);
  const ctaOpacity = useTransform(ctaProgress, [0, 1], [0, 1]);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative bg-brand-light py-24 md:py-40"
    >
      {/* Subtle dot/grid texture */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(to_right,#8c827315_1px,transparent_1px),linear-gradient(to_bottom,#8c827315_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_50%,#000_60%,transparent_100%)]" />

      <div className="container relative z-10 mx-auto px-6 md:px-12 max-w-[1600px]">

        {/* ── Top label row ── */}
        <div className="flex items-center gap-4 mb-16 md:mb-24">
          <span className="text-[10px] font-sans font-bold tracking-widest uppercase text-brand-charcoal/40">
            05 — Contact
          </span>
          <div className="flex-1 h-px bg-brand-charcoal/10" />
          <div className="flex items-center gap-2 text-[10px] font-sans font-bold tracking-widest uppercase text-brand-charcoal/40">
            <MapPin size={11} />
            {PERSONAL_INFO.location}
          </div>
        </div>

        {/* ── Hero headline ── */}
        <motion.div
          ref={headingRef}
          style={{ y: headingY, opacity: headingOpacity }}
          className="mb-16 md:mb-24"
        >
          <div className="flex flex-wrap items-end gap-x-4 gap-y-2 font-playfair text-[13vw] md:text-[8rem] lg:text-[9.5rem] leading-[0.88] tracking-tight text-brand-charcoal">
            <span>Let's</span>
            <span className="italic text-brand-accent">Work</span>
          </div>
          <div className="flex flex-wrap items-end gap-x-4 gap-y-2 font-playfair text-[13vw] md:text-[8rem] lg:text-[9.5rem] leading-[0.88] tracking-tight text-brand-charcoal">
            <span>Together</span>
          </div>
        </motion.div>

        {/* ── Divider ── */}
        <div className="h-px bg-brand-charcoal/10 mb-16 md:mb-9" />

        {/* ── Bottom grid: CTA left + links right ── */}
        <motion.div
          style={{ y: ctaY, opacity: ctaOpacity }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-end"
        >
          {/* Left — description + email CTA */}
          <div className="flex flex-col gap-8">
            <p className="font-sans text-brand-charcoal/60 text-sm md:text-base leading-relaxed max-w-sm">
              Whether you have a project proposal, a collaboration idea, or just want to say hi — my inbox is always open.
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-4">
              <a
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=ujjwalsharma1910@gmail.com`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 bg-brand-charcoal text-brand-light px-6 py-3.5 rounded-full text-[11px] font-sans font-bold tracking-widest uppercase hover:bg-brand-charcoal/80 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Say Hello
                <span className="flex items-center justify-center w-5 h-5 rounded-full bg-brand-light/10 group-hover:bg-brand-light/20 transition-colors">
                  <ArrowUpRight size={11} className="text-brand-light" />
                </span>
              </a>

              <a
                href={`mailto:ujjwalsharma1910@gmail.com`}
                className="font-sans text-[11px] font-bold tracking-widest uppercase text-brand-charcoal/50 hover:text-brand-charcoal transition-colors self-center"
              >
                ujjwalsharma1910@gmail.com
              </a>
            </div>
          </div>

          {/* Right — social links*/}
          <div className="flex flex-col gap-8 items-start md:items-end">
            <div className="flex flex-wrap gap-3">
              {SOCIAL_LINKS.map((link, i) => (
                <SocialPill
                  key={link.name}
                  link={link}
                  index={i}
                  total={SOCIAL_LINKS.length}
                  progress={ctaProgress}
                />
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;