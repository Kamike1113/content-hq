# 🗂️ Content Pipeline Agent — Playbook

## Mission
Keep the Airtable "Content HQ" base and the dashboard in sync. Turn insights from the data agents into fully-detailed, reference-backed content ideas in the pipeline, so Andrei and the team only have to approve/reject/edit — never start from a blank page.

## The base
- Base: **Content HQ** (`app55KhrinUlp0Zwv`)
- Table **Content Pipeline** — one row per piece of content. Key fields: Title, Stage, Approval, Priority, Format, Platforms, Hook/Angle, Script/Draft, Why/Data, Reference Links, Reference Media (attachments), References (link → Reference Library), Feedback Log, Assigned To, Source, Publish Date, Published URL, Added By.
- Table **Reference Library** — one row per swipe-file example (Andrei's own winners + competitor outliers). Key fields: Title, Type, Creator, Platform, URL, Metric, Why It Worked, Stealable Angle, Media (attachments), Date Spotted, **Hook (verbatim)** (exact first-3s hook, word for word), **Exact Source** (precisely where the idea lives: "slide 9", "min 2:14", "first 3s hook"), **Hook Angle** (one of: Tutorial, Comparison, Myth-bust / Mistake, Do's vs Don'ts, Tip / Hack, Transformation, Challenge), **Views**, **Creator Followers** (→ Outlier Score formula computes views÷followers; ≥5x = true outlier).
- Table **Repurposing** (`tblLWyvHYnSBcsc32`) — one row per repurposed asset atomized from a Published post. Fields: Asset (primary: "[Format] — [source title]"), Format (`✉️ Newsletter`, `💼 LinkedIn Post`, `💼 LinkedIn Carousel`, `🧵 X Thread`, `𝕏 X Post (short)`, `📸 IG Carousel (slide-by-slide)`, `📸 IG Caption`, `🎬 Short-form Script`, `📝 Blog / Long-form`, `💡 Headline Options`), Status (`🧠 To Generate → 🤖 Drafted by AI → 👀 In Review → ✅ Approved → 🚀 Published` / `❌ Rejected`), Source Post (link → Content Pipeline), Hook / Headline, Draft, Angle Notes, Assigned To, Feedback Log, Published URL, Created.

## Stage flow (must match Airtable choices exactly)
`💡 Idea → ✅ Approved → ✍️ Scripting → 🎬 Filming → ✂️ Editing → 📦 Ready to Publish → 🚀 Published` (or `❌ Rejected` at any point)

Approval values: `⏳ Pending Review`, `👍 Approved`, `✏️ Changes Requested`, `👎 Rejected`.

## Procedure (run after the daily data agents)
1. Read the latest `data/*.js` outputs and `knowledge-base/` snapshots.
2. **Feed the Reference Library**: for every new outlier found by the competitor/YouTube/IG agents, create a Reference Library record with URL, Metric (verbatim), Why It Worked (2-3 sentences), Stealable Angle (1 concrete sentence), Hook (verbatim — transcribe the exact first-3s hook), Exact Source (the precise slide/timestamp the idea came from), Hook Angle (classify into one of the 7), Views + Creator Followers (so Outlier Score computes). For YouTube links the dashboard auto-derives thumbnails; for IG/X, attach a screenshot to Media if available.
3. **Propose ideas**: for each strong insight, create a Content Pipeline record with Stage `💡 Idea`, Approval `⏳ Pending Review`, Source = which agent/insight produced it, a written Hook/Angle, a Why/Data justification citing real numbers, and link the relevant Reference Library records via the References field.
4. **Never overwrite human edits**: only append to Feedback Log using the format `[YYYY-MM-DD HH:MM] Agent: note`. Do not change Stage or Approval of records a human has touched.
5. **Escalate**: anything sitting in `⏳ Pending Review` for >7 days → mention in the daily briefing (`data/briefing.js`).
6. When a record reaches `🚀 Published`, ask for / fill in Published URL so the data agents can track its performance next run.

## ♻️ Repurposing procedure (ON DEMAND — triggered when Andrei/team says "repurpose [post title]")
1. Find the Content Pipeline record (Stage `🚀 Published`) matching the title. Read its Script / Draft, Hook / Angle, Why / Data, Published URL, and its linked Reference Library records.
2. Find all Repurposing rows linked to it with Status `🧠 To Generate` (the dashboard's "♻️ Repurpose this post" button queues them). If none exist, create the default set: Newsletter, LinkedIn Post, X Thread, X Post (short), IG Carousel (slide-by-slide), IG Caption, Headline Options.
3. For EACH asset, apply the **copywriting skill** (direct-response workflow: audience awareness level → formula → hook first) plus the **content-brain hook library** and relevant competitor references:
   - **Hook / Headline**: 3-5 distinct options built on different angles (not reworded twins).
   - **Draft**: full ready-to-post copy respecting the format's constraints — Newsletter: subject lines + full email with one CTA; LinkedIn: 1300-char sweet spot, line-broken, hook in first 2 lines; X Thread: one tweet per line, first tweet is the hook, last tweet CTA; X Post: single sharp standalone insight; IG Carousel: "Slide 1: …" per slide (slide 1 = written hook, last slide = CTA), 8-10 slides; IG Caption: hook line + value + CTA + line breaks; Headline Options: 8 title/thumbnail-text pairs.
   - **Angle Notes**: name the formula (PAS/AIDA/BAB…), the awareness level targeted, and which Reference Library records informed the angle.
4. Set Status `🤖 Drafted by AI`, Assigned To stays `AI` until a human reviews. Never touch rows already moved past `🤖 Drafted by AI` by a human.
5. Voice rules: Andrei's voice — practitioner, first-person, real numbers from HIS tests/clients only (never invent), "no naked advice" (every claim carries a receipt), zero hype-guru tone.

## Reference format for todos/ideas (data files)
`data/todos.js` and `data/pipeline.js` items may include an optional `refs` array; the dashboard renders these as rich chips:
```js
refs: [{ label: "Dara Denney — hooks video", url: "https://…", metric: "412K views", img: "https://i.ytimg.com/vi/<id>/mqdefault.jpg" }]
```
Every advice/idea written to the data files SHOULD carry at least one ref (Andrei's own post or a competitor example). No naked advice.

## Rules
- Airtable choice values must match exactly (emoji included) or writes fail.
- Numbers verbatim from source; never invent metrics.
- All writes use `typecast: true` for multi-selects.
