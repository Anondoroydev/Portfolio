import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function Navbar() {
  const [activeItem, setActiveItem] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'projects', 'contact']
      const scrollPosition = window.scrollY + 100 // Offset for navbar height

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveItem(section === 'hero' ? 'home' : section)
          }
        }
      }
      
      // Special case for top of page
      if (window.scrollY < 100) {
        setActiveItem('home')
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { id: 'home', label: 'Home', href: '#' },
    { id: 'about', label: 'About', href: '#about' },
    { id: 'skills', label: 'Skills', href: '#skills' },
    { id: 'projects', label: 'Projects', href: '#projects' },
    { id: 'contact', label: 'Contact', href: '#contact' },
  ]

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
            ANONDO<span className="text-cyan-400">.</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activeItem === item.id
              return (
                <a 
                  key={item.id} 
                  href={item.href}
                  className={`relative px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${isActive ? 'text-white' : 'text-slate-400 hover:text-slate-200'}`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="nav-active"
                      className="absolute inset-0 rounded-full"
                      style={{ background: 'rgba(34,211,238,0.1)', border: '1px solid rgba(34,211,238,0.2)' }}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </a>
              )
            })}
            
            <a href="#contact" className="ml-6 px-6 py-2.5 rounded-full text-sm font-bold text-white group relative overflow-hidden"
              style={{ background: 'linear-gradient(135deg, #06b6d4, #6366f1)', boxShadow: '0 0 20px rgba(99,102,241,0.3)' }}>
              <span className="relative z-10">Hire Me</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}
