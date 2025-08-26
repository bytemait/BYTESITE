import React from "react";
import { FaInstagram, FaRocket } from "react-icons/fa";
import { motion } from "framer-motion";

// Enhanced Particle Background with Matrix-style effect
const ParticleBG = () => (
  <div className="fixed inset-0 -z-10 pointer-events-none select-none overflow-hidden">
    <svg width="100%" height="100%" className="opacity-30">
      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <circle 
          key={i}
          cx={`${Math.random() * 100}%`}
          cy={`${Math.random() * 100}%`}
          r={Math.random() * 4 + 1}
          fill="#00ffae88"
        >
          <animate 
            attributeName="cy" 
            values={`${Math.random() * 100}%;${Math.random() * 100}%;${Math.random() * 100}%`} 
            dur={`${Math.random() * 15 + 10}s`} 
            repeatCount="indefinite"
          />
          <animate 
            attributeName="opacity" 
            values="0.3;1;0.3" 
            dur={`${Math.random() * 4 + 3}s`} 
            repeatCount="indefinite"
          />
          <animate
            attributeName="r"
            values={`${Math.random() * 4 + 1};${Math.random() * 6 + 2};${Math.random() * 4 + 1}`}
            dur={`${Math.random() * 5 + 4}s`}
            repeatCount="indefinite"
          />
        </circle>
      ))}
      
      {/* Connecting lines effect */}
      {[...Array(8)].map((_, i) => (
        <line
          key={`line-${i}`}
          x1={`${Math.random() * 100}%`}
          y1={`${Math.random() * 100}%`}
          x2={`${Math.random() * 100}%`}
          y2={`${Math.random() * 100}%`}
          stroke="#00ffae22"
          strokeWidth="1"
        >
          <animate
            attributeName="opacity"
            values="0;0.6;0"
            dur={`${Math.random() * 8 + 6}s`}
            repeatCount="indefinite"
          />
        </line>
      ))}
    </svg>
    
    {/* Grid overlay */}
    <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,174,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,174,0.02)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
  </div>
);

// Floating geometric shapes
const FloatingShapes = () => (
  <div className="fixed inset-0 -z-20 pointer-events-none">
    {[...Array(6)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute opacity-10"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
        }}
        animate={{
          x: [0, 30, -20, 0],
          y: [0, -40, 20, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: Math.random() * 20 + 15,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <div 
          className="w-16 h-16 border-2 border-[#00ffae] rounded-lg"
          style={{
            transform: `rotate(${Math.random() * 45}deg)`,
          }}
        />
      </motion.div>
    ))}
  </div>
);

const ComingSoon = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-[#001a0d] flex items-center justify-center px-8 py-12 overflow-hidden">
      <ParticleBG />
      <FloatingShapes />
      
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Animated rocket icon */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-8"
        >
          <motion.div
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="inline-block"
          >
            <FaRocket className="text-6xl text-[#00ffae] drop-shadow-[0_0_20px_#00ffae]" />
          </motion.div>
        </motion.div>

        {/* Main heading with enhanced animation */}
        <motion.h1 
          initial={{ scale: 0.8, opacity: 0, y: 30 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3, type: "spring", bounce: 0.4 }}
          className="text-7xl md:text-8xl font-extrabold mb-8 relative"
          style={{
            background: "linear-gradient(45deg, #00ffae, #08f8ff, #00ffae)",
            backgroundSize: "200% 200%",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            animation: "gradient 4s ease infinite",
            textShadow: "0 0 30px #00ffae66, 0 0 60px #00ffae44",
            filter: "drop-shadow(0 0 10px #00ffae66)"
          }}
        >
          Coming Soon!
        </motion.h1>

        {/* Pulsing glow effect around text */}
        <motion.div
          className="absolute inset-0 rounded-full blur-3xl opacity-20 bg-[#00ffae]"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2] 
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Subtitle with typewriter effect */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-xl md:text-2xl mb-12 text-gray-200 max-w-2xl mx-auto leading-relaxed"
        >
          We're crafting something{" "}
          <span className="text-[#00ffae] font-semibold">extraordinary</span>.
          <br />
          Meanwhile, stay connected with BYTE's journey!
        </motion.p>

        {/* Enhanced Instagram button */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          whileHover={{ 
            scale: 1.1, 
            boxShadow: "0 0 25px #00ffae88",
          }}
          whileTap={{ scale: 0.95 }}
          className="inline-block"
        >
          <a
            href="https://www.instagram.com/byte__official/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-gradient-to-r from-[#00ffae] to-[#08f8ff] text-black px-8 py-4 rounded-2xl font-bold text-lg shadow-xl transition-all duration-300 hover:brightness-110"
          >
            <FaInstagram className="text-2xl" />
            Follow BYTE on Instagram
          </a>
        </motion.div>

        {/* Loading dots animation */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="flex justify-center space-x-2 mt-12"
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-3 h-3 bg-[#00ffae] rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.7, 1, 0.7]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2
              }}
            />
          ))}
        </motion.div>

        {/* Fun message */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="mt-8 text-sm text-gray-400 italic"
        >
          "Great things take time... and amazing code!" 💻✨
        </motion.p>
      </div>

      {/* CSS for gradient animation */}
      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </div>
  );
};

export default ComingSoon;
