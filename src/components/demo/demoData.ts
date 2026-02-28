export interface DemoSequence {
  prompt: string;
  response: string;
  typingDelay: number;
}

export const demoSequences: DemoSequence[] = [
  {
    prompt: "Create a social media campaign for my new fitness app",
    response: `Here's your campaign strategy:

1. Launch Teaser (Week 1)
   • 3 Instagram Reels showing app features
   • Twitter thread on fitness tips

2. User Stories (Week 2-3)
   • Before/after transformation posts
   • Testimonial videos

3. Engagement Push (Week 4)
   • TikTok workout challenges
   • Influencer partnerships`,
    typingDelay: 800,
  },
  {
    prompt: "Write a product description for organic skincare",
    response: `Introducing Pure Glow Serum

Experience the power of nature with our breakthrough organic formula. Crafted with:

• Wild-harvested rosehip oil
• Vitamin C from kakadu plum
• Hyaluronic acid from plant extracts

Results in just 14 days. Cruelty-free. Dermatologist tested.`,
    typingDelay: 600,
  },
  {
    prompt: "Generate 5 blog post ideas for a travel company",
    response: `5 Engaging Blog Posts:

1. "Hidden Gems: 10 Underrated Destinations for 2025"
2. "Solo Travel Guide: Safety Tips & Best Locations"
3. "Budget Luxury: How to Travel First-Class for Less"
4. "Digital Nomad Hotspots: Work & Wander"
5. "Sustainable Tourism: Leave No Trace Adventures"`,
    typingDelay: 500,
  },
];
