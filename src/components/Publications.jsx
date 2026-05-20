import React from 'react';

function Publications() {
  return (
    <section id="publications" className="scroll-mt-32 space-y-12 relative z-10 w-full px-2 sm:px-0">
      <div className="space-y-4">
        <h2 className="text-3xl sm:text-4xl font-black tracking-tight">Research & Publications</h2>
        <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-cyan-400 rounded-full"></div>
      </div>
      
      <div className="glass-panel p-8 sm:p-12 rounded-[2.5rem] grid lg:grid-cols-2 gap-12 items-center relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent pointer-events-none z-0"></div>
        
        <div className="space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 text-xs font-bold tracking-widest uppercase border border-cyan-200 dark:border-cyan-800">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            Published Paper
          </div>
          
          <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white leading-tight">
            AI-Driven Legal Chatbot: <span className="text-cyan-500">Enhancing Legal Information Accessibility</span>
          </h3>
          
          <p className="text-base text-slate-700 dark:text-slate-300 font-medium leading-relaxed">
            Authored and presented this research at the 1st International Conference on Recent Trends in Computing and Smart Mobility (RCSM-2025) held at Maulana Azad National Institute of Technology (MANIT) Bhopal. 
          </p>
          
          <p className="text-base text-slate-700 dark:text-slate-300 font-medium leading-relaxed">
            Officially published in IEEE Xplore, this paper investigates the deployment of AI-powered conversational systems to democratize access to legal information, streamlining complex statutory language into accessible, highly accurate guidance for the general public.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a href="https://ieeexplore.ieee.org/document/11508105" target="_blank" rel="noreferrer" className="px-6 py-3 rounded-full bg-slate-900 text-white dark:bg-white dark:text-slate-900 font-bold text-sm hover:-translate-y-1 transition-transform flex items-center gap-2 shadow-lg">
              View on IEEE Xplore
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>

          <div className="flex flex-wrap gap-4 pt-6 mt-4 border-t border-slate-200 dark:border-slate-800">
            <div className="flex items-center justify-center px-4 py-2 bg-white dark:bg-slate-800/80 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 font-black text-slate-800 dark:text-white text-xs sm:text-sm transition-transform hover:scale-105 cursor-default">
              IEEE
            </div>
            <div className="flex items-center justify-center px-4 py-2 bg-white dark:bg-slate-800/80 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 font-black text-slate-800 dark:text-white text-xs sm:text-sm transition-transform hover:scale-105 cursor-default">
              MANIT Bhopal
            </div>
            <div className="flex items-center justify-center px-4 py-2 bg-white dark:bg-slate-800/80 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 font-black text-slate-800 dark:text-white text-xs sm:text-sm transition-transform hover:scale-105 cursor-default">
              RCSM 2025
            </div>
          </div>
        </div>

        <div className="relative w-full h-[300px] sm:h-[400px] flex items-center justify-center z-10 mt-8 lg:mt-0">
          <div className="absolute w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] rounded-full border border-dashed border-cyan-500/30 animate-[spin_25s_linear_infinite]"></div>
          <div className="absolute w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] rounded-full border-2 border-transparent border-l-cyan-400 border-r-blue-400 animate-[spin_15s_linear_infinite]"></div>
          <div className="absolute w-[200px] h-[200px] sm:w-[240px] sm:h-[240px] rounded-full border-2 border-transparent border-t-emerald-400 border-b-cyan-300 animate-[spin_10s_linear_infinite_reverse]"></div>
          
          <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-cyan-400 rounded-full shadow-[0_0_20px_#22d3ee] animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-blue-400 rounded-full shadow-[0_0_15px_#60a5fa] animate-bounce"></div>
          <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-emerald-400 rounded-full shadow-[0_0_10px_#34d399] animate-ping"></div>
          
          <div className="absolute w-20 h-20 rounded-full bg-gradient-to-tr from-cyan-500 to-emerald-500 blur-2xl animate-pulse opacity-30"></div>
          
          <div className="absolute w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white dark:bg-slate-900 flex items-center justify-center z-10 shadow-2xl border border-slate-100 dark:border-slate-800">
            <svg className="w-8 h-8 sm:w-10 sm:h-10 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Publications;