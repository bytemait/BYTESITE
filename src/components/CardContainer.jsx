import { useScroll, useTransform, motion, easeInOut, delay } from "framer-motion";
import { useSpring } from "framer-motion";
import { useRef } from "react";

const CardContainer = () => {
  const ref = useRef(null);
  const textRef1 = useRef(null);
  const textRef2 = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

const textX1 = useTransform(scrollYProgress, [0.3, 0.6], [-300, 0]);
const textOpacity1 = useTransform(scrollYProgress, [0.3, 0.6], [0, 1]);

const textX2 = useTransform(scrollYProgress, [0.3, 0.9], [300, 0]);
const textOpacity2 = useTransform(
  scrollYProgress,
  [0.0, 0.49, 0.5, 0.9],
  [0, 0, 0, 1]
);

  const rotate = useTransform(scrollYProgress, [0.6, 0.9], ["0deg", "-15deg"]);

  return (
    <div className="w-full min-h-[180vh] flex justify-center">
      <div
        className="sticky top-0 h-screen w-full flex items-center justify-center"
        style={{ perspective: "1000px" }}
      >
        <div
          ref={ref}
          className="w-full h-full flex items-center justify-center"
        >
          <motion.div
            initial={{ opacity: 1, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeInOut", delay: 0.5 }}
            viewport={{ amount: 0.5, once: true }}
            style={{
              rotate,
              transformOrigin: "center center",
              border: "2px solid #00ffae",
              minHeight: "80vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              background: "linear-gradient(135deg, #000000, #0a0a0a)",
              padding: "2rem",
              borderRadius: "1rem",
              overflow: "hidden",
              maxWidth: "1200px",
              boxShadow: "0 0 20px #00ffae, 0 0 40px #00ffae",
            }}
            className="py-16 px-4 md:px-12 lg:px-24 rounded-xl w-full"
          >
            <motion.div
              ref={textRef1}
              className="text-3xl md:text-5xl lg:text-6xl text-center leading-tight mb-12 font-bold tracking-tight bg-gradient-to-r from-[#00ffae] via-white to-[#00ffae] bg-clip-text text-transparent"
              style={{
                opacity: textOpacity1,
                x: textX1,
                backgroundSize: "400% 100%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
              transition={{ ease: easeInOut, duration: 1.5 }}
            >
              Harvesting Insights from
            </motion.div>

            <motion.div
              ref={textRef2}
              className="text-3xl md:text-5xl lg:text-6xl text-center leading-tight mb-12 font-bold tracking-tight bg-gradient-to-r from-[#00ffae] via-white to-[#00ffae] bg-clip-text text-transparent"
              style={{
                x: textX2,
                opacity: textOpacity2,
                backgroundSize: "400% 100%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
              transition={{ duration: 1, ease: "easeInOut" }}
              viewport={{ once: true, amount: 0.5 }}
            >
              Diligent Endeavours
            </motion.div>

            <div className="flex flex-col items-center gap-6">
              <motion.a
                href="https://github.com/bytemait"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black text-white py-3 px-8 border-2 border-green-500 rounded-md text-lg font-semibold transform transition-transform duration-300 hover:scale-105 hover:shadow-lg focus:ring-2 focus:ring-green-500"
                style={{
                  boxShadow: "0 0 15px rgba(0, 255, 0, 0.6)",
                }}
                initial={{ opacity: 0, y: 100, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 1.2,
                  type: "spring",
                  stiffness: 200,
                  damping: 20,
                }}
                whileHover={{ scale: 1.1 }}
                viewport={{ once: true, amount: 0.5 }}
              >
                Visit Our GitHub
              </motion.a>

              <motion.a
                href="/tasks"
                className="bg-black text-white py-3 px-8 border-2 border-green-500 rounded-md text-lg font-semibold transform transition-transform duration-300 hover:scale-105 hover:shadow-lg focus:ring-2 focus:ring-green-500"
                style={{
                  boxShadow: "0 0 15px rgba(0, 255, 0, 0.6)",
                }}
                initial={{ opacity: 0, y: 100, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 1.2,
                  type: "spring",
                  stiffness: 200,
                  damping: 20,
                }}
                whileHover={{ scale: 1.1 }}
                viewport={{ once: true, amount: 0.5 }}
              >
                Check Out Tasks for 2025
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CardContainer;
