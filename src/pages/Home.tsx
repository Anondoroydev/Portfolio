import Hero from '../components/home/Hero'
import About from '../components/home/About'
import Skills from '../components/home/Skills'
import Projects from '../components/home/Projects'
import Testimonials from '../components/home/Testimonials'
import Contact from '../components/home/Contact'

export default function Home() {
  return (
    <div className="flex flex-col relative overflow-hidden">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Testimonials />
      <Contact />
    </div>
  )
}
