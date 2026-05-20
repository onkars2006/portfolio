import React, { useState, useEffect } from 'react';

function Hero() {
  const titles = [
    "a GenAI Backend Developer.",
    "an AI Product Builder.",
    "a SaaS Architect.",
    "an AI Researcher."
  ];
  
  const [titleIndex, setTitleIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setTitleIndex((prev) => (prev + 1) % titles.length);
        setIsAnimating(false);
      }, 500);
    }, 3000);
    return () => clearInterval(interval);
  }, [titles.length]);

  return (
    <section className="min-h-[65vh] md:min-h-[75vh] flex flex-col justify-center items-center text-center space-y-8 sm:space-y-12 relative w-full mx-auto px-4 sm:px-0 -mt-8 sm:-mt-16">
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] sm:w-[100vw] md:w-[80vw] h-[80vw] sm:h-[60vw] md:h-[50vw] bg-slate-200/50 dark:bg-slate-800/40 blur-[120px] sm:blur-[250px] rounded-full pointer-events-none mix-blend-overlay -z-10 animate-float-slow"></div>
      
      <div className="space-y-6 sm:space-y-8 relative z-10 flex flex-col items-center w-full max-w-full" style={{ perspective: '1200px' }}>
        
        <div className="animate-reveal-1 animate-float-slower inline-flex items-center gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-full glass-panel text-slate-700 dark:text-slate-200 text-[10px] sm:text-sm font-black tracking-widest uppercase shadow-2xl hover:scale-110 transition-transform cursor-default border border-white/60 dark:border-slate-600/50">
          <span className="relative flex h-2 sm:h-2.5 w-2 sm:w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 sm:h-2.5 w-2 sm:w-2.5 bg-cyan-500 shadow-[0_0_12px_rgba(6,182,212,1)]"></span>
          </span>
          Building the Future with AI
        </div>
        
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[6.5rem] font-black tracking-tighter leading-tight sm:leading-tight w-full text-slate-900 dark:text-white drop-shadow-2xl px-1 sm:px-2 break-words">
          <span className="block animate-reveal-2 mb-2 sm:mb-4 text-3xl sm:text-4xl md:text-5xl text-slate-500 dark:text-slate-400 tracking-tight font-bold">
            Hi, I'm
          </span>
          <span className="block animate-reveal-3">
            <span className="animate-gradient-x text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-cyan-600 to-slate-900 dark:from-white dark:via-cyan-400 dark:to-slate-300 inline-block pb-4 sm:pb-6">
              Onkar Somvanshi.
            </span>
          </span>
        </h1>
        
        <div className="animate-reveal-4 flex flex-wrap items-center justify-center gap-x-2 sm:gap-x-3 text-xl sm:text-3xl md:text-4xl font-bold tracking-tight mt-4 sm:mt-6 min-h-[5rem] sm:min-h-[4rem] w-full px-4 overflow-visible">
          <span className="text-slate-600 dark:text-slate-400">I am</span>
          <span className={`inline-block text-cyan-500 dark:text-cyan-400 transition-all duration-500 transform ${isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'} pb-2`}>
            {titles[titleIndex]}
          </span>
        </div>

        <div className="animate-reveal-5 flex flex-col sm:flex-row gap-4 sm:gap-6 pt-8 sm:pt-10 w-full sm:w-auto relative z-10 px-2 sm:px-0">
          <a 
            href="#projects" 
            className="animate-pulse-slow w-full sm:w-auto px-8 sm:px-14 py-4 sm:py-5 rounded-full bg-slate-900 text-white dark:bg-white dark:text-slate-900 font-black text-base sm:text-xl hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] active:scale-95 transition-all duration-500 flex justify-center items-center gap-3"
          >
            Explore Projects
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
          <a 
            href="#contact" 
            className="w-full sm:w-auto px-8 sm:px-14 py-4 sm:py-5 rounded-full glass-panel font-black text-base sm:text-xl hover:-translate-y-2 hover:bg-white/40 dark:hover:bg-slate-800/80 active:scale-95 transition-all duration-500 text-slate-900 dark:text-slate-100 flex justify-center items-center shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.1)]"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;