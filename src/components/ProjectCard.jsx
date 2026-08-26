import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight, FaExternalLinkAlt, FaGithub } from 'react-icons/fa'

const ProjectCard = ({ id, title, description, image, tech, code, demo, displayCategory }) => {
   return (
      <div className='bg-dark-300 rounded-2xl overflow-hidden hover:-translate-y-2 transition duration-300 flex flex-col justify-between border border-dark-400/50 hover:border-purple/40 group relative h-full w-full'>
         <div className='flex flex-col flex-1'>
            <Link to={`/project/${id}`} className='block overflow-hidden relative shrink-0'>
               {displayCategory && (
                  <span className='absolute top-3 left-3 px-3 py-1 bg-dark-100/85 backdrop-blur-md border border-purple/40 text-purple text-xs font-semibold rounded-full shadow-lg z-10'>
                     {displayCategory}
                  </span>
               )}
               <img 
                  src={image} 
                  alt={title} 
                  className='w-full h-52 object-cover transition-transform duration-500 group-hover:scale-105'
               />
               <div className='absolute inset-0 bg-dark-100/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center'>
                  <span className='px-4 py-2 bg-purple text-white text-sm font-semibold rounded-lg shadow-lg flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300'>
                     View Details <FaArrowRight className='text-xs' />
                  </span>
               </div>
            </Link>
            <div className='p-6 flex flex-col flex-1 justify-between'>
               <div>
                  <Link to={`/project/${id}`}>
                     <h3 className='text-xl font-semibold mb-2 hover:text-purple transition duration-200 line-clamp-1' title={title}>{title}</h3>
                  </Link>
                  <p className='text-gray-400 mb-4 text-sm line-clamp-2 leading-relaxed h-10 overflow-hidden'>{description}</p>
               </div>
               <div className='flex flex-wrap gap-1.5 mt-auto pt-2'>
                  {
                     tech.map((item, index) => (
                        <span key={index} className='px-2.5 py-1 bg-dark-400 rounded-full text-xs font-medium text-gray-300'>
                           {item}
                        </span>
                     ))
                  }
               </div>
            </div>
         </div>
         <div className='px-6 pb-6 pt-2 flex items-center gap-3 shrink-0 mt-auto'>
            <Link 
               to={`/project/${id}`} 
               className='flex-1 text-center px-4 py-2.5 bg-purple font-medium rounded-lg hover:bg-purple-700 transition text-sm flex items-center justify-center gap-2 shadow-md shadow-purple/20'
            >
               View Details <FaArrowRight className='text-xs' />
            </Link>
            {demo && (
               <a 
                  href={demo} 
                  target='_blank' 
                  rel='noopener noreferrer' 
                  className='p-2.5 border border-purple/50 font-medium rounded-lg hover:bg-purple/20 transition text-sm text-white'
                  title='Live Demo'
               >
                  <FaExternalLinkAlt className='text-xs' />
               </a>
            )}
            {code && (
               <a 
                  href={code} 
                  target='_blank' 
                  rel='noopener noreferrer' 
                  className='p-2.5 border border-purple/50 font-medium rounded-lg hover:bg-purple/20 transition text-sm text-white'
                  title='Source Code'
               >
                  <FaGithub className='text-sm' />
               </a>
            )}
         </div>
      </div>
   )
}

export default ProjectCard