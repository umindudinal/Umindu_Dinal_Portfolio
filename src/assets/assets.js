import { FaLightbulb, FaPaintBrush, FaCode, FaReact, FaServer, FaMobileAlt, FaTools, FaNodeJs, FaStripe, FaVuejs, FaFire, FaDatabase, FaCloud, FaRobot } from 'react-icons/fa';

import profileImg from '../assets/profile.avif';
import aboutProfile from '../assets/aboutprofile.avif';
import projectImg1 from '../assets/project1.avif';
import projectImg2 from '../assets/project2.avif';
import projectImg3 from '../assets/project3.avif';
import projectImg4 from '../assets/project4.avif';
import projectImg5 from '../assets/project5.avif';
import projectImg6 from '../assets/project6.avif';
import logo from '../assets/logo.avif';
import { li, link } from 'framer-motion/client';



export const assets = {
    profileImg,
    aboutProfile,
    logo,
}



export const aboutInfo = [
    {
      icon: FaLightbulb,
      title: 'Innovative',
      description: 'I love creating unique solutions to complex problems with cutting-edge technologies.',
      color: 'text-purple'
    },
    {
      icon: FaPaintBrush,
      title: 'Design Oriented',
      description: 'Beautiful design and user experience are at the heart of everything I create.',
      color: 'text-pink'
    },
    {
      icon: FaCode,
      title: 'Clean Code',
      description: 'I write maintainable, efficient code following best practices and modern patterns.',
      color: 'text-blue'
    }
  ];



export const skills = [
  {
    title: 'Frontend Development',
    icon: FaReact,
    description: 'Building responsive and interactive user interfaces with modern frameworks.',
    tags: ['React', 'Vue.js', 'Angular', 'TypeScript']
  },
  {
    title: 'Backend Development',
    icon: FaServer,
    description: 'Creating robust server-side applications and RESTful APIs.',
    tags: ['Node.js', 'Express', 'Django', 'Laravel']
  },
  {
    title: 'Database Management',
    icon: FaDatabase,
    description: 'Designing and optimizing databases for performance and scalability.',
    tags: ['MongoDB', 'PostgreSQL', 'MySQL', 'Firebase']
  },
  {
    title: 'Mobile Development',
    icon: FaMobileAlt,
    description: 'Building cross-platform mobile applications with modern tools.',
    tags: ['React Native', 'Flutter', 'Ionic', 'Swift']
  },
  {
    title: 'Cloud & DevOps',
    icon: FaCloud,
    description: 'Deploying and managing applications in cloud environments.',
    tags: ['AWS', 'Docker', 'Kubernetes', 'CI/CD']
  },
  {
    title: 'Tools & Technologies',
    icon: FaTools,
    description: 'Essential tools and technologies I use in my development workflow.',
    tags: ['Git & GitHub', 'Webpack', 'Figma', 'Jest']
  }
];



export const projects = [
  {
    title: "Tuorist Web Application (GoCeylon)",
    description: "A tourism web app providing information on attractions, accommodations, and travel guides for Sri Lanka, built with React and tailwind CSS.",
    image: projectImg1,
    tech: ["JavaScript","React 19", "Tailwind CSS 4", "Vite"],
    demo: "https://umindudinal.github.io/GoCeylon/",
    code: "https://github.com/umindudinal/GoCeylon.git"
  },
  {
    title: "Modern Full-Stack Developer Portfolio",
    description: "A modern personal portfolio website featuring project showcases, animations, responsive design, and dark/light mode support.",
    image: projectImg2,
    tech: ["React 19", "Tailwind CSS 4", "Framer Motion", "Markdown"],
    demo: "https://umindudinal.github.io/Umindu_Dinal_Portfolio/",
    code: "https://github.com/umindudinal/Umindu_Dinal_Portfolio.git",
  },
  {
    title: "Multi-Category Fashion E-commerce Store",
    description: "An e-commerce platform supporting multiple product categories, secure payments, shopping cart, and user authentication.",
    image: projectImg4,
    tech: ["React 19", "CSS 3", "React Router 7", "Vite"],
    demo: "https://umindudinal.github.io/e-commerce-website/",
    code: "https://github.com/umindudinal/e-commerce-website.git",
  },
  {
    title: "Campus Event Planning & Management Portal",
    description: "A university event management system for creating, scheduling, and managing events with registrations and notifications.",
    image: projectImg5,
    tech: ["HTML 5", "CSS 3", "JavaScript", "PHP", "MySQL"],
    code: "https://github.com/umindudinal/Web_Technology_CA.git",
  },
  {
    title: "E-Commerce Backend System using SpringBoot",
    description: "A robust backend system for managing e-commerce operations with secure APIs and database integration.",
    image: projectImg6,
    tech: ["SpringBoot 3.5.6", "Java 21", "MySQL", "Maven"],
    code: "https://github.com/umindudinal/E-Commerce-Backend-System-using-Spring-Boot.git",
  },
  {
    title: "Library Management Desktop Application using C#",
    description: "A desktop application for managing library operations, including book inventory, user management, and borrowing processes.",
    image: projectImg3,
    tech: ["C#", ".NET Framework", "SQL Server", "Windows Forms"],
    code: "https://github.com/umindudinal/Library-Management-System-using-C-.git",
  },
];



export const workData = [
  {
    role: "Undergraduate - Information Technology",
    company: "Institute of Technology University of Moratuwa (ITUM)",
    duration: "2025 - Present",
    description:
      "Studying core IT subjects including programming, databases, networking, and software engineering. Actively involved in academic projects and practical assignments.",
    color: "purple"
  },
  {
    role: "Full Stack Developer (Academic Projects)",
    company: "University Projects",
    duration: "2025 - Present",
    description:
      "Building full stack web applications using React.js, Node.js, Express.js, and MongoDB. Developed REST APIs, implemented authentication, and integrated frontend with backend services.",
    color: "pink"
  },
  {
    role: "Frontend Developer (Freelance)",
    company: "Self Employed",
    duration: "2024 - Present",
    description:
      "Created modern portfolio websites and small business web solutions using React and Tailwind CSS with a focus on responsive UI and performance optimization.",
    color: "blue"
  }
];
