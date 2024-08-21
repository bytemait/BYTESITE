import React from 'react'
import {motion} from 'framer-motion'
import ComputersCanvas from './canvas/Computers'

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className='sm: px-16 px-6 absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5'>
        <div className='flex flex-col justify-center items-center mt-10 '>
          <div className='w-5 h-5 rounded-full bg-[#4afaab]'/>
          <div className='w-1 sm:h-80 h-40 green-gradient'/> 
        </div>
        <div className='text-white p-6 font-Poppins'>
          <h1 className='font-Space text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-green-600'>
            WE ARE BYTE 
          </h1>
          <p class="font-Space text-lg mt-4">
           Welcome to BYTE, where innovation meets reality.We are a dynamic group of students driven by a passion for technology and a commitment to bringing ideas to life. From the realms of IoT and  web development to the intricacies of cybersecurity and machine learning; our society thrives on exploration and  creation.
          </p>
        </div>
      </div>
      <ComputersCanvas/>
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero