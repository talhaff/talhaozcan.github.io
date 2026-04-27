import React, { useEffect } from 'react';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import ProjectsSection from './sections/ProjectsSection';
import Skills from './sections/Skills';
import About from './sections/About'; 
import Contact from './sections/Contact'; 

function App() {
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 dark">
      <Navbar />
      
      <main className="relative z-10 space-y-20 pb-32">
        <Hero />
        <ProjectsSection />
        <Skills />
        <About />
        <Contact /> 
      </main>

      <footer className="relative z-10 py-12 text-center text-slate-400 text-sm border-t border-slate-800 bg-slate-900/50 backdrop-blur-sm transition-colors">
        © {new Date().getFullYear()} Talha Özcan. Tüm Hakları Saklıdır.
      </footer>
    </div>
  );
}

export default App;