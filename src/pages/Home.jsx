import React from 'react';
import Spline from '@splinetool/react-spline';
import CardCarousel from '../components/CardCarousel';
import CardContainer from '../components/CardContainer';
import HeroMid from '../components/Home-Hero-Section/HeroMid'
import Hero from '../components/Home-Hero-Section/Hero';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="bg-black min-h-screen flex flex-col">
      <h1 className="text-theme-1">Welcome to My Page</h1>
      <div className=''>
        <Hero/>
        <div style={{position:'absolute' , width: '00px', height: '00px', right:'0px', top:'100px' }}>
          <Spline
            scene="https://prod.spline.design/qtMJZp9qovCHAQCX/scene.splinecode" 
          />
        </div>
      </div>
      <CardCarousel />
      <HeroMid />
      <CardContainer />
    </div>
  );
};

export default Home;
