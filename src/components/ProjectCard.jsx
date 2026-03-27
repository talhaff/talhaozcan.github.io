import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <div className="group bg-white border border-slate-200/60 rounded-[2.5rem] p-10 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
      <div className="flex flex-col h-full">
        {/* Başlık ve Link İkonu */}
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-bold group-hover:text-blue-600 transition-colors">
            {project.title}
          </h3>
          <a 
            href={project.github} 
            target="_blank" 
            className="text-slate-400 hover:text-blue-600 transition-colors"
          >
            // ProjectCard.jsx içindeki SVG'yi şu şekilde güncelle:
            <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2"      /* Düzeltildi */
            strokeLinecap="round"   /* Düzeltildi */
            strokeLinejoin="round"  /* Düzeltildi */
            >
            <path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
            </svg>
          </a>
        </div>

        {/* Açıklama */}
        <p className="text-slate-500 leading-relaxed mb-8 flex-grow">
          {project.description}
        </p>

        {/* Teknolojiler (Tags) */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span 
              key={tag} 
              className="px-4 py-1.5 bg-slate-50 border border-slate-100 rounded-full text-xs font-bold text-slate-600 uppercase tracking-tighter"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;