import React from 'react';
import { motion } from 'framer-motion';
import { FileDown, GraduationCap, Briefcase, ChevronRight, MapPin } from 'lucide-react';

export default function Resume() {
  return (
    <section id="resume" className="py-32 bg-[#0a0a0a] relative overflow-hidden text-white flex flex-col justify-center">
      <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-primary-600/10 rounded-full blur-[150px] -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 w-full">

        {/* Massive Resume CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full bg-[#121315] border border-neutral-800/80 rounded-[2.5rem] p-10 md:p-14 mb-24 relative overflow-hidden group flex flex-col md:flex-row items-center justify-between shadow-2xl"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
          <div className="relative z-10 mb-8 md:mb-0 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tighter">
              Ready to <span className="text-primary-500">Collaborate?</span>
            </h2>
            <p className="text-neutral-400 text-lg font-medium max-w-xl">
              Download my complete resume to review my full academic progression, professional training, and technical projects in detail.
            </p>
          </div>

          <a
            href="/SumeharSinghCV.pdf"
            download="SumeharSinghCV.pdf"
            target="_blank"
            rel="noreferrer"
            className="relative z-10 shrink-0 inline-flex items-center justify-center gap-4 px-10 py-5 rounded-[1.5rem] bg-primary-600 hover:bg-primary-500 text-white text-xl font-black shadow-xl shadow-primary-600/20 hover:shadow-primary-600/40 transition-all duration-300 transform hover:-translate-y-1 group/btn"
          >
            <FileDown className="w-7 h-7 group-hover/btn:animate-bounce" />
            <span>Download Resume</span>
          </a>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">

          {/* Education Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center mb-10">
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-primary-500 mr-5 border border-white/10 shadow-inner">
                <GraduationCap className="w-7 h-7" />
              </div>
              <h3 className="text-3xl font-black tracking-tight">Education</h3>
            </div>

            <div className="relative pl-8 md:pl-10 border-l border-neutral-800 space-y-8">

              {/* B.Tech */}
              <div className="relative group">
                <div className="absolute -left-[41px] md:-left-[49px] top-2 flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-[#0a0a0a] border-4 border-primary-500 group-hover:scale-125 transition-transform duration-500 z-10"></div>
                  <div className="absolute w-8 h-8 rounded-full bg-primary-500/20 animate-ping opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>

                <div className="bg-[#121315] p-6 md:p-8 rounded-[2rem] border border-neutral-800/80 group-hover:border-primary-500/50 transition-all duration-500 hover:-translate-y-1 shadow-lg hover:shadow-2xl">
                  <span className="inline-block mb-3 text-[10px] font-black text-primary-500 uppercase tracking-[0.2em] bg-primary-500/10 px-3 py-1.5 rounded-full">Aug '23 - Present</span>
                  <h4 className="text-2xl font-black mb-2 tracking-tighter text-white">B.Tech - Computer Science and Engineering</h4>
                  <p className="text-neutral-400 text-base mb-2 font-semibold">Lovely Professional University</p>
                  <div className="flex items-center gap-2 text-neutral-500 text-sm font-medium mb-6">
                    <MapPin className="w-4 h-4" /> Punjab, India
                  </div>
                  <div className="inline-flex items-center px-4 py-2.5 rounded-xl bg-[#0a0a0a] border border-neutral-800">
                    <span className="text-neutral-500 text-xs font-black uppercase tracking-widest mr-3">CGPA</span>
                    <span className="text-primary-400 font-black text-lg">9.01</span>
                  </div>
                </div>
              </div>

              {/* Intermediate */}
              <div className="relative group">
                <div className="absolute -left-[41px] md:-left-[49px] top-2 flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-[#0a0a0a] border-4 border-neutral-600 group-hover:border-primary-500 transition-colors duration-500 z-10"></div>
                </div>

                <div className="bg-[#121315] p-6 md:p-8 rounded-[2rem] border border-neutral-800/80 group-hover:border-primary-500/30 transition-all duration-500 hover:-translate-y-1 shadow-lg">
                  <span className="inline-block mb-3 text-[10px] font-black text-neutral-500 uppercase tracking-[0.2em] bg-white/5 px-3 py-1.5 rounded-full">Apr '22 - Mar '23</span>
                  <h4 className="text-xl font-black mb-2 tracking-tighter text-neutral-200 group-hover:text-white transition-colors">Intermediate</h4>
                  <p className="text-neutral-400 text-base mb-2 font-semibold">Sadhu Singh Shergill Academy</p>
                  <div className="flex items-center gap-2 text-neutral-500 text-sm font-medium mb-6">
                    <MapPin className="w-4 h-4" /> Punjab, India
                  </div>
                  <div className="inline-flex items-center px-4 py-2.5 rounded-xl bg-[#0a0a0a] border border-neutral-800">
                    <span className="text-neutral-500 text-xs font-black uppercase tracking-widest mr-3">Percentage</span>
                    <span className="text-white font-black text-lg">79.4%</span>
                  </div>
                </div>
              </div>

              {/* Matriculation */}
              <div className="relative group">
                <div className="absolute -left-[41px] md:-left-[49px] top-2 flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-[#0a0a0a] border-4 border-neutral-600 group-hover:border-primary-500 transition-colors duration-500 z-10"></div>
                </div>

                <div className="bg-[#121315] p-6 md:p-8 rounded-[2rem] border border-neutral-800/80 group-hover:border-primary-500/30 transition-all duration-500 hover:-translate-y-1 shadow-lg">
                  <span className="inline-block mb-3 text-[10px] font-black text-neutral-500 uppercase tracking-[0.2em] bg-white/5 px-3 py-1.5 rounded-full">Apr '20 - Mar '21</span>
                  <h4 className="text-xl font-black mb-2 tracking-tighter text-neutral-200 group-hover:text-white transition-colors">Matriculation</h4>
                  <p className="text-neutral-400 text-base mb-2 font-semibold">Sadhu Singh Shergill Academy</p>
                  <div className="flex items-center gap-2 text-neutral-500 text-sm font-medium mb-6">
                    <MapPin className="w-4 h-4" /> Punjab, India
                  </div>
                  <div className="inline-flex items-center px-4 py-2.5 rounded-xl bg-[#0a0a0a] border border-neutral-800">
                    <span className="text-neutral-500 text-xs font-black uppercase tracking-widest mr-3">Percentage</span>
                    <span className="text-white font-black text-lg">94.6%</span>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Training Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center mb-10">
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-primary-500 mr-5 border border-white/10 shadow-inner">
                <Briefcase className="w-7 h-7" />
              </div>
              <h3 className="text-3xl font-black tracking-tight">Training</h3>
            </div>

            <div className="relative pl-8 md:pl-10 border-l border-neutral-800 space-y-8">

              <div className="relative group">
                <div className="absolute -left-[41px] md:-left-[49px] top-2 flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-[#0a0a0a] border-4 border-primary-500 group-hover:scale-125 transition-transform duration-500 z-10"></div>
                  <div className="absolute w-8 h-8 rounded-full bg-primary-500/20 animate-ping opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>

                <div className="bg-[#121315] p-6 md:p-8 rounded-[2rem] border border-neutral-800/80 group-hover:border-primary-500/50 transition-all duration-500 hover:-translate-y-1 shadow-lg hover:shadow-2xl">
                  <span className="inline-block mb-3 text-[10px] font-black text-primary-500 uppercase tracking-[0.2em] bg-primary-500/10 px-3 py-1.5 rounded-full">Jun '25 - Jul '25</span>
                  <h4 className="text-2xl font-black mb-3 tracking-tighter text-white">ByteXL</h4>
                  <p className="text-primary-400 font-black mb-6 text-base tracking-tight">
                    Fundamentals of DSA in C++
                  </p>
                  <ul className="text-neutral-400 text-sm space-y-4 font-medium leading-relaxed">
                    <li className="flex gap-3 items-start">
                      <ChevronRight className="w-4 h-4 text-primary-500 shrink-0 mt-0.5" />
                      <span>Analysed core data structures including trees, graphs and hash tables to improve efficiency.</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <ChevronRight className="w-4 h-4 text-primary-500 shrink-0 mt-0.5" />
                      <span>Engineered optimised solutions by evaluating algorithmic trade-offs.</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <ChevronRight className="w-4 h-4 text-primary-500 shrink-0 mt-0.5" />
                      <span>Refactored brute-force approaches into pattern-based optimised solutions.</span>
                    </li>
                  </ul>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
