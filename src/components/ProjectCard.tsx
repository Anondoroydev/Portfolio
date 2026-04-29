import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

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
      whileHover={{ y: -10 }}
      className="glass-card rounded-2xl overflow-hidden flex flex-col group"
    >
      <div className="h-48 overflow-hidden relative">
        <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors z-10" />
        <img src={image} alt={title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-slate-400 mb-6 flex-grow">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag, idx) => (
            <span key={idx} className="text-xs font-medium px-3 py-1 bg-slate-800/80 rounded-full border border-slate-700/50 text-cyan-300">
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex items-center gap-4 mt-auto">
          {githubUrl && (
            <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              <Github size={18} /> Code
            </a>
          )}
          {liveUrl && (
            <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-semibold text-slate-300 hover:text-cyan-400 transition-colors ml-auto">
              <ExternalLink size={18} /> Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}
