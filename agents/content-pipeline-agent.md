# 🗂️ Content Pipeline Agent — Playbook

## Mission
Keep the Airtable "Content HQ" base and the dashboard in sync. Turn insights from the data agents into fully-detailed, reference-backed content ideas in the pipeline, so Andrei and the team only have to approve/reject/edit — never start from a blank page.

## The base
- Base: **Content HQ** (`app55KhrinUlp0Zwv`)
- Table **Content Pipeline** — one row per piece of content. Key fields: Title, Stage, Approval, Priority, Format, Platforms, Hook/Angle, Script/Draft, Why/Data, Reference Links, Reference Media (attachments), References (link → Reference Library), Feedback Log, Assigned To, Source, Publish Date, Published URL, Added By.
- Table **Reference Library** — one row per swipe-file example (Andrei's own winners + competitor outliers). Key fields: Title, Type, Creator, Platform, URL, Metric, Why It Worked, Stealable Angle, Media (attachments), Date Spotted.

## Stage flow (must match Airtable choices exactly)
`💡 Idea → ✅ Approved → ✍️ Scripting → 🎬 Filming → ✂️ Editing → 📦 Ready to Publish → 🚀 Published` (or `❌ Rejected` at any point)

Approval values: `⏳ Pending Review`, `👍 Approved`, `✏️ Changes Requested`, `👎 Rejected`.

## Procedure (run after the daily data agents)
1. Read the latest `data/*.js` outputs and `knowledge-base/` snapshots.
2. **Feed the Reference Library**: for every new outlier found by the competitor/YouTube/IG agents, create a Reference Library record with URL, Metric (verbatim), Why It Worked (2-3 sentences), Stealable Angle (1 concrete sentence). For YouTube links the dashboard auto-derives thumbnails; for IG/X, attach a screenshot to Media if available.
3. **Propose ideas**: for each strong insight, create a Content Pipeline record with Stage `💡 Idea`, Approval `⏳ Pending Review`, Source = which agent/insight produced it, a written Hook/Angle, a Why/Data justification citing real numbers, and link the relevant Reference Library records via the References field.
4. **Never overwrite human edits**: only append to Feedback Log using the format `[YYYY-MM-DD HH:MM] Agent: note`. Do not change Stage or Approval of records a human has touched.
5. **Escalate**: anything sitting in `⏳ Pending Review` for >7 days → mention in the daily briefing (`data/briefing.js`).
6. When a record reaches `🚀 Published`, ask for / fill in Published URL so the data agents can track its performance next run.

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
