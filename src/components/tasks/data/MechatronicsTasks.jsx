import React, { useEffect, useState } from "react";
import { FaCog, FaCheckCircle, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { MechatronicsTasks as tasks } from "../../../../tasks-2025";
import ParticleBG from "../ui/ParticleBG.jsx";

const TaskCard = ({
  taskNumber,
  title,
  description,
  icon: Icon,
  difficulty,
  time,
  technologies,
  requirements,
  steps,
  outcomes,
  submission,
  demo,
  hints,
}) => {
  const [expanded, setExpanded] = useState(false);
  const [completed, setCompleted] = useState(false);

  const difficultyColors = {
    easy: "bg-green-600",
    intermediate: "bg-yellow-600",
    advanced: "bg-red-600",
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
                {difficulty}
              </span>
              {time && <span className="flex items-center gap-1">⏰ {time}</span>}
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

      {/* Tech tags */}
      <div className="mt-6 flex flex-wrap gap-2">
        {technologies.map((tech, idx) => (
          <span 
            key={idx}
            className="bg-[#00ffae22] text-[#00ffae] px-3 py-1 rounded-full font-semibold text-xs border border-[#00ffae44]"
          >
            {tech}
          </span>
        ))}
      </div>

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
            {requirements && (
              <section className="mb-5">
                <h4 className="text-[#00ffae] font-bold mb-2">Requirements</h4>
                <ul className="list-disc pl-5 space-y-1">
                  {requirements.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
              </section>
            )}
            {steps && (
              <section className="mb-5">
                <h4 className="text-[#00ffae] font-bold mb-2">Steps</h4>
                <ol className="list-decimal pl-5 space-y-1">
                  {steps.map((item, i) => <li key={i}>{item}</li>)}
                </ol>
              </section>
            )}
            {hints && (
              <section className="mb-5">
                <h4 className="text-yellow-400 font-bold mb-2">Hints</h4>
                <ul className="list-disc pl-5 space-y-1">
                  {hints.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
              </section>
            )}
            {outcomes && (
              <section className="mb-5">
                <h4 className="text-cyan-400 font-bold mb-2">Expected Learning Outcomes</h4>
                <ul className="list-disc pl-5 space-y-1">
                  {outcomes.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
              </section>
            )}
            {demo && (
              <section className="mb-5">
                <h4 className="text-purple-400 font-bold mb-2">Demo Video</h4>
                <a 
                  href={demo} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="underline hover:text-[#08f8ff] transition-colors text-[#00ffae]"
                >
                  Watch Demo →
                </a>
              </section>
            )}
            {submission && (
              <section className="mb-2">
                <h4 className="text-orange-400 font-bold mb-2">Submission</h4>
                <ul className="list-disc pl-5 space-y-1">
                  {submission.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
              </section>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.li>
  );
};

const MechatronicsTasks = () => {
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
          <FaCog className="inline-block mr-3 text-[#00ffae]" />
          Mechatronics - IoT & CAD Tasks
        </h1>
        <div className="mt-4 p-4 bg-blue-900 bg-opacity-30 rounded-xl border border-blue-500 max-w-2xl mx-auto">
          <p className="text-blue-200 font-semibold">🌐 Platform: Use Wokwi <a className="text-blue-300" href="https://wokwi.com">https://wokwi.com</a> for all IoT tasks</p>
        </div>
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
        className="mt-20 text-center space-y-4"
      >
        <div className="text-4xl md:text-5xl font-bold text-[#00ffae] animate-pulse">
          Happy Coding! 🚀
        </div>
        <div className="bg-gray-900 bg-opacity-50 rounded-xl p-6 max-w-md mx-auto">
          <h3 className="text-xl font-bold text-[#00ffae] mb-2">Need Help?</h3>
          <p className="text-gray-300 mb-2">Contact for doubts:</p>
          <p className="text-sm">WhatsApp: <span className="text-cyan-400">9817413427</span></p>
          <p className="text-sm">Email: <span className="text-cyan-400">swayambansal@outlook.com</span></p>
          <p className="text-xs text-gray-400 mt-2">Also available on LinkedIn & X</p>
        </div>
        
        <div className="mt-8 p-4 bg-green-900 bg-opacity-30 rounded-xl border border-green-500 max-w-lg mx-auto">
          <h4 className="text-green-300 font-bold mb-2">📋 Submission Guidelines</h4>
          <p className="text-sm text-gray-300">Submit 2 separate links to your Wokwi projects</p>
        </div>
      </motion.div>
    </div>
  );
};

export default MechatronicsTasks;
