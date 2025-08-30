import React from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import buttonsData from "./data.js";

const Carousel = () => {
  // Use only the first 8 projects for 2 rows
  const projects = buttonsData.slice(0, 8);
  const firstRow = projects.slice(0, 4);
  const secondRow = projects.slice(4, 8);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  // Desktop animations
  const translateX = useSpring(useTransform(scrollYProgress, [0, 1], [0, 400]), springConfig);
  const translateXReverse = useSpring(useTransform(scrollYProgress, [0, 1], [0, -300]), springConfig);
  const rotateX = useSpring(useTransform(scrollYProgress, [0, 0.2], [15, 0]), springConfig);
  const opacity = useSpring(useTransform(scrollYProgress, [0, 0.2], [0.2, 1]), springConfig);
  const rotateZ = useSpring(useTransform(scrollYProgress, [0, 0.2], [20, 0]), springConfig);
  const translateY = useSpring(useTransform(scrollYProgress, [0, 0.2], [-700, 500]), springConfig);

  // Mobile animations - much gentler
  const mobileOpacity = useSpring(useTransform(scrollYProgress, [0, 0.4], [0.5, 1]), springConfig);
  const mobileY = useSpring(useTransform(scrollYProgress, [0, 0.3], [100, 0]), springConfig);

  return (
    <div
      ref={ref}
      className="w-full mx-auto py-6 px-4 antialiased relative flex flex-col">
      
      {/* Mobile Layout - 2x2 Grid */}
      <div className="block md:hidden">
        <motion.div
          style={{
            opacity: mobileOpacity,
            y: mobileY,
          }}
          className="space-y-6">
          
          {/* First 2 cards */}
          <div className="flex justify-center space-x-4">
            {firstRow.slice(0, 2).map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: index * 0.2, duration: 0.8, ease: "easeOut" }}
              >
                <MobileProjectCard project={project} />
              </motion.div>
            ))}
          </div>
          
          {/* Second 2 cards */}
          <div className="flex justify-center space-x-4">
            {firstRow.slice(2, 4).map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: (index + 2) * 0.2, duration: 0.8, ease: "easeOut" }}
              >
                <MobileProjectCard project={project} />
              </motion.div>
            ))}
          </div>
          
          {/* Third 2 cards */}
          <div className="flex justify-center space-x-4">
            {secondRow.slice(0, 2).map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: (index + 4) * 0.2, duration: 0.8, ease: "easeOut" }}
              >
                <MobileProjectCard project={project} />
              </motion.div>
            ))}
          </div>
          
          {/* Fourth 2 cards */}
          <div className="flex justify-center space-x-4">
            {secondRow.slice(2, 4).map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: (index + 6) * 0.2, duration: 0.8, ease: "easeOut" }}
              >
                <MobileProjectCard project={project} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Desktop Layout - Original Carousel */}
      <div className="hidden md:block [perspective:1000px] [transform-style:preserve-3d]">
        <motion.div
          style={{
            rotateX,
            rotateZ,
            translateY,
            opacity,
          }}
          className="">
          <motion.div className="flex flex-row-reverse justify-center space-x-reverse space-x-8 mb-8">
            {firstRow.map((project) => (
              <ProjectCard project={project} translate={translateX} key={project.id} />
            ))}
          </motion.div>
          <motion.div className="flex flex-row justify-center space-x-8">
            {secondRow.map((project) => (
              <ProjectCard project={project} translate={translateXReverse} key={project.id} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Carousel;

// Mobile-optimized card component
export const MobileProjectCard = ({ project }) => {
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="bg-[#101c13] rounded-xl shadow-lg relative flex flex-col items-center justify-between
        w-40 h-56 sm:w-44 sm:h-64
        p-4 border border-green-900 hover:border-green-700 transition-all duration-200">
      
      <div className="flex flex-col items-center justify-center h-full w-full space-y-3">
        <div className="flex justify-center items-center flex-1">
          <img
            src={project.image}
            className="object-contain rounded-lg bg-black/30 w-20 h-20 sm:w-24 sm:h-24"
            alt={project.textAbove}
          />
        </div>
        
        <div className="flex flex-col items-center space-y-2 text-center">
          <h2 className="text-sm sm:text-base font-bold text-white leading-tight px-2 line-clamp-2">
            {project.textAbove}
          </h2>
          <a 
            href={project.link} 
            className="text-green-400 underline text-xs sm:text-sm hover:text-green-300 transition-colors px-2 truncate w-full"
          >
            {project.textBelow}
          </a>
        </div>
      </div>
    </motion.div>
  );
};

// Desktop card component
export const ProjectCard = ({ project, translate }) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={project.id}
      className="group/product h-96 w-64 bg-[#101c13] rounded-xl shadow-lg relative shrink-0 flex flex-col items-center justify-center p-4 border border-green-900">
      <div className="flex flex-col items-center justify-center h-full w-full">
        <div className="w-full flex justify-center items-center mb-4">
          <img
            src={project.image}
            className="object-contain rounded-lg bg-black/30 w-44 h-44"
            alt={project.textAbove}
          />
        </div>
        <h2 className="text-xl font-bold text-white mb-1 text-center w-full truncate">
          {project.textAbove}
        </h2>
        <a 
          href={project.link} 
          className="text-green-400 underline text-base text-center w-full hover:text-green-300 transition-colors"
        >
          {project.textBelow}
        </a>
      </div>
    </motion.div>
  );
};