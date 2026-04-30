import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../ThemeContext';
import { PROJECTS } from '../data/portfolio';
import ProjectCard from "../components/ProjectCard";

const ProjectsSection = () => {
  const { theme } = useTheme();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="projects" className="py-12 md:py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-16 gap-8">
          <div>
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-blue-400 font-bold tracking-[0.3em] uppercase text-sm"
            >
              Portfolyo
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className={`text-4xl md:text-6xl font-extrabold mt-4 tracking-tighter leading-[1.1] ${theme === 'light' ? 'text-slate-950' : 'text-white'}`}
            >
              Mühendislik Çözümleri & <br /> <span className="text-gradient">Dijital Ürünler</span>
            </motion.h2>
          </div>
          <p className={`${theme === 'light' ? 'text-slate-600' : 'text-slate-400'} max-w-md font-light leading-relaxed`}>
            Karmaşık problemleri basit ve etkili yazılım çözümlerine dönüştürdüğüm projelerimden bazıları.
          </p>
        </div>

        <motion.div 
          variants={container} 
          initial="hidden" 
          whileInView="show" 
          viewport={{ once: true, margin: "-100px" }} 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {PROJECTS.map((project, index) => (
            <motion.div key={index} variants={item} className="h-full">
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
