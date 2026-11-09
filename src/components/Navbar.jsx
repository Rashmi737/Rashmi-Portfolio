import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, ArrowUpRight, Sparkles } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Section tracking for existing sections
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 sm:pt-6 pointer-events-none">
      <nav 
        className={`pointer-events-auto transition-all duration-300 ease-out w-full max-w-5xl rounded-full border px-4 py-2.5 sm:px-6 sm:py-3 flex items-center justify-between ${
          scrolled 
            ? 'bg-[#090914]/80 backdrop-blur-xl border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.4)] shadow-purple-950/20' 
            : 'bg-[#0b0b18]/50 backdrop-blur-md border-white/5 shadow-[0_4px_20px_0_rgba(0,0,0,0.25)]'
        }`}
      >
        {/* Brand / Logo */}
        <a 
          href="#home" 
          className="group flex items-center gap-2.5 text-white focus:outline-none"
        >
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-600 via-indigo-500 to-teal-400 p-[1.5px] transition-transform duration-300 group-hover:scale-105">
            <div className="w-full h-full bg-[#090914] rounded-full flex items-center justify-center">
              <span className="font-serif font-bold text-xs tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-teal-300">
                RV
              </span>
            </div>
          </div>
          <span className="font-serif text-lg tracking-wide font-medium text-white/95 group-hover:text-purple-300 transition-colors">
            Rashmi V.
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-1 lg:gap-2">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.name}
                href={item.href}
                className={`relative px-3 py-1.5 text-sm font-medium transition-all duration-200 rounded-full ${
                  isActive
                    ? 'text-white bg-white/10 shadow-sm'
                    : 'text-neutral-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.name}
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-[2px] bg-gradient-to-r from-purple-400 to-teal-400 rounded-full" />
                )}
              </a>
            );
          })}
        </div>

        {/* Quick Social Links & Action */}
        <div className="hidden md:flex items-center gap-2.5">
          <a
            href="https://github.com/Rashmi737"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-2 text-neutral-400 hover:text-white hover:bg-white/5 rounded-full transition-colors"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="https://linkedin.com/in/rashmi-v-9817a93a5"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-2 text-neutral-400 hover:text-white hover:bg-white/5 rounded-full transition-colors"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href="#contact"
            className="ml-1 inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-full bg-gradient-to-r from-purple-600/90 to-teal-500/90 text-white shadow-sm hover:from-purple-500 hover:to-teal-400 transition-all duration-200 active:scale-95"
          >
            <span>Get in touch</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href="https://github.com/Rashmi737"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="p-1.5 text-neutral-400 hover:text-white"
          >
            <Github className="w-4 h-4" />
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
            className="p-1.5 text-neutral-300 hover:text-white focus:outline-none"
          >
            {isOpen ? <X className="w-5 h-5 text-purple-400" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="pointer-events-auto md:hidden fixed inset-x-4 top-20 bg-[#0c0c1a]/95 backdrop-blur-2xl border border-white/10 rounded-2xl p-5 shadow-2xl z-50 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="px-4 py-2.5 rounded-xl text-base font-medium text-neutral-300 hover:text-white hover:bg-white/5 transition-colors flex items-center justify-between"
              >
                <span>{item.name}</span>
                <ArrowUpRight className="w-4 h-4 opacity-50" />
              </a>
            ))}
            <div className="pt-3 mt-2 border-t border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/Rashmi737"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white/5 rounded-lg text-neutral-300 hover:text-white"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href="https://linkedin.com/in/rashmi-v-9817a93a5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white/5 rounded-lg text-neutral-300 hover:text-white"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 text-xs font-semibold rounded-full bg-gradient-to-r from-purple-600 to-teal-500 text-white"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
