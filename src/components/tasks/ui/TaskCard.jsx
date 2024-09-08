import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation

function TaskCard({ title, image, link }) {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate(link); 
  };

  return (
    <div
      className="bg-black border-theme-1 border-2 p-2  rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300 cursor-pointer"
      onClick={handleNavigation}
    >
      <img src={image} alt={title} className="w-full h-40 object-cover" />
      <div className="p-4 text-white">
        <h2 className="text-xl font-semibold text-center">{title}</h2>
      </div>
    </div>
  );
}

export default TaskCard;
