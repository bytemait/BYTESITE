import { useRef } from "react";
import { Rocket } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

const ProjectsContainer = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start 30%", "end 30%"],
  });

  const x = useTransform(scrollYProgress, [0, 0.4], ["100%", "0%"]);

  const rotate0 = useTransform(scrollYProgress, [0, 0.4], ["0deg", "-6deg"]);
  const rotate1 = useTransform(scrollYProgress, [0, 0.4], ["0deg", "4deg"]);
  const rotate2 = useTransform(scrollYProgress, [0, 0.4], ["0deg", "-8deg"]);

  return (
    <div ref={targetRef} className="bg-black pt-8 min-h-[300vh]">
      <div className="min-h-200vh">
        <motion.h1
          className="sticky top-1/2 text-8xl font-extrabold text-center mb-12 bg-gradient-to-r from-[#00ffae] via-white to-[#00ffae] bg-clip-text text-transparent tracking-wide"
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ amount: 0.5 }}
          style={{
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textShadow:
              "2px 2px 0 #00ffae, 4px 4px 0 #007f5f, 6px 6px 12px #00ffae",
            transform: "rotateX(5deg) rotateY(-5deg)",
            perspective: "1000px",
          }}
        >
          Our Projects
        </motion.h1>
      </div>
      <div className="sticky top-1/2 -translate-y-1/2">
        <motion.div
          style={{ x }}
          className="flex gap-24 p-4 justify-center items-center"
        >
          <motion.div
            style={{ rotate: rotate0 }}
            className="bg-gradient-to-b from-[#0f2f24] via-[#10241e] to-black p-6 rounded-lg w-80 h-[400px] flex flex-col justify-between border border-gray-700 shadow-lg hover:shadow-green-500/50 transition-shadow duration-300"
            whileInView={{ scale: 1.3 }}
            transition={{ duration: 0.3 }}
            viewport={{ amount: 0.5 }}
          >
            <div>
              <div className="flex items-center gap-4">
                <Rocket className="w-6 h-6 text-[#00ffae]" />
                <h2 className="text-xl text-[#00ffae] font-bold">ThothBox</h2>
              </div>
              <p className="mt-4 text-gray-400">
                ThothBox is a proof-of-concept for a handheld, ESP32-powered
                wireless security tool. It provides a framework for building
                features like wireless network scanning, jamming, and analysis.
              </p>
            </div>
            <button onClick={() => window.open('https://github.com/bytemait/ThothBox')}
            className="mt-4 bg-[#00ffae]/10 text-[#00ffae] border border-[#00ffae] py-2 px-4 rounded-md self-start hover:bg-[#00ffae]/20 transition-colors duration-300 hover:shadow-[0_0_10px_#00ffae]">
              Learn More
            </button>
          </motion.div>
          <motion.div
            style={{ rotate: rotate1 }}
            className="bg-gradient-to-b from-[#0f2f24] via-[#10241e] to-black p-6 rounded-lg w-80 h-[400px] flex flex-col justify-between border border-gray-700 shadow-lg hover:shadow-green-500/50 transition-shadow duration-300"
            whileInView={{ scale: 1.3 }}
            transition={{ duration: 0.3 }}
            viewport={{ amount: 0.5 }}
          >
            <div>
              <div className="flex items-center gap-4">
                <Rocket className="w-6 h-6 text-[#00ffae]" />
                <h2 className="text-xl text-[#00ffae] font-bold">Progmatic</h2>
              </div>
              <p className="mt-4 text-gray-400">
                Welcome to the coding arena, where algorithms meet ambition.
                This is more than just a platform; it's a crucible designed to
                forge your skills and test your limits. Step into the arena,
                challenge your peers, and prove your mettle in the heat of
                competition.
              </p>
            </div>
            <button onClick={() => window.open('https://github.com/bytemait/Progmatic')} className="mt-4 bg-[#00ffae]/10 text-[#00ffae] border border-[#00ffae] py-2 px-4 rounded-md self-start hover:bg-[#00ffae]/20 transition-colors duration-300 hover:shadow-[0_0_10px_#00ffae]">
              Learn More
            </button>
          </motion.div>
          <motion.div
            style={{ rotate: rotate2 }}
            className="bg-gradient-to-b from-[#0f2f24] via-[#10241e] to-black p-6 rounded-lg w-80 h-[400px] flex flex-col justify-between border border-gray-700 shadow-lg hover:shadow-green-500/50 transition-shadow"
            whileInView={{ scale: 1.3 }}
            transition={{ duration: 0.2 }}
            viewport={{ amount: 0.5 }}
          >
            <div>
              <div className="flex items-center gap-4">
                <Rocket className="w-6 h-6 text-[#00ffae]" />
                <h2 className="text-xl text-[#00ffae] font-bold">ERP Portal</h2>
              </div>
              <p className="mt-4 text-gray-400">
                A comprehensive and modern College ERP system. Your entire
                academic life, organized in one place. The student dashboard
                provides a central hub for managing everything from your profile
                and class schedule to grades, attendance, and assignments.
              </p>
            </div>
            <button onClick={() => window.open('https://github.com/bytemait/erp')} className="mt-4 bg-[#00ffae]/10 text-[#00ffae] border border-[#00ffae] py-2 px-4 rounded-md self-start hover:bg-[#00ffae]/20 transition-colors duration-300 hover:shadow-[0_0_10px_#00ffae]">
              Learn More
            </button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectsContainer;
