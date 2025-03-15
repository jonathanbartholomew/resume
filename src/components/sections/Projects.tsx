// src/components/sections/Projects.tsx
import { useState } from "react";
import { motion } from "framer-motion";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import projectsData, { Project } from "@/data/projects";
import { formatDate } from "@/utils/helpers";

const Projects = () => {
  const { ref, isVisible } = useIntersectionObserver({
    threshold: 0.1,
    once: true,
  });
  const [filter, setFilter] = useState<string | null>(null);

  // Get unique technologies for filtering
  const allTechnologies = Array.from(
    new Set(projectsData.flatMap((project) => project.technologies))
  ).sort();

  // Filter projects based on selected technology
  const filteredProjects = filter
    ? projectsData.filter((project) => project.technologies.includes(filter))
    : projectsData;

  return (
    <section
      id="projects"
      ref={ref}
      className="section py-20 bg-primary relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="absolute top-40 right-20 w-96 h-96 bg-accent/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-40 left-20 w-96 h-96 bg-highlight/5 rounded-full filter blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold">
            My <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-secondary via-highlight to-accent mx-auto mt-4"></div>
          <p className="mt-6 max-w-2xl mx-auto text-text-secondary text-lg">
            Here's a selection of projects I've worked on. Each demonstrates
            different skills and technologies.
          </p>
        </motion.div>

        {/* Filter buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12 overflow-x-auto pb-4"
        >
          <div className="flex flex-wrap justify-center gap-2">
            <button
              onClick={() => setFilter(null)}
              className={`px-3 py-1 rounded-full text-sm transition-all whitespace-nowrap ${
                filter === null
                  ? "bg-secondary text-white"
                  : "bg-primary-light text-text-secondary hover:bg-white/5"
              }`}
            >
              All Projects
            </button>

            {allTechnologies.map((tech) => (
              <button
                key={tech}
                onClick={() => setFilter(tech)}
                className={`px-3 py-1 rounded-full text-sm transition-all whitespace-nowrap ${
                  filter === tech
                    ? "bg-secondary text-white"
                    : "bg-primary-light text-text-secondary hover:bg-white/5"
                }`}
              >
                {tech}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Featured projects - larger cards */}
        {filteredProjects.some((project) => project.featured) && (
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 pl-2 border-l-4 border-secondary">
              Featured Projects
            </h3>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredProjects
                .filter((project) => project.featured)
                .map((project, index) => (
                  <FeaturedProjectCard
                    key={project.id}
                    project={project}
                    index={index}
                    isVisible={isVisible}
                  />
                ))}
            </div>
          </div>
        )}

        {/* Other projects - grid of smaller cards */}
        <div>
          <h3 className="text-2xl font-bold mb-6 pl-2 border-l-4 border-highlight">
            Other Projects
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects
              .filter((project) => !project.featured)
              .map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
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

interface ProjectCardProps {
  project: Project;
  index: number;
  isVisible: boolean;
}

const FeaturedProjectCard: React.FC<ProjectCardProps> = ({
  project,
  index,
  isVisible,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
      className="group relative bg-gradient-to-br from-secondary/10 to-highlight/10 rounded-lg overflow-hidden border border-white/10 hover:border-secondary/30 transition-all duration-300"
    >
      {/* Project image or placeholder */}
      <div className="h-48 bg-primary-dark relative overflow-hidden">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-secondary/20 to-highlight/20">
            <span className="text-4xl font-bold text-gradient">
              {project.title.charAt(0)}
            </span>
          </div>
        )}

        {/* Date badge */}
        {project.date && (
          <div className="absolute top-3 right-3 bg-black/70 text-white text-xs py-1 px-2 rounded">
            {formatDate(project.date, "short")}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-white group-hover:text-gradient transition-colors">
          {project.title}
        </h3>

        <p className="text-text-secondary mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs rounded-full bg-black/40 text-text-secondary"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3 mt-auto pt-2">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-text-secondary hover:text-white transition-colors"
            >
              <svg
                className="w-5 h-5 mr-1"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
              Code
            </a>
          )}

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-text-secondary hover:text-white transition-colors"
            >
              <svg
                className="w-5 h-5 mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
              Live Demo
            </a>
          )}

          <span className="ml-auto inline-flex items-center text-secondary">
            <svg
              className="w-5 h-5 mr-1 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
            <span className="text-sm group-hover:text-gradient transition-colors">
              View Details
            </span>
          </span>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  index,
  isVisible,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
      className="group bg-primary-light rounded-lg overflow-hidden border border-white/10 hover:border-secondary/30 transition-all duration-300 h-full flex flex-col"
    >
      <div className="p-5">
        <h3 className="text-lg font-bold mb-2 text-white group-hover:text-gradient transition-colors">
          {project.title}
        </h3>

        <p className="text-text-secondary mb-4 text-sm line-clamp-3">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-1 mb-4">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 text-xs rounded-full bg-black/40 text-text-secondary"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-2 py-0.5 text-xs rounded-full bg-black/40 text-text-secondary">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>

        {/* Date and links */}
        <div className="flex items-center justify-between mt-auto pt-2 text-sm">
          {project.date && (
            <span className="text-text-secondary text-xs">
              {formatDate(project.date, "short")}
            </span>
          )}

          <div className="flex gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-white transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            )}

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-white transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
