import { motion } from 'framer-motion';

const SectionDecorator = ({ position = 'top-right' }) => {
  const positions = {
    'top-right': 'top-0 right-0',
    'top-left': 'top-0 left-0',
    'bottom-right': 'bottom-0 right-0',
    'bottom-left': 'bottom-0 left-0',
  };

  return (
    <motion.div
      className={`absolute ${positions[position]} w-48 h-48 pointer-events-none`}
      animate={{
        rotate: [0, 360],
        scale: [1, 1.1, 1],
      }}
      transition={{
        duration: 25,
        repeat: Infinity,
        ease: 'linear',
      }}
    >
      <div className="w-full h-full border-2 border-designColor opacity-10 rounded-3xl" />
      <div
        className="absolute inset-0 border border-designColor opacity-10 rounded-3xl"
        style={{
          transform: 'rotate(45deg)',
        }}
      />
    </motion.div>
  );
};

export default SectionDecorator;
