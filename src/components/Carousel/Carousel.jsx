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

  const translateX = useSpring(useTransform(scrollYProgress, [0, 1], [0, 400]), springConfig);
  const translateXReverse = useSpring(useTransform(scrollYProgress, [0, 1], [0, -300]), springConfig);
  const rotateX = useSpring(useTransform(scrollYProgress, [0, 0.2], [15, 0]), springConfig);
  const opacity = useSpring(useTransform(scrollYProgress, [0, 0.2], [0.2, 1]), springConfig);
  const rotateZ = useSpring(useTransform(scrollYProgress, [0, 0.2], [20, 0]), springConfig);
  const translateY = useSpring(useTransform(scrollYProgress, [0, 0.2], [-700, 500]), springConfig);
  return (
    <div
      ref={ref}
      className="w-full max-w-7xl mx-auto py-8 overflow-visible antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]">
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className="">
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-8 mb-8">
          {firstRow.map((project) => (
            <ProjectCard project={project} translate={translateX} key={project.id} />
          ))}
        </motion.div>
        <motion.div className="flex flex-row space-x-8 ">
          {secondRow.map((project) => (
            <ProjectCard project={project} translate={translateXReverse} key={project.id} />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};



export default Carousel;

export const ProjectCard = ({ project, translate }) => {
  const fixedSize = 180;
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
            height={fixedSize}
            width={fixedSize}
            style={{ height: fixedSize, width: fixedSize }}
            className="object-contain rounded-lg bg-black/30"
            alt={project.textAbove}
          />
        </div>
        <h2 className="text-xl font-bold text-white mb-1 text-center w-full truncate">{project.textAbove}</h2>
        <a href="#" className="text-green-400 underline text-base text-center w-full">{project.textBelow}</a>
      </div>
    </motion.div>
  );
};


