import React from "react";
import { FaTasks } from "react-icons/fa";

const KeyTakeaways = () => (
  <div className="relative mx-auto max-w-4xl p-8 rounded-3xl bg-black bg-opacity-40 backdrop-blur-md border border-[#00ffaeaa] shadow-neon-green text-white">
    <h2 className="text-4xl font-extrabold uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#00ffae] via-white to-[#08f8ff] mb-6 tracking-wide underline decoration-[#00ffae99] decoration-4 underline-offset-8">
      Key Takeaways
    </h2>

    <div className="space-y-6 text-lg leading-relaxed">
      <p>
        These tasks challenge your skills across web, app, and backend development. Ensure your work delivers a <span className="font-semibold text-[#00ffae]">consistent</span> and <span className="font-semibold text-[#00ffae]">bug-free</span> experience that <span className="font-semibold text-[#00ffae]">scales well</span>.
      </p>
      <p>
        Follow <span className="font-semibold text-[#00ffae]">best practices</span> related to <span className="text-green-400">security</span>, <span className="text-green-400">performance</span>, and <span className="text-green-400">user experience</span>.
      </p>
    </div>

    <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-[#00ffae55] via-transparent to-[#00ffae55] border border-[#00ffaeaa] shadow-glow-green animate-pulse">
      <h3 className="text-2xl font-bold mb-3 text-[#00ffae]">Good Luck!</h3>
      <p className="text-base text-gray-300 max-w-xl">
        We are excited to see your implementations! Your effort, learning attitude, and adaptability within your tech stack will be valued.
        <br />
        <span className="text-green-300 block mt-2 font-semibold">
          Submit your work, even if incomplete — progress is what matters!
        </span>
      </p>
    </div>

    <a 
      href="https://forms.gle/QsXxKEV2gi2pg8yF7" 
      target="_blank" 
      rel="noopener noreferrer"
      className="mt-10 inline-flex items-center justify-center gap-3 bg-[#00ffae] text-black rounded-xl px-6 py-3 font-semibold text-lg shadow-neon-green transition-transform transform hover:scale-105 hover:brightness-110 mx-auto"
    >
      <FaTasks className="text-xl" />
      Submission Link
    </a>
  </div>
);

export default KeyTakeaways;
