# Portfolio Website

A stunning, full-stack portfolio website built with modern technologies featuring smooth animations, responsive design, and complete CRUD functionality.

## 🚀 Features

- ✨ **Modern Design**: Premium aesthetics with glassmorphism, gradients, and smooth animations
- 📱 **Fully Responsive**: Works flawlessly on all devices (mobile, tablet, desktop)
- 🎨 **Rich Animations**: Framer Motion powered animations and micro-interactions
- 🔧 **CRUD Operations**: Full Create, Read, Update, Delete functionality for projects
- 🐙 **GitHub Integration**: Display your repositories and statistics
- 💾 **MySQL Database**: Robust data storage (easy migration to Supabase)
- 🎯 **SEO Optimized**: Proper meta tags and semantic HTML
- 🌐 **API Backend**: RESTful API built with Node.js and Express

## 🛠️ Tech Stack

### Frontend

- **React 18** - Modern UI library
- **Vite** - Lightning-fast build tool
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Advanced animations
- **React Icons** - Beautiful icon library
- **Axios** - HTTP client for API calls

### Backend

- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MySQL** - Relational database
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variables

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v18 or higher)
- MySQL (v8 or higher)
- npm or yarn package manager

## 🔧 Installation & Setup

### 1. Clone the repository

\`\`\`bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
\`\`\`

### 2. Frontend Setup

\`\`\`bash

# Install dependencies

npm install

# Start development server

npm run dev
\`\`\`

The frontend will run on http://localhost:5173

### 3. Backend Setup

\`\`\`bash
cd server

# Install dependencies

npm install

# Create .env file

copy .env.example .env

# Edit .env with your database credentials and GitHub token

\`\`\`

### 4. Database Setup

\`\`\`bash

# Login to MySQL

mysql -u root -p

# Run the schema file

source schema.sql

# or

mysql -u root -p portfolio < schema.sql
\`\`\`

### 5. Configure Environment Variables

Edit \`server/.env\`:
\`\`\`env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=portfolio
PORT=3000
GITHUB_TOKEN=your_github_personal_access_token
GITHUB_USERNAME=your_github_username
\`\`\`

### 6. Start Backend Server

\`\`\`bash
cd server
npm start
\`\`\`

The backend API will run on http://localhost:3000

## 🎯 Usage

### Frontend

- Open http://localhost:5173 in your browser
- Navigate through sections using the navigation menu
- Add/Edit/Delete projects using the CRUD interface
- Contact form for messages

### Backend API Endpoints

#### Projects

- `GET /api/projects` - Get all projects
- `GET /api/projects/:id` - Get single project
- `POST /api/projects` - Create new project
- `PUT /api/projects/:id` - Update project
- `DELETE /api/projects/:id` - Delete project

#### GitHub

- `GET /api/github/repos` - Get GitHub repositories
- `GET /api/github/stats` - Get GitHub user statistics

#### Health Check

- `GET /api/health` - Server health check

## 🎨 Customization

### Update Personal Information

1. **Profile Photo**: Replace `/public/profile.png` with your photo
2. **Name & Title**: Edit `src/components/Hero.jsx`
3. **About Section**: Edit `src/components/About.jsx`
4. **Social Links**: Update links in `src/components/Navigation.jsx` and `Contact.jsx`
5. **GitHub Username**: Update in `server/.env`

### Color Scheme

Edit `tailwind.config.js` to customize colors:
\`\`\`js
colors: {
primary: { ... },
accent: { ... }
}
\`\`\`

## 🔄 Migrating to Supabase

When ready to migrate from MySQL to Supabase:

1. Create a Supabase project at https://supabase.com
2. Create the projects table using the Supabase SQL editor
3. Update \`server/config/db.js\` with Supabase connection details
4. Replace MySQL queries with Supabase client calls

## 📦 Production Build

### Frontend

\`\`\`bash
npm run build
npm run preview
\`\`\`

### Backend

\`\`\`bash
cd server
npm start
\`\`\`

## 🚀 Deployment

### Frontend (Vercel/Netlify)

1. Build the project: \`npm run build\`
2. Deploy the \`dist\` folder to your hosting service

### Backend (Railway/Heroku)

1. Set environment variables in hosting dashboard
2. Deploy the \`server\` directory
3. Update frontend API URLs to production backend URL

### Database

- Use managed MySQL (AWS RDS, Google Cloud SQL)
- Or migrate to Supabase for easier deployment

## 🐛 Troubleshooting

### PowerShell Script Execution Error

If you encounter script execution errors on Windows:
\`\`\`powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
\`\`\`

### Database Connection Error

- Verify MySQL is running
- Check credentials in \`.env\`
- Ensure database exists: \`CREATE DATABASE portfolio;\`

### GitHub API Rate Limit

- Add GITHUB_TOKEN to \`.env\` for higher rate limits
- Create token at https://github.com/settings/tokens

## 📝 License

MIT License - feel free to use this project for your own portfolio!

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 👨‍💻 Author

**Your Name**

- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [yourusername](https://linkedin.com/in/yourusername)
- Email: your.email@example.com

## 🌟 Show Your Support

Give a ⭐️ if you like this project!
