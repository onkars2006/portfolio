import React from 'react';

function Projects({ onOpenModal }) {
  const projects = [
    {
      title: "Educational Management System",
      tag: "Commercial Sold",
      tech: ["Flask", "HTML/CSS", "JavaScript", "Firebase", "Flutter"],
      short: "Fully customized institutional architecture.",
      full: "Successfully built, fully customized, and commercially sold a production-ready institutional architecture engineered to automate administrative operations and dynamic client-side management metrics.",
      links: []
    },
    {
      title: "MH24 AI Chatbot",
      tag: "Play Store App",
      tech: ["React Native", "AI Pipelines", "Gemini API"],
      short: "Published intelligent mobile assistant.",
      full: "A production-grade intelligent mobile assistant architecture built, tested, and officially published onto the Google Play Store environment for open public usage. Officially recognized in the Google AI Competition.",
      links: [
        { name: "Google Play Store", url: "https://play.google.com/store/apps/details?id=com.omtejweb.omsai&pcampaignid=web_share", type: "playstore" },
        { name: "Google AI Competition", url: "https://ai.google.dev/competition/projects/mh24-gpt-ai-chatbot", type: "google" }
      ]
    },
    {
      title: "AI Resume & Job Matcher",
      tag: "Generative AI",
      tech: ["Flask", "HTML/CSS", "JavaScript", "Gemini API"],
      short: "Dynamic structural parsing for corporate profiles.",
      full: "An intelligent assessment pipeline running tailored structural parsing algorithms to dynamically scan professional resumes against targeted corporate profile requirements.",
      links: [
        { name: "GitHub Repository", url: "https://github.com/onkars2006/ai-resume-and-job-matching-assistant", type: "github" }
      ]
    },
    {
      title: "AI Story Video Creation System",
      tag: "Workflow Automation",
      tech: ["Generative AI", "Asset Tracking"],
      short: "Media generation asset management layer.",
      full: "A creative automation workflow designed to support digital cinematic storytelling by managing rapid media generation, scripting, and asset tracking layers seamlessly.",
      links: [
        { name: "View Live Demo", url: "https://www.linkedin.com/posts/onkar-somvanshi-b26572331_aidemos-ai-storytelling-activity-7369833048135254016-FuQM?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFOOFs4BjEmL5nXyjXTnjZRxrzgHpYEWxlM", type: "linkedin" }
      ]
    },
    {
      title: "Eco Waste AI",
      tag: "Sustainability AI",
      tech: ["Flask", "Flutter", "HTML/CSS", "JS", "Gemini API", "Firebase", "Google Auth"],
      short: "Intelligent e-waste management platform.",
      full: "An AI-driven sustainability platform designed to optimize electronic waste management. Built with cross-platform mobile capabilities and Gemini AI to intelligently classify, track, and process e-waste efficiently.",
      links: [
        { name: "GitHub Repository", url: "https://github.com/onkars2006/ecoai", type: "github" },
        { name: "LinkedIn Post", url: "https://www.linkedin.com/posts/onkar-somvanshi-b26572331_ai-sustainability-ewaste-activity-7322169579885998080-YUBc?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFOOFs4BjEmL5nXyjXTnjZRxrzgHpYEWxlM", type: "linkedin" }
      ]
    },
    {
      title: "Krishi Bandhu AI",
      tag: "Agritech Solution",
      tech: ["Flask", "Gemini API", "OpenWeather API"],
      short: "Smart agricultural advisory system.",
      full: "A localized agritech solution integrating OpenWeather API and Gemini AI to provide farmers with real-time weather-based crop advisories, enhancing yield planning and mitigating climate risks.",
      links: [
        { name: "LinkedIn Post", url: "https://www.linkedin.com/posts/soumyaghoshh_innovation-agritech-teamwork-ugcPost-7322121201407987715-MgJS?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFOOFs4BjEmL5nXyjXTnjZRxrzgHpYEWxlM", type: "linkedin" }
      ]
    },
    {
      title: "YogSathi",
      tag: "Wellness Platform",
      tech: ["Flask", "Firebase", "HTML/CSS", "JavaScript", "Google Auth"],
      short: "Comprehensive yoga and wellness ecosystem.",
      full: "A full-stack web application serving as a dedicated digital companion for yoga practitioners. Features secure Google authentication and user-specific health tracking to personalize wellness journeys.",
      links: [
        { name: "LinkedIn Post", url: "https://www.linkedin.com/posts/onkar-somvanshi-b26572331_webdevelopment-fullstackdevelopment-productdevelopment-activity-7457300381170040833-khmZ?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFOOFs4BjEmL5nXyjXTnjZRxrzgHpYEWxlM", type: "linkedin" }
      ]
    },
    {
      title: "StartupIQ",
      tag: "Generative AI Engine",
      tech: ["Flask", "Gemini API", "HTML/CSS", "JavaScript"],
      short: "Investor-ready business plan generator.",
      full: "Transform raw ideas into investor-ready business plans with our generative AI engine. Automatically generates strategic roadmaps, technical specifications, and financial models in minutes.",
      links: [
        { name: "Live Platform", url: "https://metamorphs-codeverse.onrender.com/", type: "web" },
        { name: "GitHub Repository", url: "https://github.com/onkars2006/MetaMorphs-Codeverse", type: "github" }
      ]
    }
  ];

  return (
    <section id="projects" className="scroll-mt-32 space-y-12 w-full px-2 sm:px-0">
      <div className="space-y-4">
        <h2 className="text-3xl sm:text-4xl font-black tracking-tight">Ambitious Deployments</h2>
        <div className="h-1 w-20 bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full"></div>
      </div>

      <div className="flex flex-wrap justify-center gap-6 w-full max-w-7xl mx-auto">
        {projects.map((project, idx) => (
          <div 
            key={idx} 
            onClick={() => onOpenModal(project)}
            className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] glass-panel p-6 sm:p-8 rounded-[2rem] cursor-pointer group hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/10 hover:border-cyan-500/30 transition-all duration-300 flex flex-col h-auto bg-white/40 dark:bg-[#0a1122]/40 backdrop-blur-md relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-cyan-500/0 group-hover:from-cyan-500/5 group-hover:to-transparent transition-colors duration-500 pointer-events-none"></div>

            <div className="mb-6 flex items-center justify-between relative z-10">
              <span className="text-[10px] sm:text-xs font-black tracking-widest uppercase px-4 py-1.5 rounded-full bg-slate-900 text-white dark:bg-cyan-500/10 dark:text-cyan-400 border border-transparent dark:border-cyan-500/20 shadow-sm">
                {project.tag}
              </span>
              <div className="w-10 h-10 rounded-full bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-slate-800 flex items-center justify-center group-hover:bg-cyan-500 group-hover:border-cyan-500 transition-colors shadow-sm">
                <svg className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </div>
            
            <h3 className="text-2xl font-black mb-3 text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors relative z-10">
              {project.title}
            </h3>
            
            <p className="text-sm sm:text-base font-medium text-slate-600 dark:text-slate-400 mb-8 flex-grow leading-relaxed relative z-10">
               {project.short}
            </p>
            
            <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-slate-200 dark:border-slate-800 relative z-10">
              {project.tech.map((t, i) => (
                <span key={i} className="px-3 py-1 bg-slate-100 dark:bg-slate-800/50 rounded-lg text-[10px] sm:text-xs font-bold text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700/50">
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;