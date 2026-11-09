import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/10 bg-[#040408] pt-16 pb-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        
        {/* Brand & Monogram */}
        <div className="flex flex-col items-center text-center mb-8">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-600 via-indigo-500 to-teal-400 p-[1.5px] mb-3">
            <div className="w-full h-full bg-[#06060c] rounded-full flex items-center justify-center">
              <span className="font-serif font-bold text-sm tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-teal-300">
                RV
              </span>
            </div>
          </div>
          <h3 className="font-serif text-2xl font-normal text-white">
            {personal.name}
          </h3>
          <p className="text-xs text-neutral-400 mt-1 max-w-sm">
            {personal.degree} · {personal.year}
          </p>
          <p className="font-serif italic text-xs text-purple-300/80 mt-1">
            "{personal.headline}"
          </p>
        </div>

        {/* Quick Nav Links strictly for existing sections */}
        <div className="flex flex-wrap justify-center gap-6 mb-8 text-xs text-neutral-400">
          <a href="#home" className="hover:text-white transition-colors">Home</a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#skills" className="hover:text-white transition-colors">Skills</a>
          <a href="#projects" className="hover:text-white transition-colors">Projects</a>
          <a href="#experience" className="hover:text-white transition-colors">Experience</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-3 mb-8">
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white transition-all hover:scale-110"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white transition-all hover:scale-110"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${personal.email}`}
            aria-label="Email"
            className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white transition-all hover:scale-110"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>

        {/* Divider & Copyright */}
        <div className="w-full pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <p>
            © {new Date().getFullYear()} {personal.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-neutral-500">Designed with modern aesthetics & technical rigor</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white transition-colors flex items-center gap-1"
              title="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span className="text-[11px]">Top</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
