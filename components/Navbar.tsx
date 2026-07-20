import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Home');

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header className="absolute top-0 left-0 right-0 z-50 py-8 px-6 md:px-12 w-full">
        <div className="container mx-auto flex justify-between items-center text-brand-charcoal max-w-[1600px]">
          
          {/* Logo */}
          <div className="flex-1">
            <a href="#home" className="text-xl md:text-2xl font-bold tracking-[0.15em] font-sans">
              UB<span className="text-brand-orange">.</span>
            </a>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex flex-1 justify-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setActiveTab(link.name)}
                className="group flex flex-col items-center gap-2 text-[13px] font-semibold font-sans text-brand-charcoal hover:opacity-70 transition-opacity"
              >
                <span>{link.name}</span>
                <span className={`w-1 h-1 rounded-full bg-brand-charcoal transition-opacity ${activeTab === link.name ? 'opacity-100' : 'opacity-0 group-hover:opacity-50'}`}></span>
              </a>
            ))}
          </nav>

          {/* Right Section */}
          <div className="flex-1 flex justify-end items-center gap-8">
            {/* <div className="hidden md:flex items-center gap-2 text-[13px] font-sans font-semibold">
              <span>Remote, IN</span>
              <span className="w-1.5 h-1.5 rounded-full bg-brand-charcoal"></span>
            </div> */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="hidden lg:flex items-center gap-3 border border-brand-charcoal/20 px-6 py-2.5 rounded-full hover:bg-brand-charcoal hover:text-brand-light transition-colors duration-300"
            >
              <Menu size={16} />
              <span className="text-[11px] font-sans font-bold tracking-widest uppercase">Menu</span>
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-brand-charcoal"
            >
               {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-brand-light/98 backdrop-blur-xl pt-32 px-6 lg:hidden"
          >
            <div className="flex flex-col space-y-10 items-center mt-12">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-4xl font-sans font-medium text-brand-charcoal hover:text-brand-orange transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;