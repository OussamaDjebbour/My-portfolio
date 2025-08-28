import { RefObject } from "react";
import { Github, Linkedin, Mail, Download, ChevronDown } from "lucide-react";
import { useScrollToSection } from "../hooks/useScrollToSection";

interface HeroProps {
  home: RefObject<HTMLElement>;
  about: RefObject<HTMLElement>;
  // scrollToAbout: (elementRef: React.RefObject<HTMLElement>) => void;
}

const Hero = ({ home, about }: HeroProps) => {
  const { scrollToSection: scrollToAbout } = useScrollToSection();

  return (
    <section
      id="home"
      ref={home}
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Oussama Djebbour
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto">
              Frontend Developer specializing in modern web technologies
            </p>
            <div className="flex flex-wrap justify-center gap-2 mt-6">
              {["React", "TypeScript", "Tailwind CSS", "JavaScript"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-gray-800/50 text-gray-300 rounded-full text-sm border border-gray-700"
                  >
                    {tech}
                  </span>
                ),
              )}
            </div>
          </div>

          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Passionate about creating beautiful, responsive, and user-friendly
            web applications. I transform ideas into digital experiences that
            users love.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => scrollToAbout(about)}
              className="group bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-lg font-medium hover:shadow-2xl hover:shadow-purple-500/25 transform hover:-translate-y-1 transition-all duration-300"
            >
              View My Work
            </button>
            <button className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-8 py-3 rounded-lg font-medium border border-gray-700 hover:border-gray-600 transform hover:-translate-y-1 transition-all duration-300">
              <Download className="h-4 w-4" />
              Download CV
            </button>
          </div>

          <div className="flex items-center justify-center gap-6 pt-8">
            <a
              href="https://github.com/OussamaDjebbour"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transform hover:scale-110 transition-all duration-300"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com/in/oussama-djebbour"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transform hover:scale-110 transition-all duration-300"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:oussama.djebbour@example.com"
              className="text-gray-400 hover:text-white transform hover:scale-110 transition-all duration-300"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={() => scrollToAbout(about)}
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            <ChevronDown className="h-8 w-8" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
