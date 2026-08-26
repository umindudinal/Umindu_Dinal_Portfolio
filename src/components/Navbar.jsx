import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import { FaXmark } from 'react-icons/fa6'

const Navbar = () => {
   const [showMenu, setShowMenu] = useState(false);
   const location = useLocation();
   const navigate = useNavigate();

   const navLinks = [
      { name: 'Home', id: 'home' },
      { name: 'About', id: 'about' },
      { name: 'Skills', id: 'skills' },
      { name: 'Projects', id: 'projects' },
      { name: 'Experience', id: 'experience' },
      { name: 'Contact', id: 'contact' },
   ];

   const handleNavClick = (e, sectionId) => {
      e.preventDefault();
      setShowMenu(false);

      if (location.pathname !== '/') {
         navigate('/');
         setTimeout(() => {
            const element = document.getElementById(sectionId);
            if (element) {
               element.scrollIntoView({ behavior: 'smooth' });
            } else {
               window.scrollTo(0, 0);
            }
         }, 100);
      } else {
         const element = document.getElementById(sectionId);
         if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
         }
      }
   };

   return (
      <header className='fixed w-full z-50 bg-dark-100/80 backdrop-blur-md border-b border-white/5 py-4 px-6 shadow-xl'>
         <div className='container mx-auto flex justify-between items-center max-w-6xl'>
            <div>
               <Link 
                  to="/" 
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
                  className='text-2xl sm:text-3xl font-extrabold text-white tracking-tight flex items-center gap-1'
               >
                  Umindu<span className='text-gradient'>Dinal</span>
               </Link>
            </div>

            <div className='hidden md:flex items-center space-x-8'>
               {navLinks.map((link) => (
                  <a
                     key={link.id}
                     href={`#${link.id}`}
                     onClick={(e) => handleNavClick(e, link.id)}
                     className='relative text-sm font-medium text-gray-300 transition duration-300 hover:text-white group py-1'
                  >
                     <span>{link.name}</span>
                     <span className='absolute left-0 -bottom-0.5 w-0 h-0.5 bg-gradient-to-r from-purple to-pink transition-all duration-300 group-hover:w-full rounded-full'></span>
                  </a>
               ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
               <button
                  onClick={() => setShowMenu(!showMenu)}
                  className="p-2 text-gray-300 hover:text-white rounded-lg glass-panel transition"
                  aria-label="Toggle Menu"
               >
                  {showMenu ? <FaXmark className="text-xl" /> : <FaBars className="text-xl" />}
               </button>
            </div>

         </div>

         {/* Mobile Menu */}
         {showMenu && (
            <div className='md:hidden mt-4 glass-panel rounded-2xl p-8 flex flex-col space-y-6 justify-center items-center text-center shadow-2xl border-purple/30'>
               {navLinks.map((link) => (
                  <a
                     key={link.id}
                     href={`#${link.id}`}
                     onClick={(e) => handleNavClick(e, link.id)}
                     className='relative text-lg font-semibold text-gray-200 hover:text-purple transition duration-300'
                  >
                     <span>{link.name}</span>
                  </a>
               ))}
            </div>
         )}
      </header>
   )
}

export default Navbar