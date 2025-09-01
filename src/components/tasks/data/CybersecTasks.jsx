import React, { useState } from "react";
import { FaShieldAlt, FaCheckCircle, FaChevronDown, FaChevronUp, FaExternalLinkAlt } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { CyberSecurityTasks as tasks } from "../../../../tasks-2025";
import ParticleBG from "../ui/ParticleBG.jsx";

const TaskCard = ({
  taskNumber,
  title,
  description,
  icon: Icon,
  difficulty,
  technologies,
  challenge,
  flagFormat,
  imageUrl,
}) => {
  const [expanded, setExpanded] = useState(false);
  const [completed, setCompleted] = useState(false);

  const difficultyColors = {
    easy: "bg-green-600",
    intermediate: "bg-yellow-600",
    advanced: "bg-red-600",
  };

  // Function to convert Google Drive share link to direct image URL
  const convertGoogleDriveUrl = (url) => {
    if (!url) return null;
    
    // Extract file ID from Google Drive URL
    const match = url.match(/\/d\/([a-zA-Z0-9-_]+)/);
    if (match && match[1]) {
      const fileId = match[1];
      return `https://drive.google.com/uc?export=view&id=${fileId}`;
    }
    return url;
  };

  return (
    <motion.li
      layout
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{ scale: 1.04, boxShadow: "0 12px 30px #00ffae88" }}
      className="relative bg-black bg-opacity-60 backdrop-blur-md border border-[#00ffae55] rounded-3xl p-8 shadow-xl cursor-pointer select-none"
    >
      {/* Header Row */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Icon className="text-4xl text-[#00ffae] drop-shadow-[0_0_10px_#00ffae]" />
          <div>
            <h3 className="text-3xl font-extrabold bg-gradient-to-r from-[#00ffae] to-[#08f8ff] bg-clip-text text-transparent">
              {title}
            </h3>
            <div className="flex gap-3 mt-1 text-sm text-gray-300 font-mono items-center">
              <span className={`px-3 py-1 rounded-full text-white ${difficultyColors[difficulty] || difficultyColors.easy}`}>
                Task {taskNumber}
              </span>
            </div>
          </div>
        </div>
        <button
          aria-label={completed ? "Mark as Incomplete" : "Mark as Complete"}
          onClick={(e) => {
            e.stopPropagation();
            setCompleted(!completed);
          }}
          className={`p-3 rounded-full transition-colors ${
            completed ? "bg-green-500 text-black" : "bg-gray-800 hover:bg-gray-700 text-gray-300"
          }`}
        >
          <FaCheckCircle size={22} />
        </button>
      </div>

      {/* Description */}
      <p className="mt-6 text-white font-light leading-relaxed">{description}</p>

      {/* Display image directly if it exists (for Task 2) */}
      {imageUrl && (
        <div className="mt-6">
          <div className="bg-gray-900 bg-opacity-50 rounded-xl p-4 border border-[#00ffae33]">
            <h4 className="text-[#00ffae] font-bold mb-3">Challenge Image</h4>
            <div className="flex flex-col items-center gap-4">
              <img 
                src={convertGoogleDriveUrl(imageUrl)} 
                alt="Challenge Image" 
                className="max-w-full h-auto rounded-lg border border-[#00ffae44] shadow-lg"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
              />
              <div style={{ display: 'none' }} className="text-center">
                <a 
                  href={imageUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#00ffae] text-black rounded-lg font-medium hover:bg-[#00ffae]/90 transition-colors"
                >
                  View Challenge Image <FaExternalLinkAlt />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Expand/collapse button */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="mt-8 w-full flex justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-[#00ffae] to-[#08f8ff] font-bold text-black shadow-glow hover:brightness-110 transition"
        aria-expanded={expanded}
      >
        {expanded ? (
          <>
            Hide Details <FaChevronUp className="mt-1" />
          </>
        ) : (
          <>
            Show Details <FaChevronDown className="mt-1" />
          </>
        )}
      </button>

      {/* Expanded details */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, height: 0, marginTop: 0 }}
            animate={{ opacity: 1, height: "auto", marginTop: 24 }}
            exit={{ opacity: 0, height: 0, marginTop: 0 }}
            transition={{ duration: 0.4 }}
            className="overflow-hidden text-gray-300 font-mono"
          >
            {challenge && (
              <section className="mb-5">
                <h4 className="text-[#00ffae] font-bold mb-2">Challenge</h4>
                <div className="bg-gray-900 bg-opacity-80 text-[#00ffae] p-4 rounded-xl font-mono border border-[#00ffaeaa] shadow-glow break-all">
                  {challenge}
                </div>
              </section>
            )}
            {flagFormat && (
              <section className="mb-5">
                <h4 className="text-yellow-400 font-bold mb-2">Flag Format</h4>
                <p className="text-yellow-300 font-mono bg-gray-800 p-2 rounded">{flagFormat}</p>
              </section>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.li>
  );
};

const CybersecTasks = () => {
  return (
    <div className="relative min-h-screen p-8 md:p-16 text-white">
      <ParticleBG />
      <motion.header 
        initial={{ opacity: 0, y: -80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, type: "spring" }}
        className="mb-12 text-center"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-[#00ffae] via-white to-[#08f8ff] bg-clip-text text-transparent">
          <FaShieldAlt className="inline-block mr-3 text-[#00ffae]" />
          Cybersecurity Tasks
        </h1>
      </motion.header>

      <motion.ul layout className="space-y-16 max-w-4xl mx-auto">
        {tasks.map((task, idx) => (
          <TaskCard key={idx} {...task} />
        ))}
      </motion.ul>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="mt-20 text-center space-y-6"
      >
        <div className="text-4xl md:text-5xl font-bold text-[#00ffae] animate-pulse">
          Happy Hacking! 🛡️
        </div>

        <div className="mt-8 p-4 bg-green-900 bg-opacity-30 rounded-xl border border-green-500 max-w-lg mx-auto">
          <h4 className="text-green-300 font-bold mb-2">💡 Pro Tip</h4>
          <p className="text-sm text-gray-300">
            Start with the basics - sometimes the simplest approach is the right one!
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default CybersecTasks;
