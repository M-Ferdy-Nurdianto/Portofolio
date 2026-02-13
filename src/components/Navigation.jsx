import { useState, useEffect } from 'react'
import { FaBars, FaTimes, FaGithub, FaGlobe } from 'react-icons/fa'
import { config } from '../services/api'
import { useLanguage } from '../context/LanguageContext'

const Navigation = () => {
  const { personal, ui } = config
  const { lang, toggleLanguage, t } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: t(ui.nav.home), href: '#home' },
    { name: t(ui.nav.about), href: '#about' },
    { name: t(ui.nav.projects), href: '#projects' },
    { name: t(ui.nav.contact), href: '#contact' },
  ]

  const scrollToSection = (e, href) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'glass-card shadow-lg py-4 border-b border-emerald-500/10'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => scrollToSection(e, '#home')}
            className="text-2xl md:text-3xl font-bold gradient-text font-display cursor-pointer"
          >
            {t(personal.role).split(' ')[0]} Portfolio
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-gray-300 hover:text-white transition-colors duration-300 font-medium relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-green-500 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
            
            <div className="flex items-center space-x-4 border-l border-white/10 pl-8 ml-4">
              {/* Language Switcher */}
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-2 text-sm font-bold text-emerald-400 hover:text-emerald-300 transition-colors uppercase"
                title={lang === 'en' ? 'Switch to Indonesian' : 'Switch to English'}
              >
                <FaGlobe />
                <span>{lang}</span>
              </button>

              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-emerald-400 transition-colors duration-300"
              >
                <FaGithub size={20} />
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={toggleLanguage}
              className="text-emerald-400 font-bold uppercase text-sm"
            >
              {lang}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 glass-card p-4 rounded-lg border border-emerald-500/10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="block py-3 text-gray-300 hover:text-emerald-300 transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
            <div className="flex items-center space-x-6 mt-4 pt-4 border-t border-white/10">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-emerald-400"
              >
                <FaGithub size={24} />
              </a>
              <button
                onClick={toggleLanguage}
                className="text-emerald-400 font-bold uppercase ml-auto"
              >
                <FaGlobe className="inline mr-2" />
                {lang === 'en' ? 'Bahasa' : 'English'}
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation
