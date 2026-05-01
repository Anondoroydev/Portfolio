import { motion } from 'framer-motion'
import { fadeUp } from '../../utils/animations'
import { aboutCards } from '../../constants'

export default function About() {
  return (
    <section id="about" className="py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={fadeUp}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

            {/* LEFT — Profile image + bio */}
            <div className="flex flex-col items-center lg:items-start">
              {/* Profile image with orbital ring */}
              <div className="relative mb-10 flex items-center justify-center">
                {/* Outer rotating ring */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
                  className="absolute"
                  style={{ width: 280, height: 280 }}
                >
                  <svg viewBox="0 0 280 280" className="w-full h-full">
                    <circle cx="140" cy="140" r="130" fill="none"
                      stroke="url(#orbGrad)" strokeWidth="1.5" strokeDasharray="12 8" />
                    <defs>
                      <linearGradient id="orbGrad" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#22d3ee" />
                        <stop offset="100%" stopColor="#c084fc" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_10px_#22d3ee]" />
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 rounded-full bg-fuchsia-400 shadow-[0_0_8px_#c084fc]" />
                </motion.div>

                {/* Profile picture */}
                <div className="relative w-52 h-52 rounded-full overflow-hidden z-10"
                  style={{ border: '2px solid rgba(34,211,238,0.3)', boxShadow: '0 0 40px rgba(34,211,238,0.15)' }}>
                  <img src="/avatar.png" alt="Anondo" className="w-full h-full object-cover object-top" />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-950/40" />
                </div>

                {/* Floating badges */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
                  className="absolute -right-2 top-6 px-3 py-1.5 rounded-full text-xs font-bold z-20"
                  style={{ background: 'rgba(34,211,238,0.12)', border: '1px solid rgba(34,211,238,0.3)', color: '#22d3ee' }}
                >
                  ✨ Open to Work
                </motion.div>
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut', delay: 0.5 }}
                  className="absolute -left-2 bottom-6 px-3 py-1.5 rounded-full text-xs font-bold z-20"
                  style={{ background: 'rgba(192,132,252,0.12)', border: '1px solid rgba(192,132,252,0.3)', color: '#c084fc' }}
                >
                  🚀 Full Stack Dev
                </motion.div>
              </div>

              {/* Bio text */}
              <p className="text-xs font-semibold tracking-[0.3em] uppercase text-cyan-400 mb-3 text-center lg:text-left">Who I Am</p>
              <h2 className="text-3xl md:text-4xl font-black mb-5 leading-tight text-center lg:text-left">
                Passionate <span className="text-gradient">Developer</span><br />& Problem Solver
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-4 text-center lg:text-left">
                I'm <span className="text-white font-semibold">Anondo</span>, a results-driven Full Stack Developer with a passion for building scalable, elegant solutions to complex problems. Based in Dhaka, I work with clients globally to deliver premium digital experiences.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-3 w-full mt-4">
                {[
                  { num: '2+', label: 'Years Exp.' },
                  { num: '20+', label: 'Projects' },
                  { num: '∞', label: 'Passion' },
                ].map(({ num, label }) => (
                  <motion.div key={label} whileHover={{ scale: 1.05 }}
                    className="p-4 rounded-2xl text-center relative overflow-hidden group"
                    style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-fuchsia-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="text-2xl font-black text-gradient mb-0.5">{num}</div>
                    <div className="text-xs text-slate-500">{label}</div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* RIGHT — Feature cards */}
            <div className="flex flex-col gap-6">
              {aboutCards.map(({ icon: Icon, title, desc, iconColor, color }, idx) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  whileHover={{ x: 8, scale: 1.01 }}
                  className="relative flex items-center gap-6 p-7 rounded-3xl overflow-hidden group transition-all duration-300"
                  style={{ background: 'rgba(12,18,42,0.8)', border: '1px solid rgba(255,255,255,0.06)' }}
                >
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 text-[7rem] font-black leading-none select-none pointer-events-none"
                    style={{ color: 'rgba(255,255,255,0.03)', fontFamily: 'Outfit, sans-serif' }}>
                    0{idx + 1}
                  </div>
                  <div className={`absolute inset-0 bg-gradient-to-r ${color} opacity-0 group-hover:opacity-30 transition-opacity duration-400`} />

                  <div className="relative shrink-0">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center z-10 relative"
                      style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
                      <Icon className={`${iconColor} w-6 h-6`} />
                    </div>
                    <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-black z-20"
                      style={{ background: 'linear-gradient(135deg,#22d3ee,#818cf8)', color: '#050816' }}>
                      {idx + 1}
                    </div>
                  </div>

                  <div className="relative z-10">
                    <h3 className="text-lg font-bold text-white mb-1.5">{title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  )
}
