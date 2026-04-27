import React from 'react';
import { motion } from 'framer-motion';
import { NAV_LINKS } from '../data/portfolio';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-8 pointer-events-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Bağımsız Logo - Daha kontrollü ve prestijli */}
        <motion.a 
          href="/"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="pointer-events-auto"
        >
          <img 
            src="/Talha-Ozcan-logo.png" 
            alt="Logo" 
            className="h-16 md:h-20 w-auto object-contain rounded-full border-2 border-white/5 hover:border-blue-500/30 hover:scale-105 transition-all duration-500 shadow-2xl shadow-blue-500/10" 
          />
        </motion.a>

        {/* Minimalist Glass Menu */}
        <div className="glass rounded-[2rem] px-2 py-2 flex items-center gap-2 pointer-events-auto shadow-2xl shadow-black/40">
          <div className="hidden md:flex items-center px-6 gap-8">
            {NAV_LINKS.map((link) => (
              <a 
                key={link.label} 
                href={link.href}
                className="text-[13px] font-bold tracking-widest uppercase text-slate-400 hover:text-white transition-all duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>

          <a 
            href="#contact" 
            className="px-6 py-3 bg-white text-slate-950 rounded-[1.4rem] text-xs font-black uppercase tracking-wider transition-all hover:bg-blue-50 hover:scale-[1.02] active:scale-[0.98] shadow-xl"
          >
            İletişime Geç
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
