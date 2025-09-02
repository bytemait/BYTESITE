import { useState, useEffect, useRef, Suspense, lazy } from "react";
import CardContainer from "../components/CardContainer";
import Hero from "../components/Home-Hero-Section/Hero";
import ProjectsContainer from "../components/ProjectsContainer";
import CardCarousel from "../components/CardCarousel";
import HeroMid from "../components/Home-Hero-Section/HeroMid";

// Lazy load Spline component
const Spline = lazy(() => import("@splinetool/react-spline"));

const Home = () => {
	const [shouldLoadSpline, setShouldLoadSpline] = useState(false);
	const [splineLoaded, setSplineLoaded] = useState(false);
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
