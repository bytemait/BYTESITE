import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { team, visions } from "../constants";

// Unique groups
const groups = ["All", ...new Set(team.map((p) => p.group))];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  hover: { 
    scale: 1.05, 
    boxShadow: "0 15px 30px rgba(0,255,174,0.4)",
    y: -5
  },
};

export default function Aboutm() {
  const [activeGroup, setActiveGroup] = useState("All");
  const [currentVision, setCurrentVision] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVision((v) => (v + 1) % visions.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const filtered =
    activeGroup === "All"
      ? team
      : team.filter((p) => p.group === activeGroup);

  return (
    <div className="py-16 bg-[#050816] text-white px-6 sm:px-16">
      {/* Vision Section */}
      <motion.div
        className="max-w-3xl mx-auto bg-gradient-to-br from-green-800/80 via-black to-black/80 p-10 rounded-3xl shadow-2xl text-center backdrop-blur-lg mb-16"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          key={visions[currentVision].title}
          className="text-4xl sm:text-5xl font-extrabold mb-4 bg-gradient-to-r from-green-400 to-purple-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {visions[currentVision].title}
        </motion.h1>
        <motion.h2
          key={visions[currentVision].subtitle}
          className="text-2xl sm:text-3xl mb-4 text-gray-300"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {visions[currentVision].subtitle}
        </motion.h2>
        <motion.p
          key={visions[currentVision].description}
          className="text-lg leading-relaxed text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {visions[currentVision].description}
        </motion.p>
      </motion.div>

      {/* Meet the Team */}
      <h2 className="text-3xl font-extrabold text-[#00ffae] text-center mb-8 drop-shadow-neon">
        Meet the Team
      </h2>

      {/* Tabs */}
      <div className="flex justify-center gap-4 flex-wrap mb-12">
        {groups.map((g) => (
          <button
            key={g}
            onClick={() => setActiveGroup(g)}
            className={`px-4 py-2 rounded-full font-medium transition ${
              activeGroup === g
                ? "bg-[#00ffae] text-black shadow-neon"
                : "bg-gray-800 hover:bg-gray-700"
            }`}
          >
            {g}
          </button>
        ))}
      </div>

      {/* Team Cards Grid - 4 per row */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {filtered.map((person, i) => (
          <motion.div
            key={i}
            variants={cardVariants}
            whileHover="hover"
            className="relative bg-gradient-to-br from-gray-900/90 via-gray-800/80 to-black/90 backdrop-blur-md border border-[#00ffae]/30 rounded-2xl overflow-hidden shadow-lg cursor-pointer group"
          >
            {/* Image Section - covers top-right and extends to mid-left */}
            <div className="relative h-48 overflow-hidden">
              <div 
                className="absolute inset-0 bg-gradient-to-br from-[#00ffae]/20 to-transparent"
                style={{
                  clipPath: "polygon(40% 0%, 100% 0%, 100% 100%, 0% 100%)"
                }}
              />
              <img
                src={person.img}
                alt={person.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                style={{
                  clipPath: "polygon(40% 0%, 100% 0%, 100% 100%, 0% 100%)"
                }}
              />
              {/* Overlay gradient for better text contrast */}
              <div 
                className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"
                style={{
                  clipPath: "polygon(40% 0%, 100% 0%, 100% 100%, 0% 100%)"
                }}
              />
            </div>

            {/* Content Section */}
            <div className="absolute bottom-0 left-0 right-0 p-6 text-left">
              <motion.h3 
                className="text-xl font-bold text-white mb-2"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                {person.name}
              </motion.h3>
              <motion.p 
                className="text-sm text-[#00ffae] font-medium"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 + 0.1 }}
              >
                {person.title}
              </motion.p>
            </div>

            {/* Hover glow effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <div className="absolute inset-0 bg-gradient-to-r from-[#00ffae]/10 to-transparent rounded-2xl" />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
