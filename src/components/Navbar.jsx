import React, { useState, useEffect } from 'react';

function Navbar({ darkMode, setDarkMode }) {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const handleThemeToggle = (e) => {
    const isDark = !darkMode;

    if (!document.startViewTransition) {
      setDarkMode(isDark);
      return;
    }

    const x = e.clientX;
    const y = e.clientY;
    const endRadius = Math.hypot(
      Math.max(x, innerWidth - x),
      Math.max(y, innerHeight - y)
    );

    const transition = document.startViewTransition(() => {
      setDarkMode(isDark);
    });

    transition.ready.then(() => {
      const clipPath = [
        `circle(0px at ${x}px ${y}px)`,
        `circle(${endRadius}px at ${x}px ${y}px)`
      ];

      document.documentElement.animate(
        {
          clipPath: isDark ? clipPath : [...clipPath].reverse(),
        },
        {
          duration: 600,
          easing: "ease-in-out",
          pseudoElement: isDark ? "::view-transition-new(root)" : "::view-transition-old(root)",
        }
      );
    });
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        ::view-transition-old(root),
        ::view-transition-new(root) {
          animation: none;
          mix-blend-mode: normal;
        }
        ::view-transition-old(root) {
          z-index: 1;
        }
        ::view-transition-new(root) {
          z-index: 2;
        }
        .dark::view-transition-old(root) {
          z-index: 2;
        }
        .dark::view-transition-new(root) {
          z-index: 1;
        }
      `}} />

      <div className="fixed top-0 left-0 right-0 z-50 px-4 py-4 sm:py-6 transition-all duration-700 flex justify-center pointer-events-none w-full">
        <nav className={`flex items-center justify-between px-6 py-3 sm:py-4 rounded-full transition-all duration-700 w-full max-w-5xl pointer-events-auto ${scrolled ? 'glass-panel scale-[0.98] shadow-lg' : 'bg-transparent'}`}>
          <a href="#" onClick={() => setIsMenuOpen(false)} className="font-black tracking-tighter text-xl sm:text-2xl bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-cyan-400 drop-shadow-sm z-50 shrink-0">
            OS.
          </a>
          
          <div className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-bold text-slate-700 dark:text-slate-200">
            <a href="#about" className="hover:text-cyan-500 transition-colors">About</a>
            <a href="#services" className="hover:text-cyan-500 transition-colors">Services</a>
            <a href="#skills" className="hover:text-cyan-500 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-cyan-500 transition-colors">Projects</a>
            <a href="#films" className="hover:text-cyan-500 transition-colors">Films</a>
            <a href="#experience" className="hover:text-cyan-500 transition-colors">Experience</a>
            <a href="#contact" className="hover:text-cyan-500 transition-colors">Contact</a>
          </div>

          <div className="flex items-center gap-3 z-50 shrink-0">
            <button 
              onClick={handleThemeToggle}
              className="p-2.5 rounded-full glass-panel text-slate-700 dark:text-slate-200 shadow-sm hover:scale-110 active:scale-95 transition-all group"
            >
              {darkMode ? (
                <svg className="w-5 h-5 group-hover:rotate-45 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M16.243 17.657l.707.707M6.343 6.343l.707-.707m2.828 9.9a5 5 0 117.071-7.071 5 5 0 01-7.071 7.071z" />
                </svg>
              ) : (
                <svg className="w-5 h-5 group-hover:-rotate-45 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
            
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2.5 rounded-full glass-panel text-slate-700 dark:text-slate-200 shadow-sm hover:scale-110 active:scale-95 transition-all"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </nav>
      </div>

      <div 
        className={`fixed inset-0 h-[100dvh] w-full bg-slate-50/98 dark:bg-slate-950/98 backdrop-blur-3xl z-40 transition-all duration-700 ease-[cubic-bezier(0.87,0,0.13,1)] md:hidden overflow-hidden ${isMenuOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'}`}
        style={{ clipPath: isMenuOpen ? 'circle(150% at calc(100% - 3rem) 3rem)' : 'circle(0px at calc(100% - 3rem) 3rem)' }}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8 text-3xl font-black tracking-tighter text-slate-900 dark:text-white w-full px-6 text-center">
          <a href="#about" onClick={() => setIsMenuOpen(false)} className="hover:text-cyan-500 transition-colors">About</a>
          <a href="#services" onClick={() => setIsMenuOpen(false)} className="hover:text-cyan-500 transition-colors">Services</a>
          <a href="#skills" onClick={() => setIsMenuOpen(false)} className="hover:text-cyan-500 transition-colors">Skills</a>
          <a href="#projects" onClick={() => setIsMenuOpen(false)} className="hover:text-cyan-500 transition-colors">Projects</a>
          <a href="#films" onClick={() => setIsMenuOpen(false)} className="hover:text-cyan-500 transition-colors">Films</a>
          <a href="#experience" onClick={() => setIsMenuOpen(false)} className="hover:text-cyan-500 transition-colors">Experience</a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)} className="hover:text-cyan-500 transition-colors">Contact</a>
        </div>
      </div>
    </>
  );
}

export default Navbar;