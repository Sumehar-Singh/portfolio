import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, MapPin, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Education', href: '#resume' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 w-full z-50 bg-[#030712] border-y border-neutral-800">
      {/* Pre-header Bar - Smoothly Expands/Collapses */}
      <motion.div
        initial={false}
        animate={{
          height: scrolled ? 0 : 48,
          opacity: scrolled ? 0 : 1,
        }}
        transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
        className="hidden lg:block bg-[#050914] border-b border-neutral-800/50 overflow-hidden"
      >
        <div className="w-[90%] mx-auto px-12 h-12 flex justify-between items-center text-xs font-bold uppercase tracking-[0.2em] text-neutral-500">
          {/* Left Social Links */}
          <div className="flex items-center gap-6">
            <a href="https://linkedin.com/in/sumeharsinghgrewal" target="_blank" rel="noreferrer" className="hover:text-primary-500 transition-colors">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="https://github.com/Sumehar-Singh" target="_blank" rel="noreferrer" className="hover:text-primary-500 transition-colors">
              <Github className="w-4 h-4" />
            </a>
            <a href="mailto:sumeharsinghgrewal@gmail.com" className="hover:text-primary-500 transition-colors">
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Right Contact Details */}
          <div className="flex items-center gap-10 font-bold tracking-tight">
            <div className="flex items-center gap-2 lowercase">
              <Mail className="w-4 h-4 text-primary-500/40" />
              <span>sumeharsinghgrewal@gmail.com</span>
            </div>
            <div className="flex items-center gap-2 uppercase tracking-[0.1em]">
              <MapPin className="w-4 h-4 text-primary-500/40" />
              <span>Punjab, India</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Main Bar Navigation */}
      <nav
        className={`w-full bg-[#030712] transition-all duration-400 ${scrolled ? 'py-5 shadow-2xl shadow-black/80' : 'py-7'
          }`}
      >
        <div className="w-[90%] mx-auto px-12 flex justify-between items-center">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-4 group">
            <div className="w-11 h-11 rounded bg-primary-500 flex items-center justify-center text-white font-black text-xl shadow-lg shadow-primary-500/10 group-hover:bg-primary-600 transition-colors">
              SS
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black tracking-tighter text-white leading-none">
                SUMEHAR<span className="text-primary-500">.</span>
              </span>
              <span className="text-[9px] font-black uppercase tracking-[0.2em] text-neutral-500 mt-1.5">Full Stack Developer</span>
            </div>
          </a>

          {/* Navigation Links */}
          <div className="hidden lg:flex items-center gap-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="px-5 py-2 text-neutral-400 font-bold text-xs uppercase tracking-[0.15em] hover:text-primary-500 transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <a
              href="#contact"
              className="px-8 py-3 rounded bg-primary-500 hover:bg-primary-600 text-white text-[11px] font-black uppercase tracking-[0.2em] transition-all shadow-lg shadow-primary-500/20 active:scale-95"
            >
              Let's Talk
            </a>
          </div>

          {/* Mobile Toggle */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-neutral-400 hover:text-white"
            >
              {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden bg-[#030712] border-t border-primary-900/20 overflow-hidden"
            >
              <div className="p-8 flex flex-col gap-6">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-2xl font-black text-neutral-500 hover:text-primary-500 transition-colors"
                  >
                    {item.name}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="w-full p-5 rounded bg-primary-500 text-white font-black text-center text-sm tracking-widest uppercase shadow-xl"
                >
                  Hire Me
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
