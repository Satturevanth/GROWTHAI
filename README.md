# 🚀 GrowthProAI – Mini Local Business Dashboard
This project is a Full Stack assignment for the GrowthProAI Internship. It simulates how small businesses might view their SEO content and Google Business data through a clean and responsive dashboard.
---
## 🧩 Project Structure

GROWTHAI/
├── frontend/ # React + Tailwind CSS Dashboard
└── backend/ # Node.js + Express REST API (no DB)

yaml
---

## 🌐 Live Links

> Add these after deployment (optional)

- **Frontend (Vercel/Netlify)**: https://growthai-pd2l2d9xk-revanths-projects-163f2d7c.vercel.app
- **Backend (Render/Glitch)**: https://your-backend.render.com](https://growthai-bx64.onrender.com

---

## 🎯 Features

### Frontend (React + Tailwind)
- Business Name & Location input form
- Displays:
  - Simulated Google Rating
  - Number of Reviews
  - Latest AI-generated SEO Headline
- "Regenerate Headline" button (fetches a new one from backend)
- Fully responsive layout with Tailwind CSS

### Backend (Node.js + Express)
- `POST /business-data`  
  Accepts name & location, returns rating, reviews, and SEO headline
- `GET /regenerate-headline?name=...&location=...`  
  Returns a new headline from a predefined list
---

## ⚙️ How to Run Locally

### Clone Repository
```bash
git clone https://github.com/Satturevanth/GROWTHAI.git
cd GROWTHAI
🖥️ Frontend Setup (frontend/)
bash
cd frontend
npm install
npm run dev
Open in browser: http://localhost:5173

Make sure backend is running at http://localhost:5000 (or update the URL in frontend code)

🔧 Backend Setup (backend/)
bash
cd backend
npm install
node index.js
Server runs on: http://localhost:5000

📦 Tech Stack
Frontend: React, Vite, Tailwind CSS, Axios

Backend: Node.js, Express.js

Hosting (optional): Vercel / Netlify (Frontend), Render / Glitch (Backend)

✅ Requirements Covered
 React + Tailwind frontend with form and card

 API integration for simulated data

 Regenerate headline functionality

 No database — all data is simulated

 Optional deployment supported

📩 Submission
To submit your assignment:

Push code to GitHub (✅ done)

Submission: Full Stack Intern Assignment [Sattu Revanth]
🙌 Thanks!
Built with ❤️ for GrowthProAI Internship
