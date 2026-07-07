# How to use Content HQ

## Your daily routine (2 minutes)
1. Open `dashboard.html` (double-click it — it runs in your browser, no internet needed).
2. Read the **🌅 Today** tab: the briefing tells you the single most important finding, and the to-do list tells you exactly what to film, write, or post — sorted by priority, each with the data-backed reason.
3. Check off items as you do them (your browser remembers the checkmarks). The progress bar tracks your day.
4. Go create. That's it — the AI team refreshes everything at 7:00 AM daily.

## The tabs
| Tab | What it's for |
|---|---|
| 🌅 **Today** | Morning briefing + prioritized to-dos. Your starting point every day. |
| 📊 **Platforms** | The analytics: KPIs, daily trend charts, top posts, insights, and "do next" per platform (IG / X / YouTube). |
| 🏭 **Agency** | Your AI team roster — who's active, what they do, when they run, where they write. |
| 🔁 **Repurposing** | The "film once, publish everywhere" recipe + a kanban board tracking each video through Queue → Production → Ready → Published. |
| 🕵️ **Competitors** | Tracked creators, their outlier content, why it worked, and stealable angles for you. Refreshed every Monday. |

## Your weekly rituals (the only manual work)
- **X data (weekly):** analytics.x.com → export the "Account overview" AND "By Tweet" CSVs → drop them in `knowledge-base/x/uploads/`. Instructions in that folder.
- **Post creation:** everything else is automated.

## How to run a repurposing job
1. Get the transcript of a YouTube video (or just the video link).
2. Save it in `knowledge-base/repurposing/` (e.g. `2026-07-10-checkout-video.md`), or just paste it to Claude.
3. Tell Claude: **"Repurpose this."**
4. You get back: 3 newsletters, X posts (short/medium/long + article + thread), LinkedIn posts + carousel, IG carousel + stories + reel captions, and 3–5 shorts scripts with hooks + rehooks — plus a publish checklist. The kanban board updates automatically.

## Talking to your AI team (things you can say to Claude)
- "What should I film this week?" → CEO agent answers from the data
- "Run the competitor scan now"
- "Repurpose [video]"
- "Add [creator] to my competitor list"
- "Why did my reach drop this week?"
- "Turn today's briefing into a content calendar for the week"

## How data flows (under the hood)
```
7:00 AM daily scheduled task
  ├─ YouTube  → Supermetrics + Apify  → knowledge-base/youtube/ + data/youtube.js
  ├─ Instagram→ Supermetrics (personal profile only) → data/instagram.js
  ├─ X        → your CSV uploads → data/x.js
  ├─ Competitors (Mondays) → Apify → data/competitors.js
  └─ CEO agent → data/briefing.js + data/todos.js  ← what you see on the Today tab
```
`dashboard.html` is a static file that reads `data/*.js` — no server, works offline, safe to share the FILE but note the DATA contains your private analytics.

## GitHub sync
The folder is a git repo (history of every daily run). To put it on GitHub:
1. Create a **PRIVATE** repo at github.com/new (name: `content-hq`). Private matters — this contains your private analytics.
2. Tell Claude the repo URL + a fine-grained personal access token with read/write access to it (github.com → Settings → Developer settings → Fine-grained tokens).
3. Claude connects it and pushes; from then on the daily run auto-commits and pushes, so you can pull/view your data anywhere.

⚠️ Don't enable GitHub Pages on this repo unless you're comfortable making your analytics public.

---

## 🆕 Dashboard V2 (dashboard-v2.html) — live workflow edition

V1 (`dashboard.html`) is untouched and still works. V2 adds a live, team-editable layer on top, powered by Airtable.

**New tabs**
- **🎬 Studio** — a kanban board of the whole content pipeline (Idea → Approved → Scripting → Filming → Editing → Ready → Published). Drag cards between stages, click a card to open it: approve 👍 / request changes ✏️ / reject 👎, edit the title/hook/script/references inline, and leave timestamped comments in the Feedback Log. "+ Add content" creates a new idea straight into the pipeline.
- **📚 Library** — the swipe file. Every reference (your winners + competitor outliers) with thumbnail, metric, "why it worked" and a stealable angle. One click on "＋ Make idea from this" spawns a pre-filled pipeline card linked to that reference.

**One-time setup per person**
1. Open dashboard-v2.html → Studio tab → it asks for an Airtable token.
2. Create one at airtable.com/create/tokens with scopes `data.records:read` + `data.records:write` on the **Content HQ** base.
3. Paste it once — it's stored only in YOUR browser (localStorage), never in the repo, so the public site stays safe.
4. Pick your name in the header so comments/approvals are attributed to you.

**Where the data lives**: Airtable base "Content HQ" — tables *Content Pipeline* and *Reference Library*. Edit there or in the dashboard; both stay in sync because the dashboard reads/writes Airtable live.

**Media references**: paste any YouTube link into Reference Links and the card auto-shows the thumbnail; attach images/screenshots in Airtable's Reference Media field for anything else. Todos on the Today tab can also carry reference chips (see `agents/content-pipeline-agent.md`).
