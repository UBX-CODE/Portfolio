import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Activity', href: '#activity' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-0 left-0 right-0 z-50 py-8 px-6 md:px-12 w-full"
      >
        <div className="container mx-auto flex justify-between items-center text-brand-charcoal max-w-[1600px]">

          {/* Logo */}
          <div className="flex-1">
            <a href="#home" className="text-xl md:text-2xl font-bold tracking-[0.15em] font-sans">
              UBX
            </a>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex flex-1 justify-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="group flex flex-col items-center gap-2 text-[13px] font-semibold font-sans text-brand-charcoal hover:opacity-70 transition-opacity"
              >
                <span>{link.name}</span>
              </a>
            ))}
          </nav>

          {/* Right Section */}
          <div className="flex-1 flex justify-end items-center gap-6 md:gap-8">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-brand-charcoal"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </motion.header>

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