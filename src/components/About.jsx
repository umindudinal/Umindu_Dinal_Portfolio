import React from 'react'
import { motion } from 'framer-motion'
import { aboutInfo, assets } from '../assets/assets'

const About = () => {
   return (
      <>
      <motion.div
      initial={{opacity:0, y:50}}
      whileInView={{opacity:1, y:0}}
      transition={{duration:0.6, ease:'easeOut'}}
      viewport={{once:true}}
      id='about'
      className='py-20 bg-dark-200'>

         <div className='container mx-auto px-6'>
            {/* Heading */}
            <h2 className='text-3xl font-bold text-center mb-4'>About <span className='text-purple'>Me</span></h2>
            <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16'>I'm a passionate developer with expertise in building modern web applications using React, Next.js, and other cutting-edge technologies.</p>

            {/* Content */}
            <div className='flex flex-col md:flex-row items-center gap-12'>
               {/* Image content */}
               <div className='md:w-1/2 rounded-2xl overflow-hidden'>
                  <motion.img 
                  initial={{opacity:0, y:50}}
                  whileInView={{opacity:1, y:0}}
                  transition={{duration:0.9, ease:'easeOut'}}
                  viewport={{once:false, amount:0.2}}
                  className='w-full h-full object-cover'
                  src={assets.aboutProfile} alt="" />
               </div>

               {/* Text content */}
               <motion.div
               initial={{opacity:0, y:50}}
               whileInView={{opacity:1, y:0}}
               transition={{duration:0.9, ease:'easeOut'}}
               viewport={{once:false, amount:0.2}}
               className='md:w-1/2'>

                  <div className='rounded-2xl p-8'>
                     <h3 className='text-2xl font-semibold mb-6'>My Journey</h3>
                     <p className='text-gray-300'>I am a Full Stack Web Developer with over 5 years of experience specializing in React and Next.js. I build responsive, user-friendly web applications with clean code and scalable architecture, focusing on creating exceptional user experiences.</p><br />
                     <p className='text-gray-300'>I enjoy solving complex problems, optimizing performance, and continuously learning new technologies. My goal is to develop high-quality, meaningful web products that delight users and make a real impact in the digital space.</p>
                  </div>

                  {/* Card Content */}
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                     {
                        aboutInfo.map((data, index) => (
                           <div key={index} className='bg-dark-300 rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-2 cursor-pointer'>
                              <div className='text-purple text-4xl mb-3'>
                                 <data.icon/>
                              </div>
                              <h3 className='text-xl font-semibold mb-3'>{data.title}</h3>
                              <p className='text-gray-400'>{data.description}</p>
                           </div>
                        ))
                     }
                  </div>
               </motion.div>

               
            </div>
         </div>

      </motion.div>
      </>
   )
}

export default About