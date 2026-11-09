import React from 'react';

export default function AmbientBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
      {/* Deep dark base */}
      <div className="absolute inset-0 bg-[#06060c]" />

      {/* Subtle Purple Ambient Glow - Top Left */}
      <div 
        className="absolute -top-[20%] -left-[10%] w-[600px] h-[600px] sm:w-[800px] sm:h-[800px] rounded-full opacity-20 blur-[130px]"
        style={{
          background: 'radial-gradient(circle, rgba(147, 51, 234, 0.6) 0%, rgba(88, 28, 135, 0.2) 60%, transparent 100%)',
        }}
      />

      {/* Subtle Teal Ambient Glow - Top Right / Middle */}
      <div 
        className="absolute top-[25%] -right-[15%] w-[550px] h-[550px] sm:w-[750px] sm:h-[750px] rounded-full opacity-15 blur-[140px]"
        style={{
          background: 'radial-gradient(circle, rgba(20, 184, 166, 0.6) 0%, rgba(13, 148, 136, 0.2) 50%, transparent 100%)',
        }}
      />

      {/* Cyan & Lavender Glow - Bottom */}
      <div 
        className="absolute -bottom-[20%] left-[20%] w-[700px] h-[600px] rounded-full opacity-15 blur-[150px]"
        style={{
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.4) 0%, rgba(6, 182, 212, 0.3) 40%, transparent 100%)',
        }}
      />

      {/* Subtle grid texture overlay for modern depth */}
      <div 
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
        }}
      />
    </div>
  );
}
