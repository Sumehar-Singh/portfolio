import React, { useEffect, useState } from 'react';
import { collection, query, orderBy, onSnapshot, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { db, auth } from '../firebase';
import { signOut } from 'firebase/auth';
import { LogOut, Trash2, Mail, Calendar, MessageSquare, CheckCircle, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function AdminDashboard() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Listen for real-time updates from Firestore
    const q = query(collection(db, 'messages'), orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const msgs = [];
      snapshot.forEach((doc) => {
        msgs.push({ id: doc.id, ...doc.data() });
      });
      setMessages(msgs);
      setLoading(false);
    }, (error) => {
      console.error("Error fetching messages: ", error);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    navigate('/admin');
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to permanently delete this message?")) {
      await deleteDoc(doc(db, 'messages', id));
    }
  };

  const toggleReadStatus = async (id, currentStatus) => {
    await updateDoc(doc(db, 'messages', id), {
      isRead: !currentStatus
    });
  };

  const formatDate = (timestamp) => {
    if (!timestamp) return 'Just now';
    const date = timestamp.toDate();
    return new Intl.DateTimeFormat('en-US', {
      month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit'
    }).format(date);
  };

  return (
    <div className="min-h-screen bg-[#030712] text-white p-6 md:p-12 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary-600/5 rounded-full blur-[150px] -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center bg-[#121315] border border-neutral-800/80 p-8 rounded-[2rem] shadow-xl mb-10 w-full gap-6">
          <div>
            <h1 className="text-3xl font-black tracking-tighter">Admin <span className="text-primary-500">Dashboard</span></h1>
            <p className="text-neutral-500 text-sm font-bold uppercase tracking-widest mt-2">{messages.length} Total Inquiries</p>
          </div>
          <button 
            onClick={handleLogout}
            className="flex items-center gap-3 px-8 py-4 bg-red-500/10 hover:bg-red-500/20 text-red-500 border border-red-500/30 rounded-xl font-bold transition-all"
          >
            <LogOut className="w-5 h-5" /> Terminate Session
          </button>
        </div>

        {/* Content */}
        <div className="bg-[#121315] border border-neutral-800/80 rounded-[2rem] shadow-2xl overflow-hidden w-full">
          {loading ? (
            <div className="p-20 text-center flex flex-col items-center">
              <div className="w-12 h-12 border-4 border-primary-500 border-t-transparent rounded-full animate-spin mb-4"></div>
              <p className="text-neutral-500 font-black uppercase tracking-widest text-sm">Syncing Database...</p>
            </div>
          ) : messages.length === 0 ? (
            <div className="p-24 text-center">
              <div className="w-24 h-24 bg-neutral-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageSquare className="w-10 h-10 text-neutral-600" />
              </div>
              <h3 className="text-2xl font-black text-neutral-400 mb-2">Inbox Zero</h3>
              <p className="text-neutral-600 font-medium">You have no new messages at this time.</p>
            </div>
          ) : (
            <div className="w-full overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-neutral-800/80 bg-neutral-900/50">
                    <th className="py-6 px-8 text-[10px] font-black uppercase tracking-[0.2em] text-neutral-500 w-[5%] text-center">Status</th>
                    <th className="py-6 px-8 text-[10px] font-black uppercase tracking-[0.2em] text-neutral-500 w-[20%]">Sender Details</th>
                    <th className="py-6 px-8 text-[10px] font-black uppercase tracking-[0.2em] text-neutral-500 w-[50%]">Message Content</th>
                    <th className="py-6 px-8 text-[10px] font-black uppercase tracking-[0.2em] text-neutral-500 w-[15%]">Timestamp</th>
                    <th className="py-6 px-8 text-[10px] font-black uppercase tracking-[0.2em] text-neutral-500 w-[10%] text-center">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-800/50">
                  {messages.map((msg) => (
                    <tr key={msg.id} className={`group hover:bg-white/5 transition-colors ${msg.isRead ? 'opacity-60 grayscale-[50%]' : ''}`}>
                      <td className="py-6 px-8 text-center align-top pt-8">
                        <button 
                          onClick={() => toggleReadStatus(msg.id, msg.isRead)}
                          className={`w-6 h-6 rounded-full flex items-center justify-center mx-auto transition-all ${msg.isRead ? 'bg-neutral-800 text-neutral-500 hover:text-white' : 'bg-primary-500/20 text-primary-500 border border-primary-500/50 shadow-[0_0_15px_rgba(59,130,246,0.3)]'}`}
                          title={msg.isRead ? "Mark unread" : "Mark read"}
                        >
                          {msg.isRead ? <CheckCircle className="w-3 h-3" /> : <Clock className="w-3 h-3" />}
                        </button>
                      </td>
                      <td className="py-6 px-8 align-top">
                        <div className="flex flex-col gap-1">
                          <span className="font-bold text-white text-lg">{msg.name}</span>
                          <a href={`mailto:${msg.email}`} className="text-primary-500 hover:text-primary-400 font-medium text-sm flex items-center gap-2">
                             <Mail className="w-3 h-3" /> {msg.email}
                          </a>
                        </div>
                      </td>
                      <td className="py-6 px-8 align-top">
                        <div className="bg-black/40 border border-neutral-800/50 rounded-2xl p-5 break-words text-neutral-300 font-medium leading-relaxed whitespace-pre-wrap">
                          {msg.message}
                        </div>
                      </td>
                      <td className="py-6 px-8 align-top">
                         <div className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-white/5 border border-white/5 text-xs font-bold text-neutral-400 whitespace-nowrap">
                            <Calendar className="w-3 h-3" /> {formatDate(msg.createdAt)}
                         </div>
                      </td>
                      <td className="py-6 px-8 align-top text-center pt-8">
                        <button 
                          onClick={() => handleDelete(msg.id)}
                          className="w-10 h-10 rounded-xl bg-red-500/10 hover:bg-red-500 text-red-500 hover:text-white transition-all flex items-center justify-center mx-auto"
                          title="Delete message"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
