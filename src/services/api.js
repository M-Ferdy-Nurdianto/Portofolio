import projectsData from '../data/projects.json'
import siteConfig from '../data/siteConfig.json'

// Hardcoded data CMS
export const projectsApi = {
    getAll: () => Promise.resolve({ data: projectsData }),
    getById: (id) => Promise.resolve({ data: projectsData.find(p => p.id === id) }),
    create: (data) => Promise.resolve({ data }), // No-op in hardcoded mode
    update: (id, data) => Promise.resolve({ data }), // No-op
    delete: (id) => Promise.resolve({ data: id }) // No-op
}

// Hardcoded GitHub Stats
export const githubApi = {
    getRepos: () => Promise.resolve({ data: [] }),
    getStats: () => Promise.resolve({ data: siteConfig.stats })
}

export const config = siteConfig

export const healthCheck = () => Promise.resolve({ data: { status: 'ok', mode: 'hardcoded' } })

export default {
    projects: projectsApi,
    github: githubApi,
    healthCheck,
    config: siteConfig
}
