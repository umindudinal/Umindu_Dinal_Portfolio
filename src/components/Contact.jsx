import React from 'react'
import { motion } from 'framer-motion'
import { FaDribbble, FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt, FaPhone, FaTwitter } from 'react-icons/fa'

const Contact = () => {
   return (
      <>
      <motion.div
      initial={{opacity:0, y:50}}
      whileInView={{opacity:1, y:0}}
      transition={{duration:0.6, ease:'easeOut'}}
      viewport={{once:true}}
      id='contact'
      className='py-20 bg-dark-200'>

         <div className='container mx-auto px-6'>
            <h2 className='text-3xl font-bold text-center mb-4'>Get in <span className='text-purple'>Touch</span></h2>
            <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16'>Feel free to reach out to me for any inquiries, collaborations, or just to say hello! I'm always open to connecting with fellow developers and potential clients.</p>

            <motion.div 
            initial={{opacity:0, y:50}}
            whileInView={{opacity:1, y:0}}
            transition={{duration:0.9, ease:'easeOut'}}
            viewport={{once:false, amount:0.2}}
            className='grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto'>
               <div>
                  <form className='space-y-6'>
                     <div>
                        <label htmlFor="name" className='block text-gray-300 mb-2'>Your Name</label>
                        <input type="text" className='w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none'/>
                     </div>
                     <div>
                        <label htmlFor="email" className='block text-gray-300 mb-2'>Email Address</label>
                        <input type="email" className='w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none'/>
                     </div>
                     <div>
                        <label htmlFor="message" className='block text-gray-300 mb-2'>Your Message</label>
                        <textarea rows="5" className='w-full h-40 bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none resize-none'/>
                     </div>
                     <button type='submit' className='w-full bg-purple text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition font-medium cursor-pointer'>Send Message</button>
                  </form>
               </div>

               <div className='space-y-8'>
                  <div className='flex items-start'>
                     <div className=' text-purple text-2xl mr-4'>
                        <FaMapMarkerAlt/>
                     </div>
                     <div>
                        <h3 className='text-lg font-semibold mb-1'>Location</h3>
                        <p className='text-gray-400'>Track 09 Junction Medirigiriya, Polonnaruwa.</p>
                     </div>
                  </div>
                  <div className='flex items-start'>
                     <div className=' text-purple text-2xl mr-4'>
                        <FaEnvelope/>
                     </div>
                     <div>
                        <h3 className='text-lg font-semibold mb-1'>Email</h3>
                        <p className='text-gray-400'>umindudinal818@gmail.com</p>
                     </div>
                  </div>
                  <div className='flex items-start'>
                     <div className=' text-purple text-2xl mr-4'>
                        <FaPhone/>
                     </div>
                     <div>
                        <h3 className='text-lg font-semibold mb-1'>Phone</h3>
                        <p className='text-gray-400'>+94 77 964 8818</p>
                     </div>
                  </div>
                  <div>
                     <h3 className='text-lg font-semibold mb-2 pt-6'>Follow Me</h3>
                     <div className='flex space-x-4 mt-2'>
                        <a href="https://github.com/umindudinal" target='_blank' className='w-12 h-12 rounded-full bg-[#181717] text-white flex items-center justify-center hover:bg-purple transition duration-300 text-2xl'><FaGithub/></a>

                        <a href="https://www.linkedin.com/in/umindu-dinal-700082254/" target='_blank' className='w-12 h-12 rounded-full bg-[#0A66C2] text-white flex items-center justify-center hover:bg-purple transition duration-300 text-2xl'><FaLinkedin/></a>

                        <a href="https://twitter.com/umindudinal" target='_blank' className='w-12 h-12 rounded-full bg-[#1DA1F2] text-white flex items-center justify-center hover:bg-purple transition duration-300 text-2xl'><FaTwitter/></a>

                        <a href="https://dribbble.com/umindudinal" target='_blank' className='w-12 h-12 rounded-full bg-[#EA4C89] text-white flex items-center justify-center hover:bg-purple transition duration-300 text-2xl'><FaDribbble/></a>
                     </div>
                  </div>
               </div>
            </motion.div>
         </div>

      </motion.div>
      </>
   )
   }

export default Contact