import { motion } from 'framer-motion'
import { ArrowRight, Code, Mail, Phone, MapPin, SearchCode, Database } from 'lucide-react'
import ProjectCard from '../components/ProjectCard'

export default function Home() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  }

  return (
    <div className="flex flex-col gap-32 scroll-smooth">
      {/* Hero Section */}
      <section id="hero" className="min-h-[85vh] flex items-center relative pt-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/20 rounded-full blur-[120px] -z-10 mix-blend-screen pointer-events-none" />
        <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-fuchsia-500/10 rounded-full blur-[100px] -z-10 mix-blend-screen pointer-events-none" />
        
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
             initial={{ opacity: 0, x: -50 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.7, ease: "easeOut" }}
             className="text-left"
          >
            <div className="inline-block px-4 py-1.5 rounded-full border border-slate-700/50 bg-slate-800/30 backdrop-blur-md mb-8 text-sm font-medium text-slate-300">
              👋 Hello World
            </div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-4 leading-tight">
              I am a <br className="hidden md:block" />
              <motion.span 
                 animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                 transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                 className="text-gradient bg-[length:200%_auto] inline-block"
              >
                Full Stack
              </motion.span><br/>
              <motion.span
                 animate={{ scale: [1, 1.02, 1], color: ["#cbd5e1", "#ffffff", "#cbd5e1"] }}
                 transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                 className="inline-block text-slate-300"
              >
                Web Developer
              </motion.span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 max-w-lg mb-10 font-light leading-relaxed">
               I engineer secure, highly performant, and beautiful digital experiences leveraging modern technologies like React and Tailwind CSS.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="glass flex items-center justify-center gap-2 px-8 py-3.5 rounded-full hover:bg-cyan-500/20 hover:border-cyan-400/50 transition-all font-semibold text-white group bg-cyan-600/20 border-cyan-500/30">
                Hire Me <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#projects" className="flex items-center justify-center gap-2 px-8 py-3.5 rounded-full hover:bg-slate-800 transition-colors font-semibold text-slate-300 border border-slate-700">
                View My Work
              </a>
            </div>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, scale: 0.8 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
             className="relative flex justify-center mt-12 lg:mt-0"
          >
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="relative w-full max-w-sm lg:max-w-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/30 to-fuchsia-500/30 rounded-[3rem] blur-3xl -z-10" />
              <img src="/avatar.png" alt="Developer Avatar" className="w-full h-auto object-cover rounded-[3rem] border border-white/10 shadow-2xl shadow-cyan-500/20" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="pt-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <div className="flex items-center gap-4 mb-12">
            <div className="h-[1px] flex-grow bg-slate-800" />
            <h2 className="text-3xl md:text-5xl font-black text-slate-100 uppercase tracking-widest text-center">About Me</h2>
            <div className="h-[1px] flex-grow bg-slate-800" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.div variants={fadeInUp} className="glass-card p-8 rounded-2xl flex flex-col items-center text-center">
              <div className="p-4 bg-cyan-500/10 rounded-full mb-6">
                <Code size={32} className="text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-200">Frontend Magic</h3>
              <p className="text-slate-400 leading-relaxed text-sm">Building highly responsive, animated, and accessible user interfaces using React and modern CSS frameworks.</p>
            </motion.div>

            <motion.div variants={fadeInUp} className="glass-card p-8 rounded-2xl flex flex-col items-center text-center">
              <div className="p-4 bg-fuchsia-500/10 rounded-full mb-6">
                <SearchCode size={32} className="text-fuchsia-400" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-200">Clean Code</h3>
              <p className="text-slate-400 leading-relaxed text-sm">I prioritize producing scalable, maintainable code architectures with strict TypeScript safety.</p>
            </motion.div>

            <motion.div variants={fadeInUp} className="glass-card p-8 rounded-2xl flex flex-col items-center text-center md:col-span-2 lg:col-span-1">
              <div className="p-4 bg-indigo-500/10 rounded-full mb-6">
                <Database size={32} className="text-indigo-400" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-200">Full-stack Friendly</h3>
              <p className="text-slate-400 leading-relaxed text-sm">Comfortable navigating backend systems and integrating APIs to bring full user stories to life.</p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* My Skills Section */}
      <section id="skills" className="pt-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <div className="flex items-center gap-4 mb-12">
            <div className="h-[1px] flex-grow bg-slate-800" />
            <h2 className="text-3xl md:text-5xl font-black text-slate-100 uppercase tracking-widest text-center whitespace-nowrap">My Skills</h2>
            <div className="h-[1px] flex-grow bg-slate-800" />
          </div>

          {/* Marquee Row 1 - left to right */}
          <div className="marquee-wrapper overflow-hidden mb-4 relative">
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none" />
            <div className="animate-marquee gap-4">
              {[
                { name: 'React', color: 'cyan' },
                { name: 'TypeScript', color: 'blue' },
                { name: 'Tailwind CSS', color: 'teal' },
                { name: 'Node.js', color: 'green' },
                { name: 'Next.js', color: 'slate' },
                { name: 'PostgreSQL', color: 'indigo' },
                { name: 'Git', color: 'orange' },
                { name: 'Figma', color: 'fuchsia' },
                { name: 'React', color: 'cyan' },
                { name: 'TypeScript', color: 'blue' },
                { name: 'Tailwind CSS', color: 'teal' },
                { name: 'Node.js', color: 'green' },
                { name: 'Next.js', color: 'slate' },
                { name: 'PostgreSQL', color: 'indigo' },
                { name: 'Git', color: 'orange' },
                { name: 'Figma', color: 'fuchsia' },
              ].map((skill, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full gl glass-card text-sm font-semibold text-slate-200 hover:text-cyan-300 hover:border-cyan-400/40 transition-colors cursor-default whitespace-nowrap mr-4"
                >
                  <span className="w-2 h-2 rounded-full bg-cyan-400 opacity-80 animate-pulse" />
                  {skill.name}
                </span>
              ))}
            </div>
          </div>

          {/* Marquee Row 2 - right to left */}
          <div className="marquee-wrapper overflow-hidden relative">
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none" />
            <div className="animate-marquee gap-4" style={{ animationDirection: 'reverse', animationDuration: '20s' }}>
              {[
                { name: 'Docker', color: 'blue' },
                { name: 'MongoDB', color: 'green' },
                { name: 'Express.js', color: 'slate' },
                { name: 'REST API', color: 'indigo' },
                { name: 'JavaScript', color: 'yellow' },
                { name: 'HTML5', color: 'orange' },
                { name: 'CSS3', color: 'blue' },
                { name: 'Prisma', color: 'fuchsia' },
                { name: 'Docker', color: 'blue' },
                { name: 'MongoDB', color: 'green' },
                { name: 'Express.js', color: 'slate' },
                { name: 'REST API', color: 'indigo' },
                { name: 'JavaScript', color: 'yellow' },
                { name: 'HTML5', color: 'orange' },
                { name: 'CSS3', color: 'blue' },
                { name: 'Prisma', color: 'fuchsia' },
              ].map((skill, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass-card text-sm font-semibold text-slate-200 hover:text-fuchsia-300 hover:border-fuchsia-400/40 transition-colors cursor-default whitespace-nowrap mr-4"
                >
                  <span className="w-2 h-2 rounded-full bg-fuchsia-400 opacity-80 animate-pulse" />
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="pt-20">
        <motion.div
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, margin: "-100px" }}
           variants={fadeInUp}
        >
          <div className="flex items-center gap-4 mb-16">
            <div className="h-[1px] flex-grow bg-slate-800" />
            <h2 className="text-3xl md:text-5xl font-black text-slate-100 uppercase tracking-widest text-center">Featured Projects</h2>
            <div className="h-[1px] flex-grow bg-slate-800" />
          </div>

          <motion.div 
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <ProjectCard 
              title="E-Commerce Store"
              description="A full-featured shopping cart system built with modern React, integrating secure payments and a clean CMS."
              image="https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1000&auto=format&fit=crop"
              tags={["React", "Tailwind", "Stripe"]}
              githubUrl="#"
              liveUrl="#"
            />
            <ProjectCard 
              title="Dashboard Analytics"
              description="Real-time data visualization dashboard for complex datasets featuring highly interactive charts."
              image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop"
              tags={["TypeScript", "Recharts", "Framer Motion"]}
              githubUrl="#"
            />
            <ProjectCard 
              title="AI Image Generator"
              description="A beautiful prompt-based interface hooking into stable diffusion APIs to generate imagery."
              image="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1000&auto=format&fit=crop"
              tags={["React", "OpenAI API", "Tailwind"]}
              liveUrl="#"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="pt-20 pb-32">
        <motion.div
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, margin: "-100px" }}
           variants={fadeInUp}
        >
           <div className="flex items-center gap-4 mb-16">
            <div className="h-[1px] flex-grow bg-slate-800" />
            <h2 className="text-3xl md:text-5xl font-black text-slate-100 uppercase tracking-widest text-center">Get In Touch</h2>
            <div className="h-[1px] flex-grow bg-slate-800" />
          </div>

          <div className="max-w-4xl mx-auto glass-card rounded-3xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-3xl font-bold mb-6 text-white">Let's build something awesome together.</h3>
                <p className="text-slate-400 mb-8 text-lg">
                  Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
                </p>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-slate-800 rounded-full border border-slate-700 select-none">
                      <Mail className="text-cyan-400" size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-slate-400 font-medium">Email me at</p>
                      <a href="mailto:hello@example.com" className="text-lg font-semibold text-slate-200 hover:text-cyan-400 transition-colors">hello@example.com</a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-slate-800 rounded-full border border-slate-700 select-none">
                      <Phone className="text-cyan-400" size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-slate-400 font-medium">Call me</p>
                      <span className="text-lg font-semibold text-slate-200">+880 1234-567890</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-slate-800 rounded-full border border-slate-700 select-none">
                      <MapPin className="text-cyan-400" size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-slate-400 font-medium">Location</p>
                      <span className="text-lg font-semibold text-slate-200">Dhaka, Bangladesh</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <form className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-medium text-slate-400 ml-1">Name</label>
                  <input type="text" id="name" placeholder="John Doe" className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 outline-none focus:border-cyan-400 focus:bg-slate-900 transition-all text-slate-200" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-medium text-slate-400 ml-1">Email</label>
                  <input type="email" id="email" placeholder="john@example.com" className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 outline-none focus:border-cyan-400 focus:bg-slate-900 transition-all text-slate-200" />
                </div>
                <div className="flex flex-col gap-2 mb-4">
                   <label htmlFor="message" className="text-sm font-medium text-slate-400 ml-1">Message</label>
                   <textarea id="message" rows={4} placeholder="Your message here..." className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 outline-none focus:border-cyan-400 focus:bg-slate-900 transition-all text-slate-200 resize-none"></textarea>
                </div>
                <button type="button" className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 font-bold text-white py-4 rounded-xl hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </section>

    </div>
  )
}
