// src/components/sections/Experience.tsx
import { useRef } from "react";
import { motion } from "framer-motion";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import experienceData, { ExperienceItem } from "@/data/experience";

const Experience = () => {
  const { ref, isVisible } = useIntersectionObserver({
    threshold: 0.1,
    once: true,
  });
  const timelineRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="experience"
      ref={ref}
      className="section py-20 bg-primary relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full filter blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-secondary via-highlight to-accent mx-auto mt-4"></div>
        </motion.div>

        <div className="relative" ref={timelineRef}>
          {/* Timeline line */}
          <motion.div
            className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-white/10"
            initial={{ height: 0 }}
            animate={isVisible ? { height: "100%" } : {}}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-secondary via-highlight to-accent opacity-60"></div>
          </motion.div>

          {/* Experience items */}
          <div className="relative z-10">
            {experienceData.map((exp, index) => (
              <ExperienceItem
                key={exp.id}
                experience={exp}
                index={index}
                isVisible={isVisible}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

interface ExperienceItemProps {
  experience: ExperienceItem;
  index: number;
  isVisible: boolean;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({
  experience,
  index,
  isVisible,
}) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      animate={isVisible ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
      className={`mb-12 ${isEven ? "md:text-right" : ""}`}
    >
      <div
        className={`flex flex-col md:flex-row items-center ${
          isEven ? "md:flex-row-reverse" : ""
        }`}
      >
        {/* Timeline dot */}
        <div className="flex-shrink-0 mx-4 mb-4 md:mb-0">
          <motion.div
            className="w-10 h-10 rounded-full border-4 border-primary flex items-center justify-center 
                      bg-gradient-to-br from-secondary to-highlight shadow-glow-purple"
            initial={{ scale: 0 }}
            animate={isVisible ? { scale: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
          >
            <span className="text-sm font-bold">{experience.id}</span>
          </motion.div>
        </div>

        {/* Content card */}
        <div
          className={`w-full md:w-5/12 p-6 rounded-lg ${
            experience.highlight
              ? "bg-gradient-to-br from-secondary/10 to-highlight/10 border border-secondary/20"
              : "bg-primary-light border border-white/10"
          }`}
        >
          <div className="mb-2 flex flex-col md:flex-row items-start md:items-center justify-between">
            <h3 className="text-xl font-bold">{experience.title}</h3>
            <span className="text-sm text-text-secondary bg-black/30 px-2 py-1 rounded mt-2 md:mt-0">
              {experience.period}
            </span>
          </div>

          <h4 className="text-lg font-semibold mb-1 text-highlight">
            {experience.company}
          </h4>

          {experience.location && (
            <p className="text-sm text-text-secondary mb-3">
              <span className="inline-flex items-center">
                <svg
                  className="w-4 h-4 mr-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                {experience.location}
              </span>
            </p>
          )}

          <ul className="mb-4 text-text-secondary space-y-2">
            {experience.description.map((item, i) => (
              <li key={i} className="flex items-start">
                <span className="text-secondary mr-2">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2">
            {experience.technologies.map((tech, i) => (
              <span
                key={i}
                className="px-2 py-1 text-xs rounded-full bg-black/40 text-text-secondary"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
