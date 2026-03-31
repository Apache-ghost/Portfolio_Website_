import { motion } from 'framer-motion';

const ScrollIndicator = () => {
  return (
    <motion.div
      className="fixed bottom-10 left-1/2 transform -translate-x-1/2 z-50 pointer-events-none"
      animate={{
        y: [0, 10, 0],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      <div className="flex flex-col items-center gap-2">
        <p className="text-sm text-designColor font-light">Scroll to explore</p>
        <motion.svg
          className="w-6 h-6 text-designColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
          animate={{
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </motion.svg>
      </div>
    </motion.div>
  );
};

export default ScrollIndicator;
