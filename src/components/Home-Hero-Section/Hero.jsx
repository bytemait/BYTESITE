import React, { useEffect } from 'react';
import gsap from 'gsap';

const Hero = () => {
  useEffect(() => {
    const tl = gsap.timeline();

    // Animate the appearance of BYTE letters one by one
    tl.fromTo(
      ".byte-letter",
      {
        opacity: 0,
        y: -50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1, // Duration of each letter animation
        stagger: 0.5,  // Adds delay between each letter
        ease: "power2.out", // Smooth easing
      }
    )
      // Animate the appearance of full forms
      .fromTo(
        ".full-form",
        {
          opacity: 0,
          x: 50,
          ease: "power2.out",
          delay:2,
          duration:1
        },
        {
          opacity: 1,
          x: 0,
          duration: 1, // Duration of each full form animation
          ease: "power2.out", // Smooth easing
          stagger: 0.5, // Adds delay between each full form
        },
        "-=1" // Start the full forms animation overlapping with the BYTE letters
      );
  }, []);

  return (
    <div className="hero-component p-6 mb-32 text-white tracking-widest">
      <div className="leading-tight text-8xl font-bold">
        <div>
          <span className="byte-letter text-[#4afaab]">B</span><span className="full-form">rains</span>
        </div>
        <div>
          <span className="byte-letter text-[#4afaab]">Y</span><span className="full-form">ielding</span>
        </div>
        <div>
          <span className="byte-letter text-[#4afaab]">T</span><span className="full-form">echnical</span>
        </div>
        <div>
          <span className="byte-letter text-[#4afaab]">E</span><span className="full-form">ndeavours</span>
        </div>
      </div>
      <div className="mt-4 text-xl">
        <span className="text-[#4afaab]">Solving Problems </span>
        <span>One</span>
        <span className="text-[#4afaab] font-bold"> BYTE</span>
        <span> at a time</span>
      </div>
    </div>
  );
};

export default Hero;
