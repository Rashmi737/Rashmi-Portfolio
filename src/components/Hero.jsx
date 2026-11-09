import React from 'react';
import { ArrowRight, Github, Mail, Sparkles, Terminal, Shield, Brain, Code } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Hero() {
  const { personal } = portfolioData;

  return (
    <section 
      id="home" 
      className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center pt-24 sm:pt-28 pb-16 px-4 sm:px-6 overflow-hidden"
    >
      <div className="max-w-4xl w-full mx-auto text-center flex flex-col items-center relative z-10">
        
        {/* Status Pill Badge */}
        <div 
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md mb-6 hover:border-purple-500/30 transition-colors"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
          </span>
          <span className="text-xs font-medium tracking-wide text-neutral-300">
            {personal.statusBadge}
          </span>
          <span className="text-neutral-500">·</span>
          <span className="text-xs text-purple-300 font-medium">3rd Year ISE</span>
        </div>

        {/* Large Elegant Serif Heading */}
        <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl font-normal tracking-tight text-white mb-4 sm:mb-6">
          <span className="block text-white drop-shadow-sm">
            {personal.name}
          </span>
        </h1>

        {/* Headline */}
        <p className="font-serif italic text-2xl sm:text-3xl lg:text-4xl font-light tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-indigo-200 to-teal-300 mb-6 sm:mb-8 text-glow-purple max-w-2xl">
          "{personal.headline}"
        </p>

        {/* Degree, Year & CGPA Information */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-sm sm:text-base text-neutral-300 max-w-2xl mb-8">
          <span className="px-3.5 py-1 rounded-full bg-purple-950/40 border border-purple-500/20 text-purple-200 font-medium">
            {personal.degree}
          </span>
          <span className="text-neutral-600 hidden sm:inline">•</span>
          <span className="px-3.5 py-1 rounded-full bg-teal-950/40 border border-teal-500/20 text-teal-200 font-medium">
            {personal.year}
          </span>
          <span className="text-neutral-600 hidden sm:inline">•</span>
          <span className="px-3.5 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/20 text-cyan-200 font-medium font-mono text-xs sm:text-sm">
            CGPA: {personal.cgpa}
          </span>
        </div>

        {/* Core Interests Showcase */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-10 max-w-xl">
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-surface-100 border border-white/5 text-xs sm:text-sm text-neutral-300">
            <Brain className="w-3.5 h-3.5 text-purple-400" />
            <span>Artificial Intelligence</span>
          </div>
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-surface-100 border border-white/5 text-xs sm:text-sm text-neutral-300">
            <Code className="w-3.5 h-3.5 text-cyan-400" />
            <span>Software Development</span>
          </div>
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-surface-100 border border-white/5 text-xs sm:text-sm text-neutral-300">
            <Shield className="w-3.5 h-3.5 text-teal-400" />
            <span>Ethical Hacking</span>
          </div>
        </div>

        {/* Action Buttons: "View Projects", "Contact Me", "GitHub" */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 sm:gap-4 w-full max-w-md">
          {/* View Projects */}
          <a
            href="#projects"
            className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 via-indigo-600 to-teal-500 text-white font-medium text-sm shadow-lg shadow-purple-950/50 hover:shadow-purple-700/30 hover:scale-[1.02] active:scale-95 transition-all duration-200 group"
          >
            <span>View Projects</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </a>

          {/* Contact Me */}
          <a
            href="#contact"
            className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 text-white font-medium text-sm border border-white/10 hover:border-purple-400/30 hover:scale-[1.02] active:scale-95 transition-all duration-200"
          >
            <Mail className="w-4 h-4 text-purple-300" />
            <span>Contact Me</span>
          </a>

          {/* GitHub Button */}
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-neutral-900/80 hover:bg-neutral-800 text-neutral-200 hover:text-white font-medium text-sm border border-white/10 hover:border-white/20 transition-all duration-200"
          >
            <Github className="w-4 h-4" />
            <span>GitHub</span>
          </a>
        </div>

      </div>

      {/* Decorative Bottom subtle gradient line */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 sm:w-80 h-[1px] bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
    </section>
  );
}
