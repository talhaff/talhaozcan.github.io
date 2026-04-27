import React, { useState } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { NAV_LINKS } from '../data/portfolio';

const Navbar = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-6 md:py-8 flex items-center justify-between">
        
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
            className={`h-12 md:h-20 w-auto object-contain rounded-full border-2 border-white/5 hover:border-blue-500/30 hover:scale-105 transition-all duration-500 shadow-2xl shadow-blue-500/10 ${isScrolled ? 'opacity-80' : 'opacity-100'}`} 
          />
        </motion.a>

        {/* Menu Controls */}
        <div className="flex items-center gap-3 pointer-events-auto">
          {/* Desktop Links */}
          <div className={`hidden md:flex items-center glass rounded-[2rem] px-2 py-2 gap-2 shadow-2xl shadow-black/40 transition-opacity duration-300 ${isScrolled ? 'opacity-80 hover:opacity-100' : 'opacity-100'}`}>
            <div className="flex items-center px-6 gap-8">
              {NAV_LINKS.map((link) => (
                <a 
                  key={link.label} 
                  href={link.href}
                  className="text-[11px] font-black tracking-[0.2em] uppercase text-slate-400 hover:text-white transition-all duration-300"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <a 
              href="#contact" 
              className="px-6 py-3 bg-white text-slate-950 rounded-[1.4rem] text-[10px] font-black uppercase tracking-widest transition-all hover:bg-blue-50 hover:scale-[1.02] active:scale-[0.98] shadow-xl"
            >
              İletişime Geç
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex items-center justify-center w-12 h-12 glass rounded-full border border-white/10 active:scale-90 transition-transform"
          >
            <div className="w-5 h-4 relative flex flex-col justify-between">
              <motion.span 
                animate={isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                className="w-full h-[2px] bg-white rounded-full origin-center"
              />
              <motion.span 
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                className="w-full h-[2px] bg-white rounded-full"
              />
              <motion.span 
                animate={isOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                className="w-full h-[2px] bg-white rounded-full origin-center"
              />
            </div>
          </button>
          
          <a 
            href="#contact" 
            className="md:hidden px-5 py-3 bg-white text-slate-950 rounded-full text-[10px] font-black uppercase tracking-widest"
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
            className="fixed inset-0 bg-slate-950 z-[-1] origin-top flex flex-col items-center justify-center pointer-events-auto"
          >
            <motion.div 
              variants={containerVariants}
              initial="initial"
              animate="open"
              exit="initial"
              className="flex flex-col items-center gap-8"
            >
              {NAV_LINKS.map((link, index) => (
                <div key={index} className="overflow-hidden">
                  <motion.a 
                    variants={linkVariants}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-4xl md:text-6xl font-black text-white hover:text-blue-500 transition-colors uppercase tracking-tighter"
                  >
                    {link.label}
                  </motion.a>
                </div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;