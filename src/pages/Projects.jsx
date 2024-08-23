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
        y: -50,
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
        scale: 0.5,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 1.5,
        ease: "bounce.out",
      },
      "-=0.5"
    );
  }, []);

  return (
    <div className="projects-container h-screen bg-gradient-to-b from-[#000000] to-[#032703]">
      <div className="content-container flex flex-col justify-center items-center pt-32">
        <div className="title-container flex flex-col items-center md:flex-row md:items-end gap-6">
          <span className="main-title text-6xl md:text-9xl font-extrabold tracking-widest bg-gradient-to-b from-white to-[#999999] bg-clip-text text-transparent">
            BYTE
          </span>
          <div className="subtitle-container flex flex-col items-center md:items-start tracking-widest">
            <span className="subtitle text-[#4AFAAB] text-xl md:text-2xl font-bold">
              Solving Problems
            </span>
            <span className="subtitle text-[#4AFAAB] text-xl md:text-2xl font-bold">
              One Byte at a Time
            </span>
          </div>
        </div>
        <p className="projects-title text-6xl md:text-9xl font-extrabold tracking-widest bg-gradient-to-b from-white to-[#999999] bg-clip-text text-transparent mt-6">
          PROJECTS
        </p>
      </div>
      <div className="carousel-container mt-20">
        <Carousel />
      </div>
    </div>
  );
};

export default Projects;
