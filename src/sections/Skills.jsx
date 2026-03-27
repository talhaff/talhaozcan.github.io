import React from 'react';
import { SKILLS } from '../data/portfolio';

const Skills = () => {
  return (
    <section id="skills" className="bg-slate-900 text-white py-32 rounded-[3rem] mx-4 shadow-2xl">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-extrabold tracking-tight mb-4">Teknik Uzmanlık</h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {SKILLS.map((skillGroup) => (
            <div key={skillGroup.category} className="group">
              <p className="text-blue-500 font-bold uppercase tracking-widest text-sm mb-8 border-b border-slate-800 pb-4 group-hover:border-blue-500 transition-colors">
                {skillGroup.category}
              </p>
              <ul className="space-y-5">
                {skillGroup.items.map((skill) => (
                  <li key={skill} className="text-xl font-medium opacity-80 hover:opacity-100 hover:translate-x-2 transition-all cursor-default">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;