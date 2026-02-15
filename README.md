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

The Live Cricket Score App allows users to:

- 📡 View Live, Upcoming, and Finished matches  
- 🔍 Search matches by team name  
- 🎯 Filter matches by status  
- 📊 View detailed match statistics  
- 🕒 See a match events timeline  
- ⭐ Pin favorite matches (persistent storage)  
- 📱 Use the app seamlessly on mobile, tablet, and desktop  

This project was developed using a structured milestone-based approach emphasizing production-ready UI, clean architecture, and API-aware engineering principles.

---

## ✨ Key Highlights

- Clean API integration with defensive error handling  
- Custom hooks for reusable data-fetching logic  
- Persistent pinned matches using `localStorage`  
- Production-ready deployment with secure environment configuration  
- Fully responsive UI built with Tailwind CSS  

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
- Navigation (Back & Home buttons)  
- Clean responsive layout  

---

### 🟢 3. Match Statistics
- Innings-wise score summary  
- Runs / Wickets / Overs  
- Toss & result summary  
- Graceful fallback if scorecard unavailable  

⚠️ Note: Player-level stats are not included due to CricAPI free-tier limitations.

---

### 🟢 4. Match Events Timeline
- Match scheduled time  
- Toss result event  
- Innings summaries  
- Final match result  

Built without ball-by-ball APIs.

---

### 🟢 5. Pinned Matches (Bonus Feature)
- Star icon to pin matches  
- Persistent storage using `localStorage`  
- Dedicated pinned section on home page  
- Toggle pin/unpin functionality  

---

### 🟢 6. UX Enhancements
- Skeleton loading states  
- Error UI with retry buttons  
- Clean empty states  
- Responsive layout polish  

---

### 🟢 7. Code Quality Improvements
- Custom hook: `useMatchDetails`  
- Utility-based match classification  
- Clean folder structure  
- Separation of concerns  
- Reusable components  

---

### 🟢 8. Deployment (Day 14)
- Production build optimized  
- Environment variable configuration  
- Deployed to Vercel  
- Publicly accessible URL  

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

Instead of faking data, the app:

- Uses innings-level summaries  
- Displays available match-level statistics  
- Gracefully handles missing fields  

This ensures reliability, correctness, and production stability.

---

### Architecture

- Custom hooks for data fetching  
- Utility functions for classification logic  
- Context API for global state management  
- Persistent local storage for pinned matches  
- Clean separation of logic and UI  

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
- Mobile-friendly interactions  

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

# 🏁 Project Status (Day 14)

✅ Core Features Complete  
✅ Bonus Feature Implemented  
✅ Code Refactored  
✅ Production Deployment Complete  

🚀 Ready for Final GitHub Polish (Day 15)
