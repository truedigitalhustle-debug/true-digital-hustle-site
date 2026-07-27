export const BRAND = {
  name: "TRUE DIGITAL HUSTLE",
  productTitle: "AI Creator Starter Kit",
  tagline: "Create Better AI Content Faster",
  footer: "True Digital Hustle \u2022 AI Creator Starter Kit \u2022 Version 1.0",
};

export const COVER = {
  features: [
    "30 Premium AI Prompts",
    "AI Creator Roadmap",
    "Prompt Engineering Checklist",
    "Recommended AI Tools",
    "Exclusive Magica Bonus",
  ],
};

export const WELCOME = {
  title: "Welcome to the AI Creator Starter Kit",
  paragraphs: [
    "If you're reading this, you're already ahead of most creators.",
    "The biggest difference between average AI content and professional AI content isn't expensive software \u2014 it's knowing how to communicate with AI effectively.",
    "This Starter Kit gives you a practical starting point. Inside you'll find prompts, workflows, and tools that can help you create videos, images, stories, and marketing content more efficiently.",
    "You don't need to memorize everything. Start with one prompt. Experiment. Adjust it to fit your style. The more you practice, the better your results will become.",
    "Remember: AI doesn't replace creativity. It helps you move from idea to finished content faster.",
    "Let's build something great.",
  ],
};

export const ROADMAP = {
  title: "AI Creator Roadmap",
  subtitle: "Your AI Content Creation Workflow",
  steps: [
    { title: "Find an Idea", text: "Every piece of content starts with a simple idea or problem to solve." },
    { title: "Build Your Prompt", text: "Be specific. Include the goal, style, audience, tone, and any important details." },
    { title: "Generate", text: "Use the right AI tool to create your first draft. Don't expect perfection on the first try." },
    { title: "Refine", text: "Adjust the prompt. Improve the output. Repeat until you're happy with the result." },
    { title: "Edit", text: "Add music, captions, transitions, and branding. Polish the final content." },
    { title: "Publish", text: "Share your work consistently. Learn from what performs well. Improve with every project." },
  ],
  tips: [
    "Start simple.",
    "Create consistently.",
    "Save prompts that work.",
    "Experiment often.",
    "Focus on progress, not perfection.",
  ],
};

export type PromptItem = {
  title: string;
  prompt: string;
  useWhen: string;
};

export type PromptLibrary = {
  key: string;
  title: string;
  tag: string;
  items: PromptItem[];
};

export const LIBRARIES: PromptLibrary[] = [
  {
    key: "openart",
    title: "OpenArt Prompt Library",
    tag: "AI Images",
    items: [
      { title: "Cinematic Portrait", prompt: "Create an ultra-realistic cinematic portrait of [subject] with dramatic lighting, rich color grading, shallow depth of field, premium composition, and a realistic environment that enhances the story.", useWhen: "Creating profile images, posters, or hero artwork." },
      { title: "Product Showcase", prompt: "Create a premium commercial image of [product] with luxury lighting, clean composition, realistic materials, and a high-end advertising style.", useWhen: "Designing product ads or store graphics." },
      { title: "Fantasy World", prompt: "Create an epic environment featuring [location] with cinematic lighting, detailed atmosphere, dramatic scale, and immersive storytelling elements.", useWhen: "Building worlds for stories or games." },
      { title: "Character Design", prompt: "Design a unique [character] with consistent facial features, signature clothing, expressive poses, and a memorable visual identity.", useWhen: "Creating recurring characters." },
      { title: "Social Media Graphic", prompt: "Create a modern, eye-catching visual for [topic] using bold composition, premium lighting, and a clean, professional aesthetic.", useWhen: "Making thumbnails and promotional posts." },
    ],
  },
  {
    key: "seedance",
    title: "Seedance Prompt Library",
    tag: "AI Video",
    items: [
      { title: "Movie Opening", prompt: "Create a cinematic opening scene introducing [subject] with dynamic camera movement, natural acting, realistic environments, and immersive audio.", useWhen: "Starting a story or commercial." },
      { title: "Action Sequence", prompt: "Generate a fast-paced action scene featuring [character] overcoming [challenge] using realistic movement and cinematic camera work.", useWhen: "Adding excitement and energy." },
      { title: "Emotional Moment", prompt: "Create an emotional scene focused on [character] using subtle expressions, natural dialogue, and cinematic pacing.", useWhen: "Building emotional connection." },
      { title: "Commercial", prompt: "Create a premium commercial for [product/service] highlighting its biggest benefits with polished visuals and professional pacing.", useWhen: "Promoting a brand or product." },
      { title: "Transformation", prompt: "Show [subject] transforming from [before] into [after] using seamless transitions and cinematic storytelling.", useWhen: "Before-and-after content." },
    ],
  },
  {
    key: "cinematic",
    title: "Cinematic Prompt Library",
    tag: "Visual Style",
    items: [
      { title: "Hollywood Look", prompt: "Create a Hollywood-style scene using realistic lighting, dramatic composition, cinematic color grading, and immersive atmosphere.", useWhen: "Giving any project a premium feel." },
      { title: "Drone Reveal", prompt: "Begin with a wide aerial shot before smoothly revealing [subject] to create scale and anticipation.", useWhen: "Introducing locations or characters." },
      { title: "Slow Motion Hero", prompt: "Capture [character] in slow motion with dynamic lighting, detailed facial expressions, and powerful cinematic framing.", useWhen: "Hero moments." },
      { title: "Suspense Builder", prompt: "Gradually increase tension through camera movement, sound design, lighting, and pacing before revealing the main moment.", useWhen: "Horror or mystery." },
      { title: "Epic Ending", prompt: "Finish with a memorable final shot that leaves viewers wanting more and reinforces the main message.", useWhen: "Ending videos with impact." },
    ],
  },
  {
    key: "storytelling",
    title: "Storytelling Prompt Library",
    tag: "Narrative",
    items: [
      { title: "Three-Act Story", prompt: "Write a story with a clear beginning, conflict, and satisfying ending centered around [main idea].", useWhen: "Creating complete stories." },
      { title: "Character Builder", prompt: "Develop a memorable character including goals, strengths, flaws, personality, and visual style.", useWhen: "Designing original characters." },
      { title: "World Building", prompt: "Design a believable world with unique locations, rules, culture, and atmosphere.", useWhen: "Building fictional universes." },
      { title: "Plot Twist", prompt: "Create an unexpected but logical twist that changes the audience's understanding of the story.", useWhen: "Increasing engagement." },
      { title: "Cliffhanger", prompt: "End the story with a compelling unanswered question that encourages viewers to return.", useWhen: "Series or episodic content." },
    ],
  },
  {
    key: "viral",
    title: "Viral Hook Library",
    tag: "Hooks",
    items: [
      { title: "Curiosity", prompt: "You won't believe what happened when I asked AI to create [idea]...", useWhen: "Stopping the scroll." },
      { title: "Challenge", prompt: "I gave AI one impossible challenge...", useWhen: "Experiment videos." },
      { title: "Surprise", prompt: "I wasn't expecting this result...", useWhen: "Reaction-style content." },
      { title: "Comparison", prompt: "Most creators do this... here's what I do instead.", useWhen: "Educational content." },
      { title: "Transformation", prompt: "This started as [before]... and ended as [after].", useWhen: "Showing dramatic improvements." },
    ],
  },
  {
    key: "marketing",
    title: "Marketing Prompt Library",
    tag: "Growth",
    items: [
      { title: "Product Description", prompt: "Write a persuasive product description highlighting the biggest benefits of [product] for [target audience].", useWhen: "Product pages." },
      { title: "Social Caption", prompt: "Write a social media caption that educates, entertains, and ends with a clear call to action.", useWhen: "Posting content." },
      { title: "Email", prompt: "Write a friendly email introducing [offer], explaining the value, and encouraging readers to take action.", useWhen: "Email campaigns." },
      { title: "Landing Page", prompt: "Write a high-converting landing page focused on the problem, solution, benefits, and a strong call to action.", useWhen: "Lead generation." },
      { title: "Call to Action", prompt: "Generate five compelling calls to action for [offer] that encourage immediate action without sounding overly aggressive.", useWhen: "Improving conversions." },
    ],
  },
];

export const PRO_TIP_LIBRARY = "Replace the words inside [brackets] with your own project details to instantly customize each prompt.";

export const CHECKLIST = {
  title: "Prompt Engineering Checklist",
  subtitle: "Before pressing Generate, run through this checklist.",
  items: [
    { title: "Define the Goal", text: "What do you want the AI to create?" },
    { title: "Be Specific", text: "Include important details instead of broad requests." },
    { title: "Choose a Style", text: "Cinematic, photorealistic, minimal, futuristic, documentary." },
    { title: "Know Your Audience", text: "Who is this content for?" },
    { title: "Add Constraints", text: "Aspect ratio, length, tone, platform, camera style." },
    { title: "Refine & Repeat", text: "Your first result is a draft. Adjust your prompt until you're happy with the output." },
  ],
  proTip: "Small prompt changes often create big improvements. Save your best prompts so you can reuse and refine them over time.",
};

export const TOOLS = {
  title: "AI Tools I Actually Use",
  items: [
    {
      name: "ChatGPT",
      what: "Helps me brainstorm ideas, write prompts, scripts, captions, and marketing content.",
      why: "Almost every project starts here. It's my creative planning partner before I generate anything.",
      best: "Creators, marketers, and entrepreneurs.",
    },
    {
      name: "Claude",
      what: "Helps organize complex projects, improve writing, build systems, and manage larger workflows.",
      why: "I use Claude for larger projects that require planning, organization, and structured thinking.",
      best: "Advanced creators and business owners.",
    },
    {
      name: "Magica",
      featured: true,
      badge: "MY FAVORITE AI VIDEO PLATFORM",
      what: "Creates cinematic AI videos using powerful video generation models like Seedance.",
      why: "It's one of my favorite platforms for producing realistic AI videos quickly.",
      best: "Anyone creating AI videos for TikTok, Instagram, Facebook, or YouTube.",
      bonus: "Use my referral link and promo code to receive 10M bonus credits.",
    },
    {
      name: "OpenArt",
      what: "Generates AI images and AI videos using multiple creative models.",
      why: "Perfect for character creation, concept art, reference images, and complete AI filmmaking workflows.",
      best: "AI artists, filmmakers, and content creators.",
    },
    {
      name: "Seedance",
      what: "A powerful AI video generation model known for realistic motion, cinematic camera work, and excellent character consistency.",
      why: "Many of my favorite AI videos are powered by Seedance because the motion feels natural and cinematic.",
      best: "Available through platforms like Magica and OpenArt.",
    },
    {
      name: "CapCut",
      what: "Edits videos, adds captions, music, transitions, and final polish.",
      why: "Fast, beginner-friendly, and perfect for preparing videos for social media.",
      best: "Every content creator.",
    },
  ],
  proTip: "You don't need dozens of AI tools. Master these six tools and learn how they work together. A simple, repeatable workflow will outperform constantly switching between new tools.",
};

export const MAGICA_BONUS = {
  title: "Exclusive Bonus for True Digital Hustle Readers",
  intro: "If you're ready to start creating AI videos, Magica is one of the tools I personally use in my workflow.",
  referralLink: "try.magica.com/mack",
  promoCode: "GG4VFJF",
  bonusNote: "Use my referral link and promo code to receive 10 million bonus credits, subject to Magica's current referral program.",
  steps: [
    "Visit the referral link.",
    "Create your Magica account.",
    "Enter the promo code GG4VFJF if prompted.",
    "Follow Magica's instructions to claim any eligible bonus credits.",
  ],
  whyList: [
    "Great for AI video creation",
    "Beginner-friendly",
    "Powerful creative tools",
    "Fits perfectly into my AI content workflow",
  ],
  disclosure: "Some links in this guide are affiliate links. If you choose to use them, I may earn a commission at no additional cost to you. I only recommend tools that I genuinely use and believe provide value.",
};

export const NEXT_STEPS = {
  title: "Your AI Creator Journey Starts Now",
  intro: "Congratulations! You now have a practical foundation for creating AI-powered content. The best way to improve isn't by collecting more prompts \u2014 it's by creating consistently.",
  challengeTitle: "Your Challenge This Week",
  challenge: [
    "Use at least one prompt from this guide.",
    "Create one piece of content.",
    "Experiment and make it your own.",
  ],
  connectTitle: "Stay Connected \u2014 Follow True Digital Hustle for:",
  connect: [
    "AI tutorials",
    "Prompt ideas",
    "Workflow tips",
    "New creator resources",
    "Future Starter Kit updates",
  ],
  closing: "The most valuable prompt isn't the one you download. It's the one you improve.",
  signoff: "Keep learning. Keep experimenting. Keep creating. See you in the next guide!",
};
