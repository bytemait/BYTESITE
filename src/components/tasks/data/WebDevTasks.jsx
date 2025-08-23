import React, { useEffect, useState } from "react";
import { FaLaptopCode, FaGlobe, FaRocket, FaCheckCircle, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

// Background with subtle floating particles and soft gradient overlay
const ParticleBG = () => (
  <div className="fixed inset-0 -z-20 pointer-events-none select-none bg-gradient-to-br from-black via-gray-900 to-[#00ffae]">
    <svg width="100%" height="100%" className="opacity-20">
      {[...Array(25)].map((_, i) => (
        <circle
          key={i}
          cx={`${Math.random() * 100}%`}
          cy={`${Math.random() * 100}%`}
          r={Math.random() * 3 + 0.5}
          fill="#00ffaeaa"
        >
          <animate
            attributeName="cy"
            values={`${Math.random() * 100}%;${Math.random() * 100}%;${Math.random() * 100}%`}
            dur={`${Math.random() * 10 + 8}s`}
            repeatCount="indefinite"
          />
          <animate 
            attributeName="opacity"
            values="0.1;0.7;0.1"
            dur={`${Math.random() * 5 + 3}s`}
            repeatCount="indefinite"
          />
        </circle>
      ))}
    </svg>
  </div>
);

// Code snippet component with typing effect & styled border
const CodeSnippet = ({ code }) => {
  const [text, setText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index >= code.length) {
        clearInterval(interval);
        return;  // Prevent setting state if out-of-bounds
      }
      setText(prev => prev + code[index]);
      index++;
    }, 25);
    return () => clearInterval(interval);
  }, [code]);


  return (
    <pre className="bg-gray-900 bg-opacity-80 text-[#00ffae] p-4 rounded-xl font-mono max-h-72 overflow-auto border border-[#00ffaeaa] shadow-glow">
      {text}
      <span className="animate-pulse">|</span>
    </pre>
  );
};

// Each task card with collapse and progress toggle
const TaskCard = ({ taskNumber, title, description, icon: Icon, difficulty, time, technologies, resources, tips, codeExample }) => {
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
      whileHover={{ scale: 1.04, boxShadow: "0 12px 30px #00ffae88" }}
      className="relative bg-black bg-opacity-60 backdrop-blur-md border border-[#00ffae55] rounded-3xl p-8 shadow-xl cursor-pointer select-none"
    >
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Icon className="text-4xl text-[#00ffae] drop-shadow-[0_0_10px_#00ffae]" />
          <div>
            <h3 className="text-3xl font-extrabold bg-gradient-to-r from-[#00ffae] to-[#08f8ff] bg-clip-text text-transparent">
              {title}
            </h3>
            <div className="flex gap-3 mt-1 text-sm text-gray-300 font-mono">
              <span className={`px-3 py-1 rounded-full text-white ${difficultyColors[difficulty] || difficultyColors.beginner}`}>
                {difficulty}
              </span>
              <span className="mt-1">⏰ {time}</span>
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

      <p className="mt-6 text-white font-light leading-relaxed">{description}</p>

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

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, height: 0, marginTop: 0 }}
            animate={{ opacity: 1, height: "auto", marginTop: 24 }}
            exit={{ opacity: 0, height: 0, marginTop: 0 }}
            transition={{ duration: 0.4 }}
            className="overflow-hidden text-gray-300 font-mono"
          >
            <section className="mt-4">
              <h4 className="text-[#00ffae] font-bold mb-2">Resources</h4>
              <ul className="list-disc pl-5 space-y-1">
                {resources.map(({ name, url }, i) => (
                  <li key={i}>
                    <a href={url} target="_blank" rel="noopener noreferrer" className="underline hover:text-[#08f8ff]">
                      {name}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
            <section className="mt-6">
              <h4 className="text-[#00ffae] font-bold mb-2">Implementation Tips</h4>
              <p>{tips}</p>
            </section>
            {codeExample && (
              <section className="mt-6">
                <h4 className="text-[#00ffae] font-bold mb-2">Sample Code</h4>
                <CodeSnippet code={codeExample} />
              </section>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.li>
  );
};


const WebDevTasks = () => {
  const tasks = [
    {
      taskNumber: "01",
      title: "YouTube & GitHub Subscription Verification",
      description:
        "Build a gated page that restricts access to users subscribed to BYTE’s YouTube channel or following the GitHub account.",
      icon: FaGlobe,
      difficulty: "intermediate",
      time: "4-6 hours",
      technologies: ["React", "OAuth", "Passport.js", "Node.js"],
      resources: [
        { name: "YouTube API Docs", url: "https://developers.google.com/youtube/v3/docs" },
        { name: "GitHub OAuth Docs", url: "https://docs.github.com/en/developers/apps/building-oauth-apps" },
      ],
      tips: "Use Passport.js strategies for OAuth to simplify GitHub and YouTube authentication flows.",
      codeExample: `/// Setup Passport GitHub strategy\npassport.use(new GitHubStrategy({\n  clientID: process.env.GITHUB_ID,\n  clientSecret: process.env.GITHUB_SECRET,\n  callbackURL: "/auth/github/callback"\n}, (accessToken, refreshToken, profile, done) => {\n  // Verify user follow here\n  done(null, profile);\n}));`
    },
    {
      taskNumber: "02",
      title: "Deploy Publicly",
      description:
        "Deploy your subscription verification app securely on platforms like Vercel or Render, ensuring scalability and data protection.",
      icon: FaRocket,
      difficulty: "advanced",
      time: "6-8 hours",
      technologies: ["Vercel", "Docker", "CI/CD", "Monitoring"],
      resources: [
        { name: "Vercel Docs", url: "https://vercel.com/docs" },
        { name: "Render Docs", url: "https://render.com/docs" }
      ],
      tips: "Setup environment variables, enforce HTTPS and robust monitoring for production apps.",
      codeExample: `// vercel.json example\n{\n  "version": 2,\n  "builds": [{ "src": "index.js", "use": "@vercel/node" }],\n  "routes": [{ "src": "/(.*)", "dest": "/" }],\n  "env": { "NODE_ENV": "production" }\n}`
    }
  ];

  return (
    <div className="relative min-h-screen p-8 md:p-16 text-white">
      <ParticleBG />
      <motion.header 
        initial={{ opacity: 0, y: -80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, type: "spring" }}
        className="mb-12 text-center"
      >
        <h1 className="text-6xl font-extrabold bg-gradient-to-r from-[#00ffae] via-white to-[#08f8ff] bg-clip-text text-transparent">
          <FaLaptopCode className="inline-block mr-4 text-[#00ffae]" />
          Web Development Tasks
        </h1>
        <p className="mt-4 text-xl max-w-3xl mx-auto text-gray-300">
          Earn your spot in BYTE by completing these challenges. Learn authentication, deployment, and more.
        </p>
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
        className="mt-20 text-center text-5xl font-bold text-[#00ffae] animate-pulse"
      >
        Happy Coding! 🚀
      </motion.div>
    </div>
  );
};

export default WebDevTasks;

