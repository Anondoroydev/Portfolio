import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronUp } from 'lucide-react'

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 300)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          initial={{ opacity: 0, y: 30, scale: 0.6 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.6 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Back to top"
          className="fixed bottom-8 right-8 z-50 group"
        >
          {/* Rotating glow ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-0 rounded-full opacity-70"
            style={{
              background: 'conic-gradient(from 0deg, #22d3ee, #818cf8, #c084fc, #22d3ee)',
              filter: 'blur(4px)',
              transform: 'scale(1.2)',
            }}
          />

          {/* Button body */}
          <div
            className="relative w-12 h-12 rounded-full flex items-center justify-center"
            style={{
              background: 'linear-gradient(135deg, #050816, #0f172a)',
              border: '1.5px solid rgba(34,211,238,0.5)',
              boxShadow: '0 0 20px rgba(34,211,238,0.25), inset 0 0 12px rgba(34,211,238,0.05)',
            }}
          >
            <motion.div
              animate={{ y: [0, -4, 0] }}
              transition={{ repeat: Infinity, duration: 1.2, ease: 'easeInOut' }}
            >
              <ChevronUp size={22} className="text-cyan-400" strokeWidth={2.5} />
            </motion.div>
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  )
}
