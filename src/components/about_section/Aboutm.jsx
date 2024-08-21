import React from 'react'
import {motion} from 'framer-motion'
import {Tilt} from 'react-tilt'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'
import {services} from '../constants'


const ServiceCard = ({ index, title, icon }) => {
  return(
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
        options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 flex justify-evenly items-center flex-col'
        >
          <img src={icon} alt={title} className='w-10 h-10 object-contain'/>
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>

        </div>

      </motion.div>
    </Tilt>
  )
}
const Aboutm = () => {
  return (
    <>
      <motion.div class="bg-gradient-to-b from-green-800 to-black text-white p-8 rounded-lg shadow-lg">
      <motion.h1 initial={{ opacity: 0 }}
       animate={{ opacity: 1 }}
       transition={{ duration: 1 }} class="font-Space text-6xl font-bold mb-4">Our Vision</motion.h1>
      <motion.h2 initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
      class="font-Space text-3xl mb-6">Your Problems,<span className='font-Space text-green-500'>Our Solutions</span> </motion.h2>
       <motion.p 
       initial={{ opacity: 0 }}
       animate={{ opacity: 1 }}
       transition={{ duration: 1, delay: 1 }}
       class="font-Space text-xl mt-4 leading-[35px]">
       At BYTE, we believe in the power of collaboration and the boundless potential of technology <br/>to shape our world. Through hands-on projects, workshops, and discussions, we cultivate a <br/>vibrant community where creativity knows no bounds.
       </motion.p>
       </motion.div>
       <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}

       </div>
    </>
  )
}

export default SectionWrapper(Aboutm, "about")