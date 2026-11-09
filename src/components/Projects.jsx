import React from 'react';
import { Github, ExternalLink, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Projects() {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="py-20 sm:py-28 px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center sm:text-left mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/30 border border-purple-500/20 text-purple-300 text-xs font-semibold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Featured Work</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal tracking-tight text-white">
            Selected <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-indigo-200 to-teal-300">Projects</span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base mt-2 max-w-xl">
            Intelligent applications, data-driven platforms, and security prototypes connected directly to public GitHub source repositories.
          </p>
        </div>

        {/* 4 Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-stretch">
          {projects.map((project) => (
            <div
              key={project.id || project.title}
              className="group glass-card glass-card-hover rounded-2xl border border-white/10 p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden transition-all duration-300 h-full"
            >
              {/* Background ambient corner glow on hover */}
              <div className="absolute top-0 right-0 w-48 h-48 rounded-full blur-3xl pointer-events-none transition-opacity duration-300 bg-purple-500/10 group-hover:opacity-100 opacity-40" />

              <div className="flex-1">
                {/* Top Bar with Project Tag & Top Repository Link */}
                <div className="flex items-center justify-between gap-3 mb-5">
                  <span className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-neutral-300 font-medium tracking-wide">
                    {project.tag}
                  </span>

                  {/* Top Repo Quick Link */}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-neutral-300 hover:text-white px-3 py-1.5 rounded-lg bg-white/5 hover:bg-purple-600/20 border border-white/10 hover:border-purple-500/30 transition-all duration-200"
                    title={`Open ${project.title} repository in a new tab`}
                  >
                    <Github size={14} className="text-purple-300" />
                    <span>Repo</span>
                    <ExternalLink size={12} className="text-neutral-400 group-hover:text-purple-300" />
                  </a>
                </div>

                {/* Project Title */}
                <h3 className="text-xl sm:text-2xl font-serif font-medium text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-200 group-hover:to-teal-200 transition-all">
                  {project.title}
                </h3>

                {/* Project Description */}
                <p className="mt-3 text-sm text-neutral-300 leading-relaxed font-light">
                  {project.description}
                </p>
              </div>

              {/* Technologies & Footer Section */}
              <div className="mt-6 pt-5 border-t border-white/5 flex flex-col justify-between">
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-neutral-400 mb-2.5">
                    Technologies
                  </p>
                  
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/10 text-neutral-300 font-mono hover:border-teal-500/30 hover:text-teal-200 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Direct "View on GitHub" button with GitHub icon unconditionally on ALL FOUR cards */}
                <div className="mt-5 pt-3 flex justify-end">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="github-button inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-xl bg-gradient-to-r from-purple-900/40 via-indigo-900/40 to-teal-900/40 border border-purple-500/25 hover:border-teal-400/40 text-purple-200 hover:text-white transition-all shadow-sm hover:scale-[1.02] active:scale-95 group/btn"
                    title={`View ${project.title} on GitHub`}
                  >
                    <Github size={18} />
                    <span>View on GitHub</span>
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
