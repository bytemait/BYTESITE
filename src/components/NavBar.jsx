import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="h-20 flex justify-center md:gap-8 gap-5 items-center p-2 bg-black">
      <NavLink
        to="/home"
        className={({ isActive }) =>
          `text-white  ${isActive ? "border-b-2 border-white" : ""}  border-b-2 border-transparent
           hover:border-b-2 hover:border-white transition-all duration-300 font-ocr md:text-lg text-sm tracking-widest font-medium`
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/achievements"
        className={({ isActive }) =>
          `text-white  ${isActive ? "border-b-2 border-white" : ""}  border-b-2 border-transparent
           hover:border-b-2 hover:border-white transition-all duration-300 font-ocr md:text-lg text-sm tracking-widest font-medium`
        }
      >
        Achievements
      </NavLink>
      <NavLink
        to="/projects"
        className={({ isActive }) =>
          `text-white  ${isActive ? "border-b-2 border-white" : ""}  border-b-2 border-transparent
           hover:border-b-2 hover:border-white transition-all duration-300 font-ocr md:text-lg text-sm tracking-widest font-medium`
        }
      >
        Projects
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          `text-white  ${isActive ? "border-b-2 border-white" : ""}  border-b-2 border-transparent
           hover:border-b-2 hover:border-white transition-all duration-300 font-ocr md:text-lg text-sm tracking-widest font-medium`
        }
      >
        About Us
      </NavLink>
    </div>
  );
}

export default NavBar;
