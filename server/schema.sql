-- Create database
CREATE DATABASE IF NOT EXISTS portfolio;
USE portfolio;

-- Projects table
CREATE TABLE IF NOT EXISTS projects (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  technologies VARCHAR(500),
  github_url VARCHAR(500),
  live_url VARCHAR(500),
  image_url VARCHAR(500),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Insert sample projects
INSERT INTO projects (title, description, technologies, github_url, live_url, image_url) VALUES
('E-Commerce Platform', 'Full-stack e-commerce solution with shopping cart, payment integration, and admin dashboard', 'React, Node.js, MongoDB, Stripe', 'https://github.com/yourusername/ecommerce', 'https://example.com', 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop'),
('Task Management App', 'Collaborative task management tool with real-time updates and team features', 'React, Firebase, Tailwind CSS', 'https://github.com/yourusername/taskapp', 'https://example.com', 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop'),
('Weather Dashboard', 'Beautiful weather application with forecasts, maps, and weather alerts', 'React, OpenWeather API, Chart.js', 'https://github.com/yourusername/weather', 'https://example.com', 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&h=600&fit=crop');

-- Create indexes for better performance
CREATE INDEX idx_created_at ON projects(created_at);
CREATE INDEX idx_title ON projects(title);
