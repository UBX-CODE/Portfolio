import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-[100svh] w-full flex items-center ">

      {/* Wavy Background Layers */}
      {/* Spotlight Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,#ffffff1a,transparent_60%)]" />

      </div>

      {/* Grid overlay for texture */}


      {/* Content */}
      <div className="container ml-20 px-6 z-10 relative mt-20 md:mt-0">
        <div className="max-w-3xl">

          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-5xl font-montserrat leading-[1.1] text-white mb-6"
          >
            <span className="text-3xl">Hello I'm </span><br />
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-200 font-heading font-bold">
              Ujjawal Bhardwaj
            </span>
          </motion.h1>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className=" text-sm md:text-l text-gray-300 max-w-md leading-relaxed mb-10"
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
              className="group relative px-5 py-2 bg-brand-red rounded-full overflow-hidden flex items-center justify-center gap-2 text-white font-semibold shadow-lg shadow-brand-red/40 hover:shadow-brand-red/60 transition-all"
            >
              <div className="absolute inset-0 w-full h-full bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
              <span className="relative">Resume</span>
              <ExternalLink size={18} className="relative" />
            </a>
            {/* 
            <a
              href="#projects"
              className="group px-5 py-2 bg-white text-brand-dark rounded-full flex items-center justify-center gap-2 font-bold hover:bg-gray-200 transition-colors shadow-lg"
            >
              <span>View Projects</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#contact"
              className="group px-5 py-2 bg-white/10 text-white rounded-full flex items-center justify-center gap-2 font-bold hover:bg-white/20 transition-colors backdrop-blur-sm border border-white/10"
            >
              <span>Contact Me</span>
              <Mail size={18} className="group-hover:scale-110 transition-transform" />
            </a> */}
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
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-[28%] w-2 h-2 bg-white rounded-full opacity-50 blur-[1px] will-change-transform"
      />
      <motion.div
        animate={{ y: [0, 80, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/3 left-[8%] w-4 h-4 bg-brand-yellow rounded-full opacity-30 blur-sm will-change-transform"
      />
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-[9%] w-2 h-2 bg-white rounded-full opacity-50 blur-[1px] will-change-transform"
      />
      <motion.div
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 right-[20%] w-4 h-4 bg-brand-yellow rounded-full opacity-30 blur-sm will-change-transform"
      />
    </section>
  );
};

export default Hero;