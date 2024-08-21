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
        duration: 20, // Adjust the duration for speed
        ease: "none",
        repeat: -1, // Infinite loop
        repeatDelay: 0,
      }
    );
  }, []);

  return (
    <div className="hero-mid-container overflow-hidden text-6xl font-bold mb-4 text-white">
      <div className="hero-mid-text inline-block whitespace-nowrap">
      Mutual Fund investments are subject to market risks, read all scheme related documents carefully. The NAVs of the schemes may go up or down depending upon the factors and forces affecting the securities market including the fluctuations in the interest rates. The past performance of the mutual funds is not necessarily indicative of future performance of the schemes. The Mutual Fund is not guaranteeing or assuring any dividend under any of the schemes and the same is subject to the availability and adequacy of distributable surplus. Investors are requested to review the prospectus carefully and obtain expert professional advice with regard to specific legal, tax and financial implications of the investment/participation in the scheme.
      {/* <span className="text-[#4afaab]">BYTE</span> where innovation meets action */}
      </div>
    </div>
  );
};

export default HeroMid;
