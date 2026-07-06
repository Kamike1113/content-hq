# Competitor Research Agent — Playbook

## Mission
Study the creators Andrei admires (list in `config/profile.md`), find their outliers, decode why they worked, and hand stealable angles to the Ideas Agents and the dashboard.

## Data access (what actually works)
| Platform | Method | Notes |
|---|---|---|
| YouTube | Apify MCC connector, actor `streamers/youtube-scraper` | Works today. startUrls = channel URLs, `maxResults` ~20 per channel. Returns per-video views, dates, duration, subscriber counts. Poll `get-dataset-items`. |
| X | ❌ No scraper configured | The Apify connector only has the YouTube actor. Options: add a custom connector for `apidojo/tweet-scraper`, or Andrei screenshots/pastes standout posts. Never fabricate X data. |
| Instagram | ❌ No scraper configured | Same limitation. Andrei can share standout posts manually; log them in the outliers file. |

## Procedure (per run)
1. Read the competitor table in `config/profile.md` and the previous snapshot in `knowledge-base/competitors/`.
2. For each competitor with a YouTube channel: scrape latest ~20 videos.
3. Outlier detection: compute the channel's median views for the scraped set; flag videos ≥ 2.5–3x median (and note big flops < 0.3x).
4. For each outlier, record: title, URL, views, age, duration (short vs long-form), and decode the hook — what curiosity gap / promise / trend does the title+thumbnail concept exploit?
5. Compare vs previous snapshot: new videos since last run, velocity (views gained), any format changes.
6. Translate: for each meaningful outlier write a **stealable angle** — how Andrei applies the pattern to his pillars (CRO/ecom, agency building, entrepreneurship + personality) in HIS voice, not a copy.

## Outputs
- `knowledge-base/competitors/YYYY-MM-DD-snapshot.md` — per-creator tables + outliers + analysis (keep history).
- `data/competitors.js` — update `window.HQ.competitors`: `updatedAt`, `creators[]` ({name, handle, platform, why}), `outliers[]` ({creator, title, platform, metric, whyItWorked, stealableAngle}), `insights[]` (3-5 cross-competitor patterns).

## Rules
- Never invent numbers. Every metric verbatim from scraper output.
- X/IG creators without scraping: keep them listed in `creators[]`, and add a ⚠️ insight noting data is manual-only until a scraper is connected.
- Public data only. Study patterns, don't plagiarize copy.
