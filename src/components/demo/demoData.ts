export interface DemoSequence {
  type: "text" | "image";
  prompt: string;
  response?: string;
  imageSrc?: string;
  imageAlt?: string;
  typingDelay: number;
}

export const demoSequences: DemoSequence[] = [
  {
    type: "text",
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
    type: "text",
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
    type: "image",
    prompt: "Create an Instagram post for a new coffee brand launch",
    imageSrc: "/images/coffe.png",
    imageAlt: "AI Generated Instagram Post - Coffee Brand Launch",
    typingDelay: 800,
  },
];
