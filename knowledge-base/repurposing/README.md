# Repurposing Pipeline — how to use

**Goal: film once → publish everywhere.**

## How to start a repurposing job
1. Drop a transcript (or a link to the YouTube video) into this folder, named like `2026-07-10-shopify-checkout.md`.
2. Tell Claude: *"Repurpose <title>"*.
3. Claude (Repurposing Agent) produces the full derivative set in a subfolder here, and moves the item across the pipeline board on the dashboard (Queue → In production → Ready → Published).

## The standard recipe (per 1 long-form video)
- **Email:** 3 newsletters (main lesson / story angle / tactical how-to)
- **X:** 3 short posts, 2 medium posts, 1 long-form post, 1 X Article, 1 thread
- **LinkedIn:** short + medium + long post, 1 LinkedIn Carousel (PDF)
- **Instagram:** 1 carousel, 1 stories sequence (3–5 frames), reels cut from the long-form, plus standalone IG videos stay their own track
- **Short video:** 3–5 YouTube Shorts — each with a HOOK (first 2s) and a REHOOK (~15–20s mark) — reused as TikToks, IG Reels, Facebook Reels
- **Threads:** repurposed from the X short/medium posts

Distribution targets: X, YouTube Shorts, Threads, Instagram (Reels · Stories · Carousels), LinkedIn (incl. carousels), TikTok, Facebook.

## Output structure per job
```
knowledge-base/repurposing/<date>-<slug>/
  source-transcript.md
  newsletters.md        (3 newsletters)
  x-posts.md            (short/medium/long + article + thread)
  linkedin.md           (posts + carousel slide copy)
  instagram.md          (carousel slides + stories frames + reel captions)
  shorts-scripts.md     (per short: hook, rehook, cut timestamps)
  publish-checklist.md  (checkbox per platform)
```

Claude also updates `data/pipeline.js` so the dashboard board reflects the job's stage and derivative count.
