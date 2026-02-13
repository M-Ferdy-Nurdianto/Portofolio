import express from 'express'
import axios from 'axios'
import dotenv from 'dotenv'

dotenv.config()

const router = express.Router()

const GITHUB_USERNAME = process.env.GITHUB_USERNAME || 'yourusername'
const GITHUB_TOKEN = process.env.GITHUB_TOKEN

// Get GitHub repositories
router.get('/repos', async (req, res) => {
    try {
        const headers = GITHUB_TOKEN
            ? { Authorization: `token ${GITHUB_TOKEN}` }
            : {}

        const response = await axios.get(
            `https://api.github.com/users/${GITHUB_USERNAME}/repos`,
            {
                headers,
                params: {
                    sort: 'updated',
                    per_page: 6
                }
            }
        )

        const repos = response.data.map(repo => ({
            id: repo.id,
            name: repo.name,
            description: repo.description,
            url: repo.html_url,
            stars: repo.stargazers_count,
            forks: repo.forks_count,
            language: repo.language,
            updated_at: repo.updated_at
        }))

        res.json(repos)
    } catch (error) {
        console.error('Error fetching GitHub repos:', error.message)
        res.status(500).json({ error: 'Failed to fetch GitHub repositories' })
    }
})

// Get GitHub user stats
router.get('/stats', async (req, res) => {
    try {
        const headers = GITHUB_TOKEN
            ? { Authorization: `token ${GITHUB_TOKEN}` }
            : {}

        const [userResponse, reposResponse] = await Promise.all([
            axios.get(`https://api.github.com/users/${GITHUB_USERNAME}`, { headers }),
            axios.get(`https://api.github.com/users/${GITHUB_USERNAME}/repos`, {
                headers,
                params: { per_page: 100 }
            })
        ])

        const totalStars = reposResponse.data.reduce((sum, repo) => sum + repo.stargazers_count, 0)

        const stats = {
            repos: userResponse.data.public_repos,
            followers: userResponse.data.followers,
            following: userResponse.data.following,
            stars: totalStars,
            avatar: userResponse.data.avatar_url,
            bio: userResponse.data.bio,
            location: userResponse.data.location,
            company: userResponse.data.company
        }

        res.json(stats)
    } catch (error) {
        console.error('Error fetching GitHub stats:', error.message)
        res.status(500).json({ error: 'Failed to fetch GitHub stats' })
    }
})

export default router
