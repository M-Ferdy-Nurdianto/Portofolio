import projectsData from '../data/projects.json'
import siteConfig from '../data/siteConfig.json'

// Hardcoded data CMS
export const projectsApi = {
    getAll: async () => ({ data: projectsData }),
    getById: async (id) => ({ data: projectsData.find(p => p.id === id) }),
    create: async (data) => ({ data }), // No-op in hardcoded mode
    update: async (id, data) => ({ data }), // No-op
    delete: async (id) => ({ data: id }) // No-op
}

// Hardcoded GitHub Stats
export const githubApi = {
    getRepos: async () => ({ data: [] }),
    getStats: async () => ({ data: siteConfig.stats })
}

export const config = siteConfig

export const healthCheck = async () => ({ data: { status: 'ok', mode: 'hardcoded' } })

export default {
    projects: projectsApi,
    github: githubApi,
    healthCheck,
    config: siteConfig
}
