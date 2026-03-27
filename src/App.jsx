import React from 'react';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import ProjectsSection from './sections/ProjectsSection';
import Skills from './sections/Skills';
import About from './sections/About'; 
import Contact from './sections/Contact'; 

function App() {
  return (
    <div className="min-h-screen bg-slate-50 selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      
      <main className="space-y-20 pb-32">
        <Hero />
        <ProjectsSection />
        <Skills />
        <About />
        {/* HATA BURADAYDI: Buraya Contact eklememiz gerekiyordu */}
        <Contact /> 
      </main>

      <footer className="py-12 text-center text-slate-400 text-sm border-t border-slate-200 bg-white">
        © {new Date().getFullYear()} Talha Özcan. Tüm Hakları Saklıdır.
      </footer>
    </div>
  );
}

export default App;