import React from 'react';
import { motion } from 'framer-motion';
import { SOCIAL_LINKS, PERSONAL_INFO } from '../constants';
import { Send, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-black relative">
      <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-3xl p-8 md:p-16 backdrop-blur-sm"
        >
          <h2 className="text-brand-orange font-bold tracking-wider uppercase mb-4 text-sm">Contact Me</h2>
          <h3 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
            Let's Work Together
          </h3>
          <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
            Whether you have a question, a project proposal, or just want to say hi,
            my inbox is always open. I'll try my best to get back to you!
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12">
            <a
              href="mailto:ujjwalsharma1910@gmail.com"
              className="flex items-center px-8 py-4 bg-brand-red hover:bg-brand-orange text-white font-bold rounded-full transition-all duration-300 shadow-lg hover:shadow-brand-red/30 transform hover:-translate-y-1"
            >
              <Send className="mr-2 w-5 h-5" />
              Say Hello
            </a>
            <div className="flex items-center text-gray-400">
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
                className="flex flex-col items-center justify-center p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-brand-orange/30 transition-all duration-300 group"
              >
                <link.icon className="w-8 h-8 text-gray-400 group-hover:text-brand-yellow mb-2 transition-colors" />
                <span className="text-sm text-gray-400 group-hover:text-white">{link.name}</span>
              </a>
            ))}
          </div>
        </motion.div>

        <footer className="mt-16 text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Ujjawal Bhardwaj. Built with React & Tailwind.</p>
        </footer>
      </div>
    </section>
  );
};

export default Contact;