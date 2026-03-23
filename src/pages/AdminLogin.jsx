import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import { Shield, KeyRound, Mail } from 'lucide-react';

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/admin/dashboard');
    } catch (err) {
      setError('Invalid admin credentials. Access Denied.');
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-[#030712] flex items-center justify-center p-6 text-white relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-600/10 rounded-full blur-[150px] -z-10"></div>
      
      <div className="w-full max-w-md bg-[#121315] border border-neutral-800/80 p-10 md:p-12 rounded-[2.5rem] shadow-2xl relative z-10">
        <div className="flex justify-center mb-8">
          <div className="w-20 h-20 bg-primary-500/10 rounded-3xl flex items-center justify-center border border-primary-500/20 shadow-xl shadow-primary-500/10">
            <Shield className="w-10 h-10 text-primary-500" />
          </div>
        </div>
        
        <h2 className="text-3xl font-black text-center mb-2 tracking-tighter">System <span className="text-primary-500">Access</span></h2>
        <p className="text-center text-neutral-500 text-xs font-black tracking-[0.2em] uppercase mb-10">Restricted Portal</p>
        
        {error && (
            <div className="bg-red-500/10 border border-red-500/30 text-red-500 px-4 py-3 rounded-xl mb-6 text-center font-bold text-sm">
                {error}
            </div>
        )}
        
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-[10px] font-black text-neutral-500 mb-3 uppercase tracking-[0.2em] flex items-center gap-2">
                <Mail className="w-3 h-3" /> Admin Email
            </label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full bg-[#0a0a0a] border border-neutral-800 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-primary-500 transition-colors font-semibold shadow-inner focus:ring-4 focus:ring-primary-500/10"
            />
          </div>
          <div>
            <label className="block text-[10px] font-black text-neutral-500 mb-3 uppercase tracking-[0.2em] flex items-center gap-2">
                <KeyRound className="w-3 h-3" /> Root Password
            </label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full bg-[#0a0a0a] border border-neutral-800 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-primary-500 transition-colors font-semibold shadow-inner focus:ring-4 focus:ring-primary-500/10"
            />
          </div>
          <button 
            type="submit" 
            disabled={loading}
            className="w-full py-5 rounded-[1.5rem] bg-primary-600 hover:bg-primary-500 text-white font-black text-lg transition-all shadow-xl shadow-primary-600/20 mt-4 disabled:opacity-50 disabled:cursor-not-allowed group flex justify-center items-center gap-3"
          >
            {loading ? (
                <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Authenticating...
                </>
            ) : (
                'Initialize Session'
            )}
          </button>
        </form>
        
        <div className="mt-10 text-center">
            <a href="/" className="text-xs font-black tracking-widest uppercase text-neutral-600 hover:text-white transition-colors">
                ← Return to Public Site
            </a>
        </div>
      </div>
    </div>
  );
}
