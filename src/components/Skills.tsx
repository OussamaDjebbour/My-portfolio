import { RefObject } from "react";
import { SKILL_CATEGORIES } from "../constants";

interface SkillsProps {
  skills: RefObject<HTMLElement>;
}

const Skills = ({ skills }: SkillsProps) => {
  return (
    <section id="skills" ref={skills} className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {SKILL_CATEGORIES.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 hover:border-gray-600 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-white mb-6 text-center">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-blue-400 text-sm">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tech Stack Icons */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-white text-center mb-8">
            Technologies I Work With
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {[
              "React",
              "TypeScript",
              "JavaScript",
              "HTML5",
              "CSS3",
              "Tailwind CSS",
              "Git",
              "Vite",
              "Node.js",
            ].map((tech) => (
              <div
                key={tech}
                className="bg-gray-800 p-4 rounded-lg border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-110 group"
              >
                <span className="text-gray-300 group-hover:text-white font-medium">
                  {tech}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
