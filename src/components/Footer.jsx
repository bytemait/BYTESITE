import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  const linkVariants = {
    hover: { scale: 1.15, color: "#00ffae", textShadow: "0 0 8px #00ffae" }
  };

  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-gray-950 text-gray-300 px-6 py-12 overflow-x-hidden w-full"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-12 lg:gap-0 items-start lg:items-center">
        <div className="mb-8 lg:mb-0 w-full lg:w-auto text-center lg:text-left">
          <motion.h1 
            className="text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#00ffae] via-white to-[#08f8ff] drop-shadow-lg"
            animate={{ textShadow: ["0 0 8px #00ffae", "0 0 20px #08f8ff", "0 0 8px #00ffae"] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            Solving Problems<br />
            One <span className="text-green-400">Byte</span> At a Time
          </motion.h1>
        </div>

        <nav className="flex flex-col sm:flex-row gap-10 lg:gap-20 w-full lg:w-auto justify-center text-lg lg:text-xl">
          <div>
            <h2 className="mb-3 font-semibold text-green-400 uppercase tracking-wide">Explore</h2>
            <ul className="space-y-2">
              {["Home", "Achievements", "Projects", "Challenges"].map(item => (
                <motion.li key={item} whileHover={{ color: "#00ffae", scale: 1.1 }} className="cursor-pointer transition">
                  <a href={item === "Home" ? "/" : `/${item.toLowerCase()}`} className="hover:text-green-400">
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-3 font-semibold text-green-400 uppercase tracking-wide">Contact Us</h2>
            <ul className="space-y-2">
              {["Email", "Phone no.", "Kabutar", "Address"].map(item => (
                <motion.li key={item} whileHover={{ color: "#00ffae", scale: 1.1 }} className="cursor-pointer transition">
                  <a href="#" className="hover:text-green-400">{item}</a>
                </motion.li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-3 font-semibold text-green-400 uppercase tracking-wide">Social Links</h2>
            <ul className="space-y-2">
              <motion.li whileHover={linkVariants.hover} className="flex gap-2 items-center transition cursor-pointer">
                <FaGithub className="text-gray-300" size={22} />
                <a href="https://github.com/bytemait" target="_blank" rel="noopener noreferrer">GitHub</a>
              </motion.li>
              <motion.li whileHover={linkVariants.hover} className="flex gap-2 items-center transition cursor-pointer">
                <FaLinkedin className="text-gray-300" size={22} />
                <a href="https://linkedin.com/company/byte-official/mycompany/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              </motion.li>
              <motion.li whileHover={linkVariants.hover} className="flex gap-2 items-center transition cursor-pointer">
                <FaInstagram className="text-gray-300" size={22} />
                <a href="https://www.instagram.com/byte__official/" target="_blank" rel="noopener noreferrer">Instagram</a>
              </motion.li>
            </ul>
          </div>
        </nav>
      </div>

      <div className="mt-12 border-t border-gray-800 pt-6 flex flex-col sm:flex-row justify-between items-center text-gray-500 text-sm font-light">
        <p className="mb-4 sm:mb-0">© 2025 All Rights Reserved</p>
        <div className="flex space-x-6">
          {[{
            url: "https://linkedin.com/company/byte-official/mycompany/",
            icon: <FaLinkedin size={20} />
          },{
            url: "https://www.instagram.com/byte__official/",
            icon: <FaInstagram size={20} />
          },{
            url: "https://github.com/bytemait",
            icon: <FaGithub size={20} />
          }].map(({url, icon}, idx) => (
            <motion.a
              key={idx}
              href={url}
              className="text-gray-400 hover:text-green-400 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, color: "#00ffae", textShadow: "0 0 8px #00ffae" }}
              transition={{ type: "spring", stiffness: 300 }}
              aria-label={`Link to ${url}`}
            >
              {icon}
            </motion.a>
          ))}
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
