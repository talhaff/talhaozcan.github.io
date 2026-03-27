import React from 'react';
import { NAV_LINKS, PERSONAL_INFO } from '../data/portfolio';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-slate-200 bg-white/70 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 h-20 flex justify-between items-center">
        
        {/* Logo - İsminden otomatik oluşur */}
        <a href="/" className="text-xl font-black tracking-tighter hover:opacity-80 transition-opacity">
          {PERSONAL_INFO.name.split(' ')[0].toUpperCase()}
          <span className="text-blue-600">.{PERSONAL_INFO.name.split(' ')[1].toUpperCase()}</span>
        </a>

        {/* Masaüstü Menü */}
        <div className="hidden md:flex items-center space-x-10">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.label} 
              href={link.href} 
              className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors"
            >
              {link.label}
            </a>
          ))}
          
          {/* İletişim Butonu */}
          <a 
            href="#contact" 
            className="bg-slate-900 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-blue-600 transition-all active:scale-95 shadow-sm"
          >
            İletişim
          </a>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;