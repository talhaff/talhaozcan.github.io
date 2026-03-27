import React from 'react';
import { PROJECTS } from '../data/portfolio';
import ProjectCard from '../components/ProjectCard';

const ProjectsSection = () => {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-24 border-t border-slate-200/60">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
        <div>
          <h2 className="text-4xl font-extrabold tracking-tight mb-4 text-slate-900">Seçkin Projeler</h2>
          <p className="text-lg text-slate-500 max-w-xl">
            Mühendislik disipliniyle geliştirdiğim, ölçeklenebilir ve temiz kod odaklı çalışmalarım.
          </p>
        </div>
        <div className="hidden md:block h-1 w-24 bg-blue-600 rounded-full"></div>
      </div>

      {/* Grid Yapısı */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {PROJECTS.map((item) => (
          <ProjectCard key={item.id} project={item} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;