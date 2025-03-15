// src/data/experience.ts

export interface ExperienceItem {
  id: number;
  title: string;
  company: string;
  period: string;
  description: string[];
  technologies: string[];
  location?: string;
  highlight?: boolean;
}

const experienceData: ExperienceItem[] = [
  {
    id: 1,
    title: "Full Stack Developer",
    company: "Occam Health Services",
    period: "Jan 2024 - Present",
    location: "Remote",
    description: [
      "Developing full stack applications with PHP, MySQL, JavaScript, and additional modern tools.",
      "Focused on building scalable and secure healthcare solutions in a remote-first environment.",
    ],
    technologies: ["PHP", "MySQL", "JavaScript", "React"],
    highlight: true,
  },
  {
    id: 2,
    title: "Web Developer",
    company: "Inventive",
    period: "Jun 2023 - Present",
    location: "Remote",
    description: [
      "Lead front-end development using React.js, HTML, CSS, and Velocity.",
      "Played a critical role in migrating websites from WordPress to Cascade, significantly improving performance and UX.",
      "Ensured responsive design and cross-browser compatibility across all projects.",
    ],
    technologies: [
      "React.js",
      "HTML",
      "CSS",
      "Velocity",
      "WordPress",
      "Cascade",
    ],
  },
  {
    id: 3,
    title: "Frontend Web Developer",
    company: "MissionFocus",
    period: "Jan 2022 - Oct 2023",
    description: [
      "Developed and maintained interactive geospatial applications for a government intelligence agency.",
      "Used JavaScript, TypeScript, Ember.js, and React.js to enhance UX.",
      "Promoted to GitLab Administrator, managing epics and stories, ensuring high-quality task workflows and timelines.",
    ],
    technologies: [
      "JavaScript",
      "TypeScript",
      "Ember.js",
      "React.js",
      "GitLab",
    ],
  },
  {
    id: 4,
    title: "Software Developer",
    company: "Agilla Pro",
    period: "May 2017 - Jan 2022",
    description: [
      "Worked with technologies including AWS (EC2), OOP, Linux, and various backend frameworks to support robust software applications.",
    ],
    technologies: ["AWS", "EC2", "OOP", "Linux", "Backend Frameworks"],
  },
];

export default experienceData;
