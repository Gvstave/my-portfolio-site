import type { Skill } from "./skillProps";

export const skillsContent: Skill[] = [
  {
    title: "Frontend Development",
    description:
      "I build responsive, interactive, and visually appealing web interfaces that work seamlessly across devices, focusing on usability, performance, and modern design trends.",
    icon: "Layout",
  },
  {
    title: "Backend Development",
    description:
      "I develop secure, scalable backend systems and APIs that handle complex logic, process data efficiently, and ensure smooth communication between client and server.",
    icon: "Server",
  },
  {
    title: "Database Management",
    description:
      "I design and maintain optimized databases, ensuring data integrity, fast queries, and reliable storage to support application performance at scale.",
    icon: "Database",
  },
  {
    title: "UI/UX & Design",
    description:
      "I create intuitive, user-focused designs that blend functionality with aesthetics, delivering engaging digital experiences from concept to final product.",
    icon: "Layers",
  },
  {
    title: "Version Control",
    description:
      "I use Git to manage code effectively, enabling collaboration, tracking changes, and maintaining clean, organized project histories.",
    icon: "GitBranch",
  },
];

export const experienceContent = [
  {
    number: '01',
    company: 'Zako Financial Literacy',
    role: 'FullStack Developer intern',
    description: 'I\'ve worked on a wide variety of frontend and backend tools for zako over the past 6 months.'
  },
  {
    number: '02',
    company: 'Safisha Cleaning Service',
    role: 'Web Developer',
    description: 'I designed and developed the app for safisha.'
  }
];

export const projectsContent = [
  {
    number: '01',
    title: 'Personal Portfolio Website',
    technologies: 'React, TypeScript, Tailwind CSS, Framer Motion',
    description: 'A modern, responsive portfolio website featuring dark/light theme switching, smooth animations, and an intuitive user experience showcasing my skills and projects.',
    liveUrl: 'https://my-portfolio-site-4uu4.vercel.app/',
    githubUrl: 'https://github.com/Gvstave/my-portfolio-site'
  },
  {
    number: '02',
    title: 'E-Commerce Platform',
    technologies: 'React, Java(Springboot), PostgreSQL, Stripe',
    description: 'A full-stack e-commerce solution with user authentication, payment processing, and inventory management.',
    liveUrl: 'https://open-market-two.vercel.app/',
    githubUrl: 'https://github.com/Gvstave/OpenMarket'
  },
  {
    number: '03', 
    title: 'AI - Task Management System',
    technologies: 'Next, Tailwind CSS, TypeScript, Firebase, Genkit AI',
    description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
    liveUrl: '#',
    githubUrl: 'https://github.com/Gvstave/TMS-System'
  },
  {
    number: '04',
    title: 'Weather Dashboard',
    technologies: 'React, Express.js, Weather API',
    description: 'A responsive weather dashboard that displays current conditions, forecasts, and weather maps for multiple locations.',
    liveUrl: '#',
    githubUrl: '#'
  }
];
