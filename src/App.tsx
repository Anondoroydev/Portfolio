import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import MouseGlow from './components/MouseGlow'
import ScrollToTop from './components/ScrollToTop'
import Footer from './components/Footer'
import Home from './pages/Home'
import Preloader from './components/Preloader'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="bg-[#050816] text-slate-200 selection:bg-cyan-500/30">
      <AnimatePresence mode="wait">
        {loading && <Preloader key="loader" />}
      </AnimatePresence>

      {!loading && (
        <>
          <MouseGlow />
          <Navbar />
          <main>
            <Home />
          </main>
          <Footer />
          <ScrollToTop />
        </>
      )}
    </div>
  )
}

export default App
