import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface FloatingElementProps {
  children: ReactNode;
  duration?: number;
  delay?: number;
  yOffset?: number;
}

export function FloatingElement({ 
  children, 
  duration = 3, 
  delay = 0,
  yOffset = 10
}: FloatingElementProps) {
  return (
    <motion.div
      animate={{
        y: [0, -yOffset, 0],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay
      }}
    >
      {children}
    </motion.div>
  );
}
