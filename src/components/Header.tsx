import { RefObject, useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useScrollToSection } from "../hooks/useScrollToSection";

interface HeaderProps {
  home: RefObject<HTMLElement>;
  about: RefObject<HTMLElement>;
  skills: RefObject<HTMLElement>;
  projects: RefObject<HTMLElement>;
  contact: RefObject<HTMLElement>;
}

const Header = ({ home, about, skills, projects, contact }: HeaderProps) => {
  const NAV_ITEMS = [
    { name: home, label: "Home" },
    { name: about, label: "About" },
    { name: skills, label: "Skills" },
    { name: projects, label: "Projects" },
    { name: contact, label: "Contact" },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const { scrollToSection } = useScrollToSection();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // const navItems = [
  //   { href: "#home", label: "Home" },
  //   { href: "#about", label: "About" },
  //   { href: "#skills", label: "Skills" },
  //   { href: "#projects", label: "Projects" },
  //   { href: "#contact", label: "Contact" },
  // ];

  // const scrollToSection = (href: string) => {
  //   const element = document.querySelector(href);
  //   element?.scrollIntoView({ behavior: "smooth" });
  //   setIsOpen(false);
  // };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-gray-900/95 backdrop-blur-md border-b border-gray-800"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              OD
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.name)}
                  className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-200 hover:bg-gray-800 rounded-md"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 transition-colors duration-200"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-900/95 backdrop-blur-md rounded-lg mt-2">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.name)}
                  className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium w-full text-left transition-colors duration-200 hover:bg-gray-800 rounded-md"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
