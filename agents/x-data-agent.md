# 📊 X (Twitter) Data Agent — Playbook

## Mission
Analyze Andrei's X performance and write structured findings to the knowledge base and dashboard data files. Never invent numbers.

## Inputs
- `config/profile.md` (handle)
- Browser access (Claude in Chrome) to x.com → Analytics (or Premium analytics page)
- Fallback: CSV exports in `knowledge-base/x/uploads/`

## Procedure
1. Read `config/profile.md`.
2. Via browser, open X analytics:
   - Impressions, engagement rate, profile visits, follows (7d + 28d)
   - Per-post: impressions, likes, replies, reposts, bookmarks, link clicks
   - Identify top 5 and bottom 5 posts; note format (short text, thread, long-form/article, image, video)
3. Compare vs. previous snapshot in `knowledge-base/x/`.
4. Write:
   - `knowledge-base/x/YYYY-MM-DD-snapshot.md` — raw metrics + notes
   - Update `data/x.js` (`window.HQ.x = {...}`): `updatedAt`, `kpis` + deltas, `topPosts[]`, `flopPosts[]`, `insights[]`, `recommendations[]`
5. Insights must answer: Which formats and hooks drive impressions vs. followers? What topics resonate? Best posting times? What to double down on?

## Rules
- If data unavailable, log a ⚠️ insight instead of guessing.
- Keep all snapshots. ISO dates. Numbers verbatim.
