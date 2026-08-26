import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowUp, FaHeart, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className='bg-dark-100 border-t border-dark-400/50 py-12 relative z-10'>
      <div className='container mx-auto px-6 max-w-6xl'>
        
        {/* Top Footer Grid */}
        <div className='flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-dark-400/40'>
          
          {/* Logo & Tagline */}
          <div className='text-center md:text-left'>
            <Link to="/" onClick={scrollToTop} className='text-2xl font-bold text-white tracking-wide'>
              Umindu<span className='text-gradient'>Dinal</span>
            </Link>
            <p className='text-gray-400 text-xs sm:text-sm mt-1 max-w-md'>
              Full Stack Developer & Information Technology Undergraduate at ITUM University of Moratuwa.
            </p>
          </div>

          {/* Social Icons */}
          <div className='flex items-center gap-3'>
            <a 
              href="https://github.com/umindudinal" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-10 h-10 rounded-xl glass-panel flex items-center justify-center text-gray-300 hover:text-purple hover:border-purple/40 transition duration-300 text-base"
              title="GitHub"
            >
              <FaGithub />
            </a>
            <a 
              href="https://www.linkedin.com/in/umindu-dinal-212688375/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-10 h-10 rounded-xl glass-panel flex items-center justify-center text-gray-300 hover:text-purple hover:border-purple/40 transition duration-300 text-base"
              title="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a 
              href="https://twitter.com/umindudinal" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-10 h-10 rounded-xl glass-panel flex items-center justify-center text-gray-300 hover:text-purple hover:border-purple/40 transition duration-300 text-base"
              title="Twitter"
            >
              <FaTwitter />
            </a>
          </div>

          {/* Scroll to top button */}
          <button 
            onClick={scrollToTop} 
            className='flex items-center gap-2 px-4 py-2.5 rounded-xl glass-panel border-purple/30 text-purple text-xs font-semibold hover:bg-purple/20 transition cursor-pointer'
          >
            <span>Back to top</span>
            <FaArrowUp className="text-xs" />
          </button>

        </div>

        {/* Bottom Copyright */}
        <div className='pt-8 text-center text-gray-400 text-xs flex flex-col sm:flex-row items-center justify-between gap-4'>
          <p>&copy; {new Date().getFullYear()} Umindu Dinal. All rights reserved.</p>
          <p className='flex items-center gap-1.5'>
            Built with React 19, Tailwind CSS 4 & Framer Motion
          </p>
        </div>

      </div>
    </footer>
  )
}

export default Footer