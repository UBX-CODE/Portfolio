import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Home');
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (document.documentElement.classList.contains('dark')) {
      setIsDarkMode(true);
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add('dark');
      setIsDarkMode(true);
    }
  };

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
              UBX
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
              </a>
            ))}
          </nav>

          {/* Right Section */}
          <div className="flex-1 flex justify-end items-center gap-6 md:gap-8">
            <button
              onClick={toggleTheme}
              className="flex items-center justify-center w-10 h-10 rounded-full border border-brand-charcoal/20 text-brand-charcoal hover:bg-brand-charcoal hover:text-brand-light transition-colors duration-300"
              aria-label="Toggle Theme"
            >
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="hidden lg:flex md:opacity-0 items-center gap-3 border border-brand-charcoal/20 px-6 py-2.5 rounded-full hover:bg-brand-charcoal hover:text-brand-light transition-colors duration-300"
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