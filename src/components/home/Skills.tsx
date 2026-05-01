import { motion } from 'framer-motion'
import { fadeUp } from '../../utils/animations'
import { skills1, skills2 } from '../../constants'

export default function Skills() {
  return (
    <section id="skills" className="pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={fadeUp}>
          <div className="text-center mb-16">
            <p className="text-xs font-semibold tracking-[0.3em] uppercase text-indigo-400 mb-3">Skills</p>
            <h2 className="section-title">My <span className="text-gradient">Proficiency</span></h2>
            <div className="neon-line w-24 mx-auto mt-4" />
          </div>

          {/* Row 1 */}
          <div className="marquee-wrapper overflow-hidden mb-4 relative">
            <div className="absolute left-0 top-0 bottom-0 w-28 z-10 pointer-events-none" style={{ background: 'linear-gradient(to right, #050816, transparent)' }} />
            <div className="absolute right-0 top-0 bottom-0 w-28 z-10 pointer-events-none" style={{ background: 'linear-gradient(to left, #050816, transparent)' }} />
            <div className="animate-marquee">
              {[...skills1, ...skills1].map((s, i) => (
                <span key={i} className="inline-flex items-center gap-2 mx-3 px-5 py-2.5 rounded-full text-sm font-medium text-slate-300 hover:text-white transition-colors cursor-default whitespace-nowrap"
                  style={{ background: 'rgba(34,211,238,0.07)', border: '1px solid rgba(34,211,238,0.15)' }}>
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />{s}
                </span>
              ))}
            </div>
          </div>

          {/* Row 2 */}
          <div className="marquee-wrapper overflow-hidden relative mt-4">
            <div className="absolute left-0 top-0 bottom-0 w-28 z-10 pointer-events-none" style={{ background: 'linear-gradient(to right, #050816, transparent)' }} />
            <div className="absolute right-0 top-0 bottom-0 w-28 z-10 pointer-events-none" style={{ background: 'linear-gradient(to left, #050816, transparent)' }} />
            <div className="animate-marquee" style={{ animationDirection: 'reverse', animationDuration: '22s' }}>
              {[...skills2, ...skills2].map((s, i) => (
                <span key={i} className="inline-flex items-center gap-2 mx-3 px-5 py-2.5 rounded-full text-sm font-medium text-slate-300 hover:text-white transition-colors cursor-default whitespace-nowrap"
                  style={{ background: 'rgba(192,132,252,0.07)', border: '1px solid rgba(192,132,252,0.15)' }}>
                  <span className="w-1.5 h-1.5 rounded-full bg-fuchsia-400 animate-pulse" />{s}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
