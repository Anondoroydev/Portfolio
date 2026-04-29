import { motion } from 'framer-motion'
import { ArrowRight, Code, Shield } from 'lucide-react'

export default function Home() {
  return (
    <div className="flex flex-col gap-24">
      {/* Hero Section */}
      <section className="min-h-[70vh] flex flex-col justify-center items-center text-center">
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Building <span className="text-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]">Secure</span> & <br/>
            Modern Interfaces
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
             I am a Frontend Developer focused on creating stunning, performant web applications using React and Tailwind CSS.
          </p>
          <div className="flex justify-center gap-4">
            <button className="glass flex items-center gap-2 px-8 py-3 rounded-full hover:bg-cyan-500/10 hover:border-cyan-400/50 transition-all font-semibold">
              View Work <ArrowRight size={18} />
            </button>
          </div>
        </motion.div>
      </section>

      {/* Skills Showcase */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass p-8 rounded-2xl"
        >
          <Code className="text-cyan-400 w-10 h-10 mb-4" />
          <h3 className="text-2xl font-bold mb-2">Modern Stack</h3>
          <p className="text-gray-400">Leveraging Vite, React, and Tailwind for lighting fast build times and highly responsive layouts.</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="glass p-8 rounded-2xl"
        >
          <Shield className="text-cyan-400 w-10 h-10 mb-4" />
          <h3 className="text-2xl font-bold mb-2">Secure Setup</h3>
          <p className="text-gray-400">Following strict TypeScript safety, CORS configurations, and modern web security practices.</p>
        </motion.div>
      </section>
    </div>
  )
}
