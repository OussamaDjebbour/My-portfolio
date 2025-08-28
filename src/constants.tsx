import {
  Code,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Palette,
  Phone,
  Smartphone,
  Twitter,
  Zap,
} from "lucide-react";

export const HIGHLIGHTS = [
  {
    icon: <Code className="h-6 w-6" />,
    title: "Clean Code",
    description: "Writing maintainable, scalable, and well-documented code",
  },
  {
    icon: <Palette className="h-6 w-6" />,
    title: "UI/UX Focus",
    description: "Creating intuitive and visually appealing user interfaces",
  },
  {
    icon: <Smartphone className="h-6 w-6" />,
    title: "Responsive Design",
    description:
      "Building applications that work seamlessly across all devices",
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Performance",
    description: "Optimizing applications for speed and user experience",
  },
];

export const SKILL_CATEGORIES = [
  {
    title: "Frontend Technologies",
    skills: [
      { name: "React.js", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "JavaScript (ES6+)", level: 90 },
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 90 },
    ],
  },
  {
    title: "Styling & Design",
    skills: [
      { name: "Tailwind CSS", level: 95 },
      { name: "Responsive Design", level: 90 },
      { name: "UI/UX Principles", level: 80 },
      { name: "CSS Animations", level: 85 },
    ],
  },
  {
    title: "Tools & Workflow",
    skills: [
      { name: "Git & GitHub", level: 85 },
      { name: "Vite/Webpack", level: 75 },
      { name: "NPM/Yarn", level: 80 },
      { name: "VS Code", level: 90 },
    ],
  },
];

export const PROJECTS = [
  {
    title: "Netflix Clone",
    description:
      "A fully functional Netflix clone built with React and TypeScript, featuring movie browsing, search functionality, and responsive design. Implements modern React patterns and TypeScript for type safety.",
    image:
      "https://images.pexels.com/photos/265685/pexels-photo-265685.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["React", "TypeScript", "CSS3", "Responsive Design"],
    githubUrl: "https://github.com/OussamaDjebbour/netflix-clone-ts",
    liveUrl: "https://netflix-clone-ts-pi.vercel.app/",
    featured: true,
  },
  {
    title: "ShopNest Ecommerce",
    description:
      "A modern ecommerce platform with shopping cart functionality, product browsing, and user-friendly interface. Built with React and styled with modern CSS techniques for optimal user experience.",
    image:
      "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["React", "JavaScript", "CSS3", "Responsive Design"],
    githubUrl: "https://github.com/OussamaDjebbour/Ecommerce/tree/main",
    liveUrl: "https://ecommerce-shopnest-with-react.netlify.app/",
    featured: true,
  },
];

export const CONTACT_INFO = [
  {
    icon: <Mail className="h-5 w-5" />,
    title: "Email",
    content: "oussama.djebbour@example.com",
    link: "mailto:oussama.djebbour@example.com",
  },
  {
    icon: <Phone className="h-5 w-5" />,
    title: "Phone",
    content: "+213 XXX XXX XXX",
    link: "tel:+213XXXXXXXXX",
  },
  {
    icon: <MapPin className="h-5 w-5" />,
    title: "Location",
    content: "Algeria",
    link: null,
  },
];

export const SOCIAL_LINKS = [
  {
    icon: <Github className="h-5 w-5" />,
    name: "GitHub",
    url: "https://github.com/OussamaDjebbour",
    color: "hover:text-gray-300",
  },
  {
    icon: <Linkedin className="h-5 w-5" />,
    name: "LinkedIn",
    url: "https://linkedin.com/in/oussama-djebbour",
    color: "hover:text-blue-400",
  },
  {
    icon: <Twitter className="h-5 w-5" />,
    name: "Twitter",
    url: "https://twitter.com/oussama_djebbour",
    color: "hover:text-blue-300",
  },
];
