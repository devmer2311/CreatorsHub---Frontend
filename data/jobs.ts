export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Freelance';
  remote: boolean;
  salary: string;
  description: string;
  requirements: string[];
  skills: string[];
  postedDate: string;
  companyLogo: string;
}

export const jobs: Job[] = [
  {
    id: "j1",
    title: "Senior UI/UX Designer",
    company: "Netflix",
    location: "Los Gatos, CA",
    type: "Full-time",
    remote: true,
    salary: "$120k - $160k",
    description: "Join our product design team to create innovative streaming experiences for millions of users worldwide. You'll work on everything from content discovery to playback optimization.",
    requirements: [
      "5+ years of product design experience",
      "Strong portfolio showcasing user-centered design",
      "Proficiency in Figma and design systems",
      "Experience with A/B testing and data-driven design"
    ],
    skills: ["UI/UX Design", "Figma", "Design Systems", "User Research", "Prototyping"],
    postedDate: "2024-01-15",
    companyLogo: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=100"
  },
  {
    id: "j2", 
    title: "React Developer",
    company: "Shopify",
    location: "Ottawa, ON",
    type: "Full-time",
    remote: true,
    salary: "$90k - $130k",
    description: "Build and maintain merchant-facing tools that power millions of online stores. Work with React, TypeScript, and GraphQL in a fast-paced, collaborative environment.",
    requirements: [
      "3+ years of React development experience",
      "Strong TypeScript skills",
      "Experience with GraphQL and REST APIs",
      "Understanding of e-commerce platforms"
    ],
    skills: ["React", "TypeScript", "GraphQL", "Node.js", "CSS"],
    postedDate: "2024-01-12",
    companyLogo: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=100"
  },
  {
    id: "j3",
    title: "Brand Designer (Freelance)",
    company: "Startup Collective",
    location: "Remote",
    type: "Freelance",
    remote: true,
    salary: "$75 - $125/hour",
    description: "Create compelling brand identities for our portfolio of early-stage startups. Project-based work with potential for ongoing partnerships.",
    requirements: [
      "3+ years of brand design experience",
      "Portfolio showcasing logo and identity work",
      "Proficiency in Adobe Creative Suite",
      "Experience working with startups preferred"
    ],
    skills: ["Brand Design", "Logo Design", "Adobe Creative Suite", "Typography", "Illustration"],
    postedDate: "2024-01-10",
    companyLogo: "https://images.pexels.com/photos/318236/pexels-photo-318236.jpeg?auto=compress&cs=tinysrgb&w=100"
  },
  {
    id: "j4",
    title: "Full-Stack Engineer",
    company: "Notion",
    location: "San Francisco, CA",
    type: "Full-time",
    remote: false,
    salary: "$140k - $200k",
    description: "Help build the future of productivity software. Work on both frontend and backend systems that serve millions of users creating and collaborating on content.",
    requirements: [
      "4+ years of full-stack development",
      "Experience with React and Node.js",
      "Database design and optimization skills",
      "Passion for developer tools and productivity"
    ],
    skills: ["React", "Node.js", "PostgreSQL", "TypeScript", "AWS"],
    postedDate: "2024-01-08",
    companyLogo: "https://images.pexels.com/photos/276452/pexels-photo-276452.jpeg?auto=compress&cs=tinysrgb&w=100"
  },
  {
    id: "j5",
    title: "Creative Director",
    company: "Nike",
    location: "Portland, OR", 
    type: "Full-time",
    remote: false,
    salary: "$150k - $220k",
    description: "Lead creative vision for global campaigns and product launches. Manage a team of designers and work closely with marketing and product teams.",
    requirements: [
      "8+ years of creative leadership experience",
      "Strong portfolio in sports/lifestyle brands",
      "Team management and mentoring skills",
      "Experience with integrated campaigns"
    ],
    skills: ["Creative Direction", "Team Leadership", "Campaign Strategy", "Brand Marketing", "Art Direction"],
    postedDate: "2024-01-05",
    companyLogo: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=100"
  }
];