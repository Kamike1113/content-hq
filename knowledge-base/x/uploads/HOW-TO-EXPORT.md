# How to export X Analytics (30 seconds, weekly)

1. Go to https://analytics.x.com (logged in as @andreibreha) — or X → Premium → Analytics.
2. Open **Posts** (Tweets) view.
3. Set date range to **Last 28 days**.
4. Click **Export data** → "By Tweet" → CSV downloads.
5. Drop the CSV into this folder (`Content HQ/knowledge-base/x/uploads/`).

The X Data Agent picks up the newest CSV on its next run, analyzes it (top posts, formats, hooks, trends vs. previous export), snapshots it to `knowledge-base/x/`, and updates the dashboard.
