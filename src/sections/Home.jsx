import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Send, Github, Linkedin, Mail } from 'lucide-react';
import profilePic from '../assets/Photo.jpg';

export default function Home() {
  return (
    <section id="home" className="min-h-screen pt-36 pb-16 lg:pt-48 lg:pb-24 flex items-center justify-center relative bg-[#030712] overflow-hidden">
      
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(#111827_1px,transparent_1px)] bg-[size:40px_40px] opacity-50"></div>
      
      {/* Subtle Glows */}
      <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-primary-600/10 rounded-full blur-[120px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-[10%] left-[5%] w-[400px] h-[400px] bg-primary-500/5 rounded-full blur-[100px] -z-10"></div>

      <div className="w-[90%] mx-auto px-12 relative z-10 flex flex-col lg:flex-row items-center gap-20">
        
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex-1 space-y-10 text-center lg:text-left"
        >
          <div className="space-y-4">
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-neutral-400 font-light"
            >
              Hi, I'm your Developer.
            </motion.p>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9]"
            >
              <span className="text-white block">Sumehar</span>
              <span className="text-primary-500 block mt-2">Singh Grewal</span>
            </motion.h1>
          </div>
          
          <div className="space-y-6 max-w-2xl mx-auto lg:mx-0">
            <p className="text-lg md:text-xl text-white font-medium leading-relaxed">
              Full-Stack Developer crafting <span className="text-primary-400">scalable web applications</span> and secure backend systems.
            </p>
            <p className="text-neutral-400 text-base md:text-lg leading-relaxed border-l-2 border-primary-500/30 pl-6 py-1">
              I enjoy designing clean APIs, building secure platforms, and solving complex engineering challenges with efficient, performance-driven solutions.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start pt-4">
            <motion.a 
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              href="#contact" 
              className="group px-10 py-4 text-lg font-bold rounded-full text-white bg-primary-600 hover:bg-primary-500 shadow-xl shadow-primary-600/30 hover:shadow-primary-600/50 transition-all flex items-center gap-3"
            >
              Get In Touch
              <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 trans-smooth" />
            </motion.a>
            <motion.a 
              whileHover={{ x: 5 }}
              href="#projects" 
              className="text-white text-lg font-bold flex items-center gap-2 group underline-offset-8 hover:underline transition-all"
            >
              View Projects 
              <ArrowRight className="w-5 h-5 text-primary-500 group-hover:translate-x-2 trans-smooth" />
            </motion.a>
          </div>
        </motion.div>

        {/* Right Content - Visuals */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.34, 1.56, 0.64, 1] }}
          className="flex-1 relative flex justify-center items-center"
        >
          {/* Decorative Dashed Circles */}
          <div className="absolute w-[120%] h-[120%] dashed-circle opacity-10 animate-[spin_60s_linear_infinite]"></div>
          <div className="absolute w-[140%] h-[140%] dashed-circle opacity-5 animate-[spin_80s_linear_infinite_reverse]"></div>

          {/* Main Image Container */}
          <div className="relative z-10 p-6">
            {/* Multi-layered Premium Border Container */}
            <div className="relative group">
              {/* Outer Decorative Ring - 1px primary line */}
              <div className="absolute -inset-1 border border-primary-500/20 rounded-full"></div>
              
              {/* Inner Picture Container */}
              <div className="relative w-72 h-72 md:w-[450px] md:h-[450px] rounded-full overflow-hidden border-[12px] border-neutral-900 ring-2 ring-primary-500/40 shadow-2xl z-20">
                <img 
                  src={profilePic} 
                  alt="Sumehar Singh Grewal" 
                  className="w-full h-full object-cover transition-all duration-700 ease-[0.16, 1, 0.3, 1] grayscale-[10%] hover:grayscale-0" 
                />
                
                {/* Inner Bezel Shine */}
                <div className="absolute inset-0 rounded-full border border-primary-500/10 shadow-[inset_0_0_100px_rgba(59,130,246,0.05)]"></div>
              </div>

              {/* Orbital Accent - Smaller Version */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-6 pointer-events-none z-30"
              >
                <div className="absolute top-0 left-1/2 -ms-autotranslate-x-1/2 w-10 h-10 bg-[#030712] border-2 border-primary-500/30 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.2)]">
                   <div className="w-2 h-2 bg-primary-500 rounded-full animate-pulse shadow-[0_0_10px_#3B82F6]"></div>
                </div>
              </motion.div>
            </div>

            {/* Floating Badge - Forced Front */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 1 }}
              whileHover={{ scale: 1.1, rotate: -3 }}
              className="absolute bottom-10 right-0 md:-right-8 bg-[#0a0a0a] border border-neutral-800 p-6 rounded-3xl shadow-2xl max-w-[200px] backdrop-blur-md z-40"
            >
              <div className="flex flex-col items-center text-center gap-2">
                 <div className="flex gap-1 text-primary-500">
                   <span>✦</span>
                   <span className="text-white font-black uppercase tracking-widest text-[10px]">Student & Developer</span>
                   <span>✦</span>
                 </div>
                 <p className="text-neutral-400 text-xs font-semibold leading-tight">Crafting future-ready digital solutions</p>
              </div>
            </motion.div>

            {/* Floating Icons */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-10 -right-5 p-4 bg-primary-500/10 rounded-2xl backdrop-blur-md border border-primary-500/20 shadow-xl z-40"
            >
              <Linkedin className="w-6 h-6 text-primary-500" />
            </motion.div>
            <motion.div 
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute top-1/2 -left-12 p-4 bg-neutral-900/80 rounded-2xl backdrop-blur-md border border-neutral-800 shadow-xl z-40"
            >
              <Github className="w-6 h-6 text-white" />
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
