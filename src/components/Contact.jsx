import React, { useState } from 'react';
import { Mail, Linkedin, Github, Send, Copy, Check, Sparkles, ExternalLink, MessageSquare, Info } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Contact() {
  const { personal } = portfolioData;
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState(null); // { type: 'success' | 'info', text: '' }

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ type: 'error', text: 'Please fill out name, email, and message.' });
      return;
    }

    // Direct mailto construction
    const subject = encodeURIComponent(formData.subject || `Message from ${formData.name} via Portfolio`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    const mailtoUrl = `mailto:${personal.email}?subject=${subject}&body=${body}`;

    // Open user's email client directly
    window.location.href = mailtoUrl;

    setStatus({
      type: 'info',
      text: 'Opening your default email client to send your message directly to rashmi732007@gmail.com.'
    });
  };

  return (
    <section id="contact" className="py-20 sm:py-28 px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center sm:text-left mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-950/30 border border-teal-500/20 text-teal-300 text-xs font-semibold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Connect & Collaborate</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal tracking-tight text-white">
            Get In <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-indigo-200 to-teal-300">Touch</span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base mt-2 max-w-xl">
            Whether for internships, project collaborations, or tech discussions, I'm always eager to connect.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Contact Details & Direct Links (Left 5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card with Copy button */}
            <div className="glass-card glass-card-hover p-6 rounded-2xl border border-white/10 relative overflow-hidden">
              <div className="flex items-start justify-between gap-3">
                <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-300">
                  <Mail className="w-6 h-6" />
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-medium text-neutral-300 hover:text-white border border-white/10 transition-colors flex items-center gap-1.5"
                  title="Copy email to clipboard"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-teal-400" />
                      <span className="text-teal-300">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>

              <div className="mt-4">
                <p className="text-xs uppercase tracking-wider text-neutral-400 font-medium">Direct Email</p>
                <a
                  href={`mailto:${personal.email}`}
                  className="text-base sm:text-lg font-medium text-white hover:text-purple-300 transition-colors mt-1 block break-all font-mono"
                >
                  {personal.email}
                </a>
              </div>
            </div>

            {/* LinkedIn Card */}
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card glass-card-hover p-6 rounded-2xl border border-white/10 flex items-center justify-between group block"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 group-hover:scale-105 transition-transform">
                  <Linkedin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-neutral-400 font-medium">Professional Network</p>
                  <p className="text-base font-semibold text-white group-hover:text-blue-300 transition-colors">
                    LinkedIn Profile
                  </p>
                  <p className="text-xs text-neutral-400 mt-0.5 truncate max-w-[200px] sm:max-w-xs font-mono">
                    linkedin.com/in/rashmi-v-9817a93a5
                  </p>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-neutral-500 group-hover:text-blue-300 transition-colors" />
            </a>

            {/* GitHub Card */}
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card glass-card-hover p-6 rounded-2xl border border-white/10 flex items-center justify-between group block"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-neutral-200 group-hover:scale-105 transition-transform">
                  <Github className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-neutral-400 font-medium">Open Source & Code</p>
                  <p className="text-base font-semibold text-white group-hover:text-teal-300 transition-colors">
                    GitHub Repositories
                  </p>
                  <p className="text-xs text-neutral-400 mt-0.5 font-mono">
                    github.com/Rashmi737
                  </p>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-neutral-500 group-hover:text-teal-300 transition-colors" />
            </a>

            {/* Integrity Transparency Notice */}
            <div className="p-4 rounded-xl bg-surface-50 border border-white/5 text-xs text-neutral-400 flex items-start gap-2.5">
              <Info className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
              <span>
                Transparent communication: Reaches Rashmi directly via verified email and professional channels.
              </span>
            </div>

          </div>

          {/* Clean Contact Form (Right 7 Cols) */}
          <div className="lg:col-span-7 glass-card p-6 sm:p-8 rounded-2xl border border-white/10 relative">
            <h3 className="font-serif text-xl sm:text-2xl text-white font-medium mb-1 flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-purple-400" />
              <span>Send a Message</span>
            </h3>
            <p className="text-xs text-neutral-400 mb-6">
              Submitting launches a direct draft to <strong className="text-neutral-300 font-mono">rashmi732007@gmail.com</strong>.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs uppercase tracking-wider text-neutral-300 font-medium block mb-1.5">
                    Your Name <span className="text-purple-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Jane Doe"
                    className="w-full text-sm px-4 py-2.5 bg-neutral-900/80 border border-white/10 rounded-xl text-white placeholder-neutral-500 focus:outline-none focus:border-purple-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="text-xs uppercase tracking-wider text-neutral-300 font-medium block mb-1.5">
                    Your Email <span className="text-purple-400">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. jane@example.com"
                    className="w-full text-sm px-4 py-2.5 bg-neutral-900/80 border border-white/10 rounded-xl text-white placeholder-neutral-500 focus:outline-none focus:border-purple-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs uppercase tracking-wider text-neutral-300 font-medium block mb-1.5">
                  Subject
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="e.g. Internship Opportunity / Collaboration"
                  className="w-full text-sm px-4 py-2.5 bg-neutral-900/80 border border-white/10 rounded-xl text-white placeholder-neutral-500 focus:outline-none focus:border-purple-500 transition-colors"
                />
              </div>

              <div>
                <label className="text-xs uppercase tracking-wider text-neutral-300 font-medium block mb-1.5">
                  Message <span className="text-purple-400">*</span>
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Share details about your inquiry or project..."
                  className="w-full text-sm px-4 py-2.5 bg-neutral-900/80 border border-white/10 rounded-xl text-white placeholder-neutral-500 focus:outline-none focus:border-purple-500 transition-colors resize-none"
                />
              </div>

              {status && (
                <div className={`p-3 rounded-xl text-xs flex items-center gap-2 ${
                  status.type === 'error'
                    ? 'bg-red-500/10 border border-red-500/20 text-red-300'
                    : 'bg-teal-500/10 border border-teal-500/20 text-teal-300'
                }`}>
                  <Info className="w-4 h-4 shrink-0" />
                  <span>{status.text}</span>
                </div>
              )}

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-teal-500 hover:from-purple-500 hover:to-teal-400 text-white font-medium text-sm shadow-lg shadow-purple-950/40 transition-all duration-200 active:scale-[0.98] cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Send Message via Email Client</span>
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
