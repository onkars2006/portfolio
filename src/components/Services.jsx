import React from 'react';

function Services() {
  const services = [
    {
      title: "AI Agents for Business",
      desc: "Deploying autonomous AI agents capable of reasoning, planning, and executing complex business tasks.",
      icon: "M13 10V3L4 14h7v7l9-11h-7z"
    },
    {
      title: "Custom AI Chatbots",
      desc: "Building intelligent, context-aware conversational bots integrated seamlessly into your custom apps and websites.",
      icon: "M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
    },
    {
      title: "AI Automation",
      desc: "Streamlining workflows and complex operational logic pipelines to accelerate delivery cycles and reduce manual overhead.",
      icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
    },
    {
      title: "Platform Development",
      desc: "Architecting and developing end-to-end, highly scalable SaaS platforms and robust backend systems.",
      icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
    },
    {
      title: "App Development",
      desc: "Crafting beautiful, high-performance cross-platform mobile applications for iOS and Android.",
      icon: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
    },
    {
      title: "Website Development",
      desc: "Designing and building modern, responsive, and SEO-optimized web applications and digital experiences.",
      icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    },
    {
      title: "PRD & Setup Generation",
      desc: "Creating comprehensive Product Requirements Documents, architecture blueprints, and strategic coding setups.",
      icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
    },
    {
      title: "Short AI Video Generation",
      desc: "Producing highly engaging, AI-generated short-form cinematic videos and visual storytelling content.",
      icon: "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
    },
    {
      title: "WordPress E-Commerce",
      desc: "Developing highly customized, scalable WordPress and WooCommerce stores engineered to drive sales.",
      icon: "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
    }
  ];

  return (
    <section id="services" className="scroll-mt-32 space-y-12 relative z-10 w-full px-2 sm:px-0">
      <div className="space-y-4">
        <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 dark:text-white">What I Do</h2>
        <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-cyan-400 rounded-full"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl mx-auto">
        {services.map((srv, idx) => (
          <div 
            key={idx} 
            className="relative overflow-hidden glass-panel p-6 sm:p-8 rounded-[2rem] hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(34,211,238,0.2)] hover:border-cyan-500/40 transition-all duration-500 group flex flex-col items-start w-full bg-white/60 dark:bg-slate-900/40 backdrop-blur-md"
          >
            <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-cyan-500/0 to-cyan-500/0 group-hover:from-cyan-500/5 group-hover:to-transparent transition-colors duration-500 pointer-events-none z-0"></div>

            <div className="mb-6 h-14 w-14 sm:h-16 sm:w-16 relative transform group-hover:scale-110 transition-transform duration-500 rounded-2xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center shadow-sm group-hover:border-cyan-500/50 group-hover:shadow-cyan-500/20 z-10">
              <svg className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-600 dark:text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={srv.icon} />
              </svg>
            </div>
            
            <h3 className="font-black text-xl sm:text-2xl mb-3 text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors relative z-10 w-full">
              {srv.title}
            </h3>
            
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 font-medium leading-relaxed relative z-10 flex-grow w-full">
              {srv.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;