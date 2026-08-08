import { useState, useEffect } from 'react'
import { FaGithub, FaExternalLinkAlt, FaSpinner, FaCreditCard, FaCode } from 'react-icons/fa'
import { SiJavascript, SiTailwindcss, SiHtml5, SiCss3, SiSupabase, SiPhp, SiLaravel, SiFigma, SiCanva, SiReact, SiNodedotjs } from 'react-icons/si'
import { projectsApi, config } from '../services/api'
import { useLanguage } from '../context/LanguageContext'

const Projects = () => {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const { ui, skills } = config
  const { t } = useLanguage()

  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = []
    acc[skill.category].push(skill.name)
    return acc
  }, {})

  const iconMap = {
    'HTML': SiHtml5,
    'CSS': SiCss3,
    'JavaScript': SiJavascript,
    'React': SiReact,
    'Tailwind CSS': SiTailwindcss,
    'Node.js': SiNodedotjs,
    'Supabase': SiSupabase,
    'Midtrans': FaCreditCard,
    'Figma': SiFigma,
    'Canva': SiCanva,
    'PHP': SiPhp,
    'Laravel': SiLaravel
  }

  // Load projects on mount
  useEffect(() => {
    loadProjects()
  }, [])

  const loadProjects = async () => {
    setLoading(true)
    setError(null)
    
    try {
      const response = await projectsApi.getAll()
      setProjects(response.data)
    } catch (err) {
      console.error('Error loading projects:', err)
      setError(t({ en: 'Failed to load projects. Please try again later.', id: 'Gagal memuat proyek. Silakan coba lagi nanti.' }))
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <section id="projects" className="py-20 relative min-h-screen flex items-center justify-center">
        <div className="text-center">
          <FaSpinner className="animate-spin text-6xl text-blue-500 mx-auto mb-4" />
          <p className="text-xl text-gray-400">{t(ui.messages.loading_projects)}</p>
        </div>
      </section>
    )
  }

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 gradient-text font-display">
            {t(ui.titles.projects)}
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-4">
            {t(ui.messages.explore_projects)}
          </p>
          {error && (
            <div className="max-w-max mx-auto mb-8 px-4 py-2 bg-red-500/20 border border-red-500/30 rounded-full flex items-center gap-2">
              <span className="text-red-200 text-sm font-medium">{error}</span>
            </div>
          )}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="glass-card-hover overflow-hidden group flex flex-col"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="relative aspect-video overflow-hidden bg-blue-950/50">
                {project.image_url ? (
                  <img src={project.image_url} alt={t(project.title)} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-blue-500/20">No Image</div>
                )}
                
                {/* Featured Badge for LokTik */}
                {project.title.en === "LokTik" && (
                  <div className="absolute top-4 right-4 px-3 py-1 bg-violet-500 text-white text-xs font-bold rounded-full shadow-lg shadow-violet-500/50">
                    Featured
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-4 md:p-6 flex-1 flex flex-col">
                <h3 className="text-xl md:text-2xl font-bold mb-2 text-white group-hover:gradient-text transition-all duration-300">
                  {t(project.title)}
                </h3>
                <p className="text-gray-400 text-sm md:text-base mb-4 flex-1">
                  {t(project.description)}
                </p>
                <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                  {project.technologies.split(',').map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-blue-500/10 border border-blue-500/20 rounded-md text-xs text-blue-300"
                    >
                      {tech.trim()}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  {project.live_url && (
                    <a
                      href={project.live_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-xl transition-all duration-300 font-medium group/btn flex-1 text-sm md:text-base shadow-lg shadow-blue-600/20"
                    >
                      <span>{t({ en: "View Live", id: "Lihat Web" })}</span>
                      <FaExternalLinkAlt className="group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5 transition-transform text-xs" />
                    </a>
                  )}
                  {project.github_url && !project.live_url && (
                    <a
                      href={project.github_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 py-2 bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/20 rounded-xl transition-all duration-300 font-medium flex-1 text-sm md:text-base"
                    >
                      <FaGithub size={16} />
                      <span>{t({ en: "Source", id: "Kode" })}</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {projects.length === 0 && (
          <div className="text-center py-10">
            <p className="text-gray-400 text-xl">{t(ui.messages.no_projects)}</p>
          </div>
        )}

        {/* Skills Section */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 gradient-text font-display">
              {t(ui.titles.skills)}
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(groupedSkills).map(([category, items], index) => (
              <div key={category} className="glass-card p-4 md:p-6" style={{ animationDelay: `${index * 0.1}s` }}>
                <h4 className="text-lg md:text-xl font-bold mb-4 text-blue-400 border-b border-blue-500/20 pb-2">{category}</h4>
                <div className="flex flex-wrap gap-2">
                  {items.map(item => {
                    const Icon = iconMap[item] || FaCode
                    return (
                      <span key={item} className="flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-md text-sm text-gray-300 hover:text-white hover:border-blue-500/50 transition-colors group/badge">
                        <Icon className="text-gray-400 group-hover/badge:text-blue-400" />
                        {item}
                      </span>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
