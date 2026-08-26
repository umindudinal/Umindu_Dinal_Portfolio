import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  FaReact, 
  FaJava, 
  FaPython,
  FaJs, 
  FaGitAlt, 
  FaBrain,
  FaMicrochip,
  FaPhp,
  FaHtml5,
  FaNodeJs,
  FaDatabase
} from 'react-icons/fa'
import { 
  SiSpringboot, 
  SiTailwindcss, 
  SiMysql, 
  SiDotnet, 
  SiFlutter,
  SiTensorflow,
  SiOpencv,
  SiVite
} from 'react-icons/si'

const techStack = [
  // Languages
  { name: 'Java 21', category: 'Languages', icon: FaJava, color: 'text-amber-400', level: 'Core' },
  { name: 'Python', category: 'Languages', icon: FaPython, color: 'text-blue-400', level: 'Core' },
  { name: 'C#', category: 'Languages', icon: SiDotnet, color: 'text-purple-400', level: 'Core' },
  { name: 'JavaScript', category: 'Languages', icon: FaJs, color: 'text-yellow-400', level: 'Core' },
  { name: 'Dart', category: 'Languages', icon: SiFlutter, color: 'text-sky-400', level: 'Core' },
  { name: 'Embedded C', category: 'Languages', icon: FaMicrochip, color: 'text-rose-400', level: 'Embedded' },
  { name: 'PHP', category: 'Languages', icon: FaPhp, color: 'text-indigo-400', level: 'Core' },

  // Frontend & Mobile
  { name: 'React 19', category: 'Frontend', icon: FaReact, color: 'text-cyan-400', level: 'Frontend' },
  { name: 'Flutter', category: 'Frontend', icon: SiFlutter, color: 'text-sky-400', level: 'Mobile UI' },
  { name: 'Tailwind CSS 4', category: 'Frontend', icon: SiTailwindcss, color: 'text-sky-400', level: 'Styling' },
  { name: 'HTML5 & CSS3', category: 'Frontend', icon: FaHtml5, color: 'text-orange-400', level: 'Web UI' },
  { name: 'Vite 7', category: 'Frontend', icon: SiVite, color: 'text-purple-400', level: 'Build Tool' },

  // Backend & Frameworks
  { name: 'Spring Boot 3', category: 'Backend', icon: SiSpringboot, color: 'text-emerald-400', level: 'Backend API' },
  { name: 'Node.js & Express', category: 'Backend', icon: FaNodeJs, color: 'text-emerald-500', level: 'REST API' },
  { name: '.NET Framework', category: 'Backend', icon: SiDotnet, color: 'text-purple-400', level: 'Desktop & Web' },

  // Databases
  { name: 'MySQL', category: 'Databases', icon: SiMysql, color: 'text-sky-500', level: 'RDBMS' },
  { name: 'MS SQL Server', category: 'Databases', icon: FaDatabase, color: 'text-red-400', level: 'RDBMS' },
  { name: 'SQLite', category: 'Databases', icon: FaDatabase, color: 'text-blue-300', level: 'Embedded DB' },

  // AI, Tools & Embedded
  { name: 'YOLOv8', category: 'Tools & ML', icon: FaBrain, color: 'text-pink-400', level: 'Vision ML' },
  { name: 'OpenCV', category: 'Tools & ML', icon: SiOpencv, color: 'text-red-400', level: 'Computer Vision' },
  { name: 'TensorFlow', category: 'Tools & ML', icon: SiTensorflow, color: 'text-orange-500', level: 'Deep Learning' },
  { name: 'ATmega32 & Proteus', category: 'Tools & ML', icon: FaMicrochip, color: 'text-yellow-500', level: 'Embedded IoT' },
  { name: 'Git & GitHub', category: 'Tools & ML', icon: FaGitAlt, color: 'text-orange-500', level: 'VCS' },
];

const categories = [
  { id: 'all', label: 'All Tech' },
  { id: 'Languages', label: 'Languages' },
  { id: 'Frontend', label: 'Frontend & Mobile' },
  { id: 'Backend', label: 'Backend & APIs' },
  { id: 'Databases', label: 'Databases' },
  { id: 'Tools & ML', label: 'AI, Tools & Embedded' },
];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all')

  const filteredTech = activeCategory === 'all'
    ? techStack
    : techStack.filter(item => item.category === activeCategory)

  return (
    <section 
      id='skills'
      className='py-24 bg-dark-100 relative'
    >
      <div className='container mx-auto px-6 relative z-10'>
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-4 py-1.5 rounded-full glass-panel border-purple/30 text-purple text-xs font-semibold uppercase tracking-wider mb-3 inline-block">
            Technical Capabilities
          </span>
          <h2 className='text-3xl sm:text-4xl font-extrabold text-white mb-4'>
            Skills & <span className='text-gradient'>Technologies</span>
          </h2>
          <p className='text-gray-400 text-base sm:text-lg leading-relaxed'>
            A comprehensive overview of programming languages, frameworks, databases, and engineering tools I use to build real-world applications.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-14 max-w-4xl mx-auto">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                  isActive 
                    ? 'bg-gradient-to-r from-purple to-pink text-white shadow-lg shadow-purple/25 scale-105' 
                    : 'glass-panel text-gray-300 hover:text-white hover:border-purple/40'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Interactive Technology Cards Grid */}
        <motion.div 
          layout
          className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-6xl mx-auto'
        >
          <AnimatePresence mode='popLayout'>
            {filteredTech.map((tech) => {
              const IconComp = tech.icon;
              return (
                <motion.div
                  key={tech.name}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ y: -6, scale: 1.03 }}
                  className='glass-panel rounded-2xl p-5 border-dark-400/50 hover:border-purple/50 transition-all duration-300 flex flex-col items-center justify-center text-center group cursor-pointer'
                >
                  <div className={`text-4xl mb-3 ${tech.color} group-hover:scale-110 transition-transform duration-300`}>
                    <IconComp />
                  </div>
                  <h4 className='text-sm font-bold text-white group-hover:text-purple transition-colors mb-1'>
                    {tech.name}
                  </h4>
                  <span className='text-[10px] text-gray-400 font-medium px-2 py-0.5 rounded-md bg-dark-300/80 border border-dark-400/40'>
                    {tech.level}
                  </span>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  )
}

export default Skills