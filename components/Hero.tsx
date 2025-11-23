import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink, Mail } from 'lucide-react';
import { RESUME_DATA } from '../data';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-[100svh] w-full bg-brand-dark flex items-center ">

      {/* Wavy Background Layers */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Layer 1: Deep Red - furthest back */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute bottom-[-10%] right-[-10%] w-[120vw] h-[80vh] bg-[#7f1d1d] rounded-[100%] blur-3xl opacity-60 will-change-transform transform-gpu"
        />

        {/* Layer 2: Vibrant Red - Middle */}
        <motion.div
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
          className="absolute bottom-[-15%] right-[-30%] w-[90vw] h-[120vh] bg-brand-red/80 rounded-l-[40%] transform rotate-12 mix-blend-screen will-change-transform transform-gpu"
        />

        {/* Layer 3: Orange - Middle Front */}
        <motion.div
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
          className="absolute top-[10%] right-[-30%] w-[80vw] h-[130vh] bg-brand-orange rounded-l-[45%] transform -rotate-6 shadow-2xl will-change-transform transform-gpu"
        />

        {/* Layer 4: Yellow/Cream - Front most wave */}
        <motion.div
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
          className="absolute top-[-10%] right-[-37%] w-[70vw] h-[160vh] bg-brand-yellow rounded-l-[50%] transform rotate-3 shadow-2xl opacity-90 will-change-transform transform-gpu"
        />
      </div>

      {/* Grid overlay for texture */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 z-0 mix-blend-overlay transform-gpu"></div>

      {/* Content */}
      <div className="container mx-auto px-6 z-10 relative mt-20 md:mt-0">
        <div className="max-w-3xl">

          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-montserrat leading-[1.1] text-white mb-6"
          >
            <span className="text-5xl">Hello I'm </span><br />
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-200 font-limelight">
              Ujjawal Bhardwaj
            </span>
          </motion.h1>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-300 max-w-xl leading-relaxed mb-10"
          >
            Full-stack developer crafting agentic AI agents that think, act, and ship value on their own
          </motion.p>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="/UJJAWAL_RESUME.pdf"
              download
              className="group relative px-8 py-4 bg-brand-red rounded-full overflow-hidden flex items-center justify-center gap-2 text-white font-semibold shadow-lg shadow-brand-red/40 hover:shadow-brand-red/60 transition-all"
            >
              <div className="absolute inset-0 w-full h-full bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
              <span className="relative">Resume</span>
              <ExternalLink size={18} className="relative" />
            </a>

            <a
              href="#projects"
              className="group px-8 py-4 bg-white text-brand-dark rounded-full flex items-center justify-center gap-2 font-bold hover:bg-gray-200 transition-colors shadow-lg"
            >
              <span>View Projects</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#contact"
              className="group px-8 py-4 bg-white/10 text-white rounded-full flex items-center justify-center gap-2 font-bold hover:bg-white/20 transition-colors backdrop-blur-sm border border-white/10"
            >
              <span>Contact Me</span>
              <Mail size={18} className="group-hover:scale-110 transition-transform" />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Floating Elements for depth */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-[10%] w-2 h-2 bg-white rounded-full opacity-50 blur-[1px] will-change-transform"
      />
      <motion.div
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/3 right-[40%] w-4 h-4 bg-brand-yellow rounded-full opacity-30 blur-sm will-change-transform"
      />
    </section>
  );
};

export default Hero;