import { motion } from 'framer-motion'
import { ExternalLink, Github, Code2 } from 'lucide-react'

interface ProjectCardProps {
  title: string
  description: string
  image: string
  tags: string[]
  githubUrl?: string
  liveUrl?: string
}

export default function ProjectCard({ title, description, image, tags, githubUrl, liveUrl }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -12 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="group relative rounded-3xl overflow-hidden border-gradient flex flex-col h-full"
      style={{ background: 'rgba(10,15,35,0.8)' }}
    >
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden">
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 flex items-center justify-center gap-4">
          {githubUrl && (
            <motion.a 
              href={githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 rounded-full bg-slate-900/80 backdrop-blur-md flex items-center justify-center text-white border border-white/10 hover:border-cyan-400/50 hover:text-cyan-400 transition-all"
            >
              <Github size={18} />
            </motion.a>
          )}
          {liveUrl && (
            <motion.a 
              href={liveUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 rounded-full bg-slate-900/80 backdrop-blur-md flex items-center justify-center text-white border border-white/10 hover:border-fuchsia-400/50 hover:text-fuchsia-400 transition-all"
            >
              <ExternalLink size={18} />
            </motion.a>
          )}
        </div>
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out" 
        />
        {/* Gradient mask at bottom of image */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#0a0f23] to-transparent z-0" />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow relative z-10">
        <div className="flex items-center gap-2 mb-2">
          <Code2 size={14} className="text-cyan-400/70" />
          <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-500">Case Study</span>
        </div>
        
        <h3 className="text-xl font-black text-white mb-2 group-hover:text-cyan-400 transition-colors">{title}</h3>
        <p className="text-slate-400 text-xs leading-relaxed mb-4 line-clamp-2">{description}</p>
        
        {/* Tech Tags */}
        <div className="flex flex-wrap gap-1.5 mb-6 mt-auto">
          {tags.map((tag, idx) => (
            <span key={idx} className="text-[9px] font-bold px-2.5 py-1 rounded-lg border border-white/5 bg-white/5 text-slate-300 uppercase tracking-tight group-hover:border-cyan-500/20 group-hover:bg-cyan-500/5 transition-colors">
              {tag}
            </span>
          ))}
        </div>
        
        {/* Footer Link */}
        <div className="flex items-center justify-between pt-4 border-t border-white/5 mt-auto">
          <span className="text-[10px] font-semibold text-slate-600 transition-colors italic">Explored</span>
          <div className="flex items-center gap-1.5 text-xs font-bold text-cyan-400 group-hover:underline">
            View <ArrowRight size={14} />
          </div>
        </div>
      </div>
    </motion.div>
  )
}

function ArrowRight({ size, className }: { size: number, className?: string }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2.5" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  )
}
