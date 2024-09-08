import React from 'react';
import Spline from '@splinetool/react-spline';
import CardCarousel from '../components/CardCarousel';
import CardContainer from '../components/CardContainer';
import HeroMid from '../components/Home-Hero-Section/HeroMid';
import Hero from '../components/Home-Hero-Section/Hero';

const Home = () => {
  return (
    <div className="bg-black min-h-screen flex flex-col">
      <div className="flex flex-col md:flex-row items-center mt-28 px-4">
        <div className="flex-1 md:ml-16">
          <Hero />
        </div>
        <div className="flex-1 mt-12 md:mt-0 md:ml-16">
          <Spline
            scene="https://prod.spline.design/70rWXJWtYcdln4iF/scene.splinecode"
            width={512}
            height={512}
          />
        </div>
      </div>
      <div className="mt-30 px-4">
        {/* <CardCarousel />
        <HeroMid /> */}
        <CardContainer />
      </div>
    </div>
  );
};

export default Home;
