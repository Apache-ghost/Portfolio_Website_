import { motion } from 'framer-motion';

const BackgroundBlobs = () => {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Blob 1 */}
      <motion.div
        className="absolute w-96 h-96 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full blur-3xl opacity-10"
        animate={{
          x: [0, 50, -30, 0],
          y: [0, -50, 30, 0],
          scale: [1, 1.1, 0.9, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{
          top: '10%',
          left: '10%',
        }}
      />

      {/* Blob 2 */}
      <motion.div
        className="absolute w-80 h-80 bg-gradient-to-r from-pink-500 to-red-400 rounded-full blur-3xl opacity-10"
        animate={{
          x: [-50, 30, 50, -50],
          y: [50, -30, -50, 50],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{
          duration: 18,
          delay: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{
          top: '50%',
          right: '10%',
        }}
      />

      {/* Blob 3 */}
      <motion.div
        className="absolute w-72 h-72 bg-gradient-to-r from-purple-500 to-pink-400 rounded-full blur-3xl opacity-10"
        animate={{
          x: [30, -50, 20, 30],
          y: [-30, 50, -50, -30],
          scale: [1.1, 1, 0.9, 1.1],
        }}
        transition={{
          duration: 20,
          delay: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{
          bottom: '10%',
          left: '50%',
        }}
      />
    </div>
  );
};

export default BackgroundBlobs;
