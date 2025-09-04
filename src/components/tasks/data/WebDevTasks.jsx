import React, { useEffect, useState } from "react";
import {
	FaLaptopCode,
	FaCheckCircle,
	FaChevronDown,
	FaChevronUp,
	FaLock,
	FaGithub,
	FaCloud,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { WebDevTasks as tasks } from "../../../../tasks-2025";
import ParticleBG from "../ui/ParticleBG.jsx";

const TaskCard = ({
	taskNumber,
	title,
	description,
	icon: Icon,
	difficulty,
	time,
	technologies,
	requirements,
	bugsToAvoid,
	resources,
	extras,
}) => {
	const [expanded, setExpanded] = useState(false);
	const [completed, setCompleted] = useState(false);

	const difficultyColors = {
		beginner: "bg-green-600",
		intermediate: "bg-yellow-600",
		advanced: "bg-red-600",
	};

	return (
		<motion.li
			layout
			initial={{ opacity: 0, y: 40, scale: 0.95 }}
			animate={{ opacity: 1, y: 0, scale: 1 }}
			whileHover={{ scale: 1.02, boxShadow: "0 8px 20px #00ffae66" }}
			className="relative bg-black bg-opacity-60 backdrop-blur-md border border-[#00ffae55] rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-xl cursor-pointer select-none"
		>
			{/* Header Row */}
			<div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
				<div className="flex items-center gap-3 sm:gap-4">
					<Icon className="text-2xl sm:text-3xl md:text-4xl text-[#00ffae] drop-shadow-[0_0_10px_#00ffae] flex-shrink-0" />
					<div className="min-w-0 flex-1">
						<h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold bg-gradient-to-r from-[#00ffae] to-[#08f8ff] bg-clip-text text-transparent leading-tight">
							{title}
						</h3>
						<div className="flex flex-wrap gap-2 sm:gap-3 mt-1 text-xs sm:text-sm text-gray-300 font-mono items-center">
							<span
								className={`px-2 sm:px-3 py-1 rounded-full text-white text-xs ${difficultyColors[difficulty] || difficultyColors.beginner}`}
							>
								{difficulty}
							</span>
							<span className="flex items-center gap-1">
								<FaCloud className="text-sm sm:text-lg" />
								<span className="text-xs sm:text-sm">
									{time}
								</span>
							</span>
						</div>
					</div>
				</div>
				<button
					aria-label={
						completed ? "Mark as Incomplete" : "Mark as Complete"
					}
					onClick={(e) => {
						e.stopPropagation();
						setCompleted(!completed);
					}}
					className={`p-2 sm:p-3 rounded-full transition-colors flex-shrink-0 ${
						completed
							? "bg-green-500 text-black"
							: "bg-gray-800 hover:bg-gray-700 text-gray-300"
					}`}
				>
					<FaCheckCircle size={18} className="sm:w-5 sm:h-5" />
				</button>
			</div>

			{/* Description */}
			<p className="mt-4 sm:mt-6 text-sm sm:text-base text-white font-light leading-relaxed">
				{description}
			</p>

			{/* Tech tags */}
			<div className="mt-4 sm:mt-6 flex flex-wrap gap-2">
				{technologies.map((tech, idx) => (
					<span
						key={idx}
						className="bg-[#00ffae22] text-[#00ffae] px-2 sm:px-3 py-1 rounded-full font-semibold text-xs border border-[#00ffae44]"
					>
						{tech}
					</span>
				))}
			</div>

			{/* Expand/collapse button */}
			<button
				onClick={() => setExpanded(!expanded)}
				className="mt-6 sm:mt-8 w-full flex justify-center items-center gap-2 py-2.5 sm:py-3 rounded-xl bg-gradient-to-r from-[#00ffae] to-[#08f8ff] font-bold text-black shadow-glow hover:brightness-110 transition text-sm sm:text-base"
				aria-expanded={expanded}
			>
				{expanded ? (
					<>
						Hide Details <FaChevronUp className="w-4 h-4" />
					</>
				) : (
					<>
						Show Details <FaChevronDown className="w-4 h-4" />
					</>
				)}
			</button>

			{/* Expanded details */}
			<AnimatePresence>
				{expanded && (
					<motion.div
						initial={{ opacity: 0, height: 0, marginTop: 0 }}
						animate={{ opacity: 1, height: "auto", marginTop: 16 }}
						exit={{ opacity: 0, height: 0, marginTop: 0 }}
						transition={{ duration: 0.4 }}
						className="overflow-hidden text-gray-300 font-mono text-sm sm:text-base"
					>
						{requirements && (
							<section className="mb-4 sm:mb-5">
								<h4 className="text-[#00ffae] font-bold mb-2 text-sm sm:text-base">
									Key Requirements
								</h4>
								<ul className="list-disc pl-4 sm:pl-5 space-y-1 sm:space-y-2 text-xs sm:text-sm">
									{requirements.map((item, i) => (
										<li key={i}>{item}</li>
									))}
								</ul>
							</section>
						)}
						{bugsToAvoid && (
							<section className="mb-4 sm:mb-5">
								<h4 className="text-red-400 font-bold mb-2 text-sm sm:text-base">
									Bugs to Avoid
								</h4>
								<ul className="list-disc pl-4 sm:pl-5 space-y-1 sm:space-y-2 text-xs sm:text-sm">
									{bugsToAvoid.map((bug, i) => (
										<li key={i}>{bug}</li>
									))}
								</ul>
							</section>
						)}
						{resources && (
							<section className="mb-4 sm:mb-5">
								<h4 className="text-[#00ffae] font-bold mb-2 text-sm sm:text-base">
									Resources
								</h4>
								<ul className="list-disc pl-4 sm:pl-5 space-y-1 sm:space-y-2 text-xs sm:text-sm">
									{resources.map(({ name, url }, idx) => (
										<li key={idx}>
											<a
												href={url}
												target="_blank"
												rel="noopener noreferrer"
												className="underline hover:text-[#08f8ff] transition-colors break-words"
											>
												{name}
											</a>
										</li>
									))}
								</ul>
							</section>
						)}
						{extras && (
							<section className="mb-2 text-xs sm:text-sm">
								{extras}
							</section>
						)}
					</motion.div>
				)}
			</AnimatePresence>
		</motion.li>
	);
};

const WebDevTasks = () => {
	return (
		<div className="relative min-h-screen p-4 sm:p-6 md:p-8 lg:p-16 text-white">
			<ParticleBG />
			<motion.header
				initial={{ opacity: 0, y: -80 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 1, type: "spring" }}
				className="mb-8 sm:mb-10 md:mb-12 text-center px-2"
			>
				<h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-[#00ffae] via-white to-[#08f8ff] bg-clip-text text-transparent leading-tight">
					<FaLaptopCode className="inline-block mr-2 sm:mr-3 text-[#00ffae] align-middle" />
					<span className="block xs:inline">
						Web Development Task:
					</span>
					<span className="block xs:inline">
						{" "}
						AI README Generator
					</span>
				</h1>
				<p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg lg:text-xl max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl mx-auto text-gray-300 leading-relaxed">
					Create an automated solution to generate high-quality,
					Gemini AI-powered GitHub repository README files for public
					and private projects—professional, secure, and beautifully
					structured.
				</p>
				<div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-blue-900 bg-opacity-30 rounded-xl border border-blue-500 max-w-xs sm:max-w-2xl mx-auto space-y-3 sm:space-y-4">
					<p className="text-blue-200 font-semibold text-sm sm:text-base">
						📁 Documentation Files:{" "}
						<a
							className="text-blue-300 hover:text-blue-100 transition-colors break-words"
							href="https://drive.google.com/drive/folders/1Xh9_WLpOVasrlJUohvSpv6vYu7uRVOzN"
							target="_blank"
							rel="noopener noreferrer"
						>
							Link
						</a>
					</p>
				</div>
			</motion.header>

			<motion.ul
				layout
				className="space-y-8 sm:space-y-12 md:space-y-16 max-w-sm sm:max-w-2xl md:max-w-4xl mx-auto"
			>
				{tasks.map((task, idx) => (
					<TaskCard key={idx} {...task} />
				))}
			</motion.ul>
			{/* <div className="bg-gray-900 bg-opacity-50 rounded-xl p-4 sm:p-6 max-w-xs sm:max-w-md mx-auto">

				<p className="text-xs text-gray-400 mt-2">
					✨ Be Creative<br/> You may try different approaches to reduce
					complexity. for example, try reducing the LLM's context
					window by not sending the entire codebase in or process
					data in parallel? surprise us!
				</p>
			</div> */}
			<motion.div
				initial={{ opacity: 0, scale: 0.95 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ delay: 1.2, duration: 0.8 }}
				className="mt-12 sm:mt-16 md:mt-20 text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#00ffae] animate-pulse px-4"
			>
				Happy Coding! 🚀
				<div className="bg-gray-900 bg-opacity-50 rounded-xl p-4 sm:p-6 max-w-xs sm:max-w-md mx-auto">
					<h3 className="text-lg sm:text-xl font-bold text-[#00ffae] mb-2">
						Need Help?
					</h3>
					<p className="text-gray-300 mb-2 text-sm sm:text-base">
						Contact for doubts:
					</p>
					<p>Kush Aheer</p>
					<p className="text-xs sm:text-sm">
						WhatsApp:{" "}
						<span className="text-cyan-400">96547 47272</span>
					</p>
					<p>Arpan</p>
					<p className="text-xs sm:text-sm">
						WhatsApp:{" "}
						<span className="text-cyan-400">93544 78287</span>
					</p>
					
				</div>
			</motion.div>
		</div>
	);
};

export default WebDevTasks;
