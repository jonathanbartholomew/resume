// src/components/sections/Skills.tsx
import { useState } from "react";
import { motion } from "framer-motion";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import skillsData from "@/data/skills";
import type { Skill } from "@/data/skills";

const Skills = () => {
  const { ref, isVisible } = useIntersectionObserver({
    threshold: 0.1,
    once: true,
  });
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <section id="skills" ref={ref} className="section py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-secondary via-highlight to-accent mx-auto mt-4"></div>
          <p className="mt-6 max-w-2xl mx-auto text-text-secondary text-lg">
            Here are the technologies and tools I've worked with throughout my
            career. I'm always learning and expanding my skill set.
          </p>
        </motion.div>

        {/* Skills categories buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          <button
            onClick={() => setActiveCategory(null)}
            className={`px-4 py-2 rounded-full transition-all ${
              activeCategory === null
                ? "bg-secondary text-white"
                : "bg-primary-light text-text-secondary hover:bg-white/5"
            }`}
          >
            All
          </button>

          {skillsData.map((category) => (
            <button
              key={category.name}
              onClick={() => setActiveCategory(category.name)}
              className={`px-4 py-2 rounded-full transition-all ${
                activeCategory === category.name
                  ? "bg-secondary text-white"
                  : "bg-primary-light text-text-secondary hover:bg-white/5"
              }`}
            >
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Skills display */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData
            .filter(
              (category) =>
                activeCategory === null || category.name === activeCategory
            )
            .map((category, categoryIndex) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + categoryIndex * 0.1 }}
                className="bg-primary-light rounded-lg p-6 border border-white/10"
              >
                <h3 className="text-xl font-bold mb-4 pb-2 border-b border-white/10">
                  {category.name}
                </h3>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillItem
                      key={skill.name}
                      skill={skill}
                      delay={0.4 + categoryIndex * 0.1 + skillIndex * 0.05}
                      isVisible={isVisible}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

interface SkillItemProps {
  skill: Skill;
  delay: number;
  isVisible: boolean;
}

const SkillItem: React.FC<SkillItemProps> = ({ skill, delay, isVisible }) => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between mb-1">
        <span className="font-medium">{skill.name}</span>
        <span className="text-text-secondary text-sm">
          {getSkillLevelText(skill.level)}
        </span>
      </div>

      <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{
            backgroundColor: skill.color || getSkillColor(skill.level),
            width: `${(skill.level / 5) * 100}%`,
          }}
          initial={{ width: 0 }}
          animate={isVisible ? { width: `${(skill.level / 5) * 100}%` } : {}}
          transition={{ duration: 1, delay }}
        />
      </div>
    </div>
  );
};

// Helper functions
const getSkillLevelText = (level: number): string => {
  switch (level) {
    case 1:
      return "Basic";
    case 2:
      return "Intermediate";
    case 3:
      return "Proficient";
    case 4:
      return "Advanced";
    case 5:
      return "Expert";
    default:
      return "";
  }
};

const getSkillColor = (level: number): string => {
  switch (level) {
    case 1:
      return "#6b46c1"; // secondary (purple)
    case 2:
      return "#7b56d1";
    case 3:
      return "#3182ce"; // highlight (blue)
    case 4:
      return "#4299e1";
    case 5:
      return "#e53e3e"; // accent (red)
    default:
      return "#6b46c1";
  }
};

export default Skills;
