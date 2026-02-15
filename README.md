![React](https://img.shields.io/badge/React-18-blue)
![Vite](https://img.shields.io/badge/Vite-Frontend-purple)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-Styling-teal)
![Vercel](https://img.shields.io/badge/Deployed-Vercel-black)
![License](https://img.shields.io/badge/License-MIT-green)

# 🏏 Live Cricket Score App

A modern, responsive Live Cricket Score Web Application built using **React (Vite)** and powered by **CricAPI**.  
Deployed to production using **Vercel**.

🔗 **Live Demo:** https://live-cricket-score-app.vercel.app/  
📦 **Repository:** https://github.com/shesamsetti-vamsi/live-cricket-score-app  

---

## 🚀 Project Overview

The Live Cricket Score App enables users to track live cricket matches with a clean, responsive interface and production-ready architecture.

Users can:

- 📡 View Live, Upcoming, and Finished matches  
- 🔍 Search matches by team name  
- 🎯 Filter matches by status  
- 📊 View match-level statistics  
- 🕒 See a structured match events timeline  
- ⭐ Pin favorite matches (persistent storage)  
- 📱 Access a fully responsive UI across devices  

This project was developed using a structured milestone-based approach emphasizing production-ready UI, clean architecture, and API-aware engineering principles.

---

## ✨ Key Highlights

- Clean CricAPI integration with defensive error handling  
- Custom hooks for reusable data-fetching logic  
- Utility-based match classification system  
- Persistent pinned matches using `localStorage`  
- Skeleton loaders and retry-based error UI  
- Fully responsive UI built with Tailwind CSS  
- Production deployment using Vercel with environment configuration  

---

## 🛠 Tech Stack

### Frontend
- React (Vite)
- React Router
- Tailwind CSS
- Context API
- Custom Hooks

### Deployment
- Vercel

### API
- CricAPI (Free Tier)

---

## 📌 Features

### 🟢 1. Live Match Dashboard
- Displays live, upcoming, and finished matches  
- Status-based filtering (All / Live / Upcoming / Finished)  
- Search by team name  
- Auto-refresh support  

---

### 🟢 2. Match Details Page
- Match name and venue  
- Toss winner and decision  
- Match result  
- Innings-wise score summaries  
- Navigation (Back & Home buttons)  
- Clean responsive layout  

---

### 🟢 3. Match Statistics
- Innings-level score breakdown  
- Runs / Wickets / Overs  
- Toss & result summary  
- Graceful fallback when score data is unavailable  

⚠️ Player-level statistics and ball-by-ball commentary are not included due to CricAPI free-tier limitations.

---

### 🟢 4. Match Events Timeline
- Match scheduled time  
- Toss event  
- Innings summaries  
- Final match result  

Built without requiring paid API endpoints.

---

### 🟢 5. Pinned Matches (Bonus Feature)
- Star icon to pin matches  
- Persistent storage using `localStorage`  
- Dedicated pinned section  
- Toggle pin/unpin functionality  

---

### 🟢 6. UX Enhancements
- Skeleton loading states  
- Error UI with retry buttons  
- Clean empty states  
- Mobile-first responsive design  

---

### 🟢 7. Code Quality & Architecture
- Custom hook: `useMatchDetails`  
- Utility-based match classification (`matchUtils.js`)  
- Clean folder structure  
- Separation of concerns  
- Reusable components  
- Production-ready structure  

---

### 🟢 8. Deployment (v1.0.0)
- Optimized Vite production build  
- Secure environment variable configuration  
- Live deployment via Vercel  
- Public production URL  

---

## 📂 Folder Structure

```
src/
│
├── components/
│   ├── MatchCard.jsx
│   ├── MatchStatsSummary.jsx
│   ├── MatchEventsTimeline.jsx
│   ├── SkeletonCard.jsx
│
├── context/
│   ├── MatchContext.jsx
│   ├── PinnedContext.jsx
│
├── hooks/
│   ├── useMatchDetails.js
│
├── pages/
│   ├── Home.jsx
│   ├── MatchDetails.jsx
│
├── services/
│   ├── cricketApi.js
│
├── utils/
│   ├── matchUtils.js
│
└── main.jsx
```

---

## 🔐 Environment Variables

Create a `.env` file in the root directory:

```env
VITE_CRIC_API_KEY=your_api_key_here
```

For production (Vercel):

1. Go to Project Settings → Environment Variables  
2. Add:

```
Name: VITE_CRIC_API_KEY
Value: your_api_key_here
```

3. Redeploy the project  

---

## ▶️ Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

---

## 🎯 Engineering Decisions

### API-Aware Design

The CricAPI free tier does not provide:

- Ball-by-ball commentary  
- Player-level scorecards  

Instead of simulating unavailable data, the app:

- Uses innings-level summaries  
- Displays only reliable API fields  
- Handles missing data gracefully  

This ensures reliability, correctness, and production stability.

---

### Architecture Principles

- Reusable custom hooks for clean data logic  
- Utility-based classification for maintainability  
- Context API for global state management  
- Persistent local storage for enhanced UX  
- Clear separation between UI and business logic  

---

## 📱 Responsive Design

Optimized for:

- Mobile  
- Tablet  
- Desktop  

Includes:

- Responsive grid layout  
- Adaptive typography  
- Clean spacing  
- Touch-friendly interactions  

---

## 🚀 Future Improvements

- Player-level detailed scorecards  
- Ball-by-ball commentary (paid API tier)  
- Dark mode  
- Authentication system  
- Progressive Web App (PWA)  
- Real-time WebSocket updates  

---

## 👨‍💻 Author

**Vamsi Shesamsetti**  
GitHub: https://github.com/shesamsetti-vamsi  

---

## 📄 License

MIT License  

---

# 🎉 Project Status

✅ Core Features Complete  
✅ Bonus Feature Implemented  
✅ Code Refactored  
✅ Production Deployment Complete  
✅ Versioned Release (v1.0.0)  

🚀 **Project Completed — Production Ready**
