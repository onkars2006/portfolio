import React from 'react';

function FilmScreen() {
  const videos = [
    { id: 'h_nO00N5i8w' },
    { id: '5_pNT2wBsI8' },
    { id: 'PUwwK8YkAgA' },
    { id: 'mubH6iYUbvI' }
  ];

  return (
    <section id="films" className="scroll-mt-32 w-full relative z-10 px-2 sm:px-0">
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[60%] bg-cyan-500/10 dark:bg-cyan-500/15 blur-[120px] rounded-full pointer-events-none -z-10"></div>

      <div className="space-y-4 text-center mb-16">
        <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 dark:bg-white/10 border border-slate-700 dark:border-slate-700/50 mb-2">
          <svg className="w-4 h-4 text-cyan-500" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
          </svg>
          <span className="text-xs font-bold tracking-widest text-white uppercase">Cinematic Vision</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 dark:text-white">Film & Production</h2>
        <div className="h-1.5 w-24 bg-gradient-to-r from-transparent via-cyan-500 to-transparent rounded-full mx-auto opacity-80"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 w-full max-w-5xl mx-auto px-4 sm:px-6">
        {videos.map((vid, idx) => (
          <div 
            key={idx} 
            className="relative group rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden bg-slate-100 dark:bg-[#050b14] p-3 sm:p-4 border border-slate-200 dark:border-slate-800 shadow-xl transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_40px_-15px_rgba(34,211,238,0.3)] hover:border-cyan-500/50"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            
            <div className="absolute top-0 right-8 w-16 h-1 bg-cyan-500 rounded-b-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[0_0_10px_cyan]"></div>

            <div className="relative rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden aspect-video bg-black shadow-inner">
              <iframe
                className="w-full h-full absolute top-0 left-0"
                src={`https://www.youtube.com/embed/${vid.id}?modestbranding=1&rel=0&controls=1`}
                title={`Cinematic Video ${idx + 1}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            
            <div className="pt-6 pb-2 px-2 flex justify-between items-center opacity-50 group-hover:opacity-100 transition-opacity">
              <div className="flex gap-1.5">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 rounded-full bg-slate-400 dark:bg-slate-600"></div>
                ))}
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-500">4K Rendered</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FilmScreen;