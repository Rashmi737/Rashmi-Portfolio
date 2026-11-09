import React from 'react';
import { motion } from 'framer-motion';
import AmbientBackground from './components/AmbientBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

const sectionMotionProps = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] }
};

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#06060c] text-neutral-200 selection:bg-purple-500/30 selection:text-white font-sans antialiased overflow-x-hidden">
      {/* Background ambient lighting */}
      <AmbientBackground />

      {/* Floating rounded Navigation Bar */}
      <Navbar />

      {/* Main Content Sections: Home, About, Skills (Tech Stack), Projects, Experience, Contact */}
      <main className="relative z-10 flex flex-col gap-8 sm:gap-16">
        <Hero />

        <motion.div {...sectionMotionProps}>
          <About />
        </motion.div>

        <motion.div {...sectionMotionProps}>
          <TechStack />
        </motion.div>

        <motion.div {...sectionMotionProps}>
          <Projects />
        </motion.div>

        <motion.div {...sectionMotionProps}>
          <Experience />
        </motion.div>

        <motion.div {...sectionMotionProps}>
          <Contact />
        </motion.div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
