import { motion } from "framer-motion";

const CardContainer = () => {
  return (
    <div className="w-full min-h-screen flex justify-center items-center py-8 sm:py-12 md:py-16 lg:py-20">
      <div className="w-full max-w-xs sm:max-w-2xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ amount: 0.3, once: true }}
          className="relative bg-gradient-to-br from-black via-gray-900 to-black border-2 border-[#00ffae] rounded-xl sm:rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16 text-center shadow-2xl"
          style={{
            boxShadow: "0 0 30px rgba(0, 255, 174, 0.3), 0 0 60px rgba(0, 255, 174, 0.1)",
          }}
        >
          {/* Animated background glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#00ffae]/5 to-transparent rounded-xl sm:rounded-2xl md:rounded-3xl animate-pulse" />
          
          {/* Content */}
          <div className="relative z-10">
            {/* Main heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-4 sm:mb-6 md:mb-8 bg-gradient-to-r from-[#00ffae] via-white to-[#00ffae] bg-clip-text text-transparent"
              style={{
                backgroundSize: "200% 100%",
                animation: "gradient-shift 3s ease-in-out infinite",
              }}
            >
              BYTE 2025 TASKS
            </motion.h1>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8">
            
              <motion.a
                href="/tasks"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                viewport={{ once: true }}
                className="w-full sm:w-auto bg-gradient-to-r from-[#00ffae] to-[#08f8ff] text-black py-3 sm:py-4 px-6 sm:px-8 md:px-10 rounded-lg md:rounded-xl text-sm sm:text-base md:text-lg font-semibold transition-all duration-300 hover:brightness-110 focus:ring-2 focus:ring-[#00ffae] focus:outline-none shadow-xl"
              >
                Check Out Tasks for 2025
              </motion.a>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-4 right-4 w-2 h-2 sm:w-3 sm:h-3 bg-[#00ffae] rounded-full animate-pulse" />
            <div className="absolute bottom-4 left-4 w-2 h-2 sm:w-3 sm:h-3 bg-[#00ffae] rounded-full animate-pulse" style={{ animationDelay: "1s" }} />
          </div>
        </motion.div>
      </div>

      {/* CSS for gradient animation */}
      <style jsx>{`
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
      `}</style>
    </div>
  );
};

export default CardContainer;