import React from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../data/portfolio';

const Contact = () => {
  return (
    <section id="contact" className="py-24 md:py-40 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
        
        {/* Left Side: Impactful Typography */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="text-blue-400 font-black tracking-[0.4em] uppercase text-[15px] mb-8 inline-block">
            İletişim Kurun
          </span>
          <h2 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-[0.9] mb-8">
            Yeni Bir <br /> 
            <span className="text-gradient">Vizyon</span> <br /> 
            Başlatalım.
          </h2>
          <p className="text-slate-500 text-lg md:text-xl font-light max-w-md leading-relaxed">
            Karmaşık teknik zorlukları estetik ve performansla çözmek için buradayım. 
            Projeniz hakkında konuşmaya ne dersiniz?
          </p>
          
          
        </motion.div>

        {/* Right Side: Interactive Blocks */}
        <div className="space-y-6">
          <motion.a 
            href={`mailto:${PERSONAL_INFO.email}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ x: 10 }}
            className="group block glass p-10 rounded-[2.5rem] border border-white/5 hover:border-blue-500/30 transition-all"
          >
            <div className="flex justify-between items-center">
              <div>
                <p className="text-xs font-black uppercase tracking-widest text-blue-400 mb-2">E-posta</p>
                <h3 className="text-2xl font-bold text-white group-hover:text-blue-300 transition-colors">
                  {PERSONAL_INFO.email}
                </h3>
              </div>
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-blue-600 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
              </div>
            </div>
          </motion.a>

          <motion.a 
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            whileHover={{ x: 10 }}
            className="group block glass p-10 rounded-[2.5rem] border border-white/5 hover:border-indigo-500/30 transition-all"
          >
            <div className="flex justify-between items-center">
              <div>
                <p className="text-xs font-black uppercase tracking-widest text-indigo-400 mb-2">Profil</p>
                <h3 className="text-2xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                  LinkedIn
                </h3>
              </div>
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-indigo-600 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </div>
            </div>
          </motion.a>

        </div>

      </div>
    </section>
  );
};

export default Contact;

