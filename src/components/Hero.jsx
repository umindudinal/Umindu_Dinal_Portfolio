import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import {assets} from '../assets/assets'

const titles = [
   "Full Stack Developer",
   "React Developer",
   "UI/UX Designer"
];

const Hero = () => {

   const [text, setText] = useState("");
   const [index, setIndex] = useState(0);
   const [subIndex, setSubIndex] = useState(0);
   const [deleting, setDeleting] = useState(false);

   useEffect(() => {
      const current = titles[index % titles.length];

      const timeout = setTimeout(() => {
         if (!deleting) {
            setSubIndex((v) => v + 1);
            if (subIndex >= current.length) {
            setDeleting(true);
            }
         } 
         else {
            setSubIndex((v) => v - 1);
            if (subIndex <= 0) {
            setDeleting(false);
            setIndex((v) => (v + 1) % titles.length);
            }
         }
         setText(current.substring(0, subIndex));
      }, 
         deleting ? 40 : 80);
         return () => clearTimeout(timeout);
   }, 
   [subIndex, deleting, index]);


   return (
      <>
      <motion.div
      initial={{opacity:0, y:50}}
      whileInView={{opacity:1, y:0}}
      transition={{duration:0.6, ease:'easeOut'}}
      viewport={{once:true}}
      id='home'
      className='min-h-screen flex items-center pt-20 pb-16 bg-linear-to-r from-dark-100 via-dark-300 to-dark-100'>

         <div className='container mx-auto px-6 flex flex-col md:flex-row items-center justify-between'>
            {/* Left Content */}
            <div className='md:w-1/2 mb-10 md:mb-0'>
               <h1 className='text-4xl md:text-6xl font-bold mb-4'>Hi, I'm <span className='text-purple'>Umindu Dinal</span></h1>
               <h2 className='text-2xl md:text-4xl font-semibold mb-6'>{text}<span className="ml-1 border-r-2 border-purple animate-pulse"></span></h2>
               <p className='text-lg text-gray-300 mb-8'>I build responsive and user-friendly web applications using modern technologies.</p>
               <div className='flex space-x-4'> 
                  <a href="#projects" className='px-6 py-3 bg-purple rounded-lg font-medium hover:bg-purple-700 transition duration-300'>View Work</a>
                  <a href="#contact" className='px-6 py-3 border border-purple rounded-lg font-medium hover:bg-purple/20 transition decoration-purple-300'>Contact Me</a>
               </div>
            </div>

            {/* Right Content */}
            <div className='md:w-1/2 flex justify-center'>
               <div className='relative w-64 h-64 md:w-100 md:h-100'>
                  <div className="absolute inset-0 rounded-full bg-linear-to-r from-purple to-pink blur-3xl opacity-40 animate-pulse"></div>
                  <motion.img 
                  animate={{ y: [30, -10, 30] }} 
                  transition={{
                     duration: 4,
                     repeat: Infinity,
                     repeatType: "loop",
                     ease: "easeInOut"
                  }}
                  src={assets.profileImg} alt="Profile" className="relative rounded-4xl w-64 h-64 md:w-96 md:h-96 object-cover" />
               </div>
            </div>
         </div>

      </motion.div>
      </>
   )
}

export default Hero