import React from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../data/portfolio';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-40">
      <div className="max-w-6xl mx-auto px-6 relative z-10">

        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            

            <h1 className="text-[14vw] md:text-[9vw] lg:text-[140px] font-black tracking-[-0.05em] text-white mb-6 md:mb-10 leading-[0.8] flex flex-col items-center">
              <span className="opacity-30 hover:opacity-100 transition-opacity duration-700 cursor-default">Tasarla</span>
              <span className="text-gradient py-2 md:py-4 relative">
                Kodla
                <div className="absolute -inset-2 bg-blue-500/10 blur-2xl -z-10 rounded-full opacity-0 hover:opacity-100 transition-opacity" />
              </span>
              <span className="italic font-thin text-slate-700 hover:text-slate-400 transition-colors duration-700 cursor-default">Yayınla</span>
            </h1>

            <p className="text-sm md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed mb-10 md:mb-16 font-light tracking-wide px-10 md:px-0">
              Merhaba, ben <span className="text-white font-medium border-b border-blue-500/30">{PERSONAL_INFO.name}</span>. 
              <br className="hidden md:block" />
              <span className="opacity-80">{PERSONAL_INFO.description}</span>
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 md:gap-8">
              <motion.a 
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                href="#projects" 
                className="w-[70%] sm:w-auto px-8 md:px-12 py-3.5 md:py-5 bg-white text-slate-950 rounded-2xl font-black uppercase text-[10px] md:text-xs tracking-widest transition-all shadow-[0_0_40px_rgba(255,255,255,0.05)]"
              >
                Projeleri Gör
              </motion.a>

              <motion.a 
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                href="#about" 
                className="w-[70%] sm:w-auto px-8 md:px-12 py-3.5 md:py-5 glass text-white rounded-2xl font-black uppercase text-[10px] md:text-xs tracking-widest transition-all border border-white/10"
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
      </motion.div>
    </section>
  );
};

export default Hero;




