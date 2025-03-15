// src/data/skills.ts

export interface Skill {
  name: string;
  level: number; // 1-5
  icon?: string;
  color?: string;
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
}

const skillsData: SkillCategory[] = [
  {
    name: "Front-End",
    skills: [
      { name: "React.js", level: 5, color: "#61DAFB" },
      { name: "JavaScript", level: 5, color: "#F7DF1E" },
      { name: "TypeScript", level: 4, color: "#3178C6" },
      { name: "HTML", level: 5, color: "#E34F26" },
      { name: "CSS", level: 5, color: "#1572B6" },
      { name: "Ember.js", level: 3, color: "#E04E39" },
      { name: "Velocity", level: 3, color: "#53B230" },
    ],
  },
  {
    name: "Back-End",
    skills: [
      { name: "PHP", level: 4, color: "#777BB4" },
      { name: "MySQL", level: 4, color: "#4479A1" },
      { name: "SQL", level: 4, color: "#f29111" },
      { name: "Java", level: 3, color: "#007396" },
      { name: "C#", level: 3, color: "#239120" },
      { name: "CodeIgniter", level: 3, color: "#EE4323" },
    ],
  },
  {
    name: "DevOps & Tools",
    skills: [
      { name: "AWS (EC2)", level: 4, color: "#FF9900" },
      { name: "Git", level: 4, color: "#F05032" },
      { name: "GitLab", level: 5, color: "#FCA121" },
      { name: "Linux", level: 4, color: "#FCC624" },
      { name: "Windows", level: 4, color: "#0078D6" },
      { name: "GitHub", level: 4, color: "#181717" },
    ],
  },
  {
    name: "CMS & Migration",
    skills: [
      { name: "WordPress", level: 4, color: "#21759B" },
      { name: "Cascade CMS", level: 4, color: "#2BACE2" },
    ],
  },
  {
    name: "Project Management",
    skills: [
      { name: "GitLab Administration", level: 5 },
      { name: "Agile Methodologies", level: 4 },
      { name: "Scrum", level: 3 },
      { name: "Kanban", level: 3 },
    ],
  },
];

export default skillsData;
