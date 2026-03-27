import React from 'react';
import { PERSONAL_INFO } from '../data/portfolio';

const Contact = () => {
  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 py-32 border-t border-slate-200/60">
      <div className="bg-blue-600 rounded-[3rem] p-12 md:p-24 text-center text-white shadow-2xl shadow-blue-200 relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        
        <div className="relative z-10">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-8 tracking-tight">
            Yeni Bir Projeniz mi Var?
          </h2>
          <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-2xl mx-auto font-medium">
            Profesyonel iş birlikleri, projeler veya sadece selam vermek için bana her zaman ulaşabilirsiniz.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6">
            <a 
              href={`mailto:${PERSONAL_INFO.email}`} 
              className="px-10 py-5 bg-white text-blue-600 rounded-2xl font-bold hover:bg-slate-50 transition-all flex items-center gap-3 active:scale-95 text-lg shadow-lg"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="m22 2-7 20-4-9-9-4Z" />
                <path d="M22 2 11 13" />
              </svg>
              Mail Gönder
            </a>
            
            <a 
              href={PERSONAL_INFO.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-10 py-5 bg-blue-700 text-white border border-blue-500 rounded-2xl font-bold hover:bg-blue-800 transition-all flex items-center gap-3 active:scale-95 text-lg"
            >
              LinkedIn'de Bağlan
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;