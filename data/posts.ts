export interface Post {
  id: string;
  creatorId: string;
  creatorName: string;
  creatorAvatar: string;
  creatorTitle: string;
  content: string;
  image?: string;
  likes: number;
  comments: number;
  saves: number;
  timestamp: string;
  tags: string[];
}

export const posts: Post[] = [
  {
    id: "post1",
    creatorId: "1",
    creatorName: "Sarah Chen",
    creatorAvatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400",
    creatorTitle: "UI/UX Designer & Creative Director",
    content: "Just wrapped up a fascinating user research session for our new mobile app. Key insight: users don't just want faster interactions, they want more meaningful ones. Sometimes slowing down the experience actually improves satisfaction. 🤔\n\nWhat's your take on speed vs. thoughtfulness in UX?",
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
    likes: 127,
    comments: 23,
    saves: 45,
    timestamp: "2024-01-15T14:30:00Z",
    tags: ["UX Research", "Mobile Design", "User Psychology"]
  },
  {
    id: "post2", 
    creatorId: "2",
    creatorName: "Marcus Rodriguez",
    creatorAvatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400",
    creatorTitle: "Full-Stack Developer & Tech Lead",
    content: "Debugging a gnarly performance issue led me down a rabbit hole that ended with a 70% improvement in load times. The culprit? A seemingly innocent database query that was running N+1 times.\n\nReminder: always profile before optimizing, but also... sometimes the obvious optimizations are the best ones. 🚀",
    image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800",
    likes: 89,
    comments: 15,
    saves: 67,
    timestamp: "2024-01-14T10:15:00Z", 
    tags: ["Performance", "Database", "Optimization", "Web Development"]
  },
  {
    id: "post3",
    creatorId: "3", 
    creatorName: "Emma Thompson",
    creatorAvatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400",
    creatorTitle: "Brand Strategist & Visual Designer",
    content: "Brand consistency isn't about using the same logo everywhere. It's about maintaining the same *feeling* across every touchpoint.\n\nWorked with a client who was obsessed with pixel-perfect logo placement but completely ignored their tone of voice. Result? Beautiful visuals, confusing brand experience.\n\nBranding is psychology first, aesthetics second. 💭",
    image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800",
    likes: 156,
    comments: 31,
    saves: 89,
    timestamp: "2024-01-13T16:45:00Z",
    tags: ["Brand Strategy", "Brand Consistency", "Design Psychology", "Client Work"]
  },
  {
    id: "post4",
    creatorId: "1",
    creatorName: "Sarah Chen", 
    creatorAvatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400",
    creatorTitle: "UI/UX Designer & Creative Director",
    content: "Hot take: Dark mode isn't just about aesthetics or following trends. It's an accessibility feature that helps users with light sensitivity, eye strain, and various visual impairments.\n\nAlways design with both modes in mind from the start. Your users will thank you. ✨",
    likes: 203,
    comments: 42,
    saves: 91,
    timestamp: "2024-01-12T09:20:00Z",
    tags: ["Accessibility", "Dark Mode", "Inclusive Design", "UI Design"]
  },
  {
    id: "post5",
    creatorId: "2",
    creatorName: "Marcus Rodriguez",
    creatorAvatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400", 
    creatorTitle: "Full-Stack Developer & Tech Lead",
    content: "Just open-sourced a TypeScript utility library I've been working on for API validation. It's saved our team countless hours of debugging type mismatches between frontend and backend.\n\nContributions welcome! Link in comments. 🔧",
    image: "https://images.pexels.com/photos/276452/pexels-photo-276452.jpeg?auto=compress&cs=tinysrgb&w=800",
    likes: 134,
    comments: 28,
    saves: 156,
    timestamp: "2024-01-11T13:10:00Z",
    tags: ["Open Source", "TypeScript", "API", "Developer Tools"]
  }
];