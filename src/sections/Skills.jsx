import React from 'react';
import { motion } from 'framer-motion';
import { 
  SiC, SiCplusplus, SiExpress, SiTailwindcss,
  SiPostgresql, SiMongodb, SiMysql,
  SiJson, SiJsonwebtokens,
  SiPostman, SiFirebase, SiPython
} from 'react-icons/si';

import { 
  FaUsers, FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPhp, FaGithub, FaGitAlt 
} from 'react-icons/fa';

import { 
  Code2, Globe, Database, Smartphone, Terminal, Cpu, Workflow,
  Shuffle, Activity, ShieldCheck, Monitor, BarChart2, ListTodo, Layers
} from 'lucide-react';

const skills = [
  { 
    name: 'Programming Languages', 
    icon: Code2, 
    techs: [
      { name: 'C', Icon: SiC, color: 'text-blue-500' },
      { name: 'C++', Icon: SiCplusplus, color: 'text-blue-600' },
      { name: 'JavaScript', Icon: FaJs, color: 'text-yellow-400' },
      { name: 'Python', Icon: SiPython, color: 'text-blue-400' }
    ]
  },
  { 
    name: 'Web Technologies', 
    icon: Globe, 
    techs: [
      { name: 'HTML5', Icon: FaHtml5, color: 'text-orange-500' },
      { name: 'CSS3', Icon: FaCss3Alt, color: 'text-blue-500' },
      { name: 'REST APIs', Icon: Workflow, color: 'text-purple-400' },
      { name: 'JSON', Icon: SiJson, color: 'text-neutral-300' },
      { name: 'AJAX', Icon: Globe, color: 'text-blue-400' }
    ]
  },
  { 
    name: 'Frameworks & Libraries', 
    icon: Layers, 
    techs: [
      { name: 'React.js', Icon: FaReact, color: 'text-cyan-400' },
      { name: 'Node.js', Icon: FaNodeJs, color: 'text-green-500' },
      { name: 'Express.js', Icon: SiExpress, color: 'text-neutral-400' },
      { name: 'Electron', Icon: Monitor, color: 'text-indigo-300' },
      { name: 'Tailwind CSS', Icon: SiTailwindcss, color: 'text-teal-400' },
      { name: 'Chart.js', Icon: BarChart2, color: 'text-pink-400' },
      { name: 'PHP', Icon: FaPhp, color: 'text-indigo-400' },
      { name: 'JWT', Icon: SiJsonwebtokens, color: 'text-pink-500' }
    ]
  },
  { 
    name: 'Database Management', 
    icon: Database, 
    techs: [
      { name: 'PostgreSQL', Icon: SiPostgresql, color: 'text-blue-400' },
      { name: 'MongoDB', Icon: SiMongodb, color: 'text-green-500' },
      { name: 'MySQL', Icon: SiMysql, color: 'text-blue-500' }
    ]
  },
  { 
    name: 'Tools & Platforms', 
    icon: Smartphone, 
    techs: [
      { name: 'Git', Icon: FaGitAlt, color: 'text-orange-500' },
      { name: 'GitHub', Icon: FaGithub, color: 'text-white' },
      { name: 'VS Code', Icon: Terminal, color: 'text-blue-500' },
      { name: 'Postman', Icon: SiPostman, color: 'text-orange-400' },
      { name: 'Firebase', Icon: SiFirebase, color: 'text-yellow-500' }
    ]
  },
  { 
    name: 'Soft Skills', 
    icon: Cpu, 
    techs: [
      { name: 'Adaptability', Icon: Shuffle, color: 'text-primary-400' },
      { name: 'Resilience', Icon: Activity, color: 'text-primary-400' },
      { name: 'Task Prioritisation', Icon: ListTodo, color: 'text-primary-400' },
      { name: 'Discipline', Icon: ShieldCheck, color: 'text-primary-400' },
      { name: 'Team-Orientation', Icon: FaUsers, color: 'text-primary-400' }
    ]
  }
];


const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24 relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tighter"
          >
            My <span className="text-primary-500">Skills</span>
          </motion.h2>
          <div className="h-1.5 w-24 bg-primary-600 mx-auto rounded-full mb-8"></div>
          <p className="max-w-2xl mx-auto text-xl text-neutral-400 font-medium leading-relaxed">
            A comprehensive toolkit for full-stack software development and engineering robust digital solutions.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skills.map((skill) => {
            const CategoryIcon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                variants={item}
                whileHover={{ y: -8 }}
                className="glass-panel p-10 rounded-[2.5rem] group trans-smooth flex flex-col h-full relative overflow-hidden hover:bg-[#1f2227]/40 border-neutral-800/80 hover:border-primary-500/30"
              >
                {/* Ghost Watermark Icon */}
                <CategoryIcon className="absolute -bottom-10 -right-10 w-48 h-48 text-white/[0.02] group-hover:text-primary-500/[0.05] transition-colors duration-700 transform -rotate-12 pointer-events-none" />

                <div className="flex items-center mb-10 relative z-10">
                  <div className="w-16 h-16 rounded-[1.25rem] bg-primary-500/10 flex items-center justify-center text-primary-500 mr-6 group-hover:bg-primary-500 group-hover:text-white transition-all duration-500 shadow-lg shadow-primary-500/10">
                    <CategoryIcon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-black text-white tracking-tight">{skill.name}</h3>
                </div>
                
                <div className="flex flex-wrap flex-grow content-start gap-3 mt-auto relative z-10 w-full">
                    {skill.techs.map(tech => {
                        const TechIcon = tech.Icon;
                        return (
                            <span 
                              key={tech.name} 
                              className="group/pill bg-[#030712]/50 backdrop-blur-md text-neutral-300 text-[13px] sm:text-sm font-bold px-4 py-2.5 rounded-full border border-white/5 hover:border-primary-500/40 hover:text-white trans-smooth flex items-center gap-2.5 shadow-xl flex-grow sm:flex-grow-0 justify-center"
                            >
                                <TechIcon className={`w-4 h-4 ${tech.color} group-hover/pill:scale-110 trans-smooth`} />
                                {tech.name}
                            </span>
                        );
                    })}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
