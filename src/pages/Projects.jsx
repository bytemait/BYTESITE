import React, { useEffect } from 'react';
import gsap from 'gsap';
import  ProjectCard  from "../components/Project_Card/ProjectCard";

const Projects = () => {
   useEffect(() => {
    const tl = gsap.timeline({ defaults: { duration: 1, ease: "power2.out" } });

    tl.fromTo(
      ".main-title",
      {
        opacity: 0,
        y: 200,
      },
      {
        opacity: 1,
        y: 0,
        stagger: 0.5,
      }
    )
    .fromTo(
      ".subtitle",
      {
        opacity: 0,
        x: 50,
      },
      {
        opacity: 1,
        x: 0,
        stagger: 0.5,
      },
      "-=0.5" 
    )
    .fromTo(
      ".projects-title",
      {
        opacity: 0,
        y: 200,
        scale: 0.5,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.5,
      },
      "-=0.5"
    );
  }, []);

  return (
    <div className="min-h-screen bg-[linear-gradient(to_bottom,_#000000,_#000000,_#083b24,_#0e6542,_#0e6542,_#0e6542)]  ">
      <div className="flex flex-col justify-center items-center pt-16 md:pt-24 px-4 text-center ">
        <div className="flex flex-col justify-center md:flex-row items-center md:items-end gap-4 md:gap-6">
          <span className="main-title items-center text-center text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-extrabold tracking-widest bg-gradient-to-b from-white to-[#999999] bg-clip-text text-transparent">
            BYTE
          </span>
        </div>
        <p className="projects-title text-4xl sm:text-5xl md:text-6xl lg:text-9xl font-extrabold tracking-widest bg-gradient-to-b from-white to-[#999999] bg-clip-text text-transparent mt-4 md:mt-6 md:ml-10">
          PROJECTS
        </p>
        
      </div>
      <div className="mt-[200px] min-h-[120vh] md:min-h-[180vh]">
        <ProjectCard/>
      </div>
    </div>
  );
};

export default Projects;