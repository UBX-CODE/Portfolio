import React, { useState, useEffect } from 'react';
import { Sun, Sparkles, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Project', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Desktop Centered Floating Nav */}
      <div className="fixed top-6 left-0 right-0 z-50 hidden md:flex justify-center items-center gap-4 pointer-events-none">
        <nav className={cn(
          "pointer-events-auto flex items-center gap-1 px-2 py-2 rounded-full border border-white/10 bg-black/20 backdrop-blur-xl shadow-lg transition-all duration-300",
          isScrolled ? "bg-black/40 border-white/20" : ""
        )}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="group flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300"
            >
              <Sparkles size={12} className="text-gray-500 group-hover:text-brand-yellow transition-colors" />
              <span>{link.name}</span>
            </a>
          ))}
        </nav>

        {/* <button className="pointer-events-auto p-3 rounded-full border border-white/10 bg-black/20 backdrop-blur-xl text-gray-300 hover:text-white hover:bg-white/10 transition-all shadow-lg">
          <Sun size={20} />
        </button> */}
      </div>

      {/* Mobile Nav (Hamburger) */}
      <div className="fixed top-0 w-full z-50 md:hidden p-6 flex justify-between items-center pointer-events-none">
        {/* Logo or Brand for mobile if needed, or just empty space to push hamburger right */}
        <span className="pointer-events-auto font-bold text-xl tracking-tight text-white/80 backdrop-blur-sm px-2 rounded">UB</span>

        <button
          className="pointer-events-auto p-2 rounded-full bg-black/20 backdrop-blur-md border border-white/10 text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-brand-dark/95 backdrop-blur-xl pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col space-y-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-4 text-2xl font-medium text-gray-200 hover:text-brand-yellow transition-colors"
                >
                  <Sparkles size={16} className="text-brand-red" />
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