import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';

export function CircuitDivider() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  return (
    <div ref={ref} className="w-full h-16 flex items-center justify-center overflow-hidden">
      <svg width="100%" height="64" viewBox="0 0 1200 64" className="opacity-70">
        <defs>
          <linearGradient id="circuit-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1E90FF" stopOpacity="0" />
            <stop offset="20%" stopColor="#1E90FF" stopOpacity="1" />
            <stop offset="80%" stopColor="#00FFFF" stopOpacity="1" />
            <stop offset="100%" stopColor="#00FFFF" stopOpacity="0" />
          </linearGradient>
        </defs>
        
        {/* Main line */}
        <motion.path
          d="M 0 32 L 200 32 L 210 22 L 240 22 L 250 32 L 400 32 L 410 42 L 440 42 L 450 32 L 600 32 L 610 22 L 640 22 L 650 32 L 800 32 L 810 42 L 840 42 L 850 32 L 1000 32 L 1010 22 L 1040 22 L 1050 32 L 1200 32"
          stroke="url(#circuit-gradient)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={inView ? { pathLength: 1, opacity: 1 } : {}}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
        
        {/* Circuit nodes */}
        {[200, 400, 600, 800, 1000].map((x, i) => (
          <motion.circle
            key={i}
            cx={x}
            cy={32}
            r="4"
            fill="#1E90FF"
            initial={{ scale: 0, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : {}}
            transition={{ delay: 0.3 + i * 0.15, duration: 0.3 }}
          >
            <animate
              attributeName="opacity"
              values="1;0.5;1"
              dur="2s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="r"
              values="4;6;4"
              dur="2s"
              repeatCount="indefinite"
            />
          </motion.circle>
        ))}
        
        {/* Energy pulse */}
        <motion.circle
          cx="0"
          cy="32"
          r="6"
          fill="#00FFFF"
          opacity="0.8"
          initial={{ cx: 0 }}
          animate={inView ? { 
            cx: [0, 1200],
            opacity: [0, 0.8, 0]
          } : {}}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatDelay: 1,
            ease: "linear"
          }}
        />
      </svg>
    </div>
  );
}
