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
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10" data-aos="fade-up">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center md:text-left space-y-6">
            <div className="inline-block px-4 py-1.5 glass-card border border-emerald-500/20 rounded-full" data-aos="fade-down" data-aos-delay="200">
              <span className="text-emerald-400 font-medium tracking-wide text-xs md:text-sm uppercase">
                {t(ui.messages.welcome)}
              </span>
            </div>

            <div className="space-y-2">
              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight font-display text-white">
                <span className="opacity-90 block leading-tight">{personal.name}</span>
                <div className="gradient-text h-[1.4em] leading-tight flex items-center justify-center md:justify-start">
                  <Typewriter
                    options={{
                      strings: [t(personal.role), t({ en: "Web Solutions", id: "Solusi Website" }), t({ en: "Digital Expert", id: "Pakar Digital" })],
                      autoStart: true,
                      loop: true,
                      wrapperClassName: "gradient-text",
                      cursorClassName: "text-emerald-500"
                    }}
                  />
                </div>
              </h1>
            </div>

            <p className="text-base md:text-lg text-gray-400 leading-relaxed max-w-xl mx-auto md:mx-0 opacity-80">
              {t(personal.bio)}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
              <button onClick={scrollToProjects} className="btn-primary px-8 py-3">
                {t(ui.buttons.view_work)}
              </button>
              <a href="#contact" className="btn-secondary px-8 py-3">
                {t(ui.buttons.get_in_touch)}
              </a>
            </div>

            <div className="flex gap-6 justify-center md:justify-start">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-emerald-400 transition-all duration-300 hover:scale-110"
              >
                <FaGithub size={28} />
              </a>
              <a
                href={personal.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-emerald-400 transition-all duration-300 hover:scale-110"
              >
                <FaInstagram size={28} />
              </a>
              <a
                href={personal.discord}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-emerald-400 transition-all duration-300 hover:scale-110"
              >
                <FaDiscord size={28} />
              </a>
              <a
                href={`mailto:${personal.email}`}
                className="text-gray-400 hover:text-emerald-400 transition-all duration-300 hover:scale-110"
              >
                <FaEnvelope size={28} />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex-1 flex justify-center" data-aos="zoom-in" data-aos-delay="400">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full blur-2xl opacity-40 animate-pulse"></div>
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-emerald-500/20 shadow-2xl animate-float">
                <img
                  src="/profile.png"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <FaChevronDown className="text-gray-400" size={32} />
        </div>
      </div>
    </section>
  )
}

export default Hero
