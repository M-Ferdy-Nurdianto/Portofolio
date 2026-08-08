import { FaGithub, FaEnvelope, FaChevronDown, FaDiscord, FaInstagram } from 'react-icons/fa'
import Typewriter from 'typewriter-effect'
import { config } from '../services/api'
import { useLanguage } from '../context/LanguageContext'

const Hero = () => {
  const { personal, ui } = config
  const { t } = useLanguage()

  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center md:text-left space-y-6">

            <div className="space-y-4">
              <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight font-display text-white break-words">
                <span className="opacity-90 block leading-tight">{personal.name}</span>
                <span className="gradient-text block mt-2 text-2xl sm:text-3xl md:text-4xl">
                  {t(personal.role)}
                </span>
              </h1>
            </div>

            <p className="text-base md:text-lg text-gray-400 leading-relaxed max-w-xl mx-auto md:mx-0 opacity-80">
              {t(personal.bio)}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4 w-full">
              <button onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })} className="btn-primary">
                {t(ui.buttons.view_work)}
              </button>
              <button onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })} className="btn-secondary">
                {t(ui.buttons.get_in_touch)}
              </button>
            </div>

            <div className="flex gap-6 justify-center md:justify-start">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-110"
              >
                <FaGithub size={28} />
              </a>
              <a
                href={personal.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-110"
              >
                <FaInstagram size={28} />
              </a>
              <a
                href={personal.discord}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-110"
              >
                <FaDiscord size={28} />
              </a>
              <a
                href={`mailto:${personal.email}`}
                className="text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-110"
              >
                <FaEnvelope size={28} />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex-1 flex justify-center mt-12 md:mt-0">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-tr from-blue-500/20 to-cyan-500/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500 opacity-60"></div>
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-2 border-blue-500/30 shadow-[0_0_40px_rgba(59,130,246,0.15)] group-hover:border-blue-400/50 transition-colors duration-500">
                <img
                  src="/foto.webp"
                  alt="Profile"
                  className="w-full h-full object-cover object-[center_10%] scale-100 group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
          <FaChevronDown className="text-gray-400" size={32} />
        </div>
      </div>
    </section>
  )
}

export default Hero
