import React from 'react'
import { motion } from 'framer-motion';

const Skills = () => {
  const SkillBar = ({ label, percentage, delay }) => (
    <motion.div 
      className="overflow-x-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      <div className="flex justify-between items-center mb-2">
        <p className="text-sm uppercase font-medium">{label}</p>
        <motion.span 
          className="text-xs font-semibold text-designColor"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.3, delay: delay + 0.3 }}
          viewport={{ once: true }}
        >
          {percentage}%
        </motion.span>
      </div>
      <span className="w-full h-3 bgOpacity rounded-full inline-flex mt-2 overflow-hidden shadow-lg">
        <motion.span
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: `${percentage}%`, opacity: 1 }}
          transition={{ duration: 0.8, delay: delay + 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-full shadow-lg shadow-pink-500/50 relative group"
          whileHover={{ boxShadow: "0 0 20px rgba(236, 72, 153, 0.8)" }}
        >
          <span className="absolute -top-8 right-0 text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity"></span>
        </motion.span>
      </span>
    </motion.div>
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div className="w-full lgl:w-1/2">
        <motion.div 
          className="py-12 font-titleFont flex flex-col gap-4"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-sm text-designColor tracking-[4px] uppercase">
            Features
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">Design Skill</h2>
        </motion.div>
        <div className='mt-14 w-full flex flex-col gap-6'>
          <SkillBar label="Canvas" percentage={60} delay={0.1} />
          <SkillBar label="Figma" percentage={50} delay={0.2} />
          <SkillBar label="Design" percentage={75} delay={0.3} />
        </div>
      </div>

      <div className="w-full lgl:w-1/2">
        <motion.div 
          className="py-12 font-titleFont flex flex-col gap-4"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-sm text-designColor tracking-[4px] uppercase">
            Features
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">Development Skill</h2>
        </motion.div>
        <div className="flex flex-col gap-6">
          <SkillBar label="React" percentage={100} delay={0.1} />
          <SkillBar label="HTML 5" percentage={95} delay={0.2} />
          <SkillBar label="CSS3" percentage={80} delay={0.3} />
          <SkillBar label="JAVASCRIPT" percentage={75} delay={0.4} />
          <SkillBar label="SOFTWARE" percentage={90} delay={0.5} />
          <SkillBar label="Wordpress" percentage={75} delay={0.6} />
          <SkillBar label="NextJs" percentage={75} delay={0.7} />
        </div>
      </div>
    </motion.div>
  );
}

export default Skills