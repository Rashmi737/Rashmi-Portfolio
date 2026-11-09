import React from 'react';
import { Briefcase, Sparkles, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-20 sm:py-28 px-4 sm:px-6 relative">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center sm:text-left mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/30 border border-purple-500/20 text-purple-300 text-xs font-semibold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Experience & Programs</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal tracking-tight text-white">
            Experience & <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-indigo-200 to-teal-300">Programs</span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base mt-2 max-w-xl">
            Practical training and engineering experience in industry organizations.
          </p>
        </div>

        {/* Timeline / Card Structure */}
        <div className="relative border-l border-white/10 ml-4 sm:ml-6 pl-6 sm:pl-10 space-y-8 sm:space-y-10">
          {experience.map((exp) => {
            const isOngoing = exp.status === 'Ongoing';

            return (
              <div key={exp.id} className="relative group">
                
                {/* Timeline Node */}
                <div className={`absolute -left-[35px] sm:-left-[51px] top-1.5 w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 flex items-center justify-center transition-transform group-hover:scale-110 ${
                  isOngoing
                    ? 'bg-teal-950 border-teal-400 text-teal-300 shadow-[0_0_14px_rgba(20,184,166,0.5)]'
                    : 'bg-purple-950 border-purple-400 text-purple-300 shadow-[0_0_12px_rgba(147,51,234,0.4)]'
                }`}>
                  <Briefcase className="w-3 h-3 sm:w-4 sm:h-4" />
                </div>

                {/* Experience Card */}
                <div className="glass-card glass-card-hover p-6 sm:p-8 rounded-2xl border border-white/10 relative overflow-hidden">
                  
                  {/* Card Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                    <h3 className="text-2xl font-serif font-medium text-white group-hover:text-purple-200 transition-colors">
                      {exp.company}
                    </h3>

                    <div className="flex items-center gap-2">
                      <span className={`inline-flex items-center gap-1.5 text-xs px-3 py-1 rounded-full font-medium border ${
                        isOngoing
                          ? 'bg-teal-500/10 text-teal-300 border-teal-500/25'
                          : 'bg-purple-500/10 text-purple-300 border-purple-500/25'
                      }`}>
                        {isOngoing ? (
                          <>
                            <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
                            <span>Ongoing</span>
                          </>
                        ) : (
                          <>
                            <CheckCircle2 className="w-3.5 h-3.5 text-purple-300" />
                            <span>Completed</span>
                          </>
                        )}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-base sm:text-lg text-neutral-200 font-light leading-relaxed">
                    {exp.description}
                  </p>

                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
