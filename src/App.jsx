import { useEffect, useRef } from 'react'
import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Techs from './components/Techs'
import LanguageSwitcher from './components/LanguageSwitcher'

function App() {

  const sectionsRef = useRef([])
  const indexRef = useRef(0)
  const isScrollingRef = useRef(false)
  const cooldownRef = useRef(false)
  const firstDeltaRef = useRef(null)

  useEffect(() => {
    const isMobile = window.innerWidth <= 768
    
    if (isMobile) return
    
    sectionsRef.current = document.querySelectorAll('section')
    
    const onWheel = (e) => {
      e.preventDefault()
      
      // Si on est en cooldown ou en train de scroller, on bloque tout
      if (cooldownRef.current || isScrollingRef.current) return
      
      // Première détection de delta pour ce geste
      if (firstDeltaRef.current === null) {
        firstDeltaRef.current = Math.abs(e.deltaY)
      }
      
      // Détection de trackpad vs molette basée sur le premier delta
      const isTrackpad = firstDeltaRef.current < 50
      const threshold = isTrackpad ? 20 : 50
      
      // On vérifie si le delta actuel dépasse le seuil
      if (Math.abs(e.deltaY) > threshold) {
        // Activer le cooldown immédiatement pour bloquer les événements suivants
        cooldownRef.current = true
        isScrollingRef.current = true
        
        const direction = Math.sign(e.deltaY)
        const newIndex = Math.min(
          sectionsRef.current.length - 1,
          Math.max(0, indexRef.current + direction)
        )
        
        if (newIndex !== indexRef.current) {
          indexRef.current = newIndex
          const target = sectionsRef.current[indexRef.current]
          target.scrollIntoView({ behavior: 'smooth' })

          const obs = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
              isScrollingRef.current = false
              obs.disconnect()
              
              // Cooldown plus long pour trackpad
              const cooldownTime = isTrackpad ? 500 : 300
              setTimeout(() => {
                cooldownRef.current = false
                firstDeltaRef.current = null
              }, cooldownTime)
            }
          }, {
            root: null,
            threshold: 0.85
          })

          obs.observe(target)
        } else {
          isScrollingRef.current = false
          // Même cooldown si on n'a pas changé de section
          const cooldownTime = isTrackpad ? 500 : 200
          setTimeout(() => {
            cooldownRef.current = false
            firstDeltaRef.current = null
          }, cooldownTime)
        }
      }
    }

    window.addEventListener('wheel', onWheel, { passive: false })
    
    return () => {
      window.removeEventListener('wheel', onWheel)
    }
  }, [])

  return (
    <>
      <LanguageSwitcher />
      <Hero />
      <About />
      <Projects />
      <Techs />
      <Contact />
    </>
  )
}

export default App