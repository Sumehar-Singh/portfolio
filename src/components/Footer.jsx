import React from 'react';
import { Github, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#030712] border-t border-neutral-900 py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-6 h-full flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-600 order-2 md:order-1 text-center md:text-left">
          &copy; 2026 Sumehar Singh Grewal. All rights reserved.
        </p>
        <div className="flex space-x-6 order-1 md:order-2">
          <a href="https://github.com/Sumehar-Singh" target="_blank" rel="noreferrer" className="text-neutral-500 hover:text-white hover:-translate-y-1 transition-all duration-300">
            <Github className="w-5 h-5" />
          </a>
          <a href="https://www.linkedin.com/in/sumeharsinghgrewal/" target="_blank" rel="noreferrer" className="text-neutral-500 hover:text-primary-500 hover:-translate-y-1 transition-all duration-300">
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
