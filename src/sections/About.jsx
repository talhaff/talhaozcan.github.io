import React from 'react';
import { PERSONAL_INFO } from '../data/portfolio';

const About = () => {
  return (
    <section id="about" className="max-w-6xl mx-auto px-6 py-32">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        
        {/* Metin Alanı */}
        <div className="relative">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-100 rounded-full -z-10 blur-3xl opacity-60"></div>
          <h2 className="text-4xl font-extrabold mb-8 text-slate-900 tracking-tight text-center md:text-left">
            Kim Bu <span className="text-blue-600">Talha Özcan?</span>
          </h2>
          <div className="prose prose-slate prose-lg text-slate-600 leading-relaxed space-y-6 text-lg">
            <p>
              İnönü Üniversitesi Bilgisayar Mühendisliği 4. sınıf öğrencisiyim. Mühendisliğin sadece kod yazmak değil, 
              <strong> sürdürülebilir ve verimli sistemler</strong> kurmak olduğuna inanıyorum.
            </p>
            <p>
              Akademik süreçte kazandığım <strong>Compiler Design, Görüntü Analizi ve Veri Madenciliği</strong> gibi teorik bilgileri, 
              pratik projelerle (SaaS, Otel Yönetim Sistemleri) birleştirmeye odaklanıyorum.
            </p>
            
            {/* Sosyal Linkler */}
            <div className="flex gap-6 pt-6 justify-center md:justify-start">
              <a 
                href={PERSONAL_INFO.github} 
                target="_blank" 
                className="flex items-center gap-2 text-slate-500 hover:text-slate-900 font-bold transition-all border-b-2 border-transparent hover:border-slate-900 pb-1"
              >
                GitHub Profilim
              </a>
              <a 
                href={PERSONAL_INFO.linkedin} 
                target="_blank" 
                className="flex items-center gap-2 text-blue-500 hover:text-blue-700 font-bold transition-all border-b-2 border-transparent hover:border-blue-700 pb-1"
              >
                LinkedIn'de Bağlan
              </a>
            </div>
          </div>
        </div>

        {/* Bilgi Kartı Alanı */}
        <div className="bg-blue-600/5 rounded-[3rem] p-12 border border-blue-100 shadow-sm">
          <h3 className="text-2xl font-bold mb-8 text-slate-900">Eğitim & Süreç</h3>
          <div className="space-y-8">
            <div className="border-l-4 border-blue-600 pl-6">
              <h4 className="font-bold text-slate-900">Lisans Derecesi</h4>
              <p className="text-sm text-slate-500 mb-2">{PERSONAL_INFO.university} • 2021 - 2025</p>
              <p className="text-sm italic text-slate-400">Kontrol Teorisi, Veri Madenciliği, Derleyici Tasarımı...</p>
            </div>
            <div className="border-l-4 border-slate-300 pl-6 opacity-60">
              <h4 className="font-bold text-slate-900">Intern Software Developer</h4>
              <p className="text-sm text-slate-500 font-medium">Staj Programı • 2026</p>
              <p className="text-sm text-slate-400">Görüntü İşleme ve 3D Tasarım Odaklı Geliştirme.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;