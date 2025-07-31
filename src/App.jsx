import { useEffect, useRef } from 'react'
import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Techs from './components/Techs'

function App() {

  const sectionsRef = useRef([])
  const indexRef = useRef(0)
  const isScrollingRef = useRef(false)

  useEffect(() => {
    sectionsRef.current = document.querySelectorAll('section')
    
    const onWheel = (e) => {
      e.preventDefault()
      if (isScrollingRef.current) return
      isScrollingRef.current = true

      const dir = Math.sign(e.deltaY)
      indexRef.current = Math.min(
        sectionsRef.current.length - 1,
        Math.max(0, indexRef.current + dir)
      )

      const target = sectionsRef.current[indexRef.current]
      target.scrollIntoView({ behavior: 'smooth' })

      const obs = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          isScrollingRef.current = false
          obs.disconnect()
        }
      }, {
        root: null,
        threshold: 0.85  // on considère la section "atteinte" quand 85% est visible
      })

      obs.observe(target)
    }

    window.addEventListener('wheel', onWheel, { passive: false })
    return () => window.removeEventListener('wheel', onWheel)
  }, [])

  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Techs />
      <Contact />
    </>
  )
}

export default App