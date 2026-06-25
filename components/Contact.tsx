import React from 'react';
import { motion } from 'framer-motion';
import { SOCIAL_LINKS, PERSONAL_INFO } from '../constants';
import { Send, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-[linear-gradient(to_right,#8c827315_1px,transparent_1px),linear-gradient(to_bottom,#8c827315_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-white/60 border border-black/5 rounded-3xl p-8 md:p-16 backdrop-blur-sm shadow-sm"
        >
          <h2 className="text-brand-charcoal/60 font-sans tracking-wider uppercase mb-4 text-sm">Contact Me</h2>
          <h3 className="text-4xl md:text-5xl font-playfair text-brand-charcoal mb-6">
            Let's Work <span className="italic text-brand-accent">Together</span>
          </h3>
          <p className="text-brand-charcoal/70 font-sans text-lg mb-10 max-w-2xl mx-auto">
            Whether you have a question, a project proposal, or just want to say hi,
            my inbox is always open. I'll try my best to get back to you!
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12">
            <a
              href="mailto:ujjwalsharma1910@gmail.com"
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
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center p-4 rounded-xl bg-white/60 border border-black/5 hover:bg-white/80 hover:border-black/10 transition-all duration-300 shadow-sm group"
              >
                <link.icon className="w-8 h-8 text-brand-charcoal/60 group-hover:text-brand-charcoal mb-2 transition-colors" />
                <span className="text-sm font-sans text-brand-charcoal/60 group-hover:text-brand-charcoal">{link.name}</span>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;