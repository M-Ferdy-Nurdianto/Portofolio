# Portfolio Website - Quick Start Guide

## Prerequisites Check

Before starting, ensure you have:

- ✅ Node.js installed (v18+)
- ✅ MySQL installed and running
- ✅ A code editor (VS Code recommended)

## Step-by-Step Setup

### 1. Install Frontend Dependencies

Since PowerShell has execution policy restrictions, we need to install dependencies manually:

**Option A: Using Command Prompt (Recommended)**
\`\`\`cmd
cd c:\Githab\portofolio
npm install
\`\`\`

**Option B: PowerShell with Bypass**
\`\`\`powershell
cd c:\Githab\portofolio
powershell -ExecutionPolicy Bypass -Command "npm install"
\`\`\`

### 2. Install Backend Dependencies

\`\`\`cmd
cd c:\Githab\portofolio\server
npm install
\`\`\`

### 3. Set Up MySQL Database

**Option A: Using MySQL Workbench**

1. Open MySQL Workbench
2. Connect to your local MySQL server
3. File → Run SQL Script
4. Select `c:\Githab\portofolio\server\schema.sql`
5. Execute

**Option B: Using Command Line**
\`\`\`cmd
mysql -u root -p < c:\Githab\portofolio\server\schema.sql
\`\`\`

### 4. Configure Environment Variables

1. Navigate to `c:\Githab\portofolio\server`
2. Copy `.env.example` to `.env`
3. Edit `.env` with your details:

\`\`\`env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=YOUR_MYSQL_PASSWORD
DB_NAME=portfolio
PORT=3000
GITHUB_USERNAME=YOUR_GITHUB_USERNAME
GITHUB_TOKEN=YOUR_GITHUB_TOKEN (optional)
\`\`\`

### 5. Start the Backend Server

**Command Prompt:**
\`\`\`cmd
cd c:\Githab\portofolio\server
npm start
\`\`\`

You should see:
\`\`\`
✅ Database connected successfully
🚀 Portfolio API Server running on http://localhost:3000
\`\`\`

### 6. Start the Frontend (New Terminal)

**Command Prompt:**
\`\`\`cmd
cd c:\Githab\portofolio
npm run dev
\`\`\`

The site will open at: http://localhost:5173

## Troubleshooting

### npm commands don't work in PowerShell

**Solution:** Use Command Prompt (cmd) or run with ExecutionPolicy Bypass

### Database connection error

**Solution:**

- Verify MySQL is running: \`services.msc\` → MySQL80
- Check .env credentials match your MySQL setup

### GitHub API rate limit

**Solution:**

- Create a personal access token at https://github.com/settings/tokens
- Add it to `.env` as `GITHUB_TOKEN`

## Next Steps

1. Replace placeholder content:
   - Update your name in `src/components/Hero.jsx`
   - Add your GitHub username in `server/.env`
   - Replace `/public/profile.png` with your photo
2. Customize colors in `tailwind.config.js`

3. Add your real projects through the UI!

## Testing the CRUD Functionality

1. Open http://localhost:5173
2. Scroll to "My Projects"
3. Click "Add New Project"
4. Fill in the form and submit
5. Verify the project appears
6. Click "Edit" to modify
7. Click "Delete" to remove

Enjoy your stunning portfolio website! 🚀
