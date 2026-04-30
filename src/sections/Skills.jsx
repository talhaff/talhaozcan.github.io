import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '../data/portfolio';
import { useTheme } from '../ThemeContext';

const Skills = () => {
  const { theme } = useTheme();

  return (
    <section id="skills" className="py-12 md:py-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-16 gap-8">
          <div>
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-blue-600 dark:text-blue-400 font-bold tracking-[0.2em] uppercase text-sm"
            >
              Yetenek Seti
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className={`text-4xl md:text-5xl font-extrabold mt-4 tracking-tight ${theme === 'light' ? 'text-slate-950' : 'text-white'}`}
            >
              Teknik Uzmanlık & <br /> <span className="text-gradient">Araç Kutusu</span>
            </motion.h2>
          </div>
          <p className={`${theme === 'light' ? 'text-slate-600' : 'text-slate-400'} max-w-md font-light leading-relaxed`}>
            Modern web teknolojileri ve sistem mimarisi konusundaki deneyimlerimi sürekli güncel tutuyorum.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SKILLS.map((skillGroup, idx) => (
            <motion.div 
              key={skillGroup.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className={`glass p-8 rounded-[2rem] border transition-all group ${theme === 'light' ? 'border-slate-200 hover:border-blue-500/30' : 'border-slate-800 hover:border-blue-500/30'}`}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${theme === 'light' ? 'bg-blue-600/5 text-blue-600' : 'bg-blue-600/10 text-blue-400'}`}>
                   <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
                </div>
                <h3 className={`text-xl font-bold ${theme === 'light' ? 'text-slate-900' : 'text-white'}`}>{skillGroup.category}</h3>
              </div>
              
              <ul className="space-y-4">
                {skillGroup.items.map((skill) => (
                   <motion.li 
                    key={skill} 
                    whileHover={{ x: 5 }}
                    className={`flex items-center gap-3 font-medium group/item cursor-default ${theme === 'light' ? 'text-slate-600' : 'text-slate-400'}`}
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-600 group-hover/item:scale-150 transition-transform" />
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

