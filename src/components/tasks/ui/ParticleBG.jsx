// 🌟 Particle BG for neon feel
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

export default ParticleBG;