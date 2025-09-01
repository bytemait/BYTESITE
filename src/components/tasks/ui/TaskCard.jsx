import { motion } from "framer-motion";
import { FaCode, FaMobileAlt, FaPalette, FaRobot, FaCog, FaCloud, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

// Map domain to icons for more fun!
const ICONS = {
  "Web Development": FaCode,
  "App Development": FaMobileAlt,
  "Machine Learning": FaRobot,
  "Mechatronics": FaCog,
  "Creative Outreach": FaPalette,
  "CyberSecurity": FaLock
};

export default function TaskCard({ title, image, link }) {
  const navigate = useNavigate();
  const Icon = ICONS[title] || FaCode;

  const handleNavigation = () => navigate(link);

  return (
    <motion.div
      whileHover={{
        scale: 1.09,
        boxShadow: "0 0 32px 5px #08f8ff55",
        borderColor: "#00ffae",
      }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 240 }}
      onClick={handleNavigation}
      className="cursor-pointer flex flex-col bg-gradient-to-br from-gray-900 via-black to-[#00ffae33] border-2 border-transparent rounded-2xl shadow-xl hover:border-[#00ffae] hover:shadow-[#00ffae55] p-0 overflow-hidden transform transition-all"
    >
      <motion.div
        initial={false}
        whileHover={{ opacity: 1 }}
        className="relative"
      >
        <img
          src={image}
          alt={title}
          className="w-full h-60 object-cover rounded-t-2xl border-b-[3px]"
        />
        <div className="absolute top-3 left-3 bg-[#00ffae] bg-opacity-90 px-3 py-1 rounded-full shadow font-semibold text-black text-sm tracking-wide animate-pulse">
          {title}
        </div>
      </motion.div>
      <div className="flex flex-row items-center gap-2 px-5 py-6 bg-black bg-opacity-40 rounded-b-xl">
        <Icon className="text-3xl text-[#00ffae] drop-shadow-sm" />
        <h2 className="text-xl uppercase font-bold text-gradient bg-gradient-to-r from-[#00ffae] to-white bg-clip-text text-transparent mt-2">
          {title}
        </h2>
      </div>
    </motion.div>
  );
}

