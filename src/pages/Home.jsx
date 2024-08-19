import React from 'react';
import Spline from '@splinetool/react-spline';

const Home = () => {
  return (
    <div className="bg-black min-h-screen flex flex-col">
      <h1 className="text-theme-1">Welcome to My Page</h1>
      <div style={{position:'absolute' , width: '800px', height: '800px', right:'0px' }}>
      <Spline
        scene="https://prod.spline.design/qtMJZp9qovCHAQCX/scene.splinecode" 
      />
      </div>
    </div>
  );
};

export default Home;
