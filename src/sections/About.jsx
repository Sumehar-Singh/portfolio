import React from 'react';
import { motion } from 'framer-motion';
import { User, Target, Coffee } from 'lucide-react';

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#030712] relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-0 w-[300px] h-[300px] bg-primary-600/5 rounded-full blur-[100px] -z-10"></div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left"
          >
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-black text-white mb-8 tracking-tighter"
            >
              About <span className="text-primary-500">Me</span>
            </motion.h2>
            
            <div className="space-y-6 text-neutral-400 text-lg leading-relaxed">
              <p className="font-bold text-white text-xl border-l-4 border-primary-500 pl-6">
                Hi, I'm Sumehar Singh Grewal, a Computer Science Engineering student focused on building reliable digital solutions.
              </p>
              <p>
                My journey in technology is driven by a passion for solving real-world problems through clean, efficient code. I specialize in full-stack development, with a strong foundation in modern frameworks and scalable architecture.
              </p>
              <p>
                Beyond coding, I am committed to continuous learning and staying updated with the latest industry trends to ensure I deliver state-of-the-art results.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex-1 w-full grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            <motion.div variants={itemVariants} whileHover={{ y: -8 }} className="glass-panel p-8 rounded-3xl flex flex-col items-start group">
               <div className="w-14 h-14 rounded-2xl bg-primary-500/10 flex items-center justify-center text-primary-500 mb-6 group-hover:bg-primary-500 group-hover:text-white trans-smooth">
                 <User className="h-7 w-7" />
               </div>
               <h3 className="text-2xl font-bold text-white mb-3">Dedicated</h3>
               <p className="text-neutral-400 text-base font-medium">Committed to writing scalable, maintainable, and optimized code.</p>
            </motion.div>
            
            <motion.div variants={itemVariants} whileHover={{ y: -8 }} className="glass-panel p-8 rounded-3xl flex flex-col items-start group">
               <div className="w-14 h-14 rounded-2xl bg-primary-500/10 flex items-center justify-center text-primary-500 mb-6 group-hover:bg-primary-500 group-hover:text-white trans-smooth">
                 <Target className="h-7 w-7" />
               </div>
               <h3 className="text-2xl font-bold text-white mb-3">Driven</h3>
               <p className="text-neutral-400 text-base font-medium">Motivated by delivering tangible, high-quality results.</p>
            </motion.div>
            
            <motion.div variants={itemVariants} whileHover={{ y: -8 }} className="glass-panel p-8 rounded-3xl flex flex-col sm:flex-row items-center sm:items-start sm:col-span-2 gap-8 group">
               <div className="w-20 h-20 shrink-0 rounded-3xl bg-primary-500/10 flex items-center justify-center text-primary-500 group-hover:bg-primary-500 group-hover:text-white trans-smooth">
                 <Coffee className="h-10 w-10" />
               </div>
               <div className="text-center sm:text-left">
                 <h3 className="text-2xl font-bold text-white mb-3">Continual Learner</h3>
                 <p className="text-neutral-400 text-base font-medium">Constantly expanding my knowledge across full-stack frameworks and advanced data structures.</p>
               </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
