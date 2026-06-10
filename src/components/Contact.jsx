import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { FaDribbble, FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt, FaPhone, FaTwitter } from 'react-icons/fa'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const formRef = useRef()
  const [status, setStatus] = useState('')

  const sendEmail = (e) => {
    e.preventDefault()
    setStatus('sending')

    emailjs.sendForm(
      'service_wlna5bw',
      'template_792ufli',
      formRef.current,
      '7gJwc38dTeVrBfaoY'
    )
    .then(() => {
      setStatus('success')
      formRef.current.reset()
    })
    .catch(() => {
      setStatus('error')
    })
  }

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
            <form ref={formRef} onSubmit={sendEmail} className='space-y-6'>
              <div>
                <label htmlFor="name" className='block text-gray-300 mb-2'>Your Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  className='w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none text-white'
                />
              </div>
              <div>
                <label htmlFor="email" className='block text-gray-300 mb-2'>Email Address</label>
                <input
                  type="email"
                  name="email"
                  required
                  className='w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none text-white'
                />
              </div>
              <div>
                <label htmlFor="message" className='block text-gray-300 mb-2'>Your Message</label>
                <textarea
                  rows="5"
                  name="message"
                  required
                  className='w-full h-40 bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none resize-none text-white'
                />
              </div>

              {/* Status Messages */}
              {status === 'success' && (
                <p className='text-green-400 text-sm'>Message sent successfully!</p>
              )}
              {status === 'error' && (
                <p className='text-red-400 text-sm'>Something went wrong. Please try again.</p>
              )}

              <button
                type='submit'
                disabled={status === 'sending'}
                className='w-full bg-purple text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition font-medium cursor-pointer disabled:opacity-60'
              >
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

          <div className='space-y-8'>
            <div className='flex items-start'>
              <div className='text-purple text-2xl mr-4'><FaMapMarkerAlt/></div>
              <div>
                <h3 className='text-lg font-semibold mb-1'>Location</h3>
                <p className='text-gray-400'>Track 09 Junction Medirigiriya, Polonnaruwa.</p>
              </div>
            </div>
            <div className='flex items-start'>
              <div className='text-purple text-2xl mr-4'><FaEnvelope/></div>
              <div>
                <h3 className='text-lg font-semibold mb-1'>Email</h3>
                <p className='text-gray-400'>umindudinal818@gmail.com</p>
              </div>
            </div>
            <div className='flex items-start'>
              <div className='text-purple text-2xl mr-4'><FaPhone/></div>
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