import React from 'react';

function GenAIEngine() {
  return (
    <section className="w-full relative z-10 py-20 px-2 sm:px-0">
      <div className="space-y-4 text-center mb-16 relative z-30">
        <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 dark:text-white">Neural Architecture</h2>
        <div className="h-1.5 w-24 bg-gradient-to-r from-transparent via-cyan-500 to-transparent rounded-full mx-auto opacity-80"></div>
      </div>

      <div className="w-full max-w-6xl mx-auto h-[600px] sm:h-[700px] relative flex items-center justify-center bg-transparent overflow-hidden perspective-[2000px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)] sm:[mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_100%)]">
        
        <div className="absolute bottom-10 w-[80%] h-32 bg-cyan-500/20 blur-[100px] rounded-[100%] pointer-events-none"></div>

        <div className="absolute top-[20%] left-[5%] sm:left-[15%] bg-white/40 dark:bg-slate-900/40 p-4 rounded-2xl border border-cyan-500/30 animate-float-slow shadow-[0_0_30px_rgba(34,211,238,0.15)] z-20 backdrop-blur-md">
          <div className="text-xs font-black text-cyan-600 dark:text-cyan-500 mb-1 uppercase tracking-widest">Active Pipeline</div>
          <div className="text-sm sm:text-base font-bold text-slate-800 dark:text-white">RAG Integration</div>
          <div className="w-full bg-slate-200 dark:bg-slate-800 h-1.5 rounded-full mt-2 overflow-hidden">
            <div className="h-full bg-cyan-400 w-[85%] rounded-full shadow-[0_0_10px_cyan]"></div>
          </div>
        </div>

        <div className="absolute bottom-[25%] right-[5%] sm:right-[15%] bg-white/40 dark:bg-slate-900/40 p-4 rounded-2xl border border-emerald-500/30 animate-float-slower shadow-[0_0_30px_rgba(16,185,129,0.15)] z-20 backdrop-blur-md">
          <div className="text-xs font-black text-emerald-600 dark:text-emerald-500 mb-1 uppercase tracking-widest">Inference Engine</div>
          <div className="text-sm sm:text-base font-bold text-slate-800 dark:text-white">LLM Processing</div>
          <div className="flex items-center gap-2 mt-2">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-medium text-slate-600 dark:text-slate-400">12ms Latency</span>
          </div>
        </div>

        <div className="absolute top-[30%] right-[10%] sm:right-[20%] bg-white/40 dark:bg-slate-900/40 p-3 rounded-xl border border-blue-500/30 animate-bounce z-20 backdrop-blur-md hidden sm:block">
          <div className="text-xs font-bold text-slate-800 dark:text-slate-200">Agentic Workflows Active</div>
        </div>

        <div className="relative w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] flex items-center justify-center transform-style-3d">
          
          <div className="absolute inset-0 rounded-full border border-cyan-500/20 dark:border-cyan-500/30 shadow-[0_0_50px_rgba(34,211,238,0.1)] [transform:rotateX(70deg)] animate-[spin_10s_linear_infinite]"></div>
          <div className="absolute inset-4 rounded-full border-2 border-transparent border-t-cyan-500/60 border-b-blue-500/60 [transform:rotateX(70deg)_rotateY(20deg)] animate-[spin_15s_linear_infinite_reverse]"></div>
          <div className="absolute inset-10 rounded-full border border-dashed border-emerald-500/40 [transform:rotateX(70deg)_rotateY(-20deg)] animate-[spin_20s_linear_infinite]"></div>
          
          <div className="absolute w-[80%] h-[80%] rounded-full border border-cyan-400/20 [transform:rotateX(60deg)_rotateZ(45deg)] animate-[spin_12s_linear_infinite]">
            <div className="absolute -top-2 left-1/2 w-4 h-4 bg-cyan-400 rounded-full shadow-[0_0_20px_#22d3ee]"></div>
          </div>
          
          <div className="absolute w-[90%] h-[90%] rounded-full border border-blue-400/20 [transform:rotateX(80deg)_rotateZ(-45deg)] animate-[spin_18s_linear_infinite_reverse]">
            <div className="absolute bottom-0 right-1/4 w-3 h-3 bg-emerald-400 rounded-full shadow-[0_0_15px_#34d399]"></div>
          </div>

          <div className="absolute w-24 h-24 sm:w-32 sm:h-32 [transform:rotateX(0deg)] flex items-center justify-center group z-10">
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 to-blue-500 rounded-2xl [transform:rotateZ(45deg)] opacity-30 blur-xl group-hover:opacity-50 transition-opacity duration-500"></div>
            
            <div className="absolute inset-0 bg-white/80 dark:bg-[#0f172a] rounded-2xl [transform:rotateZ(45deg)] border-2 border-cyan-400/50 shadow-[0_0_30px_rgba(34,211,238,0.3),inset_0_0_20px_rgba(34,211,238,0.2)] overflow-hidden flex items-center justify-center backdrop-blur-sm">
               <div className="absolute w-[200%] h-4 bg-white/40 dark:bg-white/20 -rotate-45 translate-y-[-100px] animate-[slide_3s_ease-in-out_infinite]"></div>
            </div>

            <div className="relative z-10 text-center">
              <svg className="w-8 h-8 sm:w-12 sm:h-12 mx-auto text-cyan-600 dark:text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
          </div>

          <div className="absolute bottom-[-20%] w-[2px] h-[100px] bg-gradient-to-t from-transparent via-cyan-500 to-transparent blur-[1px]"></div>
          
          <svg className="absolute w-full h-full pointer-events-none opacity-40 z-0">
             <circle cx="50%" cy="50%" r="48%" fill="none" stroke="rgba(34,211,238,0.2)" strokeWidth="1" strokeDasharray="4 8" />
             <line x1="50%" y1="0%" x2="50%" y2="100%" stroke="rgba(34,211,238,0.1)" strokeWidth="1" />
             <line x1="0%" y1="50%" x2="100%" y2="50%" stroke="rgba(34,211,238,0.1)" strokeWidth="1" />
          </svg>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes slide {
          0% { transform: translateY(-100px) rotate(-45deg); }
          100% { transform: translateY(100px) rotate(-45deg); }
        }
      `}} />
    </section>
  );
}

export default GenAIEngine;