import express from 'express'
import pool from '../config/db.js'

const router = express.Router()

// Get all projects
router.get('/', async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM projects ORDER BY created_at DESC')
        res.json(rows)
    } catch (error) {
        console.error('Error fetching projects:', error)
        res.status(500).json({ error: 'Failed to fetch projects' })
    }
})

// Get single project
router.get('/:id', async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM projects WHERE id = ?', [req.params.id])
        if (rows.length === 0) {
            return res.status(404).json({ error: 'Project not found' })
        }
        res.json(rows[0])
    } catch (error) {
        console.error('Error fetching project:', error)
        res.status(500).json({ error: 'Failed to fetch project' })
    }
})

// Create new project
router.post('/', async (req, res) => {
    try {
        const { title, description, technologies, github_url, live_url, image_url } = req.body

        if (!title || !description) {
            return res.status(400).json({ error: 'Title and description are required' })
        }

        const [result] = await pool.query(
            'INSERT INTO projects (title, description, technologies, github_url, live_url, image_url) VALUES (?, ?, ?, ?, ?, ?)',
            [title, description, technologies, github_url, live_url, image_url]
        )

        const [newProject] = await pool.query('SELECT * FROM projects WHERE id = ?', [result.insertId])
        res.status(201).json(newProject[0])
    } catch (error) {
        console.error('Error creating project:', error)
        res.status(500).json({ error: 'Failed to create project' })
    }
})

// Update project
router.put('/:id', async (req, res) => {
    try {
        const { title, description, technologies, github_url, live_url, image_url } = req.body
        const { id } = req.params

        const [result] = await pool.query(
            'UPDATE projects SET title = ?, description = ?, technologies = ?, github_url = ?, live_url = ?, image_url = ? WHERE id = ?',
            [title, description, technologies, github_url, live_url, image_url, id]
        )

        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Project not found' })
        }

        const [updatedProject] = await pool.query('SELECT * FROM projects WHERE id = ?', [id])
        res.json(updatedProject[0])
    } catch (error) {
        console.error('Error updating project:', error)
        res.status(500).json({ error: 'Failed to update project' })
    }
})

// Delete project
router.delete('/:id', async (req, res) => {
    try {
        const [result] = await pool.query('DELETE FROM projects WHERE id = ?', [req.params.id])

        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Project not found' })
        }

        res.json({ message: 'Project deleted successfully' })
    } catch (error) {
        console.error('Error deleting project:', error)
        res.status(500).json({ error: 'Failed to delete project' })
    }
})

export default router
