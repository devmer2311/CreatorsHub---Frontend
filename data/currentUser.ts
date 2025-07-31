import type { Creator } from './creators';

// Current user's complete profile data
export const currentUserProfile: Creator = {
  id: 'current-user',
  name: 'Alex Johnson',
  title: 'Full-Stack Developer & Designer',
  bio: 'Passionate full-stack developer and designer with 6+ years of experience creating digital experiences that matter. I love combining technical expertise with creative design to build products that users love. Currently focused on React, Node.js, and modern design systems.',
  location: 'New York, NY',
  skills: ['React', 'Node.js', 'TypeScript', 'UI/UX Design', 'Figma', 'Next.js', 'PostgreSQL', 'AWS'],
  avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
  banner: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1200',
  portfolio: [
    {
      id: 'my-p1',
      title: 'TaskFlow - Project Management App',
      description: 'Built a comprehensive project management application with real-time collaboration features. Includes task management, team chat, file sharing, and progress tracking. Used React, Node.js, Socket.io, and PostgreSQL to create a seamless user experience. Implemented advanced features like Gantt charts, time tracking, and automated notifications. The app now serves over 5,000 active teams.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Full-Stack Development',
      technologies: ['React', 'Node.js', 'Socket.io', 'PostgreSQL', 'Tailwind CSS'],
      year: '2024',
      client: 'Personal Project'
    },
    {
      id: 'my-p2',
      title: 'EcoShop - Sustainable E-commerce',
      description: 'Designed and developed an e-commerce platform focused on sustainable products. Features include product filtering, shopping cart, payment integration, and admin dashboard. Implemented modern design principles with a focus on environmental consciousness. Built carbon footprint calculator, sustainability scoring system, and integrated with eco-friendly shipping partners.',
      image: 'https://images.pexels.com/photos/3985062/pexels-photo-3985062.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'E-commerce',
      technologies: ['Next.js', 'Stripe', 'Prisma', 'Tailwind CSS', 'Vercel'],
      year: '2023',
      client: 'GreenTech Solutions'
    },
    {
      id: 'my-p3',
      title: 'MindfulSpace - Meditation App',
      description: 'Created a mobile-first meditation and mindfulness app with guided sessions, progress tracking, and community features. Focused on creating a calming, intuitive user experience with smooth animations and peaceful design elements. Integrated with health apps, implemented personalized recommendations, and added social features for meditation groups.',
      image: 'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Mobile Design',
      technologies: ['React Native', 'Figma', 'Firebase', 'Expo'],
      year: '2023',
      client: 'Wellness Startup'
    },
    {
      id: 'my-p4',
      title: 'DataViz Dashboard',
      description: 'Built an interactive data visualization dashboard for business analytics. Features real-time charts, customizable widgets, and export functionality. Implemented complex data processing and visualization using D3.js and modern React patterns. Added machine learning insights, predictive analytics, and automated report generation capabilities.',
      image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Data Visualization',
      technologies: ['React', 'D3.js', 'TypeScript', 'Node.js', 'MongoDB'],
      year: '2023',
      client: 'Analytics Corp'
    }
  ],
  experience: [
    {
      company: 'TechFlow Solutions',
      role: 'Senior Full-Stack Developer',
      duration: '2022 - Present',
      description: 'Leading development of client-facing applications and internal tools. Mentoring junior developers and establishing best practices for code quality and deployment. Working with React, Node.js, and cloud infrastructure.'
    },
    {
      company: 'DesignTech Agency',
      role: 'Full-Stack Developer & Designer',
      duration: '2020 - 2022',
      description: 'Developed custom web applications and designed user interfaces for various clients. Collaborated with design teams to create pixel-perfect implementations and optimized user experiences.'
    },
    {
      company: 'StartupLab',
      role: 'Frontend Developer',
      duration: '2019 - 2020',
      description: 'Built responsive web applications using React and modern JavaScript. Worked closely with UX designers to implement interactive prototypes and improve user engagement metrics.'
    }
  ],
  verified: true,
  followers: 1250,
  following: 890,
  posts: 38,
  projects: 16,
  saved: 52
};