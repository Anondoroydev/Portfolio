import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { ArrowRight, Code2, Layers, Server, Mail, Phone, MapPin, Send, MessageSquare, Sparkles } from 'lucide-react'
import ProjectCard from '../components/ProjectCard'
import BackgroundStars from '../components/BackgroundStars'

const skills1 = ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Next.js', 'PostgreSQL', 'Git', 'Figma']
const skills2 = ['Docker', 'MongoDB', 'Express.js', 'REST API', 'JavaScript', 'HTML5', 'CSS3', 'Prisma']

const aboutCards = [
  {
    icon: Code2,
    title: 'Frontend Magic',
    desc: 'Pixel-perfect, animated UI with React, Tailwind & Framer Motion.',
    color: 'from-cyan-500/20 to-cyan-600/5',
    iconColor: 'text-cyan-400',
    glow: 'group-hover:shadow-cyan-500/20',
  },
  {
    icon: Layers,
    title: 'Clean Code',
    desc: 'Scalable, maintainable architectures with strict TypeScript safety.',
    color: 'from-indigo-500/20 to-indigo-600/5',
    iconColor: 'text-indigo-400',
    glow: 'group-hover:shadow-indigo-500/20',
  },
  {
    icon: Server,
    title: 'Full-stack Ready',
    desc: 'Comfortable with backends, APIs, databases, and cloud deployments.',
    color: 'from-fuchsia-500/20 to-fuchsia-600/5',
    iconColor: 'text-fuchsia-400',
    glow: 'group-hover:shadow-fuchsia-500/20',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

const staggerGrid = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

export default function Home() {
  return (
    <div className="flex flex-col relative overflow-hidden">
      <BackgroundStars />
      
      {/* ──── HERO ──── */}
      <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Ambient blobs */}
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 left-1/2 w-[300px] h-[300px] bg-fuchsia-500/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left text */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 text-xs font-semibold tracking-widest uppercase"
                style={{ background: 'rgba(34,211,238,0.08)', border: '1px solid rgba(34,211,238,0.2)', color: '#22d3ee' }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                Available for Work
              </motion.div>

              <h1 className="text-5xl md:text-7xl font-black leading-[1.1] mb-6">
                <span className="block text-slate-300">I am a</span>
                <TypeAnimation
                  sequence={[
                    'Full Stack', 2200,
                    'Web Developer', 2200,
                    'React Expert', 2200,
                    'UI/UX Designer', 2200,
                    'Node.js Dev', 2200,
                  ]}
                  wrapper="span"
                  speed={55}
                  deletionSpeed={65}
                  repeat={Infinity}
                  className="text-gradient whitespace-nowrap"
                  style={{ display: 'block' }}
                />
              </h1>

              <p className="text-slate-400 text-lg leading-relaxed max-w-md mb-10">
                I engineer secure, high-performance web applications that look stunning and feel incredible to use.
              </p>

              <div className="flex flex-wrap gap-4">
                <a href="#contact" className="btn-primary flex items-center gap-2 text-white group">
                  Hire Me <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="#projects" className="btn-secondary flex items-center gap-2 text-slate-300">
                  View Projects
                </a>
              </div>

              {/* Stats */}
              <div className="flex gap-10 mt-14">
                {[['2+', 'Years Exp.'], ['20+', 'Projects'], ['100%', 'Dedication']].map(([num, label]) => (
                  <div key={label}>
                    <div className="text-2xl font-black text-gradient">{num}</div>
                    <div className="text-xs text-slate-500 uppercase tracking-widest mt-1">{label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.25, ease: 'easeOut' }}
              className="flex justify-center"
            >
              <div className="relative">
                {/* Glow ring */}
                <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-tr from-cyan-500/30 via-indigo-500/20 to-fuchsia-500/30 blur-2xl scale-105" />
                {/* Rotating border */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  className="absolute -inset-2 rounded-[2.8rem] opacity-40"
                  style={{ background: 'conic-gradient(from 0deg, transparent, #22d3ee, transparent, #818cf8, transparent)' }}
                />
                <motion.div
                  animate={{ y: [0, -18, 0] }}
                  transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut' }}
                  className="relative"
                >
                  <img
                    src="/avatar.png"
                    alt="Developer Avatar"
                    className="w-full max-w-[480px] h-auto rounded-[2.5rem] object-cover relative z-10"
                    style={{ border: '1px solid rgba(255,255,255,0.08)' }}
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ──── ABOUT ──── */}
      <section id="about" className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={fadeUp}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

              {/* LEFT — Profile image + bio */}
              <div className="flex flex-col items-center lg:items-start">
                {/* Profile image with orbital ring */}
                <div className="relative mb-10 flex items-center justify-center">
                  {/* Outer rotating ring */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
                    className="absolute"
                    style={{ width: 280, height: 280 }}
                  >
                    <svg viewBox="0 0 280 280" className="w-full h-full">
                      <circle cx="140" cy="140" r="130" fill="none"
                        stroke="url(#orbGrad)" strokeWidth="1.5" strokeDasharray="12 8" />
                      <defs>
                        <linearGradient id="orbGrad" x1="0" y1="0" x2="1" y2="1">
                          <stop offset="0%" stopColor="#22d3ee" />
                          <stop offset="100%" stopColor="#c084fc" />
                        </linearGradient>
                      </defs>
                    </svg>
                    {/* Orbiting dot */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_10px_#22d3ee]" />
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 rounded-full bg-fuchsia-400 shadow-[0_0_8px_#c084fc]" />
                  </motion.div>

                  {/* Profile picture */}
                  <div className="relative w-52 h-52 rounded-full overflow-hidden z-10"
                    style={{ border: '2px solid rgba(34,211,238,0.3)', boxShadow: '0 0 40px rgba(34,211,238,0.15)' }}>
                    <img src="/avatar.png" alt="Anondo" className="w-full h-full object-cover object-top" />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-950/40" />
                  </div>

                  {/* Floating badge */}
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
                    className="absolute -right-2 top-6 px-3 py-1.5 rounded-full text-xs font-bold z-20"
                    style={{ background: 'rgba(34,211,238,0.12)', border: '1px solid rgba(34,211,238,0.3)', color: '#22d3ee' }}
                  >
                    ✨ Open to Work
                  </motion.div>
                  <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut', delay: 0.5 }}
                    className="absolute -left-2 bottom-6 px-3 py-1.5 rounded-full text-xs font-bold z-20"
                    style={{ background: 'rgba(192,132,252,0.12)', border: '1px solid rgba(192,132,252,0.3)', color: '#c084fc' }}
                  >
                    🚀 Full Stack Dev
                  </motion.div>
                </div>

                {/* Bio text */}
                <p className="text-xs font-semibold tracking-[0.3em] uppercase text-cyan-400 mb-3 text-center lg:text-left">Who I Am</p>
                <h2 className="text-3xl md:text-4xl font-black mb-5 leading-tight text-center lg:text-left">
                  Passionate <span className="text-gradient">Developer</span><br />& Problem Solver
                </h2>
                <p className="text-slate-400 text-sm leading-relaxed mb-4 text-center lg:text-left">
                  Hi! I'm <span className="text-white font-semibold">Anondo</span>, a Full Stack Web Developer from Dhaka, Bangladesh
                  who loves crafting clean, high-performance web experiences.
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-3 w-full mt-4">
                  {[
                    { num: '2+', label: 'Years Exp.' },
                    { num: '20+', label: 'Projects' },
                    { num: '∞', label: 'Passion' },
                  ].map(({ num, label }) => (
                    <motion.div key={label} whileHover={{ scale: 1.05 }}
                      className="p-4 rounded-2xl text-center relative overflow-hidden group"
                      style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-fuchsia-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="text-2xl font-black text-gradient mb-0.5">{num}</div>
                      <div className="text-xs text-slate-500">{label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* RIGHT — Feature cards with giant ghost numbers */}
              <div className="flex flex-col gap-6">
                {aboutCards.map(({ icon: Icon, title, desc, iconColor, color }, idx) => (
                  <motion.div
                    key={title}
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.15 }}
                    whileHover={{ x: 8, scale: 1.01 }}
                    className="relative flex items-center gap-6 p-7 rounded-3xl overflow-hidden group transition-all duration-300"
                    style={{ background: 'rgba(12,18,42,0.8)', border: '1px solid rgba(255,255,255,0.06)' }}
                  >
                    {/* Giant ghost number */}
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 text-[7rem] font-black leading-none select-none pointer-events-none"
                      style={{ color: 'rgba(255,255,255,0.03)', fontFamily: 'Outfit, sans-serif' }}>
                      0{idx + 1}
                    </div>
                    {/* Hover gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${color} opacity-0 group-hover:opacity-30 transition-opacity duration-400`} />

                    {/* Icon with number badge */}
                    <div className="relative shrink-0">
                      <div className="w-14 h-14 rounded-2xl flex items-center justify-center z-10 relative"
                        style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
                        <Icon className={`${iconColor} w-6 h-6`} />
                      </div>
                      <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-black z-20"
                        style={{ background: 'linear-gradient(135deg,#22d3ee,#818cf8)', color: '#050816' }}>
                        {idx + 1}
                      </div>
                    </div>

                    {/* Text */}
                    <div className="relative z-10">
                      <h3 className="text-lg font-bold text-white mb-1.5">{title}</h3>
                      <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

            </div>
          </motion.div>
        </div>
      </section>

      {/* ──── SKILLS ──── */}
      <section id="skills" className="pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={fadeUp}>
            <div className="text-center mb-16">
              <p className="text-xs font-semibold tracking-[0.3em] uppercase text-indigo-400 mb-3">Tech Stack</p>
              <h2 className="section-title">My <span className="text-gradient">Skills</span></h2>
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

      {/* ──── PROJECTS ──── */}
      <section id="projects" className="pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={fadeUp}>
            <div className="text-center mb-16">
              <p className="text-xs font-semibold tracking-[0.3em] uppercase text-fuchsia-400 mb-3">My Work</p>
              <h2 className="section-title">Featured <span className="text-gradient">Projects</span></h2>
              <div className="neon-line w-24 mx-auto mt-4" />
            </div>
            <motion.div variants={staggerGrid} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ProjectCard title="E-Commerce Store" description="Full-featured shopping cart with secure payments & clean CMS backend."
                image="https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1000&auto=format&fit=crop"
                tags={['React', 'Tailwind', 'Stripe']} githubUrl="#" liveUrl="#" />
              <ProjectCard title="Dashboard Analytics" description="Real-time data visualization dashboard with highly interactive charts."
                image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop"
                tags={['TypeScript', 'Recharts', 'Framer']} githubUrl="#" />
              <ProjectCard title="AI Image Generator" description="Prompt-based interface powered by Stable Diffusion APIs."
                image="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1000&auto=format&fit=crop"
                tags={['React', 'OpenAI API', 'Tailwind']} liveUrl="#" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ──── CONTACT ──── */}
      <section id="contact" className="pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={fadeUp}>
            <div className="text-center mb-16">
              <p className="text-xs font-semibold tracking-[0.3em] uppercase text-cyan-400 mb-3">Get in Touch</p>
              <h2 className="section-title">Let's <span className="text-gradient">Collaborate</span></h2>
              <div className="neon-line w-24 mx-auto mt-4" />
            </div>

            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 items-stretch">
              {/* Contact Info Column */}
              <div className="lg:w-1/3 flex flex-col gap-6">
                {[
                  { icon: Mail, title: 'Email Me', value: 'hello@anondo.dev', sub: 'I usually reply within 24 hours', color: 'cyan' },
                  { icon: MessageSquare, title: 'Chat on Social', value: '@anondodev', sub: 'Available on LinkedIn & Twitter', color: 'indigo' },
                  { icon: MapPin, title: 'Location', value: 'Dhaka, Bangladesh', sub: 'Open to remote work worldwide', color: 'fuchsia' },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="p-6 rounded-[2rem] glass-card border-gradient flex flex-col gap-3 relative overflow-hidden group"
                  >
                    <div className={`absolute top-0 right-0 w-24 h-24 bg-${item.color}-500/5 blur-2xl rounded-full -mr-10 -mt-10`} />
                    <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                      <item.icon size={22} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-1">{item.title}</h4>
                      <p className="text-white font-bold text-lg mb-1">{item.value}</p>
                      <p className="text-slate-500 text-xs leading-relaxed">{item.sub}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Form Column */}
              <div className="lg:w-2/3 relative">
                <div className="absolute -inset-4 bg-gradient-to-tr from-cyan-500/10 via-indigo-500/10 to-fuchsia-500/10 blur-3xl rounded-[3rem] -z-10" />
                
                <form className="h-full glass-card rounded-[2.5rem] p-8 md:p-12 flex flex-col gap-8 relative overflow-hidden border-gradient">
                  <div className="flex items-center gap-3 mb-2">
                    <Sparkles size={20} className="text-cyan-400 animate-pulse" />
                    <h3 className="text-2xl font-black text-white">Send a Message</h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-1">Full Name</label>
                      <input type="text" placeholder="John Doe" 
                        className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-cyan-400/50 focus:bg-cyan-500/5 transition-all text-sm" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-1">Email Address</label>
                      <input type="email" placeholder="john@example.com" 
                        className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-indigo-400/50 focus:bg-indigo-500/5 transition-all text-sm" />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-1">Your Message</label>
                    <textarea rows={5} placeholder="Tell me about your project or just say hi..." 
                      className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-fuchsia-400/50 focus:bg-fuchsia-500/5 transition-all text-sm resize-none" />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="btn-primary flex items-center justify-center gap-3 w-full py-5 text-base font-bold shadow-2xl shadow-indigo-500/40 group mt-2"
                  >
                    Start a Conversation <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </motion.button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
