// src/data/projects.ts

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image?: string;
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
  date?: string;
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "Kingdoms and Castles Trading Card Game",
    description:
      "A full Vite React-based project for an upcoming digital card game, utilizing modern development tools and AWS infrastructure. This project features interactive gameplay, real-time multiplayer capabilities, and stunning card animations.",
    technologies: ["React", "TypeScript", "Vite", "AWS", "CSS", "REST API"],
    featured: true,
    date: "2024-01",
  },
  {
    id: 2,
    title: "Healthcare Management Portal",
    description:
      "Secure portal for healthcare providers allowing patient management, appointment scheduling, and medical record access with strict HIPAA compliance. Built with PHP backend and React frontend.",
    technologies: [
      "PHP",
      "MySQL",
      "React",
      "JavaScript",
      "REST API",
      "HIPAA Compliance",
    ],
    featured: true,
    date: "2024-02",
  },
  {
    id: 3,
    title: "Geospatial Intelligence Dashboard",
    description:
      "Interactive web application for visualizing and analyzing geospatial intelligence data. Features include real-time data visualization, custom map layers, and advanced filtering capabilities.",
    technologies: ["JavaScript", "TypeScript", "Ember.js", "MapBox", "D3.js"],
    date: "2022-09",
  },
  {
    id: 4,
    title: "CMS Migration Framework",
    description:
      "Custom framework developed to automate and streamline the migration of content from WordPress to Cascade CMS, ensuring data integrity and consistent user experience throughout the transition.",
    technologies: ["WordPress", "Cascade CMS", "PHP", "JavaScript", "SQL"],
    date: "2023-07",
  },
  {
    id: 5,
    title: "E-commerce Platform",
    description:
      "Full-featured e-commerce solution with product catalog, user authentication, shopping cart, and payment processing integration. Built with modern web technologies and responsive design principles.",
    technologies: ["PHP", "MySQL", "jQuery", "Bootstrap", "Stripe API"],
    date: "2021-11",
  },
  {
    id: 6,
    title: "Cloud Resource Management Tool",
    description:
      "AWS resource management tool designed to optimize cloud infrastructure costs and performance. Provides real-time monitoring, automated scaling, and cost optimization recommendations.",
    technologies: ["AWS", "EC2", "Node.js", "React", "CloudWatch"],
    date: "2020-05",
  },
];

export default projectsData;
