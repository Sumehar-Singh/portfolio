import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

import smartSurveyImg from '../assets/smartsurvey.png';
import fdaImg from '../assets/fda.png';
import cpuSchedulerImg from '../assets/cpuscheduler.png';

const projects = [
  {
    title: 'SmartSurvey – Feedback & Survey Management Platform',
    date: 'Dec ‘25',
    bullets: [
      'Engineered a secure full-stack survey platform with Google-authenticated access and private link-based participation for reliable feedback collection.',
      'Architected dynamic forms with 4+ question types (MCQs, ratings, text inputs, file uploads) ensuring high data accuracy and usability.',
      'Orchestrated a real-time analytics dashboard with interactive charts to analyze 100+ responses using timestamped tracking and distribution metrics.'
    ],
    tech: ['React.js', 'Node.js', 'Express.js', 'PostgreSQL', 'Tailwind CSS'],
    github: 'https://github.com/Sumehar-Singh/smart-survey',
    link: 'https://smart-survey-eight.vercel.app/',
    image: smartSurveyImg
  },
  {
    title: 'File Dependency Analyzer',
    date: 'Aug ‘25',
    bullets: [
      'Built a full-stack Electron desktop tool to scan project folders and visualise dependency relationships, supporting analysis of 100+ files per scan to improve codebase maintainability.',
      'Implemented recursive detection using Node.js and Express to classify three dependency types (internal, external and unused), reducing manual dependency inspection time by ~30%.',
      'Developed interactive dependency maps using React and Cytoscape.js with colour-coded nodes and real-time zoom navigation, packaged as a standalone Windows .exe with complete offline support.'
    ],
    tech: ['Electron', 'React', 'Node.js', 'Express.js', 'Cytoscape.js'],
    github: 'https://github.com/Sumehar-Singh/File-Dependency-Analyzer',
    link: '',
    image: fdaImg
  },
  {
    title: 'Intelligent CPU Scheduler Simulator',
    date: 'Apr ‘25',
    bullets: [
      'Designed an interactive scheduling simulator with animations to visualise process state transitions during execution, improving conceptual clarity for users.',
      'Implemented 6 core scheduling algorithms — FCFS, SJF, Round Robin, Priority (Pre-emptive & Non-Preemptive) and SRTF — with dynamic Gantt chart generation for accurate burst allocation.',
      'Enabled comparative analysis to determine the most efficient algorithm for datasets of 10–50 processes, based on turnaround time and waiting time metrics.'
    ],
    tech: ['Python', 'Tkinter'],
    github: 'https://github.com/Sumehar-Singh/Intelligent-CPU-Scheduler',
    link: '',
    image: cpuSchedulerImg
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 bg-[#030712] relative overflow-hidden text-white">
      <div className="absolute top-[10%] right-[-5%] w-[600px] h-[600px] bg-primary-600/5 rounded-full blur-[150px] -z-10 pointer-events-none"></div>
      <div className="absolute bottom-[10%] left-[-5%] w-[600px] h-[600px] bg-primary-600/5 rounded-full blur-[150px] -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-32 relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tighter"
          >
            My <span className="text-primary-500">Projects</span>
          </motion.h2>
          <div className="h-1.5 w-24 bg-primary-600 mx-auto rounded-full mb-8"></div>
          <p className="max-w-3xl mx-auto text-xl text-neutral-400 font-medium leading-relaxed">
            A selection of my recent full-stack applications and technical projects. Built with modern frameworks and robust engineering principles.
          </p>
        </div>

        <div className="space-y-32">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`flex flex-col lg:items-center gap-12 lg:gap-20 ${
                  isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Image Side */}
                <div className="w-full lg:w-1/2">
                  <div className="relative group rounded-[2.5rem] overflow-hidden bg-neutral-900 border border-neutral-800/80 shadow-2xl aspect-[4/3] w-full">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </div>

                {/* Content Side */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center">
                  <h3 className="text-3xl md:text-4xl font-black mb-4 tracking-tight leading-tight">
                    {project.title.split('–')[0]} <br className="hidden md:block"/>
                    {project.title.includes('–') && (
                      <span className="text-xl md:text-2xl text-neutral-300 font-bold block mt-2">
                        – {project.title.split('–')[1].trim()}
                      </span>
                    )}
                  </h3>
                  
                  <p className="text-primary-500 font-bold uppercase tracking-widest text-sm mb-8">
                    {project.date}
                  </p>

                  <ul className="space-y-4 text-neutral-400 text-lg font-medium leading-relaxed mb-10">
                    {project.bullets.map((bullet, i) => (
                      <li key={i} className="flex gap-4 items-start">
                        <ArrowRight className="w-5 h-5 text-primary-500 flex-shrink-0 mt-1" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-wrap gap-3 mb-10">
                    {project.tech.map(t => (
                      <span key={t} className="bg-white/5 border border-white/10 text-neutral-300 px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider hover:border-primary-500/30 hover:bg-white/10 transition-colors cursor-default">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-4">
                    {project.link && (
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="bg-primary-600 hover:bg-primary-500 text-white px-8 py-4 rounded-[1.25rem] font-black transition-all shadow-xl shadow-primary-600/20 text-center flex-1 sm:flex-none flex items-center justify-center gap-2"
                      >
                        Live Demo
                      </a>
                    )}
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noreferrer" 
                      className={
                        !project.link
                          ? "bg-primary-600 hover:bg-primary-500 text-white px-8 py-4 rounded-[1.25rem] font-black transition-all shadow-xl shadow-primary-600/20 text-center flex-1 sm:flex-none flex items-center justify-center gap-2"
                          : "bg-transparent border-2 border-neutral-700 hover:border-neutral-400 text-white px-8 py-4 rounded-[1.25rem] font-bold transition-all flex items-center justify-center gap-2 text-center flex-1 sm:flex-none"
                      }
                    >
                      GitHub <ArrowRight className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
