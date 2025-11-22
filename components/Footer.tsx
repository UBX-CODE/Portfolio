import React from 'react';
import { RESUME_DATA } from '../data';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-8 border-t border-white/10">
      <div className="container mx-auto px-6 text-center">
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} {RESUME_DATA.name}. All rights reserved.
        </p>
        <p className="text-gray-600 text-xs mt-2">
        </p>
      </div>
    </footer>
  );
};

export default Footer;