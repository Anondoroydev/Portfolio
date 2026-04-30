import { motion, AnimatePresence } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { useState, useEffect } from 'react'
import { ArrowRight, Code2, Layers, Server, Mail, Phone, MapPin, Send, MessageSquare, Sparkles, ChevronLeft, ChevronRight, X, Star, Quote } from 'lucide-react'
import ProjectCard from '../components/ProjectCard'

const skills1 = ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Next.js', 'PostgreSQL', 'Git', 'Figma']
const skills2 = ['Docker', 'MongoDB', 'Express.js', 'REST API', 'JavaScript', 'HTML5', 'CSS3', 'Prisma']

const testimonials = [
  { name: "Sarah Johnson", role: "CEO at TechFlow", content: "Working with Anondo was a game-changer. The UI he built for our platform is beautiful and intuitive.", avatar: "https://i.pravatar.cc/150?u=sarah" },
  { name: "David Chen", role: "Product Manager", content: "His attention to detail in animations and responsive design is unmatched. Our users love the new experience.", avatar: "https://i.pravatar.cc/150?u=david" },
  { name: "Elena Rodriguez", role: "Startup Founder", content: "Delivered a complex SaaS dashboard on time and with zero bugs. Truly a professional developer.", avatar: "https://i.pravatar.cc/150?u=elena" },
  { name: "Michael Smith", role: "CTO @ BlueBox", content: "Superb work on our crypto integration. Highly recommended for any Web3 projects.", avatar: "https://i.pravatar.cc/150?u=michael" },
  { name: "Jessica Lee", role: "Creative Director", content: "The most creative developer I've worked with. He brings designs to life so effortlessly.", avatar: "https://i.pravatar.cc/150?u=jessica" },
  { name: "Tom Wilson", role: "Marketing Lead", content: "Anondo's technical skills are top-notch. He understands high-performance web apps better than anyone.", avatar: "https://i.pravatar.cc/150?u=tom" },
  { name: "Sophia Garcia", role: "UX Researcher", content: "Rare to find a dev who cares so much about the user journey. The results speak for themselves.", avatar: "https://i.pravatar.cc/150?u=sophia" },
  { name: "James Bond", role: "Secret Agent", content: "Exceptional precision. The animations are stealthy and smooth. Mission accomplished.", avatar: "https://i.pravatar.cc/150?u=james" },
  { name: "Anna White", role: "App Developer", content: "His code quality is outstanding. Clean, scalable, and easy to maintain. A pleasure to collaborate.", avatar: "https://i.pravatar.cc/150?u=anna" },
  { name: "Robert Brown", role: "Design Tech", content: "Anondo bridges the gap between design and code perfectly. The best implementation I've seen.", avatar: "https://i.pravatar.cc/150?u=robert" },
]

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
  const [showReviewForm, setShowReviewForm] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  // Auto-slide logic
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextTestimonial = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  const prevTestimonial = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  return (
    <div className="flex flex-col relative overflow-hidden">
      
      {/* ──── HERO ──── */}
      <section id="hero" className="relative min-h-screen flex items-center pt-20">
        {/* Ambient blobs - Wrapped in a separate overflow-hidden container to prevent clipping the foreground */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px]" />
          <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 left-1/2 w-[300px] h-[300px] bg-fuchsia-500/10 rounded-full blur-[100px]" />
        </div>

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
              className="flex justify-center items-center h-full"
            >
              <div className="relative w-full max-w-[440px] aspect-square flex items-center justify-center">
                {/* Glow ring */}
                <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-tr from-cyan-500/30 via-indigo-500/20 to-fuchsia-500/30 blur-2xl scale-110" />
                
                {/* Clean Rotating Border Layer */}
                <div className="absolute inset-0 rounded-[2.5rem] p-[1px] overflow-hidden pointer-events-none z-0">
                  {/* The mask-like effect: outer is the rounded container, inner is transparent */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                    className="absolute inset-[-150%] opacity-60"
                    style={{ background: 'conic-gradient(from 0deg, transparent, #22d3ee, transparent, #818cf8, transparent)' }}
                  />
                </div>

                <motion.div
                  animate={{ y: [0, -15, 0] }}
                  transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
                  className="relative w-full h-full z-10 p-[1px] rounded-[2.5rem] overflow-hidden"
                >
                  <img
                    src="/avatar.png"
                    alt="Developer Avatar"
                    className="w-full h-full object-cover rounded-[2.5rem]"
                  />
                  {/* Subtle inner shadow/border overlay */}
                  <div className="absolute inset-0 rounded-[2.5rem] border border-white/10 pointer-events-none" />
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
              {[
                {
                  title: "E-Commerce Luxury",
                  description: "Premium shopping experience with Stripe integration & real-time inventory tracking.",
                  image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1000&auto=format&fit=crop",
                  tags: ["React", "Next.js", "Stripe"]
                },
                {
                  title: "SaaS Dashboard",
                  description: "Complex data visualization with interactive charts & user management system.",
                  image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
                  tags: ["TypeScript", "Recharts", "Node.js"]
                },
                {
                  title: "AI Creative Studio",
                  description: "Image generation platform using Stable Diffusion with custom model training.",
                  image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1000&auto=format&fit=crop",
                  tags: ["Python", "React", "OpenAI"]
                },
                {
                  title: "Crypto Wallet v2",
                  description: "Secure multi-chain wallet with real-time price feeds and swap functionality.",
                  image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=1000&auto=format&fit=crop",
                  tags: ["Web3", "Solidity", "Ether.js"]
                },
                {
                  title: "Social Connect",
                  description: "Real-time communication platform with group chats & video calling support.",
                  image: "https://images.unsplash.com/photo-1516251193007-45ef944ab0c6?q=80&w=1000&auto=format&fit=crop",
                  tags: ["Socket.io", "Express", "React"]
                },
                {
                  title: "Traveler's Hub",
                  description: "Complete flight & hotel booking system with interactive map features.",
                  image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1000&auto=format&fit=crop",
                  tags: ["Next.js", "Mapbox", "Prisma"]
                }
              ].map((p, idx) => (
                <ProjectCard 
                  key={idx}
                  title={p.title}
                  description={p.description}
                  image={p.image}
                  tags={p.tags}
                  githubUrl="#"
                  liveUrl="#"
                />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ──── TESTIMONIALS ──── */}
      <section id="testimonials" className="py-32 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-indigo-500/5 blur-[160px] rounded-full -z-10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="text-center mb-16">
              <p className="text-xs font-semibold tracking-[0.3em] uppercase text-cyan-400 mb-3">Community Love</p>
              <h2 className="section-title">What <span className="text-gradient">Clients Say</span></h2>
              <div className="neon-line w-24 mx-auto mt-4" />
            </div>

            <div className="relative max-w-5xl mx-auto">
              {/* Slider Wrapper */}
              <div className="relative h-[450px] md:h-[350px] flex items-center justify-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 1.1, y: -20 }}
                    transition={{ duration: 0.5, ease: "circOut" }}
                    className="absolute inset-0 flex items-center"
                  >
                    <div className="w-full glass-card p-10 md:p-16 rounded-[4rem] border-gradient relative overflow-hidden group">
                      <Quote className="absolute top-8 right-8 text-white/5" size={120} strokeWidth={1} />
                      
                      <div className="flex flex-col md:flex-row gap-12 items-center relative z-10">
                        <div className="shrink-0">
                          <div className="relative">
                            <div className="absolute -inset-2 bg-gradient-to-tr from-cyan-500 to-indigo-500 rounded-[2.5rem] blur-lg opacity-40 group-hover:opacity-70 transition-opacity" />
                            <img 
                              src={testimonials[currentIndex].avatar} 
                              alt={testimonials[currentIndex].name} 
                              className="w-32 h-32 md:w-40 md:h-40 rounded-[2.5rem] object-cover relative z-10 border-2 border-white/10"
                            />
                          </div>
                        </div>

                        <div className="flex-1 text-center md:text-left">
                          <div className="flex justify-center md:justify-start gap-1 mb-6">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} size={18} className="text-yellow-500 fill-yellow-500" />
                            ))}
                          </div>
                          <p className="text-xl md:text-2xl text-slate-200 font-medium italic leading-relaxed mb-8">
                            "{testimonials[currentIndex].content}"
                          </p>
                          <div>
                            <h4 className="text-2xl font-black text-white tracking-tight">{testimonials[currentIndex].name}</h4>
                            <p className="text-cyan-400 font-bold uppercase tracking-widest text-xs mt-1">{testimonials[currentIndex].role}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Slider Controls */}
              <div className="flex justify-center items-center gap-8 mt-12">
                <button 
                  onClick={prevTestimonial}
                  className="group w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-white hover:border-cyan-400 transition-all duration-300"
                >
                  <ChevronLeft className="group-hover:-translate-x-1 transition-transform" />
                </button>
                
                <div className="flex gap-2">
                  {testimonials.map((_, i) => (
                    <button 
                      key={i}
                      onClick={() => setCurrentIndex(i)}
                      className={`h-1.5 rounded-full transition-all duration-500 ${i === currentIndex ? 'w-8 bg-cyan-400' : 'w-2 bg-white/20'}`}
                    />
                  ))}
                </div>

                <button 
                  onClick={nextTestimonial}
                  className="group w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-white hover:border-cyan-400 transition-all duration-300"
                >
                  <ChevronRight className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Add Review Button */}
              <div className="mt-20 flex justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowReviewForm(true)}
                  className="flex items-center gap-3 px-12 py-5 rounded-full bg-white/5 border border-white/10 text-white font-black uppercase tracking-widest text-xs hover:bg-white/10 hover:border-cyan-400/30 transition-all"
                >
                  <MessageSquare size={18} className="text-cyan-400" />
                  Leave a Feedback
                </motion.button>
              </div>
            </div>

            {/* Premium Review Modal */}
            <AnimatePresence>
              {showReviewForm && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setShowReviewForm(false)}
                    className="absolute inset-0 bg-slate-950/80 backdrop-blur-xl"
                  />
                  
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 50 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 50 }}
                    className="relative w-full max-w-2xl glass-card p-10 md:p-14 rounded-[4rem] border-gradient overflow-hidden"
                  >
                    <button 
                      onClick={() => setShowReviewForm(false)}
                      className="absolute top-8 right-8 text-slate-500 hover:text-white transition-colors"
                    >
                      <X size={24} />
                    </button>

                    <div className="absolute top-0 left-0 w-32 h-32 bg-cyan-500/10 blur-3xl rounded-full" />
                    
                    <div className="relative text-center mb-12">
                      <div className="w-16 h-16 rounded-3xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 mx-auto mb-6">
                        <Star size={32} />
                      </div>
                      <h3 className="text-3xl font-black text-white mb-3">Share Your <span className="text-gradient">Story</span></h3>
                      <p className="text-slate-500 text-sm">Your feedback drives my passion for excellence.</p>
                    </div>

                    <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="flex flex-col gap-3">
                        <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 ml-1">Full Name</label>
                        <input type="text" placeholder="John Doe" className="bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white outline-none focus:border-cyan-400/50 transition-all" />
                      </div>
                      <div className="flex flex-col gap-3">
                        <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 ml-1">Your Role</label>
                        <input type="text" placeholder="CEO @ Company" className="bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white outline-none focus:border-indigo-400/50 transition-all" />
                      </div>
                      <div className="flex flex-col gap-3 md:col-span-2">
                        <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 ml-1">Testimonial</label>
                        <textarea placeholder="Tell the world how I helped you..." rows={4} className="bg-white/5 border border-white/10 rounded-3xl px-6 py-5 text-white outline-none focus:border-fuchsia-400/50 transition-all resize-none" />
                      </div>
                      <div className="md:col-span-2 mt-4">
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={(e) => { e.preventDefault(); setShowReviewForm(false); }}
                          className="w-full py-5 rounded-3xl bg-gradient-to-r from-cyan-500 via-indigo-500 to-fuchsia-600 text-white font-black uppercase tracking-widest text-sm shadow-2xl shadow-indigo-500/30"
                        >
                          Publish Review
                        </motion.button>
                      </div>
                    </form>
                  </motion.div>
                </div>
              )}
            </AnimatePresence>
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
