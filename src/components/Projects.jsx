import { useState, useEffect } from 'react'
import { FaGithub, FaExternalLinkAlt, FaSpinner } from 'react-icons/fa'
import { projectsApi, config } from '../services/api'
import { useLanguage } from '../context/LanguageContext'

const Projects = () => {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const { ui } = config
  const { t } = useLanguage()

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
          <FaSpinner className="animate-spin text-6xl text-emerald-500 mx-auto mb-4" />
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="glass-card-hover overflow-hidden group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-white group-hover:gradient-text transition-all duration-300">
                  {t(project.title)}
                </h3>
                <p className="text-gray-400 mb-4 line-clamp-3">
                  {t(project.description)}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.split(',').map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-emerald-500/20 border border-emerald-500/30 rounded-full text-sm text-emerald-300"
                    >
                      {tech.trim()}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex justify-center mt-auto">
                  {project.live_url && (
                    <a
                      href={project.live_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/20 hover:border-emerald-500/40 rounded-xl transition-all duration-300 font-medium group/btn"
                    >
                      <span>{t({ en: "View Live", id: "Lihat Web" })}</span>
                      <FaExternalLinkAlt className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {projects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-400 text-xl">{t(ui.messages.no_projects)}</p>
          </div>
        )}
      </div>
    </section>
  )
}

export default Projects
