import React from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../data/portfolio';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20">
      <div className="max-w-6xl mx-auto px-6 relative z-10">

        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-5 py-2 mb-12 text-[10px] font-black tracking-[0.4em] text-blue-400 bg-blue-500/5 border border-blue-500/20 rounded-full uppercase backdrop-blur-md"
            >
              {PERSONAL_INFO.university}
            </motion.span>

            <h1 className="text-[14vw] md:text-[9vw] lg:text-[140px] font-black tracking-[-0.05em] text-white mb-10 leading-[0.8] flex flex-col items-center">
              <span className="opacity-40 hover:opacity-100 transition-opacity duration-700 cursor-default">Tasarla</span>
              <span className="text-gradient py-4 relative">
                Kodla
                <div className="absolute -inset-2 bg-blue-500/10 blur-2xl -z-10 rounded-full opacity-0 hover:opacity-100 transition-opacity" />
              </span>
              <span className="italic font-thin text-slate-600 hover:text-slate-400 transition-colors duration-700 cursor-default">Yayınla</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed mb-16 font-light tracking-wide">
              Merhaba, ben <span className="text-white font-medium border-b border-blue-500/30">{PERSONAL_INFO.name}</span>. 
              <br />
              <span className="opacity-80">{PERSONAL_INFO.description}</span>
            </p>

            <div className="flex flex-wrap justify-center gap-8">
              <motion.a 
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                href="#projects" 
                className="px-12 py-5 bg-white text-slate-950 rounded-2xl font-black uppercase text-xs tracking-widest transition-all shadow-[0_0_40px_rgba(255,255,255,0.1)] hover:shadow-[0_0_60px_rgba(255,255,255,0.2)]"
              >
                Projelerimi Gör
              </motion.a>

              <motion.a 
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                href="#about" 
                className="px-12 py-5 glass text-white rounded-2xl font-black uppercase text-xs tracking-widest transition-all border border-white/10 hover:border-white/30"
              >
                Hikayem
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Senior Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <div className="w-[1px] h-20 bg-gradient-to-b from-blue-500 via-blue-500/20 to-transparent animate-bounce" />
        <span className="text-[9px] font-black uppercase tracking-[0.5em] text-slate-600">Keşfet</span>
      </motion.div>
    </section>
  );
};

export default Hero;




