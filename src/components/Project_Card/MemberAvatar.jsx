import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, ChevronRight, Target } from "lucide-react";

export default function MemberAvatars({ members = [] }) {
  const [index, setIndex] = useState(0);

  if (!members.length) return null;

  const visibleCount = members.length < 4 ? members.length : 4; // number of avatars visible at once
  const total = members.length;

  const next = () => setIndex((prev) => (prev + 1) % total);
  const prev = () => setIndex((prev) => (prev - 1 + total) % total);

  // create a looped array for infinite effect
  const visibleMembers = Array.from({ length: visibleCount }, (_, i) => {
    return members[(index + i) % total];
  });

  return (
    <div className="relative flex items-center justify-start w-auto overflow-hidden">
      {/* left button */}
      <button
        onClick={prev}
        className="absolute left-0 z-10 p-2 text-white rounded-full transition-all duration-200"
      >
        <ChevronLeft size={20} />
      </button>

      {/* members : PS: SLIDING ANIMATION CAN BE IMPORVED*/}
      <div className="flex w-auto items-center gap-4 px-10">

          {visibleMembers.map((member, i) => (
            <a  target="_blank" href={`https://github.com/${member}`}>
              <motion.img
              key={`${member}-${i}`}
              src={`https://github.com/${member}.png?size=100`}
              alt={member}
              title={member}
              animate={{ scale: 1, x: 1}}
              transition={{ duration: 1, ease: "linear" }}
              className="size-12 rounded-full border border-gray-500 object-cover hover:scale-110 transition-transform duration-400"
            />    
            </a>
            
          ))}


      </div>

      {/* right button */}
      <button
        onClick={next}
        className="absolute right-0 z-10 p-2 bg-transparent  text-white rounded-full transition-all duration-200"
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
}
