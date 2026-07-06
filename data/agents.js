window.HQ = window.HQ || {};
window.HQ.agents = [
  {
    id: "ceo",
    name: "CEO Agent",
    emoji: "🧠",
    role: "Reads all agent outputs, writes the morning briefing, sets today's to-dos, and decides what you should film or write next.",
    status: "active",
    lastRun: "2026-07-06",
    schedule: "Daily · after data agents finish",
    outputs: ["data/briefing.js", "data/todos.js", "knowledge-base/briefings/"]
  },
  {
    id: "yt-data",
    name: "YouTube Data Agent",
    emoji: "▶️",
    role: "Pulls private channel analytics (Supermetrics) + public stats (Apify) for @andreibreha. Tracks views, watch time, retention, subs, top videos.",
    status: "active",
    lastRun: "2026-07-06",
    schedule: "Daily · 7:00 AM",
    outputs: ["data/youtube.js", "knowledge-base/youtube/"]
  },
  {
    id: "ig-data",
    name: "Instagram Data Agent",
    emoji: "📸",
    role: "Pulls insights for @andrei_breha (personal profile ONLY — never Validare). Tracks reach, follows, profile visits, per-post performance.",
    status: "active",
    lastRun: "2026-07-06",
    schedule: "Daily · 7:00 AM",
    outputs: ["data/instagram.js", "knowledge-base/instagram/"]
  },
  {
    id: "x-data",
    name: "X Data Agent",
    emoji: "𝕏",
    role: "Analyzes X Analytics CSV exports for @andreibreha. Needs you to drop the weekly export into knowledge-base/x/uploads/.",
    status: "semi-manual",
    lastRun: "2026-07-06",
    schedule: "Weekly · when you drop the CSV",
    outputs: ["data/x.js", "knowledge-base/x/"]
  },
  {
    id: "competitor",
    name: "Competitor Research Agent",
    emoji: "🕵️",
    role: "Studies 7 creators Andrei admires: outlier videos, hooks, formats. YouTube automated via Apify; X/IG manual until a scraper is connected.",
    status: "active",
    lastRun: "2026-07-06",
    schedule: "Weekly · Mondays (with daily data run)",
    outputs: ["data/competitors.js", "knowledge-base/competitors/"]
  },
  {
    id: "ideas",
    name: "Ideas Agents",
    emoji: "💡",
    role: "One per platform. Combines your data + competitor outliers + trends into ready-to-film ideas with hooks, angles, and formats.",
    status: "planned",
    schedule: "Daily once competitor agent is live",
    outputs: ["knowledge-base/ideas/"]
  },
  {
    id: "repurposing",
    name: "Repurposing Agent",
    emoji: "🔁",
    role: "Takes one YouTube video transcript and produces the full derivative set: newsletters, X/LinkedIn posts, carousels, stories, shorts with hooks + rehooks.",
    status: "planned",
    blocked: "Activates when you drop a video/transcript into the Repurposing queue.",
    schedule: "On demand · per video",
    outputs: ["data/pipeline.js", "knowledge-base/repurposing/"]
  }
];
