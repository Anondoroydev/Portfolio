import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function MouseGlow() {
  const [pos, setPos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMove)
    return () => window.removeEventListener('mousemove', handleMove)
  }, [])

  return (
    <motion.div
      className="pointer-events-none fixed z-[9999] rounded-full"
      style={{
        width: 400,
        height: 400,
        background: 'radial-gradient(circle, rgba(34,211,238,0.08) 0%, rgba(139,92,246,0.04) 50%, transparent 70%)',
        top: pos.y - 200,
        left: pos.x - 200,
      }}
      animate={{ x: 0, y: 0 }}
      transition={{ type: 'spring', stiffness: 80, damping: 20, mass: 0.5 }}
    />
  )
}
