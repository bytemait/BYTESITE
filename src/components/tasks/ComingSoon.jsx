import React from "react";
import { FaInstagram, FaTasks } from "react-icons/fa"; // Import icons from react-icons

const ComingSoon = () => (
  <div className="flex items-center justify-center min-h-screen bg-black text-white px-8 py-12">
    <div className="text-center">
      {/* Main Coming Soon Message */}
      <h1 className="text-6xl font-bold text-green-400 mb-8 animate-pulse">
        Coming Soon!!
      </h1>

      {/* Additional Information */}
      <p className="text-xl mb-6">
        Meanwhile, checkout other tasks or follow BYTE on Instagram!
      </p>

      {/* Action Buttons */}
      <div className="flex items-center justify-center mt-6 gap-4">
        {/* Button to Check Other Tasks */}
        <a
          href="/tasks"
          className="flex items-center bg-green-500 text-black px-4 py-2 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:bg-green-400"
        >
          <FaTasks className="mr-2" />
          Check Other Tasks
        </a>

        {/* Instagram Follow Button */}
        <a
          href="https://www.instagram.com/byte__official/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center bg-green-500 text-black px-4 py-2 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:bg-green-400"
        >
          <FaInstagram className="mr-2" />
          Follow on Instagram
        </a>
      </div>
    </div>
  </div>
);

export default ComingSoon;
