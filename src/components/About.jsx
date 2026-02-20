import { FaReact, FaNode, FaCreditCard, FaTools, FaUserTie, FaRocket, FaTicketAlt, FaHeart, FaStore, FaUsers, FaTag, FaBolt, FaSync, FaPlusSquare, FaServer, FaSearchDollar } from 'react-icons/fa'
import { SiJavascript, SiTailwindcss, SiHtml5, SiCss3, SiSupabase, SiPhp, SiLaravel, SiFigma, SiCanva } from 'react-icons/si'
import { config } from '../services/api'
import { useLanguage } from '../context/LanguageContext'

const About = () => {
  const { personal, skills: configSkills, ui, services, benefits } = config
  const { t } = useLanguage()

  const iconMap = {
    'HTML': SiHtml5,
    'CSS': SiCss3,
    'JavaScript': SiJavascript,
    'React': FaReact,
    'Tailwind CSS': SiTailwindcss,
    'Node.js': FaNode,
    'Supabase': SiSupabase,
    'Midtrans': FaCreditCard,
    'PHP': SiPhp,
    'Laravel': SiLaravel,
    'Figma': SiFigma,
    'Canva': SiCanva
  }

  const serviceIconMap = {
    0: FaUserTie,
    1: FaStore,
    2: FaTicketAlt,
    3: FaHeart,
    4: FaTag, // Digital Catalog
    5: FaUsers
  }

  // Icons for "Why Choose Me" (Benefits)
  const benefitIconMap = {
    0: FaSearchDollar, // Affordable
    1: FaBolt, // Fast
    2: FaSync, // Revision
    3: FaPlusSquare, // Bonus
    4: FaServer, // Free Hosting
    5: FaRocket // SEO
  }

  const colorMap = {
    'HTML': 'text-orange-500',
    'CSS': 'text-blue-500',
    'JavaScript': 'text-yellow-400',
    'React': 'text-cyan-400',
    'Tailwind CSS': 'text-cyan-300',
    'Node.js': 'text-green-500',
    'Supabase': 'text-emerald-400',
    'Midtrans': 'text-blue-600',
    'PHP': 'text-indigo-400',
    'Laravel': 'text-red-500',
    'Figma': 'text-purple-400',
    'Canva': 'text-blue-400'
  }

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        
        {/* Intro */}
        <div className="text-center mb-16">
           <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text font-display">
            {t({ en: "About Me", id: "Tentang Saya" })}
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {t(personal.bio)}
          </p>
        </div>

        {/* Section 1: What Can I Build (Services) */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold mb-10 text-center text-white">
            {t(ui.titles.services_title)}
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = serviceIconMap[index] || FaRocket
              return (
                <div key={index} className="glass-card p-8 group hover:-translate-y-2 transition-all duration-300">
                  <div className="w-14 h-14 bg-emerald-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-500/30 transition-colors">
                    <Icon className="text-2xl text-emerald-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-emerald-300 transition-colors">
                    {t(service.title)}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {t(service.desc)}
                  </p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Section 2: Why Choose Me (Benefits) */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold mb-10 text-center text-white">
            {t(ui.titles.benefits_title)}
          </h3>
           <div className="grid md:grid-cols-3 gap-6">
            {benefits && benefits.map((item, index) => {
              const Icon = benefitIconMap[index] || FaRocket
              return (
                <div key={index} className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-emerald-500/50 transition-all">
                   <div className="flex items-center gap-4 mb-3">
                      <Icon className="text-emerald-400 text-2xl"/>
                      <h4 className="text-lg font-bold text-white">{t(item.title)}</h4>
                   </div>
                   <p className="text-gray-400 text-xs md:text-sm">{t(item.desc)}</p>
                </div>
              )
            })}
           </div>
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
