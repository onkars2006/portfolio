import React from 'react';

function Contact() {
  return (
    <section id="contact" className="scroll-mt-32 pt-10 pb-10 w-full px-2 sm:px-0">
      <div className="glass-panel rounded-[2.5rem] sm:rounded-[3rem] p-10 sm:p-16 md:p-20 text-center space-y-10 relative overflow-hidden w-full group">
        
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[200px] bg-cyan-400/20 dark:bg-cyan-500/15 blur-[100px] rounded-full pointer-events-none group-hover:bg-cyan-400/30 transition-colors duration-700"></div>
        
        <div className="space-y-6 relative z-10">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-slate-900 dark:text-white">
            Let's Build the <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">Future.</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-700 dark:text-slate-300 max-w-2xl mx-auto font-medium leading-relaxed">
            Seeking scalable backend pipelines or robust AI integrations?
            I thrive on rapid execution with ambitious teams. Let's connect and transform ideas into intelligent systems.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 sm:gap-6 relative z-10 pt-4">
          <a href="mailto:onkarsomvanshi2006@gmail.com" className="animate-pulse-slow w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 rounded-full bg-slate-900 text-white dark:bg-white dark:text-slate-900 font-black text-base sm:text-lg hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(6,182,212,0.5)] active:scale-95 transition-all duration-500 flex justify-center items-center gap-3">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Email Me
          </a>
          
          <a href="https://www.linkedin.com/in/onkar-somvanshi-b26572331/" target="_blank" rel="noreferrer" className="w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 rounded-full glass-panel font-black text-base sm:text-lg hover:-translate-y-2 hover:bg-white/40 dark:hover:bg-slate-800/80 active:scale-95 transition-all duration-500 text-slate-900 dark:text-slate-100 flex justify-center items-center gap-3 border border-white/50 dark:border-slate-700/50 shadow-sm">
            <svg className="w-5 h-5 text-[#0A66C2] dark:text-cyan-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
            LinkedIn
          </a>

          <a href="https://www.upwork.com/freelancers/~01b0880ed263bdcf93" target="_blank" rel="noreferrer" className="w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 rounded-full glass-panel font-black text-base sm:text-lg hover:-translate-y-2 hover:bg-white/40 dark:hover:bg-slate-800/80 active:scale-95 transition-all duration-500 text-slate-900 dark:text-slate-100 flex justify-center items-center gap-3 border border-white/50 dark:border-slate-700/50 shadow-sm">
            <svg className="w-5 h-5 text-[#14A800]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.48 5.64a5.61 5.61 0 0 0-5.46 4.39A15.35 15.35 0 0 1 8.87 5H6.28v7.88a3.14 3.14 0 1 1-6.28 0V5h-2.6v7.88a5.75 5.75 0 0 0 11.5 0V9.45a12.83 12.83 0 0 0 2.89 4.8l-1.12 3.68h2.72l.74-2.42a5.62 5.62 0 1 0 3.35-9.87zm0 8.65a3.03 3.03 0 1 1 3.03-3.03 3.03 3.03 0 0 1-3.03 3.03z"/>
            </svg>
            Hire on Upwork
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;