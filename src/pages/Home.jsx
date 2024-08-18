// src/pages/Home.js or src/App.js
import React from 'react';
import ThreeDScene from '../components/ThreeDScene'; // Adjust the path as needed

const Home = () => {
  return (
    <div className="bg-black min-h-screen flex flex-col">
      <h1 className="text-theme-1">Welcome to My Page</h1>
      <ThreeDScene />
    </div>
  );
};

export default Home;
