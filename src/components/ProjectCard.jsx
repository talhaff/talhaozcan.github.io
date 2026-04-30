import React, { useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useTheme } from '../ThemeContext';

const ProjectCard = ({ project }) => {
  const { theme } = useTheme();
  if (!project) return null;
  const [isHovered, setIsHovered] = useState(false);

  // 3D Tilt Effect Logic
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  // Spotlight Effect Logic
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Tilt
    const xPct = (e.clientX - rect.left) / width - 0.5;
    const yPct = (e.clientY - rect.top) / height - 0.5;
    x.set(xPct);
    y.set(yPct);

    // Spotlight
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`group relative h-full glass rounded-[2.5rem] p-8 overflow-hidden transition-all duration-500 border ${theme === 'light' ? 'border-slate-200 hover:shadow-[0_20px_50px_rgba(59,130,246,0.1)]' : 'border-white/5 hover:border-white/20 hover:shadow-[0_0_50px_rgba(59,130,246,0.15)]'}`}
    >
      {/* Dynamic Spotlight */}
      <motion.div 
        className="absolute inset-0 z-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: useTransform(
            [mouseX, mouseY],
            ([cx, cy]) => `radial-gradient(600px circle at ${cx}px ${cy}px, ${theme === 'light' ? 'rgba(59, 130, 246, 0.04)' : 'rgba(59, 130, 246, 0.08)'}, transparent 40%)`
          ),
        }}
      />

      <div style={{ transform: "translateZ(50px)" }} className="relative z-10 h-full flex flex-col">
        <div className="flex justify-between items-start mb-8">
          <div className={`p-4 rounded-2xl transition-all duration-500 border ${theme === 'light' ? 'bg-blue-500/5 border-blue-500/10 group-hover:bg-blue-500/10' : 'bg-blue-500/5 border-white/5 group-hover:bg-blue-500/20 group-hover:border-blue-500/30'}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500 dark:text-blue-400"><path d="M2 11h20"/><path d="M2 17h20"/><path d="m18 8 4 4-4 4"/><path d="M17 5H3a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z"/></svg>
          </div>
          
          <div className="flex gap-3">
            {project.github && project.github !== "#" && (
              <a 
                href={project.github} 
                target="_blank" 
                rel="noreferrer" 
                className={`p-3 rounded-xl transition-all ${theme === 'light' ? 'bg-slate-100 text-slate-400 hover:text-blue-600 hover:bg-slate-200' : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10'}`}
                title="GitHub Repository"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5-.73 1.02-1.08 2.25-1 3.5 0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
              </a>
            )}
          </div>
        </div>

        <h3 className={`text-2xl font-black tracking-tight mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors duration-500 ${theme === 'light' ? 'text-slate-900' : 'text-white'}`}>
          {project.title}
        </h3>
        
        <p className={`mb-10 leading-relaxed font-light text-[15px] flex-grow ${theme === 'light' ? 'text-slate-600' : 'text-slate-400'}`}>
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tags?.map((tag, idx) => (
            <span 
              key={idx} 
              className={`px-4 py-1.5 text-[10px] font-black uppercase tracking-widest rounded-full border transition-all duration-500 ${theme === 'light' ? 'bg-blue-50 text-blue-600 border-blue-100 group-hover:border-blue-300' : 'bg-blue-500/5 text-blue-300/80 border-blue-500/10 group-hover:border-blue-500/30'}`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;



