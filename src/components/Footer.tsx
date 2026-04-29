import { Github, Linkedin, Twitter, Heart, ArrowUp } from 'lucide-react'

const links = [
  { label: 'About', href: '#about' },
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
    <footer className="relative mt-20 border-t border-slate-800 overflow-hidden">
      {/* Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className="text-[10rem] lg:text-[16rem] font-black text-slate-800/30 tracking-tighter whitespace-nowrap">
          ANONDO
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <a href="#" className="text-3xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-indigo-400 to-fuchsia-400">
              ANONDO<span className="text-slate-100">.</span>
            </a>
            <p className="text-slate-400 mt-4 text-sm leading-relaxed max-w-xs">
              Full Stack Web Developer crafting secure, performant, and beautiful digital experiences.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-slate-500 mb-4">Navigation</h4>
            <ul className="space-y-3">
              {links.map((l) => (
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
            <h4 className="text-sm font-semibold uppercase tracking-widest text-slate-500 mb-4">Connect</h4>
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-slate-800/80 border border-slate-700/50 text-slate-400 hover:text-cyan-400 hover:border-cyan-400/40 hover:bg-slate-800 transition-all"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-slate-800">
          <p className="text-slate-500 text-sm flex items-center gap-1.5">
            Made with <Heart size={14} className="text-fuchsia-400 inline fill-fuchsia-400" /> by Anondo &mdash; &copy; {new Date().getFullYear()}
          </p>
          <a
            href="#"
            className="flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-white transition-colors glass px-4 py-2 rounded-full"
          >
            <ArrowUp size={16} /> Back to Top
          </a>
        </div>
      </div>
    </footer>
  )
}
