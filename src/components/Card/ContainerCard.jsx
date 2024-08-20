import React from 'react';
import './styles.css'; // Import your custom CSS file

const ContainerCard = ({ number, title, description, image, flexDir,width }) => {
  return (
    <div className={`bg-[#1e1e2f] text-white p-6 rounded-lg shadow-lg ${width} flex ${flexDir}`}>
      {/* Number Section */}
      <div className='flex flex-col'>
      <h2 className="hollow-text text-8xl font-bold mb-2">{number}</h2>
      
      {/* Content Section */}
      <div className="flex flex-col">
        <h3 className="text-6xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-400 to-blue-500 mb-4">
          {title}
        </h3>
        <p className="text-2xl mb-4">{description}</p>
      </div>
      </div>

      {/* Image Section */}
      {image && (
        <img src={image} alt={title} className="rounded-lg max-w-xs h-auto m-5" />
      )}
    </div>
  );
};

export default ContainerCard;
