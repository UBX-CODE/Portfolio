import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  distance?: number;
  duration?: number;
  scaleStart?: number;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({ 
  children, 
  className = "", 
  direction = 'up',
  distance = 45,
  scaleStart = 1,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 95%", "center center"] 
  });
  
  const getInitialY = () => {
    if (direction === 'up') return distance;
    if (direction === 'down') return -distance;
    return 0;
  }
  
  const getInitialX = () => {
    if (direction === 'left') return distance;
    if (direction === 'right') return -distance;
    return 0;
  }

  // Scrub animations tied to scroll percentage
  const y = useTransform(scrollYProgress, [0, 1], [getInitialY(), 0]);
  const x = useTransform(scrollYProgress, [0, 1], [getInitialX(), 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [scaleStart, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ y, x, opacity, scale }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
