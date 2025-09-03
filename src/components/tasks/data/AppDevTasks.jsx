import React, { useEffect, useState } from "react";
import { FaMobileAlt, FaCheckCircle, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { AppDevTasks as tasks } from "../../../../tasks-2025";
// Mock data for demonstration
// const tasks = [
//   {
//     taskNumber: 1,
//     title: "Basic Music Player UI",
//     description: "Create a simple music player interface with play/pause controls, progress bar, and song information display.",
//     icon: FaMobileAlt,
//     difficulty: "beginner",
//     time: "2-3 hours",
//     technologies: ["React", "CSS", "HTML5 Audio"],
//     requirements: [
//       "Create play/pause button functionality",
//       "Implement progress bar with seek capability",
//       "Display current song title and artist",
//       "Add volume control slider"
//     ],
//     resources: [
//       { name: "HTML5 Audio API", url: "https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement" },
//       { name: "React Hooks Guide", url: "https://reactjs.org/docs/hooks-intro.html" }
//     ],
//     codeExample: `const AudioPlayer = () => {
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [currentTime, setCurrentTime] = useState(0);
  
//   return (
//     <div className="player">
//       <button onClick={() => setIsPlaying(!isPlaying)}>
//         {isPlaying ? 'Pause' : 'Play'}
//       </button>
//     </div>
//   );
// };`
//   },
//   {
//     taskNumber: 2,
//     title: "Playlist Management",
//     description: "Implement playlist creation, editing, and management features with drag-and-drop reordering.",
//     icon: FaMobileAlt,
//     difficulty: "intermediate",
//     time: "4-6 hours",
//     technologies: ["React", "Local Storage", "Drag & Drop API"],
//     requirements: [
//       "Create playlist CRUD operations",
//       "Implement drag-and-drop song reordering",
//       "Add playlist sharing functionality",
//       "Save playlists to local storage"
//     ],
//     resources: [
//       { name: "React Beautiful DnD", url: "https://github.com/atlassian/react-beautiful-dnd" },
//       { name: "Local Storage API", url: "https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage" }
//     ]
//   }
// ];

const CodeSnippet = ({ code }) => (
  <pre className="bg-gray-900 border border-gray-700 rounded-lg p-3 sm:p-4 overflow-x-auto text-xs sm:text-sm">
    <code className="text-green-400">{code}</code>
  </pre>
);

const ParticleBG = () => (
  <div className="fixed inset-0 -z-10 bg-gradient-to-br from-gray-900 via-black to-blue-900">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,#00ffae22_0%,transparent_50%)]" />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,#08f8ff22_0%,transparent_50%)]" />
  </div>
);

const TaskCard = ({
  taskNumber,
  title,
  description,
  icon: Icon,
  difficulty,
  time,
  technologies,
  requirements,
  resources,
  codeExample,
  extras,
}) => {
  const [expanded, setExpanded] = useState(false);
  const [completed, setCompleted] = useState(false);

  const difficultyColors = {
    beginner: "bg-green-600",
    intermediate: "bg-yellow-600",
    advanced: "bg-red-600",
  };

  return (
    <motion.li
      layout
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{ scale: [1, 1.02], boxShadow: "0 8px 25px #00ffae66" }}
      className="relative bg-black bg-opacity-60 backdrop-blur-md border border-[#00ffae55] rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-xl cursor-pointer select-none"
    >
      {/* Header Row - Responsive Layout */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
        <div className="flex items-center gap-3 sm:gap-4">
          <Icon className="text-2xl sm:text-3xl lg:text-4xl text-[#00ffae] drop-shadow-[0_0_10px_#00ffae] flex-shrink-0" />
          <div className="min-w-0 flex-1">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold bg-gradient-to-r from-[#00ffae] to-[#08f8ff] bg-clip-text text-transparent leading-tight">
              {title}
            </h3>
            <div className="flex flex-wrap gap-2 sm:gap-3 mt-1 text-xs sm:text-sm text-gray-300 font-mono items-center">
              <span className={`px-2 sm:px-3 py-1 rounded-full text-white text-xs ${difficultyColors[difficulty] || difficultyColors.beginner}`}>
                {difficulty}
              </span>
              <span className="flex items-center gap-1 whitespace-nowrap">⏰ {time}</span>
            </div>
          </div>
        </div>
        <button
          aria-label={completed ? "Mark as Incomplete" : "Mark as Complete"}
          onClick={(e) => {
            e.stopPropagation();
            setCompleted(!completed);
          }}
          className={`p-2 sm:p-3 rounded-full transition-colors flex-shrink-0 ${
            completed ? "bg-green-500 text-black" : "bg-gray-800 hover:bg-gray-700 text-gray-300"
          }`}
        >
          <FaCheckCircle size={18} className="sm:w-5 sm:h-5" />
        </button>
      </div>

      {/* Description */}
      <p className="mt-4 sm:mt-6 text-sm sm:text-base text-white font-light leading-relaxed">{description}</p>

      {/* Tech tags - Responsive Grid */}
      <div className="mt-4 sm:mt-6 flex flex-wrap gap-1.5 sm:gap-2">
        {technologies.map((tech, idx) => (
          <span 
            key={idx}
            className="bg-[#00ffae22] text-[#00ffae] px-2 sm:px-3 py-1 rounded-full font-semibold text-xs border border-[#00ffae44] whitespace-nowrap"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Expand/collapse button */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="mt-6 sm:mt-8 w-full flex justify-center items-center gap-2 py-2.5 sm:py-3 rounded-lg sm:rounded-xl bg-gradient-to-r from-[#00ffae] to-[#08f8ff] font-bold text-black shadow-glow hover:brightness-110 transition text-sm sm:text-base"
        aria-expanded={expanded}
      >
        {expanded ? (
          <>
            Hide Details <FaChevronUp className="mt-0.5" />
          </>
        ) : (
          <>
            Show Details <FaChevronDown className="mt-0.5" />
          </>
        )}
      </button>

      {/* Expanded details */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, height: 0, marginTop: 0 }}
            animate={{ opacity: 1, height: "auto", marginTop: 16 }}
            exit={{ opacity: 0, height: 0, marginTop: 0 }}
            transition={{ duration: 0.4 }}
            className="overflow-hidden text-gray-300 font-mono text-sm"
          >
            {requirements && (
              <section className="mb-4 sm:mb-5">
                <h4 className="text-[#00ffae] font-bold mb-2 text-sm sm:text-base">Requirements</h4>
                <ul className="list-disc pl-4 sm:pl-5 space-y-1 sm:space-y-2">
                  {requirements.map((item, i) => <li key={i} className="text-xs sm:text-sm leading-relaxed">{item}</li>)}
                </ul>
              </section>
            )}
            {resources && (
              <section className="mb-4 sm:mb-5">
                <h4 className="text-[#00ffae] font-bold mb-2 text-sm sm:text-base">Resources</h4>
                <ul className="list-disc pl-4 sm:pl-5 space-y-1 sm:space-y-2">
                  {resources.map(({ name, url }, idx) => (
                    <li key={idx} className="text-xs sm:text-sm">
                      <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline hover:text-[#08f8ff] transition-colors break-words"
                      >
                        {name}
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
            )}
            {codeExample && (
              <section className="mb-4 sm:mb-5">
                <h4 className="text-[#00ffae] font-bold mb-2 text-sm sm:text-base">Sample Code</h4>
                <CodeSnippet code={codeExample} />
              </section>
            )}
            {extras && (
              <section className="mb-2">
                {extras}
              </section>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.li>
  );
};

const AppDevTasks = () => {
  return (
    <div className="relative min-h-screen px-4 py-6 sm:p-8 md:p-12 lg:p-16 text-white">
      <ParticleBG />
      <motion.header 
        initial={{ opacity: 0, y: -80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, type: "spring" }}
        className="mb-8 sm:mb-12 text-center"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-[#00ffae] via-white to-[#08f8ff] bg-clip-text text-transparent leading-tight">
          <FaMobileAlt className="inline-block mr-2 sm:mr-3 text-[#00ffae] align-top" />
          <span className="block sm:inline mt-2 sm:mt-0">App Development Tasks</span>
          <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-1 sm:mt-0">Music Player</span>
        </h1>
        <p className="mt-4 sm:mt-6 text-base sm:text-lg lg:text-xl max-w-xs sm:max-w-2xl lg:max-w-3xl mx-auto text-gray-300 leading-relaxed px-2">
          Create a progressive music player app—from basic UI to advanced features like database integration, song uploads, playlists, and synced lyrics highlighting.
        </p>
      </motion.header>

      <motion.ul layout className="space-y-8 sm:space-y-12 lg:space-y-16 max-w-xs sm:max-w-2xl lg:max-w-4xl mx-auto">
        {tasks.map((task, idx) => (
          <TaskCard key={idx} {...task} />
        ))}
      </motion.ul>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="mt-12 sm:mt-16 lg:mt-20 text-center text-2xl sm:text-3xl lg:text-5xl font-bold text-[#00ffae] animate-pulse"
      >
        Happy Coding! 🎵
      </motion.div>
    </div>
  );
};

export default AppDevTasks;