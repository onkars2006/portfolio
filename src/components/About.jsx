import React from 'react';

function About() {
  return (
    <section id="about" className="scroll-mt-32 space-y-12 relative z-10">
      <div className="space-y-4">
        <h2 className="text-3xl sm:text-4xl font-black tracking-tight">About Me</h2>
        <div className="h-1 w-20 bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full"></div>
      </div>
      
      <div className="glass-panel p-8 sm:p-12 rounded-3xl grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Driven by <span className="text-emerald-500">Innovation</span></h3>
          <p className="text-lg text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
            As an Integrated M.Tech student at VIT Bhopal University, my focus bridges academic research and real-world deployment. I thrive on translating ambitious ideas into highly scalable, production-ready software solutions.
          </p>
          <p className="text-lg text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
            Beyond coding, I am deeply involved in AI research, continuous learning, and exploring the future of generative models and intelligent workflow automation.
          </p>
        </div>
        
        <div className="relative h-64 sm:h-80 w-full rounded-2xl overflow-hidden group">
          <div className="absolute inset-0 bg-emerald-500/20 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none"></div>
          <img 
            src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1000&auto=format&fit=crop" 
            alt="Workspace" 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
          />
        </div>
      </div>
    </section>
  );
}

export default About;