import { useEffect, useState } from 'react'

export default function BackgroundStars() {
  const [stars, setStars] = useState<{ id: number, top: string, left: string, size: string, duration: string }[]>([])

  useEffect(() => {
    const starCount = 50
    const newStars = []
    for (let i = 0; i < starCount; i++) {
      newStars.push({
        id: i,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        size: `${Math.random() * 2 + 1}px`,
        duration: `${Math.random() * 3 + 2}s`
      })
    }
    setStars(newStars)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {stars.map(star => (
        <div
          key={star.id}
          className="star"
          style={{
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
            animationDuration: star.duration
          }}
        />
      ))}
    </div>
  )
}
