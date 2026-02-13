import { useState, useEffect } from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import { config } from './services/api'
import './index.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

import { useLanguage } from './context/LanguageContext'

function App() {
  const { personal } = config
  const { t } = useLanguage()

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
    })
    
    // Smooth scroll behavior
    document.documentElement.classList.add('smooth-scroll')
  }, [])

  return (
    <div className="min-h-screen custom-scrollbar overflow-x-hidden">
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Contact />
      
      {/* Footer */}
      <footer className="py-8 px-4 text-center border-t border-emerald-500/10 bg-black/20">
        <div className="container mx-auto px-4">
          <p className="text-gray-400">
            © {new Date().getFullYear()} {personal.name}. {t({ en: "Built with", id: "Dibuat dengan" })} <span className="text-emerald-500">React</span> & <span className="text-emerald-500">Tailwind CSS</span>
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
