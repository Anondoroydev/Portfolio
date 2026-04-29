import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full top-0 z-50 glass"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            O.Dev
          </Link>
          <div className="flex space-x-8">
            <Link to="/" className="text-gray-300 hover:text-cyan-400 transition-colors">Home</Link>
            <Link to="/projects" className="text-gray-300 hover:text-cyan-400 transition-colors">Projects</Link>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}
