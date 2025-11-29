import React from 'react'
import projects from "./projectDetails"
import MemberAvatars from './MemberAvatar'
import { Link, Target } from 'lucide-react'

const ProjectCard = () => {


  return (
    <>
    {projects.map((project,index)=>(
      <div key={index}>
      <div className='mt-24 flex flex-col lg:flex-row justify-between items-center mx-4 sm:mx-8 lg:mx-14 overflow-hidden gap-10'>
      
      {/* Left Side */}
      <div className='w-full lg:max-w-[45%] text-center lg:text-left'>
        <div className='flex justify-start items-center flex-row gap-8'>
          <h1 className='text-4xl sm:text-5xl lg:text-6xl justify-center items-center font-bold  tracking-wider'>
            {project.title}
          </h1>
          <a target="_blank" href={`${project.projectUrl}`}><Link className='md:size-10 sm:size-6'/></a>
          
        </div>
        

        <p className='mt-6 sm:mt-10 text-base sm:text-lg lg:text-xl text-gray-300'>
          {project.description}
        </p>

        {/* Avatars LOOP thingy*/}
        <div className='mt-10 sm:mt-16 w-max'>
          <MemberAvatars members={project.members} />
        </div>
      </div>

      {/* Right Side */}
      <div className='w-full lg:w-auto flex justify-center lg:justify-end'>
        {project.imageUrls.map((imageUrl, id) => (
          <div key={id} className='max-w-[90%] sm:max-w-[70%] md:max-w-[60%] lg:max-w-xl'>
            <img
              src={imageUrl}
              alt={project.title}
              className='rounded-2xl shadow-lg object-cover w-full h-auto transition-transform duration-300 hover:scale-105'
            />
          </div>
        ))}
      </div>




    </div>
    <hr className="border-t-4 w-full h-4 border-dashed mx-4 border-gray-400 mt-6" />


    </div>
    

    ))}

    </>

    
  )
}

export default ProjectCard
