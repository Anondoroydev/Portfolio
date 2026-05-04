import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { Download, Layout, Cpu, Database, Cloud, Code } from 'lucide-react'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[80vh] flex items-center pt-24 pb-0 overflow-hidden bg-[#050816]">
      {/* Subtle Background Gradients - for seamless transition */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10 px-4 mx-auto w-full max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 items-center lg:grid-cols-2 lg:gap-20">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="z-20 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 bg-cyan-500/5 border border-cyan-500/20 text-cyan-400 text-[10px] font-bold uppercase tracking-[0.2em] shadow-[0_0_20px_rgba(34,211,238,0.1)]">
              <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
              Digital Experience Architect
            </div>

            <h1 className="font-black leading-[1.05] tracking-tight text-white mb-8"
                style={{ fontSize: 'clamp(2rem, 6vw, 4.5rem)' }}>
              I am a <br />
              <div className="inline-block mt-1 whitespace-nowrap text-gradient">
                <TypeAnimation
                  sequence={[
                    'Full-Stack Developer', 2500,
                    'Frontend Architect', 2500,
                    'Backend Engineer', 2500,
                    'MERN Stack Expert', 2500,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </div>
            </h1>

            <p className="mx-auto mb-12 max-w-md text-lg leading-relaxed text-slate-400 lg:mx-0">
              Combining logic and creativity to build high-performance digital products for the modern web.
            </p>

            <div className="flex flex-col gap-5 justify-center items-center sm:flex-row lg:justify-start">
              <a href="/resume.pdf" target="_blank" className="flex gap-3 justify-center items-center px-10 py-5 shadow-xl btn-primary text-slate-50 shadow-cyan-500/20">
                <Download size={18} /> Resume
              </a>
              <a href="#projects" className="flex gap-3 justify-center items-center px-10 py-5 btn-secondary text-slate-300">
                <Layout size={18} /> Portfolio
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[450px] aspect-square flex items-center justify-center">
              
              {/* Outer Deep Ambient Glow */}
              <div className="absolute inset-4 bg-cyan-500/10 blur-[80px] rounded-full animate-pulse" />
              
              {/* Spinning Rings */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                className="absolute w-full h-full border-[1.5px] border-cyan-500/10 rounded-full border-dashed"
              />
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                className="absolute w-3/4 h-3/4 border-[1.5px] border-indigo-500/10 rounded-full border-dashed"
              />

              {/* Main Glowing Orb */}
              <motion.div
                animate={{ 
                  y: [0, -20, 0],
                  boxShadow: [
                    "0 0 40px rgba(34,211,238,0.15)",
                    "0 0 80px rgba(99,102,241,0.25)",
                    "0 0 40px rgba(34,211,238,0.15)"
                  ]
                }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="flex overflow-hidden relative justify-center items-center p-8 w-64 h-64 rounded-full border backdrop-blur-sm md:w-80 md:h-80 bg-slate-950/20 border-cyan-500/10 group"
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-20 pointer-events-none" 
                     style={{ backgroundImage: 'radial-gradient(rgba(34,211,238,0.2) 1px, transparent 0)', backgroundSize: '16px 16px' }} /> 
                <img 
                  src="/react-core.png" 
                  alt="Tech Core" 
                  className="w-full h-full object-contain relative z-10 drop-shadow-[0_0_40px_rgba(34,211,238,0.4)] animate-[spin_20s_linear_infinite]"
                />

                <motion.div 
                  animate={{ y: ['-100%', '100%'] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-0 w-full h-32 bg-gradient-to-b from-transparent to-transparent pointer-events-none via-cyan-400/5"
                />
              </motion.div>

              {/* Floating Orbiting Tech Badges */}
              {[
                { Icon: Cpu, top: '10%', left: '0%', color: 'text-cyan-400' },
                { Icon: Code, top: '20%', right: '0%', color: 'text-indigo-400' },
                { Icon: Database, bottom: '20%', left: '0%', color: 'text-blue-400' },
                { Icon: Cloud, bottom: '10%', right: '0%', color: 'text-teal-400' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  animate={{ y: [0, -15, 0], scale: [1, 1.1, 1] }}
                  transition={{ duration: 4 + i, repeat: Infinity, ease: 'easeInOut' }}
                  className={`absolute p-4 glass rounded-2xl border border-cyan-500/10 shadow-2xl ${item.color}`}
                  style={{ top: item.top, bottom: item.bottom, left: item.left, right: item.right }}
                >
                  <item.Icon size={24} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}