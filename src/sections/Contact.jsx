import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, MapPin, Phone, Send, CheckCircle, AlertOctagon } from 'lucide-react';
import { db } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('IDLE'); // IDLE, SUBMITTING, SUCCESS, ERROR

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setStatus('SUBMITTING');
    try {
      await addDoc(collection(db, 'messages'), {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        isRead: false,
        createdAt: serverTimestamp()
      });
      setStatus('SUCCESS');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('IDLE'), 5000);
    } catch (err) {
      console.error("Error submitting query:", err);
      setStatus('ERROR');
      setTimeout(() => setStatus('IDLE'), 5000);
    }
  };

  const handleChange = (e) => setFormData({ ...formData, [e.target.id]: e.target.value });

  return (
    <section id="contact" className="py-32 bg-[#0a0a0a] relative overflow-hidden text-white flex flex-col justify-center">
      {/* Decorative Blur */}
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-primary-600/10 rounded-full blur-[180px] -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="text-center mb-24 relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-black mb-6 tracking-tighter"
          >
            Let's <span className="text-primary-500">Collaborate</span>
          </motion.h2>
          <div className="h-1.5 w-24 bg-primary-600 mx-auto rounded-full mb-10 text-center"></div>
          <p className="max-w-2xl mx-auto text-xl text-neutral-400 font-medium leading-relaxed">
            I'm currently looking for new opportunities and interesting projects. Drop a message to connect instantly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-stretch relative z-10 w-full">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col space-y-8"
          >
            <div className="bg-[#121315] p-10 rounded-[2.5rem] flex items-center border border-neutral-800/80 shadow-lg hover:shadow-primary-500/10 transition-all duration-500 group">
              <div className="w-20 h-20 bg-primary-500/10 rounded-2xl flex items-center justify-center text-primary-500 mr-8 group-hover:bg-primary-500 group-hover:text-white transition-colors duration-500 border border-primary-500/20">
                <Mail className="w-8 h-8" />
              </div>
              <div className="min-w-0">
                <p className="text-[10px] font-black text-neutral-500 uppercase tracking-[0.2em] mb-2">Email Directory</p>
                <a href="mailto:sumeharsinghgrewal@gmail.com" className="text-lg xl:text-xl font-black text-white hover:text-primary-400 transition-colors block break-all">sumeharsinghgrewal@gmail.com</a>
              </div>
            </div>

            <div className="bg-[#121315] p-10 rounded-[2.5rem] flex items-center border border-neutral-800/80 shadow-lg hover:shadow-primary-500/10 transition-all duration-500 group">
              <div className="w-20 h-20 bg-primary-500/10 rounded-2xl flex items-center justify-center text-primary-500 mr-8 group-hover:bg-primary-500 group-hover:text-white transition-colors duration-500 border border-primary-500/20">
                <Phone className="w-8 h-8" />
              </div>
              <div>
                <p className="text-[10px] font-black text-neutral-500 uppercase tracking-[0.2em] mb-2">Direct Line</p>
                <a href="tel:+918360645330" className="text-lg xl:text-xl font-black text-white hover:text-primary-400 transition-colors block">+91 8360645330</a>
              </div>
            </div>

            <div className="bg-[#121315] p-10 rounded-[2.5rem] flex items-center border border-neutral-800/80 shadow-lg hover:shadow-primary-500/10 transition-all duration-500 group">
              <div className="w-20 h-20 bg-primary-500/10 rounded-2xl flex items-center justify-center text-primary-500 mr-8 group-hover:bg-primary-500 group-hover:text-white transition-colors duration-500 border border-primary-500/20">
                <MapPin className="w-8 h-8" />
              </div>
              <div>
                <p className="text-[10px] font-black text-neutral-500 uppercase tracking-[0.2em] mb-2">HQ Location</p>
                <p className="text-lg xl:text-xl font-black text-white">Punjab, India</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 pt-4 flex-grow">
               <a 
                 href="https://github.com/Sumehar-Singh" 
                 target="_blank" 
                 rel="noreferrer"
                 className="flex-1 bg-[#121315] py-7 rounded-2xl flex justify-center items-center text-white border border-neutral-800/80 hover:bg-white/5 transition-all text-sm font-black uppercase tracking-widest gap-4 group"
               >
                   <Github className="w-6 h-6 text-primary-500 group-hover:-translate-y-1 transition-transform" /> GitHub
               </a>
               <a 
                 href="https://www.linkedin.com/in/sumeharsinghgrewal/" 
                 target="_blank" 
                 rel="noreferrer"
                 className="flex-1 bg-primary-600 hover:bg-primary-500 py-7 rounded-2xl flex justify-center items-center text-white transition-all text-sm font-black uppercase tracking-widest gap-4 shadow-xl shadow-primary-600/20 group"
               >
                   <Linkedin className="w-6 h-6 group-hover:-translate-y-1 transition-transform" /> LinkedIn
               </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 flex flex-col h-full"
          >
            <form onSubmit={handleSubmit} className="bg-[#121315] p-12 rounded-[3.5rem] border border-neutral-800/80 shadow-2xl flex-grow flex flex-col justify-between">
              <div>
                <h3 className="text-3xl font-black text-white mb-10 tracking-tighter">Send a Query</h3>
                
                <div className="space-y-8 mb-10">
                  <div>
                    <label htmlFor="name" className="block text-[10px] font-black text-neutral-500 mb-3 uppercase tracking-[0.2em]">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Enter your name"
                      className="w-full bg-[#0a0a0a] border border-neutral-800 rounded-2xl px-6 py-5 text-white placeholder-neutral-700 focus:outline-none focus:ring-4 focus:ring-primary-500/10 focus:border-primary-500 transition-all font-semibold"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-[10px] font-black text-neutral-500 mb-3 uppercase tracking-[0.2em]">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="Enter your email address"
                      className="w-full bg-[#0a0a0a] border border-neutral-800 rounded-2xl px-6 py-5 text-white placeholder-neutral-700 focus:outline-none focus:ring-4 focus:ring-primary-500/10 focus:border-primary-500 transition-all font-semibold"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-[10px] font-black text-neutral-500 mb-3 uppercase tracking-[0.2em]">Message Body</label>
                    <textarea
                      id="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      placeholder="How can I help you?"
                      className="w-full bg-[#0a0a0a] border border-neutral-800 rounded-2xl px-6 py-5 text-white placeholder-neutral-700 focus:outline-none focus:ring-4 focus:ring-primary-500/10 focus:border-primary-500 transition-all font-semibold resize-none"
                    ></textarea>
                  </div>
                </div>
              </div>

              {status === 'SUCCESS' && (
                <div className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 px-6 py-4 rounded-2xl mb-6 flex items-center justify-center gap-3 font-bold text-sm">
                  <CheckCircle className="w-5 h-5" /> Message Sent Successfully!
                </div>
              )}

              {status === 'ERROR' && (
                <div className="bg-red-500/10 border border-red-500/30 text-red-500 px-6 py-4 rounded-2xl mb-6 flex items-center justify-center gap-3 font-bold text-sm">
                  <AlertOctagon className="w-5 h-5" /> Failed to send message. Please try again.
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'SUBMITTING'}
                className="w-full mt-auto flex items-center justify-center py-6 px-10 rounded-[2rem] text-xl font-black text-white bg-primary-600 hover:bg-primary-500 transition-all duration-300 focus:outline-none shadow-xl shadow-primary-600/20 group disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === 'SUBMITTING' ? (
                  <>
                    <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin mr-3"></div>
                    Sending Message...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="ml-4 w-6 h-6 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
