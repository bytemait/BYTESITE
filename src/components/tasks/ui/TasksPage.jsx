import React from "react";
import TaskCard from "./TaskCard";
import { motion } from "framer-motion";
import { FaClock, FaCalendarAlt, FaExclamationTriangle } from "react-icons/fa";

const tasks = [
	{
		id: 1,
		title: "Web Development",
		image: "/tasks/webd.jpg",
		link: "/tasks/webd",
		duration: "7 days",
		difficulty: "Intermediate",
	},
	{
		id: 2,
		title: "App Development",
		image: "/tasks/appd.jpg",
		link: "/tasks/appd",
		duration: "10 days",
		difficulty: "Advanced",
	},
	{
		id: 3,
		title: "Machine Learning",
		image: "/tasks/ml.jpg",
		link: "/tasks/ml",
		duration: "14 days",
		difficulty: "Advanced",
	},
	{
		id: 4,
		title: "Mechatronics",
		image: "/tasks/iot.jpg",
		link: "/tasks/mechatronics",
		duration: "12 days",
		difficulty: "Intermediate",
	},
	{
		id: 5,
		title: "Creative Outreach",
		image: "/tasks/video.jpg",
		link: "/tasks/creative-outreach",
		duration: "5 days",
		difficulty: "Beginner",
	},
	{
		id: 6,
		title: "CyberSecurity",
		image: "/tasks/cybersec.jpg",
		link: "/tasks/cybersecurity",
		duration: "8 days",
		difficulty: "Advanced",
	},
];

function ParticleBG() {
	// Add animated gradient or SVG particles for extra visual flair
	return (
		<div className="fixed inset-0 -z-10 pointer-events-none select-none">
			<svg width="100%" height="100%">
				<circle cx="8%" cy="18%" r="40" fill="#00ffae44">
					<animate
						attributeName="cy"
						values="18%;40%;18%"
						dur="5s"
						repeatCount="indefinite"
					/>
				</circle>
				<circle cx="92%" cy="80%" r="26" fill="#08f8ff55">
					<animate
						attributeName="cy"
						values="80%;60%;80%"
						dur="6s"
						repeatCount="indefinite"
					/>
				</circle>
				<circle cx="70%" cy="10%" r="18" fill="#00ffd244">
					<animate
						attributeName="cx"
						values="70%;60%;70%"
						dur="7s"
						repeatCount="indefinite"
					/>
				</circle>
			</svg>
		</div>
	);
}

function TasksPage() {
	return (
		<div className="relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-[#00ffae] flex flex-col items-center pb-16 pt-28 overflow-x-hidden">
			<ParticleBG />
			<motion.h1
				initial={{ opacity: 0, y: -60, scale: 0.9 }}
				animate={{ opacity: 1, y: 0, scale: 1 }}
				transition={{ duration: 1, type: "spring" }}
				className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold from-[#00ffae] via-white to-[#08f8ff] bg-gradient-to-r text-transparent bg-clip-text mb-4 sm:mb-6 md:mb-8 drop-shadow text-center px-4"
			>
				Recruitment Tasks
			</motion.h1>
			<motion.p
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 1, delay: 0.4 }}
				className="text-lg md:text-2xl text-gray-200 mb-6 max-w-2xl text-center px-4"
			>
				Select a domain, complete the challenge, and become part of
				BYTE!
			</motion.p>

			{/* Deadline Warning Card */}
			<motion.div
				initial={{ opacity: 0, y: 20, scale: 0.95 }}
				animate={{ opacity: 1, y: 0, scale: 1 }}
				transition={{ duration: 0.8, delay: 0.5 }}
				className="mb-6 bg-gradient-to-r from-red-900/40 to-orange-900/40 border-2 border-red-500/60 rounded-xl px-6 py-4 backdrop-blur-sm max-w-2xl mx-4"
				style={{
					boxShadow: "0 0 20px rgba(239, 68, 68, 0.3)",
				}}
			>
				<div className="flex items-center justify-center gap-3 text-red-400 font-bold text-center">
					<FaExclamationTriangle className="text-xl animate-pulse" />
					<div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
						<span className="text-sm sm:text-base">
							⏰ DEADLINE:
						</span>
						<span className="text-lg sm:text-xl text-red-300">
							September 12, 2025 • 11:59 PM
						</span>
					</div>
					<FaExclamationTriangle className="text-xl animate-pulse" />
				</div>
			</motion.div>

			{/* Duration Info Card */}

			<motion.div
				initial="hidden"
				animate="visible"
				variants={{
					hidden: {},
					visible: { transition: { staggerChildren: 0.12 } },
				}}
				className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-14 md:gap-10 w-full max-w-7xl px-4"
			>
				{tasks.map((task) => (
					<motion.div
						key={task.id}
						initial={{ opacity: 0, y: 50, scale: 0.95 }}
						animate={{ opacity: 1, y: 0, scale: 1 }}
						transition={{ duration: 1.1, type: "spring" }}
					>
						<TaskCard
							title={task.title}
							image={task.image}
							link={task.link}
							duration={task.duration}
							difficulty={task.difficulty}
						/>
					</motion.div>
				))}
			</motion.div>
			<motion.div
				initial={{ opacity: 0, scale: 0.9 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 1, delay: 0.8 }}
				className="mt-16 text-4xl font-bold text-[#00ffae] animate-pulse"
			>
				Happy Hacking!
			</motion.div>
		</div>
	);
}

export default TasksPage;
