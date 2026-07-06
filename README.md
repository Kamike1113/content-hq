# 🧠 Content HQ

Andrei's AI content team workspace. Phase 1: data analysis agents.

## How it works
- **Agents** are playbooks in `agents/` — Claude (via Cowork scheduled tasks) reads a playbook, collects data, and writes results.
- **Knowledge base** (`knowledge-base/`) keeps dated snapshot files per platform — the searchable history.
- **Dashboard** (`dashboard.html`) — open it in a browser. It reads the latest state from `data/*.js`, which agents update on every run.
- **Config** (`config/profile.md`) — handles, competitors, positioning. Agents read this first.

## Structure
```
Content HQ/
├── dashboard.html          ← open this every morning
├── README.md
├── config/profile.md       ← handles + competitors (keep updated)
├── agents/                 ← agent playbooks
│   ├── instagram-data-agent.md
│   ├── x-data-agent.md
│   └── youtube-data-agent.md
├── data/                   ← latest state, read by dashboard
│   ├── briefing.js  instagram.js  x.js  youtube.js
└── knowledge-base/         ← dated history per platform
    ├── instagram/  x/  youtube/  competitors/  ideas/  briefings/
```

## Roadmap (later phases)
- Competitor Research Agent → `knowledge-base/competitors/`
- Ideas Agents (IG / X / YouTube) → `knowledge-base/ideas/` + dashboard
- CEO Agent → daily briefing synthesis + Slack/email pings
- Repurposing pipeline: YouTube transcript → newsletters, X posts, carousels, shorts scripts
