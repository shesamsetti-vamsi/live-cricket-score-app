# 🎨 UI Plan — Live Cricket Score App

This document outlines the UI structure, page layout, and component responsibilities
for the Live Cricket Score App.

The UI was implemented using a code-first approach with Tailwind CSS, and this plan
documents the final design decisions.

---

## Pages

### 1. Home Page (Live Matches)

**Purpose**
- Display a list of cricket matches with quick match context.

**Sections**
- Header: App title
- Search bar: Search matches by team name
- Filter buttons: All / Live / Upcoming / Finished
- Match cards grid

**Match Card Content**
- Team names
- Match status badge (Live / Upcoming / Finished)
- Score summary (if available)
- Venue
- Match result text

**Interaction**
- Clicking a match card navigates to the Match Details page.

---

### 2. Match Details Page

**Purpose**
- Display detailed information about a selected match.

**Sections**
- Back navigation to Home
- Match title
- Team vs Team banner
- Innings score breakdown
- Venue information
- Match status/result

**Planned Extensions**
- Player statistics section
- Recent balls / commentary section

---

## Layout & Styling

- Responsive layout using Tailwind CSS
- Mobile-first grid design
- Card-based UI for match information
- Consistent spacing, typography, and color usage

---

## Navigation

- Client-side routing using React Router
- Routes:
  - `/` → Home Page
  - `/match/:id` → Match Details Page
