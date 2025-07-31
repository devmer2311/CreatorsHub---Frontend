export interface Creator {
  id: string;
  name: string;
  title: string;
  bio: string;
  location: string;
  skills: string[];
  avatar: string;
  banner: string;
  portfolio: {
    id: string;
    title: string;
    description: string;
    image: string;
    category: string;
    technologies: string[];
    year: string;
    client?: string;
  }[];
  experience: {
    company: string;
    role: string;
    duration: string;
    description: string;
  }[];
  verified: boolean;
  followers: number;
  following: number;
  posts: number;
  projects: number;
  saved: number;
}

export const creators: Creator[] = [
  {
    id: "1",
    name: "Sarah Chen",
    title: "UI/UX Designer & Creative Director",
    bio: "Passionate about creating meaningful digital experiences that bridge the gap between user needs and business goals. 5+ years designing for Fortune 500 companies.",
    location: "San Francisco, CA",
    skills: ["UI/UX Design", "Product Design", "Design Systems", "Figma", "Adobe Creative Suite"],
    avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400",
    banner: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1200",
    portfolio: [
      {
        id: "p1",
        title: "ShopEase Mobile App Redesign",
        description: "Complete redesign of a mobile commerce platform for a leading retail brand. Focused on improving user experience, streamlining the checkout process, and implementing a modern design system. The redesign resulted in a 40% increase in conversion rates and 25% reduction in cart abandonment. Conducted extensive user research, created wireframes and prototypes, and collaborated with development team for seamless implementation.",
        image: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=800",
        category: "Mobile Design",
        technologies: ["Figma", "Sketch", "Principle", "InVision"],
        year: "2023",
        client: "RetailCorp"
      },
      {
        id: "p2", 
        title: "Analytics Pro Dashboard",
        description: "Designed a comprehensive analytics dashboard for a B2B SaaS platform. Created intuitive data visualizations, implemented a scalable design system, and optimized for both desktop and tablet experiences. The dashboard now serves over 10,000 daily active users. Features include real-time data updates, customizable widgets, and advanced filtering capabilities.",
        image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800",
        category: "Web Design",
        technologies: ["Figma", "React", "D3.js", "Tailwind CSS"],
        year: "2023",
        client: "DataTech Solutions"
      },
      {
        id: "p3",
        title: "Brand Identity System",
        description: "Developed a complete brand identity system for a fintech startup, including logo design, color palette, typography, and brand guidelines. The cohesive system helped establish trust and recognition in the competitive fintech market. Created comprehensive brand book with usage guidelines, marketing templates, and digital asset library.",
        image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800",
        category: "Branding",
        technologies: ["Adobe Illustrator", "Adobe Photoshop", "Figma"],
        year: "2022",
        client: "FinanceFlow"
      }
    ],
    experience: [
      {
        company: "Google",
        role: "Senior Product Designer",
        duration: "2022 - Present",
        description: "Leading design for Google Workspace collaboration tools. Managing a team of 4 designers and working closely with product managers and engineers to deliver user-centered solutions for millions of users worldwide."
      },
      {
        company: "Airbnb", 
        role: "Product Designer",
        duration: "2020 - 2022",
        description: "Designed key features for the Airbnb host experience, including the listing creation flow and host dashboard. Collaborated with cross-functional teams to improve host satisfaction scores by 30%."
      },
      {
        company: "Uber",
        role: "Junior UX Designer",
        duration: "2019 - 2020",
        description: "Worked on rider experience improvements for the Uber app. Conducted user research, created wireframes and prototypes, and collaborated with the engineering team to implement design solutions."
      }
    ],
    verified: true,
    followers: 2840,
    following: 892,
    posts: 45,
    projects: 12,
    saved: 23
  },
  {
    id: "2",
    name: "Marcus Rodriguez",
    title: "Full-Stack Developer & Tech Lead",
    bio: "Building scalable web applications with modern technologies. Specialized in React, Node.js, and cloud architecture. Open source contributor and tech mentor.",
    location: "Austin, TX", 
    skills: ["React", "Node.js", "TypeScript", "AWS", "GraphQL", "Docker"],
    avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400",
    banner: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1200",
    portfolio: [
      {
        id: "p4",
        title: "CollabSpace - Real-time Platform",
        description: "Developed a comprehensive real-time collaboration platform similar to Slack, featuring instant messaging, file sharing, video calls, and project management tools. Built with React, Node.js, and WebSocket technology to support 10,000+ concurrent users with 99.9% uptime. Implemented advanced features like message threading, file versioning, and integration with popular productivity tools.",
        image: "https://images.pexels.com/photos/276452/pexels-photo-276452.jpeg?auto=compress&cs=tinysrgb&w=800",
        category: "Web Development",
        technologies: ["React", "Node.js", "Socket.io", "MongoDB", "AWS"],
        year: "2023",
        client: "TechStartup Inc"
      },
      {
        id: "p5",
        title: "AI Analytics Engine", 
        description: "Built an AI-powered analytics dashboard that processes millions of data points to provide business intelligence and predictive analytics. Integrated machine learning models for trend analysis and automated reporting features. Developed custom algorithms for anomaly detection and implemented natural language query interface for non-technical users.",
        image: "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800",
        category: "Full-Stack",
        technologies: ["Python", "TensorFlow", "React", "PostgreSQL", "Docker"],
        year: "2023",
        client: "DataCorp"
      },
      {
        id: "p6",
        title: "E-commerce Microservices",
        description: "Architected and developed a scalable e-commerce platform using microservices architecture. Implemented payment processing, inventory management, and order fulfillment systems handling 50,000+ daily transactions. Built robust API gateway, implemented distributed caching, and established comprehensive monitoring and logging systems.",
        image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800",
        category: "Backend",
        technologies: ["Node.js", "Docker", "Kubernetes", "Redis", "Stripe API"],
        year: "2022",
        client: "ShopTech"
      }
    ],
    experience: [
      {
        company: "Microsoft",
        role: "Senior Software Engineer",
        duration: "2021 - Present",
        description: "Leading development of Azure cloud services and mentoring junior developers. Architecting scalable solutions that serve millions of users globally while maintaining high performance and reliability standards."
      },
      {
        company: "Stripe",
        role: "Full-Stack Developer", 
        duration: "2019 - 2021",
        description: "Developed payment processing features and API integrations. Worked on fraud detection systems and helped improve transaction success rates by 15% through optimization and machine learning implementations."
      },
      {
        company: "GitHub",
        role: "Software Developer",
        duration: "2018 - 2019",
        description: "Contributed to GitHub's core platform features including repository management, collaboration tools, and CI/CD pipeline improvements. Participated in open-source community initiatives."
      }
    ],
    verified: true,
    followers: 1920,
    following: 654,
    posts: 32,
    projects: 18,
    saved: 41
  },
  {
    id: "3",
    name: "Emma Thompson",
    title: "Brand Strategist & Visual Designer",
    bio: "Crafting compelling brand identities that tell stories and drive results. Worked with 50+ startups and established brands across various industries.",
    location: "London, UK",
    skills: ["Brand Strategy", "Logo Design", "Typography", "Illustration", "Marketing Design"],
    avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400",
    banner: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1200",
    portfolio: [
      {
        id: "p7",
        title: "FinTech Startup Complete Rebrand",
        description: "Led a comprehensive rebranding project for a growing fintech startup. Developed new visual identity, messaging strategy, and brand guidelines. Created marketing materials, website design, and mobile app interface. The rebrand resulted in 200% increase in brand recognition and 150% growth in user acquisition. Conducted market research, competitor analysis, and user testing to inform design decisions.",
        image: "https://images.pexels.com/photos/318236/pexels-photo-318236.jpeg?auto=compress&cs=tinysrgb&w=800",
        category: "Branding",
        technologies: ["Adobe Creative Suite", "Figma", "Sketch", "InDesign"],
        year: "2023",
        client: "PayFlow Technologies"
      },
      {
        id: "p8",
        title: "Artisan Café Chain Identity",
        description: "Designed a cohesive visual identity system for an artisan café chain expanding across 25+ locations. Created brand guidelines, packaging design, signage systems, and digital touchpoints including mobile app and website. The unified brand experience increased customer loyalty by 40%. Developed sustainable packaging solutions and implemented loyalty program design.",
        image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800",
        category: "Brand Design",
        technologies: ["Adobe Illustrator", "Photoshop", "InDesign", "After Effects"],
        year: "2022",
        client: "Artisan Coffee Co"
      },
      {
        id: "p9",
        title: "Luxury Fashion Campaign",
        description: "Art directed and designed a luxury fashion campaign for a high-end boutique brand. Created visual concepts, photography direction, and marketing materials for both digital and print media. The campaign increased brand awareness by 180% and drove 60% increase in sales. Collaborated with renowned photographers and stylists to create compelling visual narratives.",
        image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800",
        category: "Art Direction",
        technologies: ["Adobe Creative Suite", "Lightroom", "Cinema 4D"],
        year: "2023",
        client: "Luxe Fashion House"
      }
    ],
    experience: [
      {
        company: "Pentagram",
        role: "Senior Brand Designer",
        duration: "2020 - Present",
        description: "Leading brand identity projects for Fortune 500 companies and emerging startups. Specializing in comprehensive brand systems, packaging design, and digital brand experiences. Managing client relationships and creative teams."
      },
      {
        company: "IDEO",
        role: "Brand Strategist",
        duration: "2018 - 2020",
        description: "Developed brand strategies for innovative products and services. Conducted market research, user interviews, and competitive analysis to inform brand positioning and messaging strategies for diverse clients."
      },
      {
        company: "Wolff Olins",
        role: "Junior Designer",
        duration: "2017 - 2018",
        description: "Supported senior designers on major brand identity projects. Created visual concepts, designed brand applications, and contributed to client presentations for global brands and cultural institutions."
      }
    ],
    verified: true,
    followers: 3240,
    following: 1120,
    posts: 28,
    projects: 15,
    saved: 35
  }
];