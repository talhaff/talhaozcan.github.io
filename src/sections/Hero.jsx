import React from 'react';
import { PERSONAL_INFO } from '../data/portfolio';

const Hero = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 pt-32 pb-24 md:pt-48 md:pb-32">
      <div className="max-w-4xl">
        {/* Küçük Üst Başlık */}
        <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-blue-600 bg-blue-50 rounded-full uppercase">
          {PERSONAL_INFO.university}
        </span>

        {/* Ana Başlık - H1 */}
        <h1 className="text-5xl md:text-8xl font-extrabold tracking-tight text-slate-900 mb-8 leading-[1.1]">
          Geleceğin Sistemlerini <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 italic font-medium tracking-normal">
            Kodla İnşa Ediyorum.
          </span>
        </h1>

        {/* Açıklama Metni */}
        <p className="text-xl md:text-2xl text-slate-500 max-w-2xl leading-relaxed mb-12">
          Merhaba, ben {PERSONAL_INFO.name}. {PERSONAL_INFO.description}
        </p>

        {/* Aksiyon Butonları (CTA) */}
        <div className="flex flex-wrap gap-5">
          <a 
            href="#projects" 
            className="px-10 py-4 bg-blue-600 text-white rounded-2xl font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 active:scale-95"
          >
            Çalışmalarımı Gör
          </a>
          <a 
            href={PERSONAL_INFO.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-10 py-4 bg-white border border-slate-200 rounded-2xl font-bold hover:bg-slate-50 transition-all active:scale-95 flex items-center gap-2"
          >
            GitHub Profili
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;