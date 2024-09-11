import React from "react";
import { FaFilm, FaRocket, FaLightbulb } from "react-icons/fa";

const VideoTask = () => (
    <div className="bg-black text-white px-8 py-12">
        {/* Header Section */}
        <h2 className="text-4xl font-bold text-green-400 mb-6">
            <FaFilm className="inline-block mr-2" />
            60-Second Reel Creation Task
        </h2>
        <p className="text-lg mb-8">
            Create a 60-second reel for an upcoming fest, concert, or event. Focus on making it engaging, visually captivating, and exciting to attract attention for the event.
        </p>

        {/* Task List */}
        <ul className="space-y-8">
            {/* Task Requirements */}
            <li className="bg-gray-800 p-6 rounded-lg shadow-lg transform transition-transform hover:-translate-y-2">
                <h3 className="text-2xl font-semibold text-green-400 mb-4">
                    Task Requirements
                </h3>
                <p className="mb-4">
                    Ensure your reel is dynamic and captures the spirit of the event. The final video should be 60 seconds or less, and include:
                </p>
                <ul className="list-disc list-inside mb-4">
                    <li>Engaging visuals and effects.</li>
                    <li>Text overlays with important event details.</li>
                    <li>Background music that matches the tone of the event.</li>
                    <li>Transitions that keep the viewer hooked.</li>
                </ul>
                <FaLightbulb className="text-green-400 text-3xl mb-4" />
            </li>

            {/* Additional Tips */}
            <li className="bg-gray-800 p-6 rounded-lg shadow-lg transform transition-transform hover:-translate-y-2">
                <h3 className="text-2xl font-semibold text-green-400 mb-4">
                    Additional Tips
                </h3>
                <p className="text-lg mb-4">
                    Consider these tips to make your reel stand out:
                </p>
                <ul className="list-disc list-inside space-y-2">
                    <li>Experiment with different styles and editing techniques to find what works best for the event.</li>
                    <li>Ensure the timeline is easy to follow, with a logical flow that builds excitement.</li>
                    <li>Proofread any text overlays to ensure there are no errors in event details or dates.</li>
                </ul>
                <FaRocket className="text-green-400 text-3xl mt-4 mb-2" />
            </li>

            {/* References */}
            <li className="bg-gray-800 p-6 rounded-lg shadow-lg transform transition-transform hover:-translate-y-2">
                <h3 className="text-2xl font-semibold text-green-400 mb-4">
                    Reference Videos
                </h3>
                <ul className="list-disc list-inside space-y-2">
                    <li>
                        <a href="https://youtu.be/5GlS9pyqBgM?si=XX0XUA_25QYsQNLP" target="_blank" className="text-blue-400 underline">Reference Video 1</a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/reel/C8RBzvLo2d5/?igsh=eTM1OXEyN3E4azBi" target="_blank" className="text-blue-400 underline">Reference Video 2</a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/reel/C_sqg1IStmA/?igsh=MXhsdTFvaXgwdHh4cw==" target="_blank" className="text-blue-400 underline">Reference Video 3</a>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
);

export default VideoTask;
