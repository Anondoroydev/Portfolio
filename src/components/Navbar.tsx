import { motion } from 'framer-motion'

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed w-full top-0 z-50"
      style={{ background: 'rgba(5,8,22,0.7)', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <a href="#" className="text-2xl font-black tracking-tighter bg-clip-text text-transparent"
            style={{ backgroundImage: 'linear-gradient(135deg, #22d3ee, #818cf8, #c084fc)' }}>
            ANONDO<span className="text-white">.</span>
          </a>
          <div className="hidden md:flex items-center gap-1">
            {['about', 'skills', 'projects', 'contact'].map((item) => (
              <a key={item} href={`#${item}`}
                className="px-4 py-2 rounded-full text-sm font-medium text-slate-400 hover:text-white transition-all capitalize"
                style={{ '--hover-bg': 'rgba(255,255,255,0.06)' } as React.CSSProperties}
                onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.06)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
              >
                {item}
              </a>
            ))}
            <a href="#contact" className="ml-4 px-5 py-2.5 rounded-full text-sm font-semibold text-white"
              style={{ background: 'linear-gradient(135deg, #06b6d4, #6366f1)', boxShadow: '0 0 20px rgba(99,102,241,0.35)' }}>
              Hire Me
            </a>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}
