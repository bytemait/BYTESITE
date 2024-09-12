import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`w-full h-16 fixed top-0 z-50 flex items-center p-2 transition-all duration-300 ${scrolled ? 'bg-black bg-opacity-70 backdrop-blur-md' : 'bg-black bg-opacity-50'}`}
    >
      <div className="w-full flex items-center justify-between md:justify-center">
        {/* Mobile View: Hamburger Button and Logo */}
        <div className="flex items-center justify-between w-full md:hidden">
          <button
            onClick={handleToggle}
            className="text-white text-2xl focus:outline-none mr-auto z-40"
          >
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>

        {/* Desktop View: Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          <NavLink
            to="/"
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
          <NavLink
            to="/tasks"
            className={({ isActive }) =>
              `relative text-white text-lg font-medium px-4 py-2 rounded-md ${isActive ? "border-b-2 border-green-500" : ""
              } group glow-effect`
            }
          >
            Tasks
            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-green-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </NavLink>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-80 flex flex-col items-center justify-center md:hidden transition-transform duration-300 ${isOpen ? "translate-y-0 bg-opacity-70 backdrop-blur-md" : "-translate-y-full"
          }`}
      >
        <NavLink
          to="/"
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
        <NavLink
          to="/tasks"
          className="text-white text-lg py-2"
          onClick={handleToggle}
        >
          Tasks
        </NavLink>
      </div>
    </div>
  );
}

export default NavBar;
