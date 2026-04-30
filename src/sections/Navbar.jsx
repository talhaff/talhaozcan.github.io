import React, { useState } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { NAV_LINKS } from '../data/portfolio';
import { useTheme } from '../ThemeContext';

const Navbar = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    
    if (latest > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  const menuVariants = {
    initial: { scaleY: 0 },
    animate: { 
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0]
      }
    },
    exit: { 
      scaleY: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const linkVariants = {
    initial: { y: "30vh", transition: { duration: 0.5 } },
    open: { y: 0, transition: { duration: 0.7, ease: [0, 0.55, 0.45, 1] } }
  };

  const containerVariants = {
    initial: { transition: { staggerChildren: 0.09, staggerDirection: -1 } },
    open: { transition: { delayChildren: 0.3, staggerChildren: 0.09, staggerDirection: 1 } }
  };

  const ThemeToggle = () => (
    <button
      onClick={toggleTheme}
      className={`flex items-center justify-center w-10 h-10 md:w-12 md:h-12 glass rounded-full border border-white/10 active:scale-90 transition-all duration-300 hover:bg-white/10 ${theme === 'light' ? 'text-blue-600' : 'text-yellow-400'}`}
    >
      {theme === 'light' ? (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
      )}
    </button>
  );

  return (
    <motion.nav 
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: -100, opacity: 0 },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-0 left-0 right-0 z-[100] pointer-events-none"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-8 flex items-center justify-between">
        
        {/* Bağımsız Logo */}
        <motion.a 
          href="/"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="pointer-events-auto"
        >
          <img 
            src="/Talha-Ozcan-logo.png" 
            alt="Logo" 
            className={`h-16 md:h-20 w-auto object-contain rounded-full border-2 hover:border-blue-500/30 hover:scale-105 transition-all duration-500 ${isScrolled ? 'opacity-80' : 'opacity-100'} ${theme === 'light' ? 'border-slate-200 shadow-xl shadow-blue-500/5' : 'border-white/5 shadow-2xl shadow-blue-500/10'}`} 
          />
        </motion.a>

        {/* Menu Controls */}
        <div className="flex items-center gap-3 pointer-events-auto">
          {/* Theme Toggle Desktop */}
          <div className="hidden md:block">
            <ThemeToggle />
          </div>

          {/* Desktop Links */}
          <div className={`hidden md:flex items-center glass rounded-[2rem] px-2 py-2 gap-2 shadow-2xl shadow-black/40 transition-opacity duration-300 ${isScrolled ? 'opacity-80 hover:opacity-100' : 'opacity-100'}`}>
            <div className="flex items-center px-6 gap-8">
              {NAV_LINKS.map((link) => (
                <a 
                  key={link.label} 
                  href={link.href}
                  className="text-[11px] font-black tracking-[0.2em] uppercase text-slate-400 hover:text-blue-500 transition-all duration-300 dark:hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <a 
              href="#contact" 
              className="px-6 py-3 bg-slate-950 text-white dark:bg-white dark:text-slate-950 rounded-[1.4rem] text-[10px] font-black uppercase tracking-widest transition-all hover:bg-blue-600 dark:hover:bg-blue-50 hover:scale-[1.02] active:scale-[0.98] shadow-xl"
            >
              İletişime Geç
            </a>
          </div>

          {/* Theme Toggle Mobile */}
          <div className="md:hidden">
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex items-center justify-center w-14 h-14 glass rounded-full border border-white/10 active:scale-90 transition-transform"
          >
            <div className="w-5 h-4 relative flex flex-col justify-between">
              <motion.span 
                animate={isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                className={`w-full h-[2px] rounded-full origin-center ${theme === 'light' ? 'bg-slate-900' : 'bg-white'}`}
              />
              <motion.span 
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                className={`w-full h-[2px] rounded-full ${theme === 'light' ? 'bg-slate-900' : 'bg-white'}`}
              />
              <motion.span 
                animate={isOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                className={`w-full h-[2px] rounded-full origin-center ${theme === 'light' ? 'bg-slate-900' : 'bg-white'}`}
              />
            </div>
          </button>
          
          <a 
            href="#contact" 
            className="hidden sm:flex md:hidden px-6 py-3.5 bg-slate-950 text-white dark:bg-white dark:text-slate-950 rounded-full text-[10px] font-black uppercase tracking-widest"
          >
            İletişim
          </a>
        </div>
      </div>

      {/* Mobile Fullscreen Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            variants={menuVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className={`fixed inset-0 z-[-1] origin-top flex flex-col items-center justify-center pointer-events-auto backdrop-blur-2xl ${theme === 'light' ? 'bg-slate-50/95' : 'bg-slate-950/95'}`}
          >
            {/* Arka Plan Süslemeleri */}
            <div className={`absolute top-1/4 -left-20 w-64 h-64 rounded-full blur-[120px] ${theme === 'light' ? 'bg-blue-600/5' : 'bg-blue-600/10'}`} />
            <div className={`absolute bottom-1/4 -right-20 w-64 h-64 rounded-full blur-[120px] ${theme === 'light' ? 'bg-purple-600/5' : 'bg-purple-600/10'}`} />

            <motion.div 
              variants={containerVariants}
              initial="initial"
              animate="open"
              exit="initial"
              className="flex flex-col items-center gap-10 relative z-10"
            >
              {NAV_LINKS.map((link, index) => (
                <div key={index} className="overflow-hidden group">
                  <motion.a 
                    variants={linkVariants}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`relative text-3xl font-black transition-all duration-500 uppercase tracking-[-0.02em] flex items-center justify-center group ${theme === 'light' ? 'text-slate-400 hover:text-slate-900' : 'text-white/40 hover:text-white'}`}
                  >
                    <span className="absolute right-[calc(100%+1.5rem)] text-xs font-black text-blue-500 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 group-hover:translate-x-0">0{index + 1}</span>
                    {link.label}
                    <div className="absolute -bottom-2 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-600 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
                  </motion.a>
                </div>
              ))}
              
              <motion.div variants={linkVariants} className="pt-10">
                <a 
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className={`px-10 py-4 glass rounded-full text-[10px] font-black uppercase tracking-[0.2em] border transition-colors ${theme === 'light' ? 'text-slate-900 border-slate-200' : 'text-white border-white/10'}`}
                >
                  Proje Başlat
                </a>
              </motion.div>
            </motion.div>

            {/* Alt Bilgi */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="absolute bottom-12 flex gap-8 text-[10px] font-black uppercase tracking-widest text-slate-500"
            >
              <a href="https://www.linkedin.com/in/talha-özcan" className="hover:text-blue-400 transition-colors">LinkedIn</a>
              <a href="https://github.com/talhaff" className="hover:text-blue-400 transition-colors">GitHub</a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </motion.nav>
  );
};

export default Navbar;
