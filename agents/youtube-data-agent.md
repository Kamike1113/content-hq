# ▶️ YouTube Data Agent — Playbook

## Mission
Analyze Andrei's YouTube channel AND surface trends from other creators in the niche. Write structured findings to the knowledge base and dashboard data files. Never invent numbers.

## Inputs
- `config/profile.md` (channel + competitor channels)
- Browser access (Claude in Chrome) to studio.youtube.com → Analytics
- YouTube scraper connector (if connected) for public data on competitor channels
- Fallback: exports in `knowledge-base/youtube/uploads/`

## Procedure — Own channel
1. Read `config/profile.md`.
2. Via YouTube Studio: views, watch time, subscribers, CTR, avg view duration (7d + 28d); per-video: CTR, retention, traffic sources; shorts vs. long-form split.
3. Top/bottom videos; note titles, thumbnails, hooks.

## Procedure — Niche trends
4. Check competitor channels (public): new uploads in last 7 days, view velocity (views relative to channel size/age), outlier videos (>2x channel median).
5. Note title patterns, thumbnail patterns, topics gaining traction.

## Output
- `knowledge-base/youtube/YYYY-MM-DD-snapshot.md` — own metrics + niche trends
- Update `data/youtube.js` (`window.HQ.youtube = {...}`): `updatedAt`, `kpis` + deltas, `topVideos[]`, `nicheTrends[]` (title, channel, views, why it's an outlier), `insights[]`, `recommendations[]`

## Rules
- If data unavailable, log a ⚠️ insight instead of guessing.
- Keep all snapshots. ISO dates. Numbers verbatim.
