import React from 'react';
import { Sparkles, Terminal, Code2, Database, Wrench } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const categoryIcons = {
  "Languages": <Code2 className="w-4 h-4 text-purple-400" />,
  "Backend & Web": <Terminal className="w-4 h-4 text-cyan-400" />,
  "AI & Data": <Database className="w-4 h-4 text-teal-400" />,
  "Tools & Platforms": <Wrench className="w-4 h-4 text-indigo-400" />
};

export default function TechStack() {
  const { techStack } = portfolioData;

  return (
    <section id="skills" className="py-20 sm:py-28 px-4 sm:px-6 relative">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center sm:text-left mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-950/30 border border-teal-500/20 text-teal-300 text-xs font-semibold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Core Toolkit</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal tracking-tight text-white">
            {techStack.heading}
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base mt-2 max-w-xl">
            {techStack.subtitle}
          </p>
        </div>

        {/* Tech Stack Reference Layout Card */}
        <div className="glass-card rounded-2xl border border-white/10 p-6 sm:p-10 relative overflow-hidden">
          
          {/* Subtle ambient corner gradient */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="divide-y divide-white/[0.08]">
            {techStack.categories.map((category) => (
              <div
                key={category.name}
                className="py-6 sm:py-8 first:pt-0 last:pb-0 flex flex-col md:flex-row md:items-start gap-4 md:gap-10"
              >
                {/* Category Name on the Left */}
                <div className="w-full md:w-56 shrink-0 flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-white/[0.03] border border-white/5">
                    {categoryIcons[category.name] || <Code2 className="w-4 h-4 text-purple-400" />}
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-serif font-medium text-white tracking-wide">
                      {category.name}
                    </h3>
                    <p className="text-[11px] text-neutral-500 font-mono">
                      {category.skills.length} technologies
                    </p>
                  </div>
                </div>

                {/* Technologies on the Right */}
                <div className="flex-1 flex flex-wrap gap-2 sm:gap-2.5">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 hover:border-purple-500/30 text-neutral-200 hover:text-white text-xs sm:text-sm font-medium transition-all duration-200 shadow-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Minimal Footer Note */}
        <div className="mt-8 text-center sm:text-left">
          <p className="text-xs text-neutral-500">
            Organized across languages, web infrastructure, intelligent systems, and development tooling.
          </p>
        </div>

      </div>
    </section>
  );
}
