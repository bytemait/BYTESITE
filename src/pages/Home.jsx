import { useState, useEffect, useRef, Suspense, lazy } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaRocket, FaCode, FaPalette, FaCog } from "react-icons/fa";
import CardContainer from "../components/CardContainer";
import Hero from "../components/Home-Hero-Section/Hero";
import ProjectsContainer from "../components/ProjectsContainer";
import CardCarousel from "../components/CardCarousel";
import HeroMid from "../components/Home-Hero-Section/HeroMid";

// Lazy load Spline component
const Spline = lazy(() => import("@splinetool/react-spline"));

// Task Redirect Pop-up Component
const TaskRedirectPopup = ({ isOpen, onClose }) => {
	const taskCategories = [
		{
			title: "2025 Recruitment Tasks",
			description:
				"",
			icon: FaCode,
			path: "/tasks",
			color: "from-blue-500 to-purple-600",
			bgColor: "bg-blue-900/20",
			borderColor: "border-blue-500/50",
		},
	];

	if (!isOpen) return null;

	return (
		<AnimatePresence>
			{isOpen && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
					onClick={onClose}
				>
					<motion.div
						initial={{ scale: 0.9, opacity: 0, y: 20 }}
						animate={{ scale: 1, opacity: 1, y: 0 }}
						exit={{ scale: 0.9, opacity: 0, y: 20 }}
						transition={{ type: "spring", damping: 25, stiffness: 300 }}
						className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 border border-[#00ffae] rounded-2xl sm:rounded-3xl p-6 sm:p-8 max-w-xs sm:max-w-2xl md:max-w-3xl w-full max-h-[90vh] overflow-y-auto"
						style={{
							boxShadow:
								"0 0 30px rgba(0, 255, 174, 0.3), 0 0 60px rgba(0, 255, 174, 0.1)",
						}}
						onClick={(e) => e.stopPropagation()}
					>
						{/* Close Button */}
						<button
							onClick={onClose}
							className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white transition-colors rounded-full hover:bg-gray-800"
							aria-label="Close modal"
						>
							<FaTimes className="w-5 h-5" />
						</button>

						{/* Header */}
						<div className="text-center mb-6 sm:mb-8">
							<motion.div
								initial={{ scale: 0 }}
								animate={{ scale: 1 }}
								transition={{ delay: 0.2, type: "spring" }}
								className="inline-block mb-4"
							>
								<FaRocket className="text-4xl sm:text-5xl text-[#00ffae] drop-shadow-[0_0_20px_#00ffae]" />
							</motion.div>
							<h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#00ffae] via-white to-[#08f8ff] bg-clip-text text-transparent mb-2">
								BYTE TASKS 
							</h2>
							<p className="text-gray-300 text-sm sm:text-base max-w-lg mx-auto">
								Explore various tasks and projects to enhance your skills and build your portfolio.
							</p>
						</div>

						{/* Task Categories */}
						<div className="space-y-4 sm:space-y-6">
							{taskCategories.map((category, index) => (
								<motion.a
									key={category.title}
									href={category.path}
									initial={{ opacity: 0, x: -20 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ delay: 0.3 + index * 0.1 }}
									whileHover={{ scale: 1.02, x: 5 }}
									whileTap={{ scale: 0.98 }}
									className={`block p-4 sm:p-6 rounded-xl sm:rounded-2xl border ${category.bgColor} ${category.borderColor} hover:border-opacity-80 transition-all duration-300 group`}
								>
									<div className="flex items-start gap-4">
										<div
											className={`p-3 rounded-xl bg-gradient-to-r ${category.color} text-white flex-shrink-0`}
										>
											<category.icon className="w-5 h-5 sm:w-6 sm:h-6" />
										</div>
										<div className="flex-1 min-w-0">
											<h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-[#00ffae] transition-colors">
												{category.title}
											</h3>
											<p className="text-gray-400 text-sm sm:text-base leading-relaxed">
												{category.description}
											</p>
										</div>
										<div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
											<svg
												className="w-5 h-5 text-[#00ffae]"
												fill="currentColor"
												viewBox="0 0 20 20"
											>
												<path
													fillRule="evenodd"
													d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
													clipRule="evenodd"
												/>
											</svg>
										</div>
									</div>
								</motion.a>
							))}
						</div>

{/* 
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.8 }}
							className="mt-6 sm:mt-8 text-center"
						>
							<div className="bg-gray-800/50 rounded-lg p-3 sm:p-4 border border-gray-700">
								<p className="text-xs sm:text-sm text-gray-400">
									💡{" "}
									<span className="text-[#00ffae]">Tip:</span> You can
									explore multiple tracks
								</p>
							</div>
						</motion.div> */}
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

const Home = () => {
	const [shouldLoadSpline, setShouldLoadSpline] = useState(false);
	const [splineLoaded, setSplineLoaded] = useState(false);
	const [showTaskPopup, setShowTaskPopup] = useState(false);
	const splineRef = useRef(null);

	useEffect(() => {
		// Preload the scene
		const link = document.createElement("link");
		link.rel = "preload";
		link.href =
			"https://prod.spline.design/70rWXJWtYcdln4iF/scene.splinecode";
		link.as = "fetch";
		link.crossOrigin = "anonymous";
		document.head.appendChild(link);

		// Small delay to ensure DOM is ready
		const timer = setTimeout(() => {
			setShouldLoadSpline(true);
		}, 500);

		return () => {
			clearTimeout(timer);
			if (link.parentNode) {
				link.parentNode.removeChild(link);
			}
		};
	}, []);

	// Auto-show popup after 3 seconds (optional)
	useEffect(() => {
		const timer = setTimeout(() => {
			setShowTaskPopup(true);
		}, 3000);

		return () => clearTimeout(timer);
	}, []);

	// Loading placeholder component
	const LoadingPlaceholder = ({ width, height }) => (
		<div
			className="flex items-center justify-center bg-gray-900 rounded-lg border border-gray-700"
			style={{ width, height }}
		>
			<div className="flex flex-col items-center space-y-3">
				<div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#00ffae]"></div>
				<span className="text-[#00ffae] text-xs">
					Loading 3D Model...
				</span>
			</div>
		</div>
	);

	return (
		<div className="pt-8 bg-black min-h-screen">
			{/* Task Redirect Pop-up */}
			<TaskRedirectPopup
				isOpen={showTaskPopup}
				onClose={() => setShowTaskPopup(false)}
			/>

			{/* Hero Section */}
			<div className="flex flex-col lg:flex-row items-center justify-center mt-8 sm:mt-12 md:mt-16 relative px-4 sm:px-6 md:px-8 lg:px-12">
				{/* Hero Text Section */}
				<div className="w-full lg:w-1/2 mb-8 sm:mb-12 md:mb-16 lg:mb-0 lg:pr-8">
					<div className="max-w-full">
						<Hero />
					</div>
				</div>

				{/* Spline 3D Model Section */}
				<div className="w-full lg:w-1/2 flex items-center justify-center">
					<div ref={splineRef} className="relative">
						{shouldLoadSpline ? (
							<Suspense
								fallback={
									<LoadingPlaceholder
										width={150}
										height={150}
									/>
								}
							>
								{/* Mobile View */}
								<div className="block sm:hidden">
									<Spline
										scene="https://prod.spline.design/70rWXJWtYcdln4iF/scene.splinecode"
										width={150}
										height={150}
										onLoad={() => setSplineLoaded(true)}
										onError={(error) => {
											console.error(
												"Spline loading error:",
												error
											);
											// Retry loading after a delay
											setTimeout(
												() =>
													setShouldLoadSpline(false),
												1000
											);
											setTimeout(
												() => setShouldLoadSpline(true),
												2000
											);
										}}
										style={{
											opacity: splineLoaded ? 1 : 0,
											transition:
												"opacity 0.5s ease-in-out",
										}}
										className="spline-override"
									/>
									{!splineLoaded && (
										<LoadingPlaceholder
											width={150}
											height={150}
										/>
									)}
								</div>

								{/* Tablet View */}
								<div className="hidden sm:block lg:hidden">
									<Spline
										scene="https://prod.spline.design/70rWXJWtYcdln4iF/scene.splinecode"
										width={280}
										height={280}
										onLoad={() => setSplineLoaded(true)}
										onError={(error) => {
											console.error(
												"Spline loading error:",
												error
											);
											setTimeout(
												() =>
													setShouldLoadSpline(false),
												1000
											);
											setTimeout(
												() => setShouldLoadSpline(true),
												2000
											);
										}}
										style={{
											opacity: splineLoaded ? 1 : 0,
											transition:
												"opacity 0.5s ease-in-out",
										}}
										className="spline-override"
									/>
									{!splineLoaded && (
										<LoadingPlaceholder
											width={280}
											height={280}
										/>
									)}
								</div>

								{/* Desktop View */}
								<div className="hidden lg:block">
									<Spline
										scene="https://prod.spline.design/70rWXJWtYcdln4iF/scene.splinecode"
										width={350}
										height={350}
										onLoad={() => setSplineLoaded(true)}
										onError={(error) => {
											console.error(
												"Spline loading error:",
												error
											);
											setTimeout(
												() =>
													setShouldLoadSpline(false),
												1000
											);
											setTimeout(
												() => setShouldLoadSpline(true),
												2000
											);
										}}
										style={{
											opacity: splineLoaded ? 1 : 0,
											transition:
												"opacity 0.5s ease-in-out",
										}}
										className="spline-override"
									/>
									{!splineLoaded && (
										<LoadingPlaceholder
											width={350}
											height={350}
										/>
									)}
								</div>
							</Suspense>
						) : (
							<LoadingPlaceholder width={150} height={150} />
						)}
					</div>
				</div>
			</div>

			{/* Floating Task Button */}
			<motion.button
				onClick={() => setShowTaskPopup(true)}
				className="fixed bottom-6 right-6 bg-gradient-to-r from-[#00ffae] to-[#08f8ff] text-black p-4 rounded-full shadow-2xl hover:shadow-[0_0_25px_#00ffae88] transition-all duration-300 z-40"
				whileHover={{ scale: 1.1 }}
				whileTap={{ scale: 0.9 }}
				initial={{ scale: 0 }}
				animate={{ scale: 1 }}
				transition={{ delay: 2, type: "spring" }}
			>
				<FaRocket className="w-6 h-6" />
			</motion.button>

			{/* Content Section */}
			<div className="">
				{/* <CardCarousel /> */}
				{/* <HeroMid /> */}
				<CardContainer />
			</div>

			{/* Projects Section */}
			<div className="w-full">
				<ProjectsContainer />
			</div>
		</div>
	);
};

export default Home;
