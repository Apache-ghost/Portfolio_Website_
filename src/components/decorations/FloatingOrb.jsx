import { motion } from 'framer-motion';

const FloatingOrb = ({ delay = 0, size = 300, color = 'bg-blue-500', opacity = 0.1, position = { top: '10%', right: '10%' } }) => {
  return (
    <motion.div
      className={`absolute ${color} rounded-full blur-3xl pointer-events-none`}
      style={{
        width: size,
        height: size,
        top: position.top,
        right: position.right,
        opacity: opacity,
      }}
      animate={{
        y: [0, -50, 0],
        x: [0, 30, 0],
        scale: [1, 1.2, 1],
      }}
      transition={{
        duration: 8,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  );
};

export default FloatingOrb;
