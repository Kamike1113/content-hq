window.HQ = window.HQ || {};

// The standard repurposing recipe: 1 YouTube video → everything below.
window.HQ.repurposingRecipe = [
  { group: "Email", items: ["Newsletter #1 (main lesson)", "Newsletter #2 (story angle)", "Newsletter #3 (tactical how-to)"] },
  { group: "X", items: ["Short post ×3", "Medium post ×2", "Long-form post", "X Article", "Thread"] },
  { group: "LinkedIn", items: ["Short post", "Medium post", "Long post", "LinkedIn Carousel (PDF)"] },
  { group: "Instagram", items: ["Carousel", "Stories sequence (3–5 frames)", "Reels (cut from long-form)", "Standalone IG video"] },
  { group: "Short video", items: ["YouTube Shorts ×3–5 (hook + rehook each)", "TikTok (same cuts)", "Facebook Reels", "Threads posts"] }
];

// Content moving through the pipeline. stage: queue | production | ready | published
window.HQ.pipeline = {
  updatedAt: "2026-07-06",
  items: [
    {
      id: "pl-001",
      title: "Shopify Checkout Optimization (top sub-driver video)",
      source: "YouTube long-form (existing)",
      stage: "queue",
      note: "Best repurposing candidate: your #1 subscriber driver, untested on other platforms. Drop the transcript in knowledge-base/repurposing/ to start.",
      derivatives: []
    },
    {
      id: "pl-002",
      title: "Bali mastermind story",
      source: "Instagram carousel (18.9K views, existing)",
      stage: "queue",
      note: "Reverse-repurpose: top IG performer → YouTube short + X thread + LinkedIn post.",
      derivatives: []
    }
  ]
};
