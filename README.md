# 📚 CrowdLearn – Community-Powered Micro-Learning Platform

CrowdLearn is a **micro-learning platform** built with the **MERN stack (MongoDB, Express, React, Node.js)** where users can **learn or teach in 5 minutes**.  
It offers **personalized learning playlists**, **gamification features**, and a strong **creator community**, making learning short, smart, and social.

---

## 🚀 Features

### 👨‍🎓 For Learners
- Browse micro-lessons (Languages, Coding, Cooking, History, etc.)
- Get **personalized playlists** based on interests and progress
- Learn with **time-based lessons** (“I have 10 minutes” → 2–3 quick lessons)
- Track XP, streaks, and badges for gamified learning
- Rate, comment, and discuss lessons with peers

### 🧑‍🏫 For Creators
- Upload **short video, text, or quiz-based lessons**
- Collaborate with other creators to build playlists
- View analytics: lesson views, completion rate, feedback
- Earn reputation and badges for quality content

### 🌍 Community
- Discussion boards under each lesson
- Upvoted Q&A (like mini StackOverflow)
- Global leaderboard for learners and creators

---

## ⚙️ Tech Stack
| Layer | Technology |
|--------|-------------|
| **Frontend** | React + Tailwind CSS |
| **Backend** | Node.js + Express |
| **Database** | MongoDB (Mongoose) |
| **Auth** | JWT + Google OAuth |
| **Storage** | Cloudinary / Firebase |
| **Deployment** | Vercel + Render + MongoDB Atlas |

---

## 🧠 How It Works
1. **Users** choose topics they’re interested in (e.g., cooking, design, coding).  
2. **Creators** upload 5-minute lessons.  
3. **Playlists** are curated based on categories, tags, and difficulty level.  
4. **Gamification** keeps users motivated with XP, streaks, and badges.  

---

## 🔐 API Endpoints (Sample)
| Method | Endpoint | Description |
|--------|-----------|-------------|
| POST | `/api/auth/register` | Register new user |
| POST | `/api/auth/login` | Login with JWT |
| GET | `/api/lessons` | Fetch all lessons |
| POST | `/api/lessons` | Create a new lesson |
| GET | `/api/playlists` | Fetch personalized playlists |

---

## 🖥️ Pages
- `/` → Landing Page  
- `/dashboard` → Personalized Feed  
- `/lesson/:id` → Lesson Viewer + Discussion  
- `/create` → Upload Lesson Page  
- `/profile` → User Dashboard  

---

## 🎮 Gamification
- Earn XP for completing lessons  
- Maintain learning streaks  
- Unlock badges like:
  - 🥇 *Fast Learner*
  - 🧠 *Knowledge Seeker*
  - 🚀 *Top Creator*

