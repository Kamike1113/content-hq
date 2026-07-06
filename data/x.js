window.HQ = window.HQ || {};
window.HQ.x = {
  updatedAt: "2026-07-06",
  kpis: {
    followers: null, // account-overview CSV has daily follow deltas, not a total
    impressions7d: 4785,
    engagementRate7d: "46 eng · 1 post",
    profileVisits7d: null,
    deltas: { netFollows7d: "+6" }
  },
  kpis28d: {
    impressions: 82843,
    vsPrev28d: "+61% (prev: 51,317)",
    engagements: 1223,
    follows: "+89 / −23 (net +66)",
    profileVisits: 321,
    posts: "21 (vs 25 prev)"
  },
  series: { label: "Impressions / day (28d)", points: [
    {d:"06-09",v:349},{d:"06-10",v:1317},{d:"06-11",v:614},{d:"06-12",v:808},{d:"06-13",v:1101},{d:"06-14",v:1231},{d:"06-15",v:2472},{d:"06-16",v:1424},{d:"06-17",v:586},{d:"06-18",v:837},{d:"06-19",v:373},{d:"06-20",v:531},{d:"06-21",v:360},{d:"06-22",v:458},{d:"06-23",v:317},{d:"06-24",v:1202},{d:"06-25",v:685},{d:"06-26",v:4044},{d:"06-27",v:30472},{d:"06-28",v:17049},{d:"06-29",v:11828},{d:"06-30",v:2578},{d:"07-01",v:641},{d:"07-02",v:411},{d:"07-03",v:416},{d:"07-04",v:247},{d:"07-05",v:389},{d:"07-06",v:103}
  ]},
  topPosts: [
    { title: "Viral spike Jun 27–29 (older content compounding)", metric: "59,349 impressions over 3 days with 0 new posts (~72% of 28d total)" }
  ],
  flopPosts: [],
  insights: [
    "Efficiency improving: +61% impressions on 16% fewer posts vs prior 28 days — quality is beating volume.",
    "The engine is spiky: one compounding piece drove most of the month; baseline days sit in low thousands.",
    "Posting slowed to 1 post last week and impressions decayed fast to 4,785.",
    "Impressions → profile visits is the leak (~0.4%); visits → follows converts fine (321 → +89 in 28d)."
  ],
  recommendations: [
    "Restore cadence: minimum 4–5 posts/week — the account decays quickly without fresh posts.",
    "Identify the Jun 27–29 spike post via the 'By Tweet' export and make 2–3 variations of that format.",
    "Add identity/CTA elements to winners to convert impressions into profile visits.",
    "Weekly ritual: drop the 'By Tweet' CSV into knowledge-base/x/uploads/ for post-level analysis."
  ]
};
