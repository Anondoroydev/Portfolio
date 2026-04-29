import { Github, Linkedin, Twitter, Heart } from 'lucide-react'
import { motion } from 'framer-motion'

const nav = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

const socials = [
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' },
]

export default function Footer() {
  return (
    <footer className="relative overflow-hidden" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      {/* Ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-indigo-500/10 blur-[80px] rounded-full pointer-events-none" />

      {/* Big watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className="text-[8rem] lg:text-[14rem] font-black tracking-tighter whitespace-nowrap"
          style={{ color: 'rgba(255,255,255,0.025)' }}>
          ANONDO
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-14">
          {/* Brand */}
          <div>
            <a href="#" className="text-3xl font-black tracking-tighter bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(135deg, #22d3ee, #818cf8, #c084fc)' }}>
              ANONDO<span className="text-white">.</span>
            </a>
            <p className="text-slate-500 mt-4 text-sm leading-relaxed max-w-xs">
              Full Stack Web Developer crafting next-level digital experiences.
            </p>
          </div>

          {/* Nav links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-600 mb-5">Navigation</h4>
            <ul className="space-y-3">
              {nav.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-slate-400 hover:text-cyan-400 transition-colors text-sm font-medium">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-600 mb-5">Connect</h4>
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <motion.a key={label} href={href} aria-label={label} target="_blank" rel="noopener noreferrer"
                  whileHover={{ y: -3, scale: 1.1 }}
                  className="p-3 rounded-2xl text-slate-400 hover:text-white transition-colors"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex items-center justify-center pt-8"
          style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <p className="text-slate-600 text-xs flex items-center gap-1.5">
            Crafted with <Heart size={12} className="text-fuchsia-400 fill-fuchsia-400" /> by Anondo &copy; {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  )
}
