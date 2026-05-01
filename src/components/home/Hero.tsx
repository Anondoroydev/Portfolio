import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden">
      {/* Ambient background blobs */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/4 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-cyan-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-indigo-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          
          {/* Text Content Area */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left order-2 lg:order-1"
          >
            {/* Status Badge */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 bg-cyan-500/5 border border-cyan-500/20 text-cyan-400 text-xs font-bold uppercase tracking-widest"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              Available for new projects
            </motion.div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-6">
              <span className="text-slate-200">I am a</span>
              <div className="text-gradient mt-2 text-2xl sm:text-4xl md:text-5xl lg:text-6xl whitespace-nowrap overflow-visible">
                <TypeAnimation
                  sequence={[
                    'Full-Stack Developer', 2200,
                    'Frontend Architect', 2200,
                    'Backend Engineer', 2200,
                    'MERN Stack Expert', 2200,
                    'Digital Solution Builder', 2200,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </div>
            </h1>

            <p className="text-slate-400 text-base md:text-lg leading-relaxed max-w-2xl lg:max-w-md mx-auto lg:mx-0 mb-10">
              Transforming innovative ideas into high-performance digital realities with cutting-edge web technologies.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a href="#contact" className="btn-primary w-full sm:w-auto flex items-center justify-center gap-2 text-white group px-8 py-4">
                Hire Me <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#projects" className="btn-secondary w-full sm:w-auto flex items-center justify-center gap-2 text-slate-300 px-8 py-4">
                View My Work
              </a>
            </div>

            {/* Simple Stats Bar */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-8 md:gap-12 mt-12 pt-8 border-t border-white/5">
              {[
                { label: 'Experience', val: '2+ Years' },
                { label: 'Projects', val: '20+' },
                { label: 'Response', val: '100%' },
              ].map((s, i) => (
                <div key={i} className="text-center lg:text-left">
                  <div className="text-2xl font-black text-white">{s.val}</div>
                  <div className="text-[10px] text-slate-500 uppercase tracking-widest font-bold mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Image/Asset Area */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="flex-1 flex justify-center lg:justify-end order-1 lg:order-2"
          >
            <div className="relative w-full max-w-[320px] sm:max-w-[450px] aspect-square flex items-center justify-center">
              
              {/* Animated Background Aura */}
              <motion.div
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.15, 0.3, 0.15]
                }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute inset-0 bg-gradient-to-tr from-cyan-500 via-indigo-500 to-fuchsia-500 blur-[80px] rounded-full"
              />

              {/* Unique Borderless Float Animation */}
              <motion.div
                animate={{ 
                  y: [0, -20, 0],
                  rotate: [0, 2, 0]
                }}
                transition={{ 
                  duration: 6, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="relative z-10 w-full"
              >
                <img
                  src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop"
                  alt="Abstract Tech Evolution"
                  className="w-full h-auto drop-shadow-[0_0_40px_rgba(34,211,238,0.25)] rounded-[3rem]"
                />
              </motion.div>

              {/* Floating Element: Code Snippet Style */}
              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                className="absolute -top-6 -right-6 p-4 glass-card rounded-2xl border border-white/10 hidden sm:block backdrop-blur-md"
              >
                <code className="text-cyan-400 text-xs font-mono">{"<Dev />"}</code>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
