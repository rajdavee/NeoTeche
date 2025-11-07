import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  delay?: number;
}

export function GlassCard({ children, className = '', hover = true, delay = 0 }: GlassCardProps) {
  return (
    <motion.div
      className={`glass-effect rounded-2xl p-6 transition-all duration-300 ${
        hover ? 'neon-glow-hover' : ''
      } ${className}`}
      initial={{ opacity: 0, y: 20, rotateX: 10 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 0.6,
        delay,
        type: "spring",
        stiffness: 100,
        damping: 15
      }}
      whileHover={hover ? { 
        scale: 1.03,
        y: -5,
        transition: { duration: 0.2 }
      } : {}}
      style={{ transformPerspective: 1000 }}
    >
      {children}
    </motion.div>
  );
}
