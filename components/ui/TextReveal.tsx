import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface TextRevealProps {
  text: string;
  className?: string;
  wordClassName?: string;
  delay?: number; // Delay isn't directly applicable for scrub, but kept for interface compatibility
}

export const TextReveal: React.FC<TextRevealProps> = ({ text, className = "", wordClassName = "" }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 90%", "center center"]
  });

  const words = text.split(" ");

  return (
    <div
      ref={containerRef}
      className={`flex flex-wrap ${className}`}
      style={{ perspective: 1000 }}
    >
      {words.map((word, index) => {
        // Stagger each word's animation based on its index relative to the total length
        const start = index / words.length;
        const end = start + (1 / words.length);
        
        // Map the overall section scroll progress to this specific word
        const opacity = useTransform(scrollYProgress, [start, end], [0.1, 1]);
        const y = useTransform(scrollYProgress, [start, end], [27, 0]);
        const rotateX = useTransform(scrollYProgress, [start, end], [-27, 0]);

        return (
          <motion.span
            key={index}
            style={{ opacity, y, rotateX }}
            className={`mr-[0.25em] mb-[0.1em] origin-bottom ${wordClassName}`}
          >
            {word}
          </motion.span>
        );
      })}
    </div>
  );
};
