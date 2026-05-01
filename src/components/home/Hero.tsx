import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { Download, Layout } from 'lucide-react'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-indigo-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Stabilized Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 bg-cyan-500/5 border border-cyan-500/20 text-cyan-400 text-xs font-bold uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              Available for new projects
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-8">
              <span className="text-slate-200">I am a</span>
              <div className="text-gradient mt-2 text-xl sm:text-3xl md:text-4xl lg:text-5xl whitespace-nowrap">
                <TypeAnimation
                  sequence={[
                    'Full-Stack Developer', 2200,
                    'Frontend Architect', 2200,
                    'Backend Engineer', 2200,
                    'MERN Stack Expert', 2200,
                    'Digital Solution Builder', 2200,
                  ]}
                  wrapper="span"
                  speed={55}
                  repeat={Infinity}
                />
              </div>
            </h1>

            <p className="text-slate-400 text-lg leading-relaxed max-w-md mx-auto lg:mx-0 mb-12">
              Transforming innovative ideas into high-performance digital realities with cutting-edge web technologies.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5">
              <a href="/resume.pdf" target="_blank" className="btn-primary w-full sm:w-auto flex items-center justify-center gap-2 text-white group">
                <Download size={18} /> Resume
              </a>
              <a href="#projects" className="btn-secondary w-full sm:w-auto flex items-center justify-center gap-2 text-slate-300">
                <Layout size={18} /> Portfolio
              </a>
            </div>
          </motion.div>

          {/* Quantum React Core Layout */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[440px] aspect-square flex items-center justify-center">
              {/* Deep Ambient Energy Field */}
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 via-indigo-500/10 to-fuchsia-500/20 blur-3xl scale-125 rounded-full" />
              
              {/* Atomic Orbital Rings */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                className="absolute w-[95%] h-[95%] rounded-full border-[1.5px] border-cyan-500/20 border-dashed"
              />
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
                className="absolute w-[75%] h-[75%] rounded-full border-[2px] border-indigo-500/20 border-dotted"
              />

              {/* Central Floating React PNG */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
                className="relative z-10 w-full flex items-center justify-center"
              >
                <div className="relative flex items-center justify-center w-full">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute w-1/2 h-1/2 bg-cyan-400/20 rounded-full blur-xl z-0"
                  />
                  <motion.img
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                    src="/react-core.png"
                    alt="React Technology PNG"
                    className="w-2/3 h-auto relative z-20 object-contain drop-shadow-[0_0_60px_rgba(34,211,238,0.5)] hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </motion.div>

              {/* Orbiting Utility Nodes */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute top-10 right-4 p-3 bg-slate-900/80 backdrop-blur-md rounded-2xl border border-cyan-500/30 shadow-[0_0_20px_rgba(34,211,238,0.2)] z-30 hidden md:block"
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-ping" />
                  <span className="text-cyan-400 font-mono text-[10px] uppercase font-black tracking-widest">System Active</span>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute bottom-10 left-4 p-4 bg-slate-900/80 backdrop-blur-md rounded-2xl border border-indigo-500/30 shadow-[0_0_20px_rgba(99,102,241,0.2)] z-30 hidden md:block"
              >
                <span className="text-indigo-400 font-mono text-[12px] font-black tracking-widest">{"<Code />"}</span>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}