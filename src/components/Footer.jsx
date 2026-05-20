import React from 'react';

function Footer() {
  return (
    <footer className="w-full text-center pt-8 pb-12 space-y-6 relative z-10 mt-auto flex flex-col items-center">
      
      <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
        <a href="mailto:onkarsomvanshi2006@gmail.com" className="p-3.5 rounded-full glass-panel text-slate-600 dark:text-slate-400 hover:text-cyan-500 dark:hover:text-cyan-400 hover:scale-110 hover:-translate-y-1 transition-all shadow-sm">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </a>
        <a href="https://www.linkedin.com/in/onkar-somvanshi-b26572331/" target="_blank" rel="noreferrer" className="p-3.5 rounded-full glass-panel text-slate-600 dark:text-slate-400 hover:text-[#0A66C2] dark:hover:text-cyan-400 hover:scale-110 hover:-translate-y-1 transition-all shadow-sm">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
          </svg>
        </a>
        <a href="https://www.upwork.com/freelancers/~01b0880ed263bdcf93" target="_blank" rel="noreferrer" className="p-3.5 rounded-full glass-panel text-slate-600 dark:text-slate-400 hover:text-[#14A800] dark:hover:text-[#14A800] hover:scale-110 hover:-translate-y-1 transition-all shadow-sm">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.48 5.64a5.61 5.61 0 0 0-5.46 4.39A15.35 15.35 0 0 1 8.87 5H6.28v7.88a3.14 3.14 0 1 1-6.28 0V5h-2.6v7.88a5.75 5.75 0 0 0 11.5 0V9.45a12.83 12.83 0 0 0 2.89 4.8l-1.12 3.68h2.72l.74-2.42a5.62 5.62 0 1 0 3.35-9.87zm0 8.65a3.03 3.03 0 1 1 3.03-3.03 3.03 3.03 0 0 1-3.03 3.03z"/>
          </svg>
        </a>
        <a href="https://www.youtube.com/@onkarsomvanshiOfficial" target="_blank" rel="noreferrer" className="p-3.5 rounded-full glass-panel text-slate-600 dark:text-slate-400 hover:text-[#FF0000] dark:hover:text-cyan-400 hover:scale-110 hover:-translate-y-1 transition-all shadow-sm">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
          </svg>
        </a>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-black text-slate-500 dark:text-slate-500 tracking-widest uppercase">
          © {new Date().getFullYear()} Onkar Somvanshi.
        </p>
        <p className="text-xs font-bold text-slate-400 dark:text-slate-600 uppercase tracking-widest">
          Built with rapid execution.
        </p>
      </div>
    </footer>
  );
}

export default Footer;