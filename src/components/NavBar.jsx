import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full h-16 bg-black bg-opacity-70 flex items-center p-2 fixed top-0 z-50">
      <div className="w-full flex items-center justify-between md:justify-center">
        {/* Mobile View: Hamburger Button and Logo */}
        <div className="flex items-center justify-between w-full md:hidden">
          <button
            onClick={handleToggle}
            className="text-white text-2xl focus:outline-none ml-4"
          >
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
          <div className="text-white text-xl font-bold mx-auto">
            BYTE
          </div>
        </div>

        {/* Desktop View: Logo and Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="text-white text-xl font-bold">
            BYTE
          </div>
          <NavLink
            to="/home"
            className={({ isActive }) =>
              `text-white ${isActive ? "border-b-2 border-white" : ""} border-b-2 border-transparent
               hover:border-b-2 hover:border-white transition-all duration-300 text-lg font-medium`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/achievements"
            className={({ isActive }) =>
              `text-white ${isActive ? "border-b-2 border-white" : ""} border-b-2 border-transparent
               hover:border-b-2 hover:border-white transition-all duration-300 text-lg font-medium`
            }
          >
            Achievements
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `text-white ${isActive ? "border-b-2 border-white" : ""} border-b-2 border-transparent
               hover:border-b-2 hover:border-white transition-all duration-300 text-lg font-medium`
            }
          >
            Projects
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `text-white ${isActive ? "border-b-2 border-white" : ""} border-b-2 border-transparent
               hover:border-b-2 hover:border-white transition-all duration-300 text-lg font-medium`
            }
          >
            About Us
          </NavLink>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-80 flex flex-col items-center justify-center md:hidden transition-transform duration-300 ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <NavLink
          to="/home"
          className="text-white text-lg py-2"
          onClick={handleToggle}
        >
          Home
        </NavLink>
        <NavLink
          to="/achievements"
          className="text-white text-lg py-2"
          onClick={handleToggle}
        >
          Achievements
        </NavLink>
        <NavLink
          to="/projects"
          className="text-white text-lg py-2"
          onClick={handleToggle}
        >
          Projects
        </NavLink>
        <NavLink
          to="/about"
          className="text-white text-lg py-2"
          onClick={handleToggle}
        >
          About Us
        </NavLink>
      </div>
    </div>
  );
}

export default NavBar;
