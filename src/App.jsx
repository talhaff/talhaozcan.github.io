import React, { useEffect } from 'react';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import ProjectsSection from './sections/ProjectsSection';
import Skills from './sections/Skills';
import About from './sections/About'; 
import Contact from './sections/Contact'; 
import BackgroundEffects from './components/BackgroundEffects';

function App() {
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <div className="relative min-h-screen selection:bg-blue-500/30 selection:text-white">
      <BackgroundEffects />
      <Navbar />
      
      <main className="relative z-10">
        <Hero />
        <ProjectsSection />
        <Skills />
        <About />
        <Contact /> 
      </main>

      <footer className="relative z-10 py-16 text-center text-slate-500 text-sm border-t border-slate-900 bg-slate-950/50 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6">
          <p className="mb-4">© {new Date().getFullYear()} Talha Özcan. Tüm Hakları Saklıdır.</p>
          <p className="text-xs opacity-50 tracking-widest uppercase">Mükemmeliyet bir alışkanlıktır.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;