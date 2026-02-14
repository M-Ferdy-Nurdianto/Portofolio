import { useState, useEffect } from 'react'
import { FaInstagram, FaDiscord, FaGithub, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Certificates from './components/Certificates'
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
    /* 
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
    })
    */
    
    // Smooth scroll behavior
    document.documentElement.classList.add('smooth-scroll')
  }, [])

  return (
    <div className="min-h-screen custom-scrollbar overflow-x-hidden">
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Certificates />
      <Contact />
      
      {/* Footer */}
      <footer className="py-6 px-4 text-center border-t border-emerald-500/20 bg-black/40 backdrop-blur-sm">
        <div className="container mx-auto px-4 flex flex-col items-center gap-4">
          <div className="flex gap-6">
            <a href={personal.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-emerald-400 transition-colors"><FaInstagram size={24}/></a>
            <a href={personal.discord} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-emerald-400 transition-colors"><FaDiscord size={24}/></a>
            <a href={personal.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-emerald-400 transition-colors"><FaGithub size={24}/></a>
            <a href={`mailto:${personal.email}`} className="text-gray-400 hover:text-emerald-400 transition-colors"><FaEnvelope size={24}/></a>
          </div>
          <div className="flex items-center gap-2 text-gray-500 text-xs md:text-sm">
             <FaMapMarkerAlt className="text-emerald-500"/>
             <span>Mojokerto, Indonesia</span>
          </div>
          <p className="text-gray-500 text-xs md:text-sm">
            © {new Date().getFullYear()} {personal.name}
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
