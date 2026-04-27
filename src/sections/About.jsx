import React from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../data/portfolio';

const About = () => {
  return (
    <section id="about" className="max-w-6xl mx-auto px-6 py-32">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        
        {/* Metin Alanı */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-600/10 rounded-full -z-10 blur-3xl"></div>
          <motion.span 
            className="text-blue-400 font-bold tracking-[0.2em] uppercase text-sm mb-4 inline-block"
          >
            Hakkımda
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-white tracking-tight leading-tight">
            Kim Bu <span className="text-gradient">{PERSONAL_INFO.name}?</span>
          </h2>
          <div className="text-slate-400 leading-relaxed space-y-6 text-lg font-light">
            <p>
              İnönü Üniversitesi Bilgisayar Mühendisliği 4. sınıf öğrencisiyim. Mühendisliğin sadece kod yazmak değil, 
              <strong className="text-white font-semibold"> sürdürülebilir ve verimli sistemler</strong> kurmak olduğuna inanıyorum.
            </p>
            <p>
              Akademik süreçte kazandığım <strong className="text-white font-semibold">Compiler Design, Görüntü Analizi ve Veri Madenciliği</strong> gibi teorik bilgileri, 
              pratik projelerle birleştirmeye odaklanıyorum.
            </p>
            
            {/* Sosyal Linkler */}
            <div className="flex gap-6 pt-6">
              <a 
                href={PERSONAL_INFO.github} 
                target="_blank" 
                className="group flex items-center gap-2 text-slate-400 hover:text-blue-400 font-bold transition-all"
              >
                <span className="border-b-2 border-transparent group-hover:border-blue-600 transition-all">GitHub Profilim</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
              </a>
              <a 
                href={PERSONAL_INFO.linkedin} 
                target="_blank" 
                className="group flex items-center gap-2 text-blue-400 font-bold transition-all"
              >
                <span className="border-b-2 border-transparent group-hover:border-blue-600 transition-all">LinkedIn</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Bilgi Kartı Alanı */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="glass rounded-[3rem] p-12 border border-slate-800 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl" />
          
          <h3 className="text-2xl font-bold mb-10 text-white">Eğitim & Kariyer</h3>
          <div className="space-y-12">
            <div className="relative pl-8 border-l-2 border-blue-600">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-600 border-4 border-slate-900" />
              <h4 className="font-bold text-white text-lg">Lisans Derecesi</h4>
              <p className="text-sm text-blue-400 font-medium mb-3">{PERSONAL_INFO.university} • 2022 - 2026</p>
              <p className="text-sm text-slate-400 font-light leading-relaxed">
                Kontrol Teorisi, Veri Madenciliği, Derleyici Tasarımı ve Görüntü Analizi konularında uzmanlık.
              </p>
            </div>
            
            <div className="relative pl-8 border-l-2 border-slate-700">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-700 border-4 border-slate-900" />
              <h4 className="font-bold text-white text-lg">Intern Software Developer</h4>
              <p className="text-sm text-slate-400 font-medium mb-3">Staj Programı • 2026</p>
              <p className="text-sm text-slate-400 font-light leading-relaxed">
                Backend sistemleri ve 3D görselleştirme teknolojileri üzerine çalışmalar.
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
