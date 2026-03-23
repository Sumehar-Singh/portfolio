import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ShieldCheck, Building2, Terminal } from 'lucide-react';
import { SiCoursera } from 'react-icons/si';

const certifications = [
  {
    name: 'ChatGPT-4 Prompt Engineering: ChatGPT, Generative AI & LLM',
    issuer: 'Infosys Springboard',
    date: 'Aug \'25',
    color: 'group-hover:text-cyan-400',
    glowColor: 'group-hover:from-cyan-500/10',
    iconColor: 'text-cyan-500',
    Icon: Building2,
    link: 'https://infyspringboard.onwingspan.com/public-assets/infosysheadstart/cert/lex_auth_014157693153288192147/1-a41ac724-39c9-42d2-82e8-c4340a645a5b.pdf'
  },
  {
    name: 'Computational Theory: Language Principles & Finite Automata Theory',
    issuer: 'Infosys Springboard',
    date: 'Aug \'25',
    color: 'group-hover:text-cyan-400',
    glowColor: 'group-hover:from-cyan-500/10',
    iconColor: 'text-cyan-500',
    Icon: Building2,
    link: 'https://infyspringboard.onwingspan.com/public-assets/infosysheadstart/cert/lex_auth_0135015511562403847605/1-955f95b7-4618-4b3e-b27e-5b819c4dab7c.pdf'
  },
  {
    name: 'Build Generative AI Apps and Solutions with No-Code Tools',
    issuer: 'Infosys Springboard',
    date: 'Aug \'25',
    color: 'group-hover:text-cyan-400',
    glowColor: 'group-hover:from-cyan-500/10',
    iconColor: 'text-cyan-500',
    Icon: Building2,
    link: 'https://infyspringboard.onwingspan.com/public-assets/infosysheadstart/cert/lex_auth_014157683688415232146/1-86cec599-90cd-4917-b619-6d573ddd8306.pdf'
  },
  {
    name: 'The Bits and Bytes of Computer Networking',
    issuer: 'Coursera',
    date: 'Sep \'24',
    color: 'group-hover:text-blue-500',
    glowColor: 'group-hover:from-blue-600/10',
    iconColor: 'text-blue-600',
    Icon: SiCoursera,
    link: 'https://www.coursera.org/account/accomplishments/verify/NW7G248479AS'
  },
  {
    name: 'Software Development Processes and Methodologies',
    issuer: 'Coursera',
    date: 'May \'24',
    color: 'group-hover:text-blue-500',
    glowColor: 'group-hover:from-blue-600/10',
    iconColor: 'text-blue-600',
    Icon: SiCoursera,
    link: 'https://www.coursera.org/account/accomplishments/verify/S35SJ4TZUD7L'
  },
  {
    name: 'TCP/IP and Advanced Topics',
    issuer: 'Coursera',
    date: 'Nov \'24',
    color: 'group-hover:text-blue-500',
    glowColor: 'group-hover:from-blue-600/10',
    iconColor: 'text-blue-600',
    Icon: SiCoursera,
    link: 'https://www.coursera.org/account/accomplishments/verify/V3FA2KF21IN0'
  },
  {
    name: 'Responsive Web Design',
    issuer: 'freeCodeCamp',
    date: 'Nov \'23',
    color: 'group-hover:text-green-500',
    glowColor: 'group-hover:from-green-500/10',
    iconColor: 'text-green-500',
    Icon: Terminal,
    link: 'https://www.freecodecamp.org/certification/fccc939b74e-c31c-4579-ab3b-5282027a2d08/responsive-web-design'
  }
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-32 bg-[#0a0a0a] relative overflow-hidden text-white">
      <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-primary-600/5 rounded-full blur-[150px] -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-24 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tighter"
          >
            Professional <span className="text-primary-500">Certifications</span>
          </motion.h2>
          <div className="h-1.5 w-24 bg-primary-600 mx-auto rounded-full mb-8"></div>
          <p className="max-w-2xl mx-auto text-xl text-neutral-400 font-medium leading-relaxed">
            Authentic certificates and licenses mapping my continuous journey of learning and professional upskilling.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -8 }}
              className="relative group rounded-[2.5rem] p-1 bg-[#121315] border border-neutral-800/60 shadow-lg overflow-hidden transition-all duration-500 hover:border-neutral-700/80 hover:shadow-2xl"
            >
              <div className={`absolute inset-0 bg-gradient-to-br from-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none ${cert.glowColor}`}></div>

              <div className="h-full bg-[#151617]/90 rounded-[2.4rem] p-10 flex flex-col backdrop-blur-md transition-colors duration-500 group-hover:bg-[#151617]/80">
                <div className="flex justify-between items-start mb-10">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center bg-white/5 border border-white/5 ${cert.iconColor} group-hover:scale-110 transition-transform duration-500 shadow-inner float-animation`}>
                    <cert.Icon className="w-7 h-7" />
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <div className="flex items-center gap-2 bg-emerald-500/10 px-3 py-1.5 rounded-full border border-emerald-500/20">
                      <ShieldCheck className="w-4 h-4 text-emerald-500" />
                      <span className="text-[10px] font-black uppercase tracking-widest text-emerald-500">Verified</span>
                    </div>
                    <span className="text-xs font-bold text-neutral-500">{cert.date}</span>
                  </div>
                </div>

                <h3 className={`text-2xl font-black mb-8 flex-grow tracking-tight leading-snug transition-colors duration-500 ${cert.color}`}>
                  {cert.name}
                </h3>

                <div className="flex items-center justify-between mt-auto pt-8 border-t border-neutral-800/50">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest mb-1">Issuer</span>
                    <span className="text-sm font-black text-neutral-300 tracking-wide">{cert.issuer}</span>
                  </div>
                  <a href={cert.link} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full flex items-center justify-center text-neutral-400 bg-white/5 hover:bg-primary-600 hover:text-white transition-all transform hover:scale-110 shadow-lg border border-transparent group-hover:border-primary-500/30">
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
