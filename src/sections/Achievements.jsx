import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Code2, Link } from 'lucide-react';
import { SiLeetcode, SiGeeksforgeeks } from 'react-icons/si';

const AnimatedCounter = ({ endValue, suffix }) => {
  const [value, setValue] = React.useState(0);
  const ref = React.useRef(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const duration = 2000;
          const frameRate = 1000 / 60;
          const totalFrames = Math.round(duration / frameRate);
          let frame = 0;

          const easeOutQuad = t => t * (2 - t);

          const counter = setInterval(() => {
            frame++;
            const progress = easeOutQuad(frame / totalFrames);
            const current = Math.round(endValue * progress);

            if (frame >= totalFrames) {
              setValue(endValue);
              clearInterval(counter);
            } else {
              setValue(current);
            }
          }, frameRate);

          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [endValue]);

  return <span ref={ref}>{value}{suffix}</span>;
};

const HackerRankNewIcon = ({ className }) => (
  <svg viewBox="0 0 38 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M2 4v16h5.5v-6h5v6h5.5V4h-5.5v6h-5V4H2z" fill="#FFFFFF" />
    <rect x="20" y="4" width="16" height="16" fill="currentColor" />
  </svg>
);

const achievements = [
  {
    mainStatValue: 400,
    mainStatSuffix: '+',
    subStat: 'DSA Problems Solved',
    platform: 'LeetCode & GeeksforGeeks',
    description: 'Consistently solving complex data structures and algorithms challenges across top premium competitive programming platforms.',
    date: 'Nov \'25',
    iconColor: 'text-orange-500',
    glowColor: 'bg-orange-500/20',
    borderColor: 'group-hover:border-orange-500/30',
    Icons: [
      { component: SiLeetcode, color: 'text-[#FFA116]' },
      { component: SiGeeksforgeeks, color: 'text-[#2f8D46]' }
    ],
    links: [
      { label: 'LeetCode Profile', url: 'https://leetcode.com/u/SumeharSingh/' },
      { label: 'GeeksforGeeks Profile', url: 'https://www.geeksforgeeks.org/profile/sumeharsingh?tab=activity' }
    ]
  },
  {
    mainStatValue: 5,
    mainStatSuffix: '★',
    subStat: 'Gold Rating in C++',
    platform: 'HackerRank',
    description: 'Achieved top-tier problem solving ranking on HackerRank, demonstrating advanced proficiency in C++ programming paradigms, algorithmic optimization, and complex data structure manipulation under rigorous time constraints.',
    date: 'Oct \'25',
    iconColor: 'text-emerald-500',
    glowColor: 'bg-emerald-500/20',
    borderColor: 'group-hover:border-emerald-500/30',
    Icons: [
      { component: HackerRankNewIcon, color: 'text-[#32C766]' }
    ],
    links: [
      { label: 'HackerRank Profile', url: 'https://www.hackerrank.com/profile/sumeharsingh' }
    ]
  }
];

export default function Achievements() {
  return (
    <section id="achievements" className="pt-16 pb-32 bg-[#0a0a0a] relative overflow-hidden text-white flex flex-col justify-center">
      <div className="absolute top-[30%] left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary-600/5 rounded-full blur-[180px] -z-10 pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-6 w-full">
        <div className="text-center mb-24 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 1.2 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-20 h-20 bg-primary-500/10 rounded-3xl flex items-center justify-center mx-auto mb-4 border border-primary-500/20 shadow-2xl shadow-primary-500/10"
          >
            <Trophy className="w-10 h-10 text-primary-500" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tighter"
          >
            Key <span className="text-primary-500">Milestones</span>
          </motion.h2>
          <div className="h-1.5 w-24 bg-primary-600 mx-auto rounded-full mb-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch pt-8">
          {achievements.map((item, index) => (
            <motion.div
              key={item.platform}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.15, duration: 0.7, ease: "easeOut" }}
              whileHover={{ y: -8 }}
              className={`bg-[#121315] border border-neutral-800/60 rounded-3xl p-12 flex flex-col relative overflow-hidden group transition-all duration-500 shadow-xl ${item.borderColor} hover:shadow-2xl`}
            >
              <div className="flex justify-between items-start w-full mb-10 relative z-10">
                <div className="relative">
                  <div className={`absolute inset-0 ${item.glowColor} blur-2xl rounded-full scale-150 opacity-50 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  <div className={`min-w-[4rem] px-5 h-16 rounded-[1.25rem] flex items-center justify-center gap-4 bg-white/5 border border-white/5 shadow-inner ${item.iconColor} relative z-10 group-hover:scale-110 transition-transform duration-500`}>
                    {item.Icons.map((iconObj, i) => (
                      <iconObj.component key={i} className={`w-8 h-8 drop-shadow-md ${iconObj.color || ''}`} />
                    ))}
                  </div>
                </div>
                <span className="text-xs font-black uppercase tracking-widest text-neutral-500 bg-white/5 px-4 py-2 rounded-xl border border-white/5">{item.date}</span>
              </div>

              <div className="relative z-10 mt-6 flex-grow flex flex-col">
                <h3 className="text-5xl font-black text-white mb-3 tracking-tighter">
                  {item.mainStatValue && (
                    <AnimatedCounter endValue={item.mainStatValue} suffix={item.mainStatSuffix} />
                  )}
                </h3>
                <p className={`text-xs font-black uppercase tracking-[0.2em] mb-6 ${item.iconColor}`}>
                  {item.subStat}
                </p>
                <p className="text-neutral-400 text-lg leading-relaxed font-medium mb-8 flex-grow">
                  {item.description}
                </p>

                {item.links && (
                  <div className="flex flex-col gap-3 w-full mt-auto pb-4">
                    {item.links.map((link, i) => (
                      <a
                        key={i}
                        href={link.url}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center justify-center gap-2 w-full py-4 rounded-[1rem] border border-neutral-800 hover:border-neutral-500 text-neutral-400 hover:text-white transition-all font-bold text-sm bg-black/20 hover:bg-white/5"
                      >
                        <Link className="w-4 h-4" /> {link.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              <div className="border-t border-neutral-800/50 pt-8 mt-auto relative z-10">
                <p className="text-[10px] font-black text-neutral-600 uppercase tracking-[0.25em]">
                  Platform: <span className="text-neutral-300 ml-2">{item.platform}</span>
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
