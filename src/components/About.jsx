import React from 'react';
import { Sparkles, User, Terminal, Code2, Award, Zap } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function About() {
  const { about, personal } = portfolioData;
  const { profileCard } = about;

  return (
    <section id="about" className="py-20 sm:py-28 px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center sm:text-left mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/30 border border-purple-500/20 text-purple-300 text-xs font-semibold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>About Me</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal tracking-tight text-white max-w-3xl">
            {about.heading}
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Exact About Me Narrative (Left Column: 7 Cols) */}
          <div className="lg:col-span-7 glass-card p-6 sm:p-8 rounded-2xl border border-white/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-36 h-36 bg-purple-500/10 rounded-full blur-2xl pointer-events-none" />
            
            <h3 className="font-serif text-xl sm:text-2xl text-white font-medium mb-6 flex items-center gap-2.5">
              <span>Engineering & Exploration</span>
            </h3>

            {/* Exact provided text */}
            <div className="space-y-4 text-neutral-300 text-base sm:text-lg leading-relaxed font-light">
              <p>
                I'm <strong className="text-white font-medium">{personal.name}</strong>, an Information Science and Engineering student interested in exploring the possibilities of technology.
              </p>
              <p>
                I enjoy learning new concepts, experimenting with ideas, and building practical software applications. My interests include Artificial Intelligence, software development, and ethical hacking.
              </p>
              <p className="text-purple-200/90 italic font-serif text-lg">
                "I believe in learning by doing, taking on challenges, and continuously improving my technical skills."
              </p>
            </div>

            {/* Quick Education & Standing Footnote */}
            <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-2 gap-4">
              <div>
                <p className="text-xs uppercase tracking-wider text-neutral-400 font-medium">Program</p>
                <p className="text-sm sm:text-base font-semibold text-white mt-1">Information Science & Engg.</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-neutral-400 font-medium">Year of Study</p>
                <p className="text-sm sm:text-base font-semibold text-teal-300 mt-1">3rd Year</p>
              </div>
            </div>
          </div>

          {/* Profile Card (Right Column: 5 Cols) */}
          <div className="lg:col-span-5">
            <div className="glass-card glass-card-hover p-6 sm:p-8 rounded-2xl border border-white/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/10 rounded-full blur-2xl pointer-events-none" />

              {/* Profile Card Header */}
              <div className="flex items-center justify-between pb-5 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-purple-500/15 border border-purple-500/25 text-purple-300">
                    <User className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-serif font-medium text-white">Profile Overview</h4>
                    <p className="text-xs text-neutral-400">{personal.name}</p>
                  </div>
                </div>
                <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-teal-500/10 text-teal-300 border border-teal-500/20">
                  CGPA {personal.cgpa}
                </span>
              </div>

              {/* Tags: Student · Developer · Builder · Learner */}
              <div className="pt-5 pb-5">
                <p className="text-xs uppercase tracking-wider text-neutral-400 font-medium mb-3">
                  Identities & Mindset
                </p>
                <div className="flex flex-wrap gap-2">
                  {profileCard.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-white/[0.04] border border-white/10 text-neutral-200 hover:border-purple-400/40 hover:text-white transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Profile Details Table */}
              <div className="pt-4 border-t border-white/10 space-y-3">
                <p className="text-xs uppercase tracking-wider text-neutral-400 font-medium mb-2">
                  Profile Details
                </p>
                {profileCard.details.map((item, index) => (
                  <div
                    key={item.field}
                    className={`flex items-center justify-between py-2 text-xs sm:text-sm ${
                      index !== profileCard.details.length - 1 ? 'border-b border-white/5' : ''
                    }`}
                  >
                    <span className="text-neutral-400 font-medium">{item.field}</span>
                    <span className={`font-medium ${
                      item.field === 'CGPA' 
                        ? 'text-teal-300 font-mono font-semibold text-sm' 
                        : 'text-white'
                    }`}>
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
