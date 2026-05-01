import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function Preloader() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer)
          return 100
        }
        return prev + 1
      })
    }, 20)
    return () => clearInterval(timer)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#050816]"
    >
      {/* Background glow */}
      <div className="absolute w-[500px] h-[500px] bg-indigo-500/10 blur-[120px] rounded-full" />
      
      <div className="relative flex flex-col items-center">
        {/* Animated Logo / Icon */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="mb-8"
        >
          <div className="text-4xl font-black tracking-tighter bg-clip-text text-transparent"
            style={{ backgroundImage: 'linear-gradient(135deg, #22d3ee, #818cf8, #c084fc)' }}>
            ANONDO<span className="text-cyan-400">.</span>
          </div>
        </motion.div>

        {/* Outer Ring */}
        <div className="w-64 h-1 bg-cyan-500/10 rounded-full overflow-hidden relative">
          <motion.div 
            className="absolute left-0 top-0 h-full bg-gradient-to-r from-cyan-400 via-indigo-500 to-fuchsia-500"
            animate={{ width: `${progress}%` }}
            transition={{ ease: "easeOut" }}
          />
        </div>

        {/* Counter */}
        <div className="mt-4 flex items-center gap-2">
          <span className="text-slate-500 text-xs font-bold uppercase tracking-[0.3em]">System Initializing</span>
          <span className="text-cyan-400 text-sm font-black w-10">{progress}%</span>
        </div>
      </div>
      
      {/* Bottom Text */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="absolute bottom-10 text-slate-600 text-[10px] uppercase font-bold tracking-[0.5em]"
      >
        Digital Experience Architecture
      </motion.p>
    </motion.div>
  )
}
