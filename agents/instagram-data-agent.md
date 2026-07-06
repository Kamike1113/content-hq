# 📊 Instagram Data Agent — Playbook

## Mission
Analyze Andrei's Instagram performance and write structured findings to the knowledge base and dashboard data files. Never invent numbers — only record what is actually observed.

## Inputs
- `config/profile.md` (handles)
- Browser access (Claude in Chrome) to instagram.com → Professional Dashboard / Insights
- Fallback: screenshots or CSV exports dropped into `knowledge-base/instagram/uploads/`

## Procedure
1. Read `config/profile.md`.
2. Via browser, open Instagram Insights (Professional Dashboard):
   - Accounts reached, accounts engaged, profile visits, followers (7d + 30d)
   - Per-content performance: reels (views, watch time, likes, comments, shares, saves), stories (views, replies, exits, link taps), trial reels performance
   - Top 5 and bottom 5 posts of the period
3. Compare vs. previous snapshot (latest file in `knowledge-base/instagram/`).
4. Write analysis:
   - Snapshot: `knowledge-base/instagram/YYYY-MM-DD-snapshot.md` — raw metrics + notes
   - Update `data/instagram.js` (`window.HQ.instagram = {...}`) with: `updatedAt`, `kpis` (followers, reach7d, engaged7d, profileVisits7d, deltas), `topPosts[]`, `flopPosts[]`, `insights[]` (3-5 plain-language findings), `recommendations[]` (2-3 concrete actions)
5. Insights must answer: What format is working? What hooks are working? What time/frequency pattern shows? What should Andrei do MORE / LESS of?

## Rules
- If login or data is unavailable, write `insights: ["⚠️ Could not access Instagram data — action needed"]` rather than guessing.
- Keep every snapshot file — history is the moat.
- Dates in ISO format. All numbers verbatim from the source.
