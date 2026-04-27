import React from 'react';
import { motion } from 'framer-motion';

const BackgroundEffects = () => {
  return (
    <div className="fixed inset-0 -z-20 overflow-hidden pointer-events-none">
      <div className="bg-mesh" />
      
      {/* Floating Animated Orbs */}
      <motion.div 
        animate={{
          x: [0, 100, 0],
          y: [0, 80, 0],
          scale: [1, 1.4, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-[10%] -left-[10%] w-[50vw] h-[50vw] bg-blue-600/5 rounded-full blur-[120px]"
      />
      
      <motion.div 
        animate={{
          x: [0, -100, 0],
          y: [0, 120, 0],
          scale: [1, 1.5, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-[20%] -right-[10%] w-[45vw] h-[45vw] bg-indigo-600/5 rounded-full blur-[120px]"
      />

      <motion.div 
        animate={{
          y: [0, -100, 0],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-[40%] left-[30%] w-[40vw] h-[40vw] bg-purple-600/5 rounded-full blur-[150px]"
      />


    </div>
  );
};

export default BackgroundEffects;
