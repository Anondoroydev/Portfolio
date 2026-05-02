import { motion } from 'framer-motion'
import { Mail, MessageSquare, MapPin, Sparkles, Send } from 'lucide-react'
import { fadeUp } from '../../utils/animations'

export default function Contact() {
  return (
    <section id="contact" className="pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={fadeUp}>
          <div className="text-center mb-16">
            <p className="text-xs font-semibold tracking-[0.3em] uppercase text-cyan-400 mb-3">Reach Out</p>
            <h2 className="section-title">Contact <span className="text-gradient">Me</span></h2>
            <div className="neon-line w-24 mx-auto mt-4" />
          </div>

          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 items-stretch">
            {/* Contact Info Column */}
            <div className="lg:w-1/3 flex flex-col gap-6">
              {[
                { icon: Mail, title: 'Email Me', value: 'contact@anondo.dev', sub: 'Inquiries usually answered in 12h', color: 'cyan' },
                { icon: MessageSquare, title: 'Let\'s Connect', value: 'Anondo Ray', sub: 'Active on LinkedIn & GitHub', color: 'indigo' },
                { icon: MapPin, title: 'Based In', value: 'Dhaka, Bangladesh', sub: 'Available for Global Opportunities', color: 'fuchsia' },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="p-6 rounded-[2rem] glass-card border-gradient flex flex-col gap-3 relative overflow-hidden group"
                >
                  <div className={`absolute top-0 right-0 w-24 h-24 bg-${item.color}-500/5 blur-2xl rounded-full -mr-10 -mt-10`} />
                  <div className="w-12 h-12 rounded-2xl bg-cyan-500/5 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                    <item.icon size={22} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-1">{item.title}</h4>
                    <p className="text-slate-100 font-bold text-lg mb-1">{item.value}</p>
                    <p className="text-slate-500 text-xs leading-relaxed">{item.sub}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Form Column */}
            <div className="lg:w-2/3 relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-cyan-500/10 via-indigo-500/10 to-fuchsia-500/10 blur-3xl rounded-[3rem] -z-10" />
              
              <form className="h-full glass-card rounded-[2.5rem] p-8 md:p-12 flex flex-col gap-8 relative overflow-hidden border-gradient">
                <div className="flex items-center gap-3 mb-2">
                  <Sparkles size={20} className="text-cyan-400 animate-pulse" />
                  <h3 className="text-2xl font-black text-slate-100">Send a Message</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-1">Full Name</label>
                    <input type="text" placeholder="John Doe" 
                      className="bg-slate-500/5 border border-slate-500/10 rounded-2xl px-6 py-4 outline-none focus:border-cyan-400/50 focus:bg-cyan-500/5 transition-all text-sm" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-1">Email Address</label>
                    <input type="email" placeholder="john@example.com" 
                      className="bg-slate-500/5 border border-slate-500/10 rounded-2xl px-6 py-4 outline-none focus:border-indigo-400/50 focus:bg-indigo-500/5 transition-all text-sm" />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-1">Your Message</label>
                  <textarea rows={5} placeholder="Tell me about your project or just say hi..." 
                    className="bg-slate-500/5 border border-slate-500/10 rounded-2xl px-6 py-4 outline-none focus:border-fuchsia-400/50 focus:bg-fuchsia-500/5 transition-all text-sm resize-none" />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-primary flex items-center justify-center gap-3 w-full py-5 text-base font-bold shadow-2xl shadow-indigo-500/40 group mt-2"
                >
                  Start a Conversation <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </motion.button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
