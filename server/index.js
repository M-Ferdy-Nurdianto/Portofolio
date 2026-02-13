import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import projectsRouter from './routes/projects.js'
import githubRouter from './routes/github.js'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000

// Middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Request logging
app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`)
    next()
})

// Routes
app.use('/api/projects', projectsRouter)
app.use('/api/github', githubRouter)

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({ status: 'OK', message: 'Portfolio API is running' })
})

// Root endpoint
app.get('/', (req, res) => {
    res.json({
        message: 'Portfolio API Server',
        version: '1.0.0',
        endpoints: {
            projects: '/api/projects',
            github: '/api/github',
            health: '/api/health'
        }
    })
})

// 404 handler
app.use((req, res) => {
    res.status(404).json({ error: 'Endpoint not found' })
})

// Error handler
app.use((err, req, res, next) => {
    console.error('Server error:', err)
    res.status(500).json({ error: 'Internal server error' })
})

// Start server
app.listen(PORT, () => {
    console.log(`\n🚀 Portfolio API Server running on http://localhost:${PORT}`)
    console.log(`📚 API Documentation:`)
    console.log(`   - Health: http://localhost:${PORT}/api/health`)
    console.log(`   - Projects: http://localhost:${PORT}/api/projects`)
    console.log(`   - GitHub: http://localhost:${PORT}/api/github/stats`)
    console.log(`\n`)
})

export default app
