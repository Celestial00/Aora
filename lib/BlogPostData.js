const blogPosts = [
  {
    id: "future-of-minimalist-interface-design",
    category: "Design",
    readTime: "6 min read",
    title: "The Future of Minimalist Interface Design",
    highlightedTitle: "Minimalist",
    author: {
      name: "Emma Laurent",
      role: "Product Designer",
      avatarGradient: "from-indigo-400 to-sky-500",
    },
    content: [
      {
        type: "intro",
        text: "Minimalism is no longer about simply removing elements from an interface—it's about removing distraction and friction. As digital products evolve toward spatial, immersive, and motion-driven experiences, clarity becomes the most valuable feature a designer can offer. Users no longer tolerate noise; they expect interfaces to guide them effortlessly.",
      },
      {
        type: "paragraph",
        text: 'High-fidelity displays, AR interfaces, and animation-rich environments have fundamentally changed what "less is more" means. Modern minimalism is not empty space—it is intentional hierarchy, carefully orchestrated motion, and layouts that respect the user\'s attention. Every decision is deliberate, every element earns its place.',
      },
      {
        type: "pullQuote",
        text: "Minimalism isn't empty space—it's deliberate space.",
      },
      {
        type: "heading",
        level: 3,
        text: "Designing for Spatial Computing",
      },
      {
        type: "paragraph",
        text: "As interfaces expand beyond flat screens, minimalist design adapts by using depth, scale, lighting, and motion instead of borders, shadows, and heavy decoration. Spatial computing challenges designers to think in layers and moments, ensuring that complexity stays hidden while intent remains obvious.",
      },
    ],
    cta: {
      nextPost: "motion-as-a-design-language",
    },
  },

  {
    id: "motion-as-a-design-language",
    category: "Frontend Architecture",
    readTime: "5 min read",
    title: "Why We Chose Framer Motion Over GSAP",
    highlightedTitle: "Motion",
    author: {
      name: "Sarah Kim",
      role: "UI Systems Designer",
      avatarGradient: "from-pink-500 to-rose-600",
    },
    content: [
      {
        type: "intro",
        text: "Motion is often treated as visual polish added at the end of development. In reality, motion is part of the language your interface uses to communicate state, intent, and feedback. When used correctly, animation reduces confusion instead of adding flair.",
      },
      {
        type: "paragraph",
        text: "When motion reflects intent—loading, success, failure, or transition—it removes ambiguity. Users don't read interfaces; they feel them. Subtle movement provides context, reinforces hierarchy, and creates continuity between states that would otherwise feel abrupt or disjointed.",
      },
      {
        type: "pullQuote",
        text: "Animation isn't decoration. It's feedback.",
      },
      {
        type: "heading",
        level: 3,
        text: "Designing with Physics",
      },
      {
        type: "paragraph",
        text: "Spring-based animations help interfaces feel grounded and believable. By mimicking real-world physics, transitions become predictable and natural, creating a sense of physicality that makes digital experiences feel tangible instead of mechanical.",
      },
    ],
    cta: {
      nextPost: "scalable-component-systems",
    },
  },

  {
    id: "scalable-component-systems",
    category: "Engineering",
    readTime: "7 min read",
    title: "Scaling Engineering Teams Without Friction",
    highlightedTitle: "Scalable",
    author: {
      name: "Daniel Moore",
      role: "Frontend Architect",
      avatarGradient: "from-emerald-500 to-teal-600",
    },
    content: [
      {
        type: "intro",
        text: "As products grow, inconsistency becomes the silent killer. What once felt manageable quickly turns chaotic when teams scale without shared standards. Component systems exist to fight entropy and preserve velocity as complexity increases.",
      },
      {
        type: "paragraph",
        text: "A strong component system balances constraints with flexibility. Too rigid, and teams feel blocked. Too loose, and visual and behavioral inconsistencies creep in. The goal is not control, but alignment—making the right choices the easiest ones.",
      },
      {
        type: "pullQuote",
        text: "Consistency is a feature users feel before they notice.",
      },
      {
        type: "heading",
        level: 3,
        text: "Design Tokens as Contracts",
      },
      {
        type: "paragraph",
        text: "Design tokens turn visual decisions into enforceable contracts between design and engineering. Colors, spacing, and motion become shared language, reducing friction and ensuring that systems scale without fragmenting.",
      },
    ],
    cta: {
      nextPost: null,
    },
  },

  {
    id: "design-first-software",
    category: "Design & Engineering",
    readTime: "6 min read",
    title: "Building Software with a Design-First Mentality.",
    highlightedTitle: "Design-First",
    author: {
      name: "Alex Rivera",
      role: "Lead Product Engineer",
      avatarGradient: "from-indigo-500 to-purple-600",
    },
    content: [
      {
        type: "intro",
        text: "The gap between a high-fidelity Figma file and a production-ready application is often wider than it appears. Many teams treat design as a static blueprint that gets handed off and forgotten. At our core, we believe design is a continuous conversation that evolves alongside the code.",
      },
      {
        type: "paragraph",
        text: "High-end software isn't just about gradients or smooth animations—though those matter. It's about intentionality. Every pixel should serve a purpose, every interaction should feel earned, and every decision should reduce friction rather than introduce it.",
      },
      {
        type: "pullQuote",
        text: "Great software is not built by following a ticket; it's built by understanding the friction in a human's day.",
      },
      {
        type: "heading",
        level: 3,
        text: "The Engineering of Delight",
      },
      {
        type: "paragraph",
        text: "We use tools like framer-motion to ensure state transitions aren't just instant—they're fluid. Thoughtful motion reduces cognitive load, adds context, and creates a sense of physicality that makes software feel crafted rather than assembled.",
      },
    ],
    cta: {
      nextPost: "motion-as-a-design-language",
    },
  },
];

export default blogPosts;
