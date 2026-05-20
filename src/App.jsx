import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Skills from './components/Skills';
import Projects from './components/Projects';
import FilmScreen from './components/FilmScreen';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Modal from './components/Modal';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      document.body.style.backgroundColor = '#020617';
    } else {
      document.documentElement.classList.remove('dark');
      document.body.style.backgroundColor = '#f8fafc';
    }
  }, [darkMode]);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedProject]);

  return (
    <div className="min-h-screen relative selection:bg-cyan-500 selection:text-white flex flex-col items-center w-full overflow-x-hidden bg-slate-50 dark:bg-[#020617] text-slate-900 dark:text-white transition-colors duration-500">
      
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden flex items-center justify-center">
        <div className="absolute top-[-10%] left-[-10%] w-[150%] sm:w-[80%] h-[100%] rounded-full bg-slate-300/40 dark:bg-slate-800/20 blur-[100px] animate-float-slow opacity-60"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[120%] sm:w-[60%] h-[80%] rounded-full bg-cyan-200/30 dark:bg-cyan-900/15 blur-[120px] animate-float-slower opacity-50"></div>
      </div>

      <div className="fixed inset-0 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30 mix-blend-overlay z-0"></div>
      
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      
      <main className="w-full max-w-7xl px-4 sm:px-6 lg:px-12 pt-28 sm:pt-32 space-y-32 sm:space-y-48 pb-10 relative z-10 flex flex-col items-center">
        <Hero />
        <div className="w-full space-y-32 sm:space-y-48">
          <About />
          <Services />
          <Skills />
          <Projects onOpenModal={setSelectedProject} />
          <FilmScreen />
          <Experience />
          <Contact />
        </div>
      </main>

      <Footer />

      {selectedProject && (
        <Modal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}

      <a
        href="https://wa.me/919356480850?text=Hi%20Onkar,%20I%20would%20like%20to%20discuss%20a%20project!"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 sm:bottom-10 sm:right-10 z-[100] flex items-center gap-3 px-4 sm:px-6 py-3 sm:py-4 rounded-full bg-gradient-to-r from-cyan-600 to-teal-500 text-white font-black text-sm sm:text-base shadow-[0_10px_40px_-10px_rgba(6,182,212,0.8)] hover:-translate-y-2 hover:scale-105 active:scale-95 transition-all duration-300 group border border-white/20"
      >
        <div className="relative flex items-center justify-center">
          <div className="absolute inset-0 bg-white rounded-full animate-ping opacity-30"></div>
          <svg className="w-6 h-6 sm:w-7 sm:h-7 relative z-10" fill="currentColor" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.347-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.876 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
          </svg>
        </div>
        <span className="hidden sm:inline-block tracking-wide">Discuss Now</span>
      </a>
    </div>
  );
}

export default App;