// src/components/sections/About.tsx
import { useState } from "react";
import { motion } from "framer-motion";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";

const About = () => {
  const [activeTab, setActiveTab] = useState("professional");
  const { ref, isVisible } = useIntersectionObserver({
    threshold: 0.2,
    once: true,
  });

  const tabs = [
    { id: "professional", label: "Professional" },
    { id: "education", label: "Education" },
    { id: "personal", label: "Personal" },
  ];

  return (
    <section id="about" ref={ref} className="section py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-secondary via-highlight to-accent mx-auto mt-4"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
          {/* Profile image or avatar */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative w-64 h-64 rounded-xl overflow-hidden border-2 border-white/10">
              {/* Placeholder for profile image - replace with your own */}
              <div className="absolute inset-0 bg-gradient-to-br from-secondary via-highlight to-accent opacity-20"></div>
              <div className="absolute inset-0 bg-primary-dark opacity-60"></div>
              <div className="absolute inset-0 flex items-center justify-center text-6xl font-bold text-white">
                JB
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary/20 rounded-full blur-xl"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-accent/20 rounded-full blur-xl"></div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="col-span-2"
          >
            {/* Tabs */}
            <div className="flex mb-6 border-b border-white/10">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 font-medium transition-colors relative ${
                    activeTab === tab.id
                      ? "text-white"
                      : "text-text-secondary hover:text-white"
                  }`}
                >
                  {tab.label}
                  {activeTab === tab.id && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-secondary to-highlight"
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Tab content */}
            <div className="min-h-[300px]">
              {activeTab === "professional" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-4"
                >
                  <p className="text-lg">
                    I am a highly skilled Full Stack Developer with over 7 years
                    of experience across private and government sectors. My
                    expertise spans both front-end and back-end development,
                    with a focus on creating responsive, efficient, and
                    user-centric applications.
                  </p>
                  <p className="text-lg">
                    Currently, I'm developing scalable healthcare solutions at
                    Occam Health Services while also leading front-end
                    development for various projects at Inventive. My background
                    includes work on interactive geospatial applications and
                    robust software solutions using a wide range of
                    technologies.
                  </p>
                  <p className="text-lg">
                    I pride myself on writing clean, maintainable code and
                    staying updated with industry best practices and emerging
                    technologies.
                  </p>
                </motion.div>
              )}

              {activeTab === "education" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-6"
                >
                  <div>
                    <h3 className="text-xl font-semibold text-highlight">
                      Bachelor's in Computer and Information Sciences
                    </h3>
                    <p className="text-lg">ECPI University | 2015–2019</p>
                    <p className="text-text-secondary italic mt-1">
                      Graduated with Highest Honors, Member of the National
                      Technical Honor Society
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-secondary">
                      Associate's in Computer Software and Media Applications
                    </h3>
                    <p className="text-lg">
                      ITT Technical Institute-Springfield | 2013–2015
                    </p>
                    <p className="text-text-secondary italic mt-1">
                      Graduated with Highest Honors, inducted into the National
                      Technical Honor Society
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-accent">
                      Continuing Education
                    </h3>
                    <p className="text-lg">
                      I regularly participate in online courses and workshops to
                      stay current with emerging technologies and methodologies
                      in software development.
                    </p>
                  </div>
                </motion.div>
              )}

              {activeTab === "personal" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-4"
                >
                  <p className="text-lg">
                    Beyond coding, I'm passionate about technology that makes a
                    difference in people's lives. I enjoy the challenge of
                    solving complex problems with elegant solutions and
                    continuously expanding my skill set.
                  </p>
                  <p className="text-lg">
                    In my free time, I contribute to open-source projects and
                    participate in community initiatives like Christmas in
                    April. I'm also working on a digital card game called
                    "Kingdoms and Castles" that combines my love for gaming and
                    web development.
                  </p>
                  <p className="text-lg">
                    I believe in creating software that is not only functional
                    but also intuitive and accessible to all users, with a focus
                    on performance, security, and user experience.
                  </p>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
