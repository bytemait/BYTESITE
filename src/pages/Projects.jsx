import React, { useEffect } from 'react';
import gsap from 'gsap';
import Carousel from "../components/Carousel/Carousel";

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
    <div className="min-h-screen bg-gradient-to-b from-[#000000] to-[#032703]">
      <div className="flex flex-col justify-center items-center pt-24  text-center md:text-left">
        <div className="flex flex-col md:flex-row items-center md:items-end gap-6 md:gap-6 md:mr-48">
          <span className="main-title text-7xl md:text-9xl font-extrabold tracking-widest bg-gradient-to-b from-white to-[#999999] bg-clip-text text-transparent">
            BYTE
          </span>
          <div className="subtitle flex flex-col tracking-widest text-center md:text-left">
            <span className="text-[#4AFAAB] text-lg md:text-2xl font-bold">
              Solving Problems
            </span>
            <span className="text-[#4AFAAB] text-lg md:text-2xl font-bold">
              One Byte at a Time
            </span>
          </div>
        </div>
        <p className="projects-title text-6xl md:text-9xl font-extrabold tracking-widest bg-gradient-to-b from-white to-[#999999] bg-clip-text text-transparent mt-6 md:ml-10">
          PROJECTS
        </p>
      </div>
      <div className="mt-10 min-h-[180vh]">
        <Carousel />
      </div>
    </div>
  );
};

export default Projects;
