import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20">
      {/* Ambient blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px]" />
        <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/2 w-[300px] h-[300px] bg-fuchsia-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left text */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 text-xs font-semibold tracking-widest uppercase"
              style={{ background: 'rgba(34,211,238,0.08)', border: '1px solid rgba(34,211,238,0.2)', color: '#22d3ee' }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              Available for Work
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-black leading-[1.1] mb-6">
              <span className="block text-slate-300">I am a</span>
              <TypeAnimation
                sequence={[
                  'Software Engineer', 2200,
                  'Full-Stack Developer', 2200,
                  'React & Next.js Expert', 2200,
                  'UX/UI Solutions Architect', 2200,
                  'Creative Problem Solver', 2200,
                ]}
                wrapper="span"
                speed={55}
                deletionSpeed={65}
                repeat={Infinity}
                className="text-gradient whitespace-nowrap"
                style={{ display: 'block' }}
              />
            </h1>

            <p className="text-slate-400 text-lg leading-relaxed max-w-md mb-10">
              Transforming innovative ideas into high-performance digital realities with cutting-edge web technologies.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="btn-primary flex items-center gap-2 text-white group">
                Hire Me <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#projects" className="btn-secondary flex items-center gap-2 text-slate-300">
                View Projects
              </a>
            </div>

            {/* Stats */}
            <div className="flex gap-10 mt-14">
              {[['2+', 'Years Exp.'], ['20+', 'Projects'], ['100%', 'Dedication']].map(([num, label]) => (
                <div key={label}>
                  <div className="text-2xl font-black text-gradient">{num}</div>
                  <div className="text-xs text-slate-500 uppercase tracking-widest mt-1">{label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.25, ease: 'easeOut' }}
            className="flex justify-center items-center h-full"
          >
            <div className="relative w-full max-w-[440px] aspect-square flex items-center justify-center">
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-tr from-cyan-500/30 via-indigo-500/20 to-fuchsia-500/30 blur-2xl scale-110" />
              
              {/* Clean Rotating Border Layer */}
              <div className="absolute inset-0 rounded-[2.5rem] p-[1px] overflow-hidden pointer-events-none z-0">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-[-150%] opacity-60"
                  style={{ background: 'conic-gradient(from 0deg, transparent, #22d3ee, transparent, #818cf8, transparent)' }}
                />
              </div>

              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
                className="relative w-full h-full z-10 p-[1px] rounded-[2.5rem] overflow-hidden"
              >
                <img
                  src="/avatar.png"
                  alt="Developer Avatar"
                  className="w-full h-full object-cover rounded-[2.5rem]"
                />
                <div className="absolute inset-0 rounded-[2.5rem] border border-white/10 pointer-events-none" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
