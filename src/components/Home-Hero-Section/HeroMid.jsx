import React, { useEffect } from 'react';
import gsap from 'gsap';

const HeroMid = () => {
  useEffect(() => {
    const textWidth = document.querySelector(".hero-mid-text").offsetWidth;
    const containerWidth = document.querySelector(".hero-mid-container").offsetWidth;

    gsap.fromTo(
      ".hero-mid-text",
      { x: containerWidth },
      {
        x: -textWidth,
        duration: 10, // Adjust the duration for speed
        ease: "none",
        repeat: -1, // Infinite loop
        repeatDelay: 0,
      }
    );
  }, []);

  return (
    <div className="hero-mid-container overflow-hidden text-6xl font-bold mb-4 text-white">
      <div className="hero-mid-text inline-block whitespace-nowrap">
        Unravelling complexity, forging success. Join us at <span className="text-[#4afaab]">BYTE</span> where innovation meets action
      </div>
    </div>
  );
};

export default HeroMid;
