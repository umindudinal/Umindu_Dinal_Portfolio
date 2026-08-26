import { 
  FaLightbulb, 
  FaPaintBrush, 
  FaCode, 
  FaReact, 
  FaServer, 
  FaMobileAlt, 
  FaTools, 
  FaDatabase, 
  FaCloud,
  FaShieldAlt,
  FaGraduationCap,
  FaRocket,
  FaLayerGroup
} from 'react-icons/fa';

import profileImg from '../assets/profile.avif';
import aboutProfile from '../assets/aboutprofile.avif';
import projectImg1 from '../assets/project1.avif';
import projectImg2 from '../assets/project2.avif';
import projectImg3 from '../assets/project3.avif';
import projectImg4 from '../assets/project4.avif';
import projectImg5 from '../assets/project5.avif';
import projectImg6 from '../assets/project6.avif';
import logo from '../assets/logo.avif';

export const assets = {
  profileImg,
  aboutProfile,
  logo,
};

export const heroStats = [
  { label: 'Projects Built', value: '6+', icon: FaRocket },
  { label: 'Technologies', value: '15+', icon: FaCode },
  { label: 'Education', value: 'ITUM', icon: FaGraduationCap },
  { label: 'Code Quality', value: '100%', icon: FaShieldAlt },
];

export const aboutInfo = [
  {
    icon: FaLightbulb,
    title: 'Innovative Software Solutions',
    description: 'Engineering full-stack web applications, REST APIs, computer vision models, and intelligent systems.',
    color: 'text-purple'
  },
  {
    icon: FaPaintBrush,
    title: 'UI/UX & Mobile Apps',
    description: 'Designing responsive interfaces and mobile applications using React, Vue.js, Flutter, and Tailwind CSS.',
    color: 'text-pink'
  },
  {
    icon: FaCode,
    title: 'Robust Backends & APIs',
    description: 'Building scalable microservices with Spring Boot, Gin, .NET, and FastAPI using PostgreSQL, MySQL & MongoDB.',
    color: 'text-blue'
  },
  {
    icon: FaShieldAlt,
    title: 'Computer Vision & Embedded',
    description: 'Developing AI vision models (YOLOv8, OpenCV), Docker containerization, and embedded simulations.',
    color: 'text-emerald'
  }
];

export const skills = [
  {
    title: 'Programming Languages',
    icon: FaCode,
    description: 'Core languages used for building web apps, backends, mobile apps, and intelligent systems.',
    tags: ['Java', 'Python', 'C#', 'JavaScript', 'Dart', 'Go']
  },
  {
    title: 'Frontend Development',
    icon: FaReact,
    description: 'Crafting responsive user interfaces, web applications, and mobile solutions.',
    tags: ['React', 'Vue.js', 'Flutter', 'Tailwind CSS']
  },
  {
    title: 'Backend & Frameworks',
    icon: FaServer,
    description: 'Engineering robust server-side APIs, microservices, and high-performance backends.',
    tags: ['Spring Boot', 'Gin', '.NET', 'FastAPI']
  },
  {
    title: 'Databases',
    icon: FaDatabase,
    description: 'Designing, querying, and managing relational and document databases.',
    tags: ['PostgreSQL', 'MySQL', 'MongoDB']
  },
  {
    title: 'Tools, ML & Embedded',
    icon: FaTools,
    description: 'Containerization, computer vision models, machine learning, and embedded simulation.',
    tags: ['Docker', 'Git', 'YOLOv8', 'OpenCV', 'Ultralytics', 'Proteus']
  }
];

export const projectCategories = [
  { id: 'all', label: 'All Projects' },
  { id: 'Web Application', label: 'Web Apps' },
  { id: 'E-Commerce', label: 'E-Commerce' },
  { id: 'Backend API', label: 'Backend APIs' },
  { id: 'Desktop Application', label: 'Desktop Software' },
  { id: 'Web Portal', label: 'Web Portals' },
];

export const projects = [
  {
    id: "go-ceylon",
    title: "Tourist Web Application (GoCeylon)",
    description: "A tourism web app providing information on attractions, accommodations, and travel guides for Sri Lanka, built with React and Tailwind CSS.",
    longDescription: "GoCeylon is a comprehensive web-based platform tailored for travelers and tourists exploring Sri Lanka. The application provides detailed guides on top travel destinations, historical landmarks, accommodation recommendations, and cultural highlights. Designed with a modern user interface and fast navigation, it delivers a smooth experience across both desktop and mobile devices.",
    image: projectImg1,
    tech: ["JavaScript", "React 19", "Tailwind CSS 4", "Vite"],
    category: "Web Application",
    role: "Frontend Developer",
    duration: "2025",
    features: [
      "Interactive destination guide with detailed location insights",
      "Curated recommendations for hotels, restaurants, and tours",
      "Fully responsive and touch-friendly layout built with Tailwind CSS",
      "Fast page loading and seamless client-side routing"
    ],
    highlights: "Designed and built an intuitive user experience for tourists navigating Sri Lankan attractions using React 19 and Tailwind CSS 4.",
    demo: "https://umindudinal.github.io/GoCeylon/",
    code: "https://github.com/umindudinal/GoCeylon.git"
  },
  {
    id: "developer-portfolio",
    title: "Modern Full-Stack Developer Portfolio",
    description: "A modern personal portfolio website featuring project showcases, animations, responsive design, and dark/light mode support.",
    longDescription: "A high-performance personal developer portfolio built with React 19, Framer Motion, and Tailwind CSS. The website highlights key projects, technical skills, professional work experience, and contact forms with fluid animations, custom glassmorphic components, and individual project deep-dives.",
    image: projectImg2,
    tech: ["React 19", "Tailwind CSS 4", "Framer Motion", "React Router 7"],
    category: "Web Application",
    role: "Full Stack Developer",
    duration: "2025 - Present",
    features: [
      "Dynamic project showcases with detailed dedicated page views",
      "Smooth micro-interactions powered by Framer Motion",
      "Integrated EmailJS contact form for direct inquiries",
      "Optimized for SEO, accessibility, and high performance"
    ],
    highlights: "Leveraged modern React 19 standards and component architecture to showcase real-world projects and technical capabilities.",
    demo: "https://umindudinal.github.io/Umindu_Dinal_Portfolio/",
    code: "https://github.com/umindudinal/Umindu_Dinal_Portfolio.git",
  },
  {
    id: "fashion-ecommerce",
    title: "Multi-Category Fashion E-commerce Store",
    description: "An e-commerce platform supporting multiple product categories, secure payments, shopping cart, and user authentication.",
    longDescription: "An end-to-end multi-category fashion e-commerce storefront designed for seamless online shopping. Users can browse products by category, apply filters, manage cart items, and simulate checkout processes with an intuitive and responsive design.",
    image: projectImg4,
    tech: ["React 19", "CSS 3", "React Router 7", "Vite"],
    category: "E-Commerce",
    role: "Frontend Developer",
    duration: "2024",
    features: [
      "Multi-category product catalog with price & category filter options",
      "Interactive shopping cart state management",
      "Responsive hero banner, product showcases, and footer navigation",
      "Clean client-side routing for product collections"
    ],
    highlights: "Implemented efficient client-side state handling and route navigation for seamless shopping experiences.",
    demo: "https://umindudinal.github.io/e-commerce-website/",
    code: "https://github.com/umindudinal/e-commerce-website.git",
  },
  {
    id: "campus-event-portal",
    title: "Campus Event Planning & Management Portal",
    description: "A university event management system for creating, scheduling, and managing events with registrations and notifications.",
    longDescription: "A web-based event planning and management portal built for university campuses. The system enables students and faculty to register for upcoming events, view schedules, manage event proposals, and maintain user accounts with MySQL database backend.",
    image: projectImg5,
    tech: ["HTML 5", "CSS 3", "JavaScript", "PHP", "MySQL"],
    category: "Web Portal",
    role: "Full Stack Developer",
    duration: "2024",
    features: [
      "Student and administrator authentication system",
      "Event creation, editing, and scheduling dashboard",
      "Participant registration and capacity tracking",
      "MySQL database backend with secure queries"
    ],
    highlights: "Engineered complete CRUD operations and session-based authentication for campus-wide event coordination.",
    code: "https://github.com/umindudinal/Web_Technology_CA.git",
  },
  {
    id: "ecommerce-backend",
    title: "E-Commerce Backend System using SpringBoot",
    description: "A robust backend system for managing e-commerce operations with secure APIs and database integration.",
    longDescription: "An enterprise-grade backend service built with Spring Boot 3.5 and Java 21. It provides restful REST API endpoints for product management, user authentication, cart management, order processing, and persistent database storage with MySQL.",
    image: projectImg6,
    tech: ["SpringBoot 3.5.6", "Java 21", "MySQL", "Maven"],
    category: "Backend API",
    role: "Backend Developer",
    duration: "2025",
    features: [
      "RESTful API architecture following clean code principles",
      "Entity relationship mapping (ORM) with Spring Data JPA & MySQL",
      "Custom exception handling and input validation",
      "Scalable service layer design for high throughput"
    ],
    highlights: "Built robust REST services leveraging Spring Boot 3 standards and Java 21 features.",
    code: "https://github.com/umindudinal/E-Commerce-Backend-System-using-Spring-Boot.git",
  },
  {
    id: "library-management",
    title: "Library Management Desktop Application using C#",
    description: "A desktop application for managing library operations, including book inventory, user management, and borrowing processes.",
    longDescription: "A Windows Forms desktop application developed in C# and .NET Framework for automated library management. The solution allows librarians to keep track of book inventory, manage borrower profiles, issue & return books, and calculate due fees.",
    image: projectImg3,
    tech: ["C#", ".NET Framework", "SQL Server", "Windows Forms"],
    category: "Desktop Application",
    role: "Software Developer",
    duration: "2024",
    features: [
      "Book catalog search and status tracking (available/borrowed)",
      "Member management with record of active loans and history",
      "Automatic late fee computation and automated receipts",
      "Relational SQL Server database for reliable record keeping"
    ],
    highlights: "Delivered a user-friendly desktop GUI with multi-table SQL backend integration for library administration.",
    code: "https://github.com/umindudinal/Library-Management-System-using-C-.git",
  },
];

export const workData = [
  {
    role: "Higher National Diploma in Information Technology",
    company: "Institute of Technology University of Moratuwa (ITUM)",
    duration: "2025 - Present",
    category: "Education",
    location: "Diyagama, Sri Lanka",
    description: "Specializing in Software Engineering, Web Architecture, Database Systems, and Object-Oriented Software Design.",
    achievements: [
      "Core coursework in Data Structures, Algorithms, OOP (Java & C#), and Relational Databases",
      "Hands-on full stack project development utilizing modern frameworks and database tools"
    ],
    skills: ["Java", "C#", "SQL", "Software Engineering", "Web Architecture"],
    color: "purple"
  },
  {
    role: "Full Stack & Systems Developer",
    company: "Freelance & Independent Projects",
    duration: "2024 - Present",
    category: "Experience",
    location: "Remote / Freelance",
    description: "Designing and engineering full-stack web applications, REST APIs, and software solutions for clients and academic portfolios.",
    achievements: [
      "Engineered GoCeylon Tourism Platform and Fashion E-Commerce Web Store",
      "Developed Spring Boot 3 & Java 21 REST API E-Commerce Backend",
      "Built Computer Vision and Embedded prototypes using Python, OpenCV, & Proteus"
    ],
    skills: ["React", "Spring Boot", "Python", "Tailwind CSS", "MySQL", "Docker"],
    color: "pink"
  },
  {
    role: "Software & Desktop Application Developer",
    company: "Academic & Systems Projects",
    duration: "2024 - 2025",
    category: "Experience",
    location: "University Projects",
    description: "Built automated desktop software solutions and administrative database management applications.",
    achievements: [
      "Developed Windows Forms Library Management Desktop App in C# & SQL Server",
      "Automated inventory tracking, user profile management, and fee calculations"
    ],
    skills: ["C#", ".NET Framework", "SQL Server", "Windows Forms"],
    color: "blue"
  }
];
