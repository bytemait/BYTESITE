import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { name: "Home", path: "/" },
  { name: "Achievements", path: "/achievements" },
  { name: "Projects", path: "/projects" },
  { name: "About Us", path: "/about" },
  { name: "Tasks", path: "/tasks" },
  // { name: "Blog", path: "/blog" }
];

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
      if (window.scrollY > 60) setIsOpen(false);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Animation variants for desktop links
  const linkHover = {
    scale: 1.1,
    color: "#00ffae",
    textShadow: "0 0 10px #00ffae",
    transition: { duration: 0.3, ease: "easeInOut" }
  };

  // Animation variants for mobile menu - slide from top
  const menuVariants = {
    open: {
      y: 0,
      opacity: 1,
      transition: { 
        duration: 0.4,
        ease: "easeOut",
        staggerChildren: 0.1, 
        when: "beforeChildren" 
      }
    },
    closed: {
      y: "-100%",
      opacity: 0,
      transition: { 
        duration: 0.3,
        ease: "easeIn",
        staggerChildren: 0.05, 
        staggerDirection: -1 
      }
    }
  };

  const menuItemVariants = {
    open: { 
      y: 0, 
      opacity: 1, 
      transition: { duration: 0.3, ease: "easeOut" } 
    },
    closed: { 
      y: -20, 
      opacity: 0, 
      transition: { duration: 0.2, ease: "easeIn" } 
    }
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className={`fixed w-full z-50 top-0 flex items-center justify-between px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 py-2 sm:py-3 md:py-4 backdrop-blur-md transition-colors duration-500 ${
        scrolled ? "bg-black bg-opacity-80 shadow-lg" : "bg-black bg-opacity-50"
      }`}
    >
      {/* Logo Area */}
      <motion.div
        className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#00ffae] via-white to-[#08f8ff] flex-shrink-0"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 }}
      >
        <Link to="/">
          BYTE
        </Link>
      </motion.div>

      {/* Desktop Menu - Now shows from lg (1024px) instead of md */}
      <ul className="hidden lg:flex space-x-6 xl:space-x-10 items-center">
        {links.map(({ name, path }) => (
          <motion.li
            key={path}
            whileHover={linkHover}
            className="relative cursor-pointer"
          >
            <NavLink
              to={path}
              className={({ isActive }) =>
                `text-white font-medium text-sm lg:text-base xl:text-lg relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-cyan-400 after:scale-x-0 after:origin-left after:transition-transform after:duration-300 ${
                  isActive
                    ? "after:scale-x-100 text-cyan-300"
                    : "hover:after:scale-x-100"
                }`
              }
            >
              {name}
            </NavLink>
          </motion.li>
        ))}
      </ul>

      {/* Mobile/Tablet Menu Button - Now shows up to lg */}
      <button
        onClick={toggleMenu}
        aria-label="Toggle Menu"
        aria-expanded={isOpen}
        className="text-white lg:hidden z-50 focus:outline-none ml-2"
      >
        {isOpen ? (
          <HiX size={28} className="sm:w-8 sm:h-8 md:w-9 md:h-9 text-[#00ffae] hover:text-cyan-400 transition" />
        ) : (
          <HiMenu size={28} className="sm:w-8 sm:h-8 md:w-9 md:h-9 text-[#00ffae] hover:text-cyan-400 transition" />
        )}
      </button>

      {/* Mobile/Tablet Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            className="fixed w-full top-[50px] sm:top-[56px] md:top-[64px] left-0 bg-black bg-opacity-95 backdrop-blur-md flex flex-col items-center py-8 sm:py-10 md:py-12 space-y-6 sm:space-y-8 lg:hidden overflow-y-auto z-40"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            style={{ height: "calc(100vh - 50px)" }}
          >
            {links.map(({ name, path }) => (
              <motion.li
                key={path}
                className="text-white text-lg sm:text-xl md:text-2xl font-semibold cursor-pointer px-4 py-2 hover:bg-white/5 rounded-lg transition-colors"
                variants={menuItemVariants}
                onClick={() => setIsOpen(false)}
              >
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    `hover:text-[#00ffae] transition-colors duration-300 block text-center ${
                      isActive ? "text-cyan-300" : ""
                    }`
                  }
                >
                  {name}
                </NavLink>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default NavBar;