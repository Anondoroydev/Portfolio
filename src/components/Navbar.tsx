
import { motion } from 'framer-motion'

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed w-full top-0 z-50 glass"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <a href="#" className="text-2xl font-black tracking-tighter text-gradient">
            ANONDO<span className="text-slate-100">.</span>
          </a>
          <div className="hidden md:flex space-x-8 text-sm font-medium">
            <a href="#about" className="text-slate-300 hover:text-cyan-400 transition-colors">About</a>
            <a href="#projects" className="text-slate-300 hover:text-cyan-400 transition-colors">Projects</a>
            <a href="#contact" className="text-slate-300 hover:text-cyan-400 transition-colors">Contact</a>
          </div>
          <div className="md:hidden flex items-center">
            {/* Mobile menu button could be added here */}
          </div>
        </div>
      </div>
    </motion.nav>
  )
}
