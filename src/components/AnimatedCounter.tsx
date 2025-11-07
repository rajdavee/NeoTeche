import { motion, useMotionValue, useTransform, animate } from 'motion/react';
import { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

interface AnimatedCounterProps {
  value: string;
  label: string;
  duration?: number;
}

export function AnimatedCounter({ value, label, duration = 2 }: AnimatedCounterProps) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const count = useMotionValue(0);
  const hasAnimated = useRef(false);
  
  // Extract number from value (e.g., "500+" => 500, "98%" => 98)
  const numericValue = parseInt(value.replace(/\D/g, '')) || 0;
  const suffix = value.replace(/\d/g, '');
  
  const rounded = useTransform(count, (latest) => {
    return Math.round(latest) + suffix;
  });

  useEffect(() => {
    if (inView && !hasAnimated.current) {
      hasAnimated.current = true;
      const controls = animate(count, numericValue, {
        duration,
        ease: "easeOut"
      });
      return controls.stop;
    }
  }, [inView, count, numericValue, duration]);

  return (
    <motion.div
      ref={ref}
      className="text-center"
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ 
        type: "spring",
        stiffness: 100,
        damping: 10
      }}
    >
      <motion.div 
        className="mb-2 text-gradient"
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {rounded}
      </motion.div>
      <div className="text-white/70">{label}</div>
    </motion.div>
  );
}
