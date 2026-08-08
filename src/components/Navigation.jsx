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

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => { document.body.style.overflow = 'unset' }
  }, [isOpen])

  const navLinks = [
    { name: t(ui.nav.home), href: '#home' },
    { name: t(ui.nav.projects), href: '#projects' },
    { name: t(ui.nav.certificates), href: '#certificates' },
    { name: t(ui.nav.about), href: '#about' },
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
          ? 'glass-card shadow-lg py-4 border-b border-blue-500/10'
          : 'bg-transparent py-4 md:py-6'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => scrollToSection(e, '#home')}
            className="font-mono text-xl md:text-2xl font-bold cursor-pointer flex items-baseline hover:scale-105 transition-transform duration-300"
          >
            <span className="text-blue-500">{'<'}</span>
            <span className="text-white mx-1">ferdy</span>
            <span className="text-blue-500">{'/>'}</span>
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
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
            
            <div className="flex items-center space-x-4 border-l border-white/10 pl-8 ml-4">
              {/* Language Switcher */}
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-2 text-sm font-bold text-blue-400 hover:text-blue-300 transition-colors uppercase"
                title={lang === 'en' ? 'Switch to Indonesian' : 'Switch to English'}
              >
                <FaGlobe />
                <span>{lang}</span>
              </button>

              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
              >
                <FaGithub size={20} />
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={toggleLanguage}
              className="text-blue-400 font-bold uppercase text-sm px-2 py-1"
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

        {/* Mobile Menu Backdrop */}
        <div
          className={`fixed inset-0 z-[99] bg-black/50 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
            isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
          onClick={() => setIsOpen(false)}
        />

        {/* Mobile Menu Drawer */}
        <div
          className={`fixed top-0 right-0 bottom-0 z-[100] w-[65%] max-w-sm bg-slate-950 shadow-2xl flex flex-col transform transition-transform duration-300 md:hidden ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex justify-between items-center px-4 py-4 md:py-6 border-b border-white/10">
            <a href="#home" onClick={(e) => scrollToSection(e, '#home')} className="font-mono text-lg font-bold flex items-baseline">
              <span className="text-blue-500">{'<'}</span>
              <span className="text-white mx-1">ferdy</span>
              <span className="text-blue-500">{'/>'}</span>
            </a>
            <button onClick={() => setIsOpen(false)} className="text-white p-2 hover:text-blue-400 transition-colors">
              <FaTimes size={24} />
            </button>
          </div>
          <div className="flex-1 flex flex-col justify-center px-6 gap-2 overflow-y-auto">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="py-4 text-xl font-semibold text-gray-200 hover:text-blue-400 transition-colors border-b border-white/5"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="flex items-center justify-between px-6 py-6 border-t border-white/10">
            <a href={personal.github} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors">
              <FaGithub size={24} />
            </a>
            <button onClick={toggleLanguage} className="flex items-center gap-2 text-blue-400 hover:text-blue-300 font-bold uppercase transition-colors text-sm">
              <FaGlobe />
              {lang === 'en' ? 'ID' : 'EN'}
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
