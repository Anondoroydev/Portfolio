import { motion } from 'framer-motion'
import { fadeUp, staggerGrid } from '../../utils/animations'
import { projects } from '../../constants'
import ProjectCard from '../ProjectCard'

export default function Projects() {
  return (
    <section id="projects" className="pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={fadeUp}>
          <div className="text-center mb-16">
            <p className="text-xs font-semibold tracking-[0.3em] uppercase text-fuchsia-400 mb-3">Portfolio</p>
            <h2 className="section-title">My <span className="text-gradient">Projects</span></h2>
            <div className="neon-line w-24 mx-auto mt-4" />
          </div>
          
          <motion.div variants={staggerGrid} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((p, idx) => (
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
  )
}
