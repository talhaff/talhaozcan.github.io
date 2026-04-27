import React from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../data/portfolio';

const Contact = () => {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-6xl mx-auto relative overflow-hidden glass rounded-[3rem] p-12 md:p-24 border border-slate-800">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-indigo-600/20 rounded-full blur-3xl" />
        
        <div className="relative z-10 flex flex-col items-center text-center">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-blue-400 font-bold tracking-[0.3em] uppercase text-sm mb-6"
          >
            İletişim
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-7xl font-extrabold mb-8 tracking-tighter text-white leading-[1.1]"
          >
            Birlikte Harika Şeyler <br /> <span className="text-gradient">İnşa Edelim</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-slate-400 mb-12 max-w-2xl mx-auto font-light"
          >
            Yeni bir proje, iş birliği veya sadece bir merhaba için bana ulaşabilirsiniz. 
            Dijital dünyada iz bırakacak fikirlerinizi duymayı bekliyorum.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-6"
          >
            <motion.a 
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              href={`mailto:${PERSONAL_INFO.email}`} 
              className="px-10 py-5 bg-white text-slate-900 rounded-2xl font-bold transition-all flex items-center gap-3 shadow-2xl shadow-blue-500/20 text-lg"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              E-posta Gönder
            </motion.a>
            
            <motion.a 
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              href={PERSONAL_INFO.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-10 py-5 glass bg-slate-800 text-white rounded-2xl font-bold transition-all flex items-center gap-3 text-lg border border-slate-700"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              LinkedIn
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

