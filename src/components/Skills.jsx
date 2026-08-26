import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  FaReact, 
  FaJava, 
  FaPython,
  FaJs, 
  FaGitAlt, 
  FaDocker,
  FaVuejs,
  FaBrain,
  FaEye,
  FaMicrochip,
  FaRobot
} from 'react-icons/fa'
import { 
  SiSpringboot, 
  SiTailwindcss, 
  SiMysql, 
  SiDotnet, 
  SiMongodb,
  SiPostgresql,
  SiFlutter,
  SiFastapi,
  SiGo
} from 'react-icons/si'

const techStack = [
  // Languages
  { name: 'Java', category: 'Languages', icon: FaJava, color: 'text-amber-400', level: 'Core' },
  { name: 'Python', category: 'Languages', icon: FaPython, color: 'text-blue-400', level: 'Core' },
  { name: 'C#', category: 'Languages', icon: SiDotnet, color: 'text-purple-400', level: 'Core' },
  { name: 'JavaScript', category: 'Languages', icon: FaJs, color: 'text-yellow-400', level: 'Core' },
  { name: 'Dart', category: 'Languages', icon: SiFlutter, color: 'text-sky-400', level: 'Core' },
  { name: 'Go', category: 'Languages', icon: SiGo, color: 'text-cyan-400', level: 'Core' },

  // Frontend
  { name: 'React', category: 'Frontend', icon: FaReact, color: 'text-cyan-400', level: 'Frontend' },
  { name: 'Vue.js', category: 'Frontend', icon: FaVuejs, color: 'text-emerald-400', level: 'Frontend' },
  { name: 'Flutter', category: 'Frontend', icon: SiFlutter, color: 'text-sky-400', level: 'Mobile UI' },
  { name: 'Tailwind CSS', category: 'Frontend', icon: SiTailwindcss, color: 'text-sky-400', level: 'CSS' },

  // Backend & Frameworks
  { name: 'Spring Boot', category: 'Backend', icon: SiSpringboot, color: 'text-emerald-400', level: 'Backend' },
  { name: 'Gin', category: 'Backend', icon: SiGo, color: 'text-cyan-400', level: 'Backend' },
  { name: '.NET', category: 'Backend', icon: SiDotnet, color: 'text-purple-400', level: 'Framework' },
  { name: 'FastAPI', category: 'Backend', icon: SiFastapi, color: 'text-teal-400', level: 'Backend' },

  // Databases
  { name: 'PostgreSQL', category: 'Databases', icon: SiPostgresql, color: 'text-blue-400', level: 'Database' },
  { name: 'MySQL', category: 'Databases', icon: SiMysql, color: 'text-sky-500', level: 'Database' },
  { name: 'MongoDB', category: 'Databases', icon: SiMongodb, color: 'text-emerald-500', level: 'Database' },

  // Tools, ML & Embedded
  { name: 'Docker', category: 'Tools & ML', icon: FaDocker, color: 'text-blue-400', level: 'DevOps' },
  { name: 'Git', category: 'Tools & ML', icon: FaGitAlt, color: 'text-orange-500', level: 'VCS' },
  { name: 'YOLOv8', category: 'Tools & ML', icon: FaBrain, color: 'text-pink-400', level: 'Vision ML' },
  { name: 'OpenCV', category: 'Tools & ML', icon: FaEye, color: 'text-red-400', level: 'Vision' },
  { name: 'Ultralytics', category: 'Tools & ML', icon: FaRobot, color: 'text-indigo-400', level: 'AI Framework' },
  { name: 'Proteus', category: 'Tools & ML', icon: FaMicrochip, color: 'text-yellow-500', level: 'Embedded' },
];

const categories = [
  { id: 'all', label: 'All Tech' },
  { id: 'Languages', label: 'Languages' },
  { id: 'Frontend', label: 'Frontend' },
  { id: 'Backend', label: 'Backend & Frameworks' },
  { id: 'Databases', label: 'Databases' },
  { id: 'Tools & ML', label: 'Tools, ML & Embedded' },
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
            A comprehensive overview of programming languages, frameworks, databases, and development tools I work with.
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
          <AnimatePresence>
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