import { motion } from 'framer-motion';

const GlowingLines = () => {
  return (
    <div className="pointer-events-none fixed inset-0 z-0">
      {/* Horizontal glowing line */}
      <motion.div
        className="absolute h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent w-full"
        style={{
          top: '30%',
          opacity: 0.3,
        }}
        animate={{
          opacity: [0.3, 0.6, 0.3],
          filter: ['blur(0px)', 'blur(8px)', 'blur(0px)'],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Vertical glowing line */}
      <motion.div
        className="absolute w-px bg-gradient-to-b from-transparent via-pink-500 to-transparent h-full"
        style={{
          left: '70%',
          opacity: 0.3,
        }}
        animate={{
          opacity: [0.3, 0.6, 0.3],
          filter: ['blur(0px)', 'blur(8px)', 'blur(0px)'],
        }}
        transition={{
          duration: 6,
          delay: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Additional diagonal line */}
      <motion.div
        className="absolute bg-gradient-to-r from-purple-500 via-transparent to-blue-500 opacity-30"
        style={{
          width: '200%',
          height: '1px',
          top: '50%',
          left: '-50%',
          transform: 'rotate(45deg)',
        }}
        animate={{
          opacity: [0.1, 0.4, 0.1],
        }}
        transition={{
          duration: 8,
          delay: 1,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  );
};

export default GlowingLines;
