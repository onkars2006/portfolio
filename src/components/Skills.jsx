import React from 'react';

function Skills() {
  const nodes = [
    { label: 'RAG', x: 50, y: 10, color: 'text-rose-500', border: 'border-rose-400/50' },
    { label: 'Agentic AI', x: 75, y: 16, color: 'text-violet-500', border: 'border-violet-400/50' },
    { label: 'LangChain', x: 92, y: 38, color: 'text-indigo-500', border: 'border-indigo-400/50' },
    { label: 'FastAPI', x: 88, y: 68, color: 'text-teal-500', border: 'border-teal-400/50' },
    { label: 'React & JS', x: 65, y: 88, color: 'text-cyan-500', border: 'border-cyan-400/50' },
    { label: 'Flutter', x: 35, y: 88, color: 'text-sky-500', border: 'border-sky-400/50' },
    { label: 'Firebase & SQL', x: 12, y: 68, color: 'text-amber-500', border: 'border-amber-400/50' },
    { label: 'Gemini API', x: 8, y: 38, color: 'text-emerald-500', border: 'border-emerald-400/50' },
    { label: 'Flask & Python', x: 25, y: 16, color: 'text-blue-500', border: 'border-blue-400/50' },
  ];

  const allSkills = [
    "Generative AI", "Agentic AI", "Python", "React.js", "FastAPI", "Flutter", 
    "Firebase", "Gemini API", "LangChain", "RAG", "SQL", "Tailwind CSS", 
    "Flask", "REST APIs", "System Architecture", "HTML/CSS", "JavaScript"
  ];

  return (
    <section id="skills" className="scroll-mt-32 space-y-12 sm:space-y-16 relative z-10 w-full px-2 sm:px-0">
      <div className="space-y-4">
        <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 dark:text-white">Technical Arsenal</h2>
        <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-cyan-400 rounded-full"></div>
      </div>
      
      <div className="w-full max-w-6xl mx-auto rounded-[3rem] bg-white/40 dark:bg-[#050b14]/60 backdrop-blur-xl border border-slate-200 dark:border-slate-800/80 relative overflow-hidden flex flex-col items-center justify-center min-h-[500px] sm:min-h-[600px] shadow-2xl">
        
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] sm:w-[700px] sm:h-[700px] rounded-full border border-slate-200 dark:border-slate-800/50 pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] sm:w-[500px] sm:h-[500px] rounded-full border border-slate-200 dark:border-slate-800/30 pointer-events-none"></div>

        <div className="w-full h-[500px] sm:h-[600px] relative">
          
          <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
            {nodes.map((node, i) => (
              <line 
                key={`center-${i}`} 
                x1="50%" y1="50%" 
                x2={`${node.x}%`} y2={`${node.y}%`} 
                stroke="currentColor"
                className="text-cyan-500/20 dark:text-cyan-500/30"
                strokeWidth="1.5" 
                strokeDasharray="4 4"
              />
            ))}
            {nodes.map((node, i) => {
              const next = nodes[(i + 1) % nodes.length];
              return (
                <line 
                  key={`outer-${i}`} 
                  x1={`${node.x}%`} y1={`${node.y}%`} 
                  x2={`${next.x}%`} y2={`${next.y}%`} 
                  stroke="currentColor"
                  className="text-slate-300 dark:text-slate-700"
                  strokeWidth="1" 
                />
              );
            })}
          </svg>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex items-center justify-center">
            <div className="w-32 h-32 sm:w-48 sm:h-48 rounded-full bg-white dark:bg-[#0a1122] border-2 border-cyan-400 flex items-center justify-center shadow-[0_0_30px_rgba(34,211,238,0.2)] relative group cursor-default">
              <div className="absolute inset-[-10px] rounded-full border border-cyan-400/30 animate-[spin_10s_linear_infinite]"></div>
              <div className="absolute inset-[-20px] rounded-full border border-dashed border-cyan-400/20 animate-[spin_15s_linear_infinite_reverse]"></div>
              <h3 className="text-slate-900 dark:text-white font-black text-center text-sm sm:text-xl leading-tight tracking-wide z-10 px-4">
                Core<br />Architecture
              </h3>
            </div>
          </div>

          {nodes.map((node, i) => (
            <div 
              key={i}
              className={`absolute z-10 px-3 sm:px-5 py-2 sm:py-3 rounded-2xl bg-white dark:bg-[#0f172a] border ${node.border} shadow-lg transform -translate-x-1/2 -translate-y-1/2 hover:scale-110 transition-transform duration-300 cursor-default group flex items-center justify-center`}
              style={{ left: `${node.x}%`, top: `${node.y}%` }}
            >
              <div className={`absolute -top-1.5 -right-1.5 w-3 h-3 rounded-full bg-white shadow-sm border border-slate-200 group-hover:bg-cyan-400 transition-colors`}></div>
              <span className={`text-[10px] sm:text-xs font-black tracking-widest uppercase ${node.color}`}>{node.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="relative w-full flex py-10 overflow-hidden" style={{ WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)', maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)' }}>
        <div className="flex w-max animate-marquee whitespace-nowrap">
          {[...allSkills, ...allSkills].map((skill, index) => (
            <div key={index} className="flex items-center justify-center mx-3 sm:mx-4 px-6 sm:px-8 py-3 sm:py-4 rounded-[1.5rem] bg-white/60 dark:bg-slate-900/40 backdrop-blur-sm font-black text-slate-600 dark:text-slate-300 text-sm sm:text-lg hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors cursor-default border border-slate-200 dark:border-slate-800 hover:scale-105 shadow-sm">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;