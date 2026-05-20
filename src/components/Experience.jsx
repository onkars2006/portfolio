import React, { useRef } from 'react';

function Experience() {
  const scrollRef = useRef(null);

  const timeline = [
    {
      phase: "01",
      title: "Foundation",
      desc: "Curiosity towards technology, creativity and digital systems.",
      icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
    },
    {
      phase: "02",
      title: "AI Discovery",
      desc: "Explored AI, automation and started building real-world systems.",
      icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
    },
    {
      phase: "03",
      title: "First Products",
      desc: "Built AI chatbots, automation tools and useful applications.",
      icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
    },
    {
      phase: "04",
      title: "Public Launch",
      desc: "Launched MH24 AI Chatbot on Google Play Store.",
      icon: "M13 10V3L4 14h7v7l9-11h-7z"
    },
    {
      phase: "05",
      title: "Industry Experience",
      desc: "Joined FutureSmart AI as GenAI Backend Developer Intern.",
      icon: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    },
    {
      phase: "06",
      title: "Multi-Domain AI",
      desc: "Built multiple AI products like Legal AI, Resume Matcher, Demo Builder.",
      icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
    },
    {
      phase: "07",
      title: "Client Delivery",
      desc: "Developed & sold Educational Management System for a client.",
      icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
    },
    {
      phase: "08",
      title: "AI Research",
      desc: "Worked on latest research paper in AI & intelligent systems.",
      icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0-3.332.477-4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
    },
    {
      phase: "09",
      title: "Current Phase",
      desc: "Building advanced AI products, SaaS platforms and cinematic systems.",
      icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
    }
  ];

  const professionalRoles = [
    {
      role: "GenAI Backend Developer Intern",
      company: "FutureSmart AI",
      duration: "Sept - Dec",
      desc: "Engineered robust backend systems and intelligent architectures utilizing advanced Generative AI. Developed scalable conversational pipelines and integrated contextual retrieval mechanisms (RAG) to solve complex business logic.",
      tech: ["FastAPI", "LangChain", "PostgreSQL", "RAG"],
      link: "https://www.linkedin.com/posts/onkar-somvanshi-b26572331_futuresmartai-internship-genai-activity-7375963353279545344-DkDk?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFOOFs4BjEmL5nXyjXTnjZRxrzgHpYEWxlM"
    }
  ];

  const scrollLeft = () => {
    if (scrollRef.current) scrollRef.current.scrollBy({ left: -400, behavior: 'smooth' });
  };

  const scrollRight = () => {
    if (scrollRef.current) scrollRef.current.scrollBy({ left: 400, behavior: 'smooth' });
  };

  return (
    <section id="experience" className="scroll-mt-32 w-full relative z-10 py-10 bg-transparent px-4 md:px-0">
      
      <div className="flex flex-col sm:flex-row justify-between items-end mb-8 px-4 sm:px-12 gap-6 max-w-7xl mx-auto pt-10">
        <div className="space-y-2 text-left w-full">
          <span className="text-cyan-500 font-bold tracking-widest uppercase text-xs sm:text-sm drop-shadow-sm">My Journey</span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-slate-900 dark:text-white drop-shadow-sm">
            The Evolution Of A Builder
          </h2>
        </div>
        
        <div className="flex items-center gap-3 shrink-0 hidden md:flex pb-2">
          <button onClick={scrollLeft} className="p-4 rounded-full border border-slate-300 dark:border-slate-700 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm hover:bg-white dark:hover:bg-slate-800 transition-all text-slate-800 dark:text-white shadow-sm group">
            <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button onClick={scrollRight} className="p-4 rounded-full border border-slate-300 dark:border-slate-700 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm hover:bg-white dark:hover:bg-slate-800 transition-all text-slate-800 dark:text-white shadow-sm group">
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      <div className="relative w-full mb-24">
        {/* Horizontal Scroll Container */}
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] px-4 md:px-12 py-10"
        >
          {/* Inner Track */}
          <div className="flex flex-col md:flex-row w-full md:w-max relative gap-8 md:gap-0 min-h-max md:h-[650px] items-center">
            
            {/* Desktop Center Line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-cyan-600 via-teal-500 to-cyan-600 -translate-y-1/2 z-0 opacity-50 shadow-[0_0_10px_cyan]"></div>

            {/* Mobile Vertical Line */}
            <div className="md:hidden absolute left-[38px] top-4 bottom-4 w-1 bg-gradient-to-b from-cyan-600 to-teal-500 z-0 opacity-50 shadow-[0_0_10px_cyan]"></div>

            {timeline.map((item, idx) => {
              const isTop = idx % 2 === 0;
              
              return (
                <div 
                  key={idx} 
                  className="flex-shrink-0 w-full md:w-[400px] relative flex md:block items-start md:items-center justify-center snap-center md:h-full group"
                >
                  
                  {/* Desktop Node */}
                  <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-slate-100 dark:bg-[#020617] border-[5px] border-cyan-400 z-20 group-hover:scale-150 transition-transform duration-300 group-hover:bg-cyan-400 group-hover:shadow-[0_0_15px_cyan]"></div>
                  
                  {/* Mobile Node */}
                  <div className="md:hidden absolute left-8 top-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-slate-100 dark:bg-[#020617] border-[4px] border-cyan-400 z-20"></div>

                  {/* Desktop Card Content */}
                  <div className={`hidden md:flex absolute left-1/2 -translate-x-1/2 w-[340px] flex-col transition-transform duration-500 hover:-translate-y-2 z-10 ${
                    isTop ? 'bottom-[calc(50%+2.5rem)]' : 'top-[calc(50%+2.5rem)]'
                  }`}>
                    <div className="bg-white/80 dark:bg-[#0a1122]/90 backdrop-blur-xl p-8 rounded-3xl text-left border border-slate-200 dark:border-slate-800/80 shadow-2xl hover:border-cyan-500/50 transition-colors w-full">
                       <div className="flex items-center gap-4 mb-5">
                        <div className="w-12 h-12 rounded-full bg-slate-50 dark:bg-[#0f172a] flex items-center justify-center shrink-0 border border-slate-200 dark:border-slate-800 shadow-sm">
                          <svg className="w-6 h-6 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                          </svg>
                        </div>
                        <span className="text-3xl font-black text-slate-300 dark:text-slate-800 group-hover:text-cyan-500/30 transition-colors">
                          {item.phase}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-base font-medium text-slate-600 dark:text-slate-400 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  {/* Mobile Card Content */}
                  <div className="md:hidden w-full pl-20 transition-all duration-300 hover:-translate-y-1 z-10 py-4">
                    <div className="bg-white/90 dark:bg-[#0a1122]/90 backdrop-blur-xl p-6 rounded-2xl text-left border border-slate-200 dark:border-slate-800/80 shadow-xl w-full">
                       <div className="flex items-center gap-4 mb-4">
                        <div className="w-10 h-10 rounded-full bg-slate-50 dark:bg-[#0f172a] flex items-center justify-center shrink-0 border border-slate-200 dark:border-slate-800 shadow-sm">
                          <svg className="w-5 h-5 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                          </svg>
                        </div>
                        <span className="text-2xl font-black text-slate-300 dark:text-slate-700">
                          {item.phase}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 text-cyan-600 dark:text-cyan-400">
                        {item.title}
                      </h3>
                      <p className="text-sm font-medium text-slate-600 dark:text-slate-400 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Internships & Roles Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-12 pt-10">
        <div className="space-y-4 mb-10 text-left">
          <h3 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 dark:text-white">
            Internships & Roles
          </h3>
          <div className="h-1.5 w-20 bg-gradient-to-r from-cyan-500 to-teal-400 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {professionalRoles.map((role, idx) => (
            <div key={idx} className="glass-panel p-6 sm:p-10 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 shadow-xl hover:shadow-2xl hover:border-cyan-500/50 transition-all duration-500 group bg-white/60 dark:bg-[#0a1122]/60 backdrop-blur-xl relative overflow-hidden">
              
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 group-hover:bg-cyan-500/15 transition-colors duration-700 pointer-events-none"></div>

              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8 relative z-10">
                <div className="space-y-5 flex-grow">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                    <h4 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                      {role.role}
                    </h4>
                    <span className="hidden sm:block w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700"></span>
                    <span className="text-lg sm:text-xl font-bold text-cyan-600 dark:text-cyan-500">
                      {role.company}
                    </span>
                  </div>
                  
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800/80 text-sm font-bold text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700/50 shadow-sm">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {role.duration}
                  </div>

                  <p className="text-base sm:text-lg font-medium text-slate-600 dark:text-slate-400 leading-relaxed max-w-4xl">
                    {role.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 sm:gap-3 pt-3">
                    {role.tech.map((t, i) => (
                      <span key={i} className="px-4 py-2 bg-slate-50 dark:bg-slate-800/50 text-slate-700 dark:text-slate-300 text-xs sm:text-sm font-bold rounded-xl border border-slate-200 dark:border-slate-700/50 hover:bg-cyan-500 hover:text-white dark:hover:bg-cyan-500 dark:hover:text-white transition-colors duration-300 cursor-default shadow-sm">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {role.link && (
                  <div className="shrink-0 pt-4 lg:pt-0">
                    <a href={role.link} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-slate-900 text-white dark:bg-white dark:text-slate-900 font-black text-sm sm:text-base hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/20 active:scale-95 transition-all duration-300 w-full lg:w-auto">
                      View Credential
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;