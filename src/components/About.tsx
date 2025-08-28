import { RefObject } from "react";
import { HIGHLIGHTS } from "../constants";

interface AboutProps {
  about: RefObject<HTMLElement>;
}

const About = ({ about }: AboutProps) => {
  return (
    <section id="about" ref={about} className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            I'm a passionate frontend developer with a strong foundation in
            modern web technologies
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed">
              As a dedicated frontend developer, I specialize in creating
              exceptional digital experiences using modern technologies like
              React, TypeScript, and Tailwind CSS. My journey in web development
              has been driven by a passion for clean code, beautiful design, and
              optimal user experiences.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              I've successfully built and deployed multiple projects including a
              Netflix clone with TypeScript and a fully functional ecommerce
              platform, demonstrating my ability to handle complex applications
              from concept to production.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg px-4 py-2">
                <span className="text-blue-400 font-medium">
                  2+ Years Experience
                </span>
              </div>
              <div className="bg-green-500/10 border border-green-500/20 rounded-lg px-4 py-2">
                <span className="text-green-400 font-medium">
                  10+ Projects Completed
                </span>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {HIGHLIGHTS.map((item, index) => (
              <div
                key={index}
                className="bg-gray-900/50 p-6 rounded-xl border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="text-blue-500 mb-4">{item.icon}</div>
                <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
