import { FaReact, FaNode, FaDatabase, FaCodeBranch, FaPython, FaDocker, FaRocket, FaMobileAlt, FaCogs, FaTools, FaTag, FaBolt, FaSync, FaPlusSquare, FaMagic, FaSearchDollar } from 'react-icons/fa'
import { SiJavascript, SiTailwindcss, SiMysql, SiExpress } from 'react-icons/si'
import { config } from '../services/api'
import { useLanguage } from '../context/LanguageContext'

const About = () => {
  const { personal, skills: configSkills, ui, services } = config
  const { t } = useLanguage()

  const iconMap = {
    'React': FaReact,
    'Node.js': FaNode,
    'JavaScript': SiJavascript,
    'Tailwind CSS': SiTailwindcss,
    'MySQL': SiMysql,
    'Express.js': SiExpress,
    'Python': FaPython,
    'Docker': FaDocker
  }

  const serviceIconMap = {
    0: FaTag,
    1: FaBolt,
    2: FaSync,
    3: FaPlusSquare,
    4: FaMagic,
    5: FaSearchDollar
  }

  const colorMap = {
    'React': 'text-emerald-400',
    'Node.js': 'text-green-400',
    'JavaScript': 'text-teal-400',
    'Tailwind CSS': 'text-emerald-300',
    'MySQL': 'text-green-500',
    'Express.js': 'text-emerald-600',
    'Python': 'text-green-500',
    'Docker': 'text-teal-500'
  }

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4" data-aos="fade-up">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 gradient-text font-display">
            {t(ui.titles.about_me)}
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {t(personal.bio)}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => {
            const Icon = serviceIconMap[index]
            return (
              <div key={index} className="glass-card p-8 group hover:-translate-y-2 transition-all duration-300">
                <div className="w-16 h-16 bg-emerald-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-500/30 transition-colors">
                  <Icon className="text-3xl text-emerald-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-emerald-300 transition-colors">
                  {t(service.title)}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {t(service.desc)}
                </p>
              </div>
            )
          })}
        </div>

        {/* Technical Skills */}
        <div>
          <h3 className="text-3xl font-bold mb-10 text-center gradient-text">
            {t(ui.titles.skills)}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {configSkills.map((skill, index) => {
              const Icon = iconMap[skill.name] || FaTools
              const colorClass = colorMap[skill.name] || 'text-emerald-400'
              return (
                <div
                  key={index}
                  className="glass-card-hover p-6"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <Icon className={`text-4xl ${colorClass}`} />
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-white">{skill.name}</h4>
                      <p className="text-gray-400 text-xs">{skill.category}</p>
                    </div>
                    <span className="text-emerald-400 font-bold">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-emerald-500 to-green-500 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
