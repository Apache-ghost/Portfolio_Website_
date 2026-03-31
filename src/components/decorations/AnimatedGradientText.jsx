import { motion } from 'framer-motion';

const AnimatedGradientText = ({ text, className = "" }) => {
  return (
    <motion.div
      className={`relative inline-block ${className}`}
      animate={{
        backgroundPosition: ['0% 0%', '100% 100%'],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        repeatType: 'reverse',
      }}
      style={{
        background: 'linear-gradient(90deg, #00f2fe, #4facfe, #00f2fe)',
        backgroundSize: '200% auto',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
      }}
    >
      {text}
    </motion.div>
  );
};

export default AnimatedGradientText;
