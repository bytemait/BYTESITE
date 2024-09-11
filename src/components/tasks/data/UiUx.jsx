import React from "react";
import { FaLaptopCode, FaGlobe, FaRocket } from "react-icons/fa";

const UiUx = () => (
    <div className="bg-black text-white px-8 py-12">
        {/* Header Section */}
        <h2 className="text-4xl font-bold text-green-400 mb-6">
            <FaLaptopCode className="inline-block mr-2" />
            UI/UX Design Recruitment Task
        </h2>
        <p className="text-lg mb-8">
            Design a user-friendly prototype for a Smart Home Energy Management System (HEMS) that empowers everyday users to monitor and control their energy use. Focus on clarity, functionality, and accessibility for a broad audience.
        </p>

        {/* Task List */}
        <ul className="space-y-8">
            {/* Task 1 */}
            <li className="bg-gray-800 p-6 rounded-lg shadow-lg transform transition-transform hover:-translate-y-2">
                <h3 className="text-2xl font-semibold text-green-400 mb-4">
                    Task Requirements
                </h3>
                <p className="mb-4">
                    You are requested to design a minimum of 3 pages excluding the splash screen and login/sign-up screen. The page headings to include are:
                </p>
                <ul className="list-disc list-inside mb-4">
                    <li><strong>Home Page</strong>: This is the main page of your application which gives you access to all the features of the app.</li>
                    <li><strong>Notifications Page</strong>: This page will display all emergency alert messages and other normal notifications.</li>
                    <li><strong>Analysis Page</strong>: This page will include the real-time energy breakdown.</li>
                </ul>
                <FaGlobe className="text-green-400 text-3xl mb-4" />

                {/* Additional Features */}
                <div className="text-lg mb-4">
                    <h4 className="text-xl text-green-400 font-semibold mb-2">Additional Features:</h4>
                    <p>(Although they are optional, preference will be given to those that attempt to include them)</p>
                    <ul className="list-disc list-inside space-y-2">
                        <li>Making it accessible to people who are physically disabled.</li>
                        <li>Integrating your app with the working of solar panels.</li>
                        <li>Bills or Invoice Page.</li>
                        <li>Energy Saving Tips.</li>
                        <li>Carbon Footprint Calculator.</li>
                    </ul>
                </div>

                {/* Submission Guidelines */}
                <div className="text-lg mb-4">
                    <h4 className="text-xl text-green-400 font-semibold mb-2">Submission Guidelines:</h4>
                    <p>Send us the design directly through a link to the Figma file, or submit it in PDF format.</p>
                    <p>Note: Do not copy the design from any website or reference that you have been given. These are offered to give you an idea about the functionality of the application.</p>
                </div>
            </li>

            <li className="bg-gray-800 p-6 rounded-lg shadow-lg transform transition-transform hover:-translate-y-2">
                <h3 className="text-2xl font-semibold text-green-400 mb-4">
                    Additional Notes
                </h3>
                <p className="mb-4">
                    We are aware of how difficult this work is, but we are confident in your capacity to complete it. Make sure to deliver the project in stages and inform us of your progress along the way.
                </p>
                <FaRocket className="text-green-400 text-3xl mb-4" />
            </li>

            {/* References */}
            <li className="bg-gray-800 p-6 rounded-lg shadow-lg transform transition-transform hover:-translate-y-2">
                <h3 className="text-2xl font-semibold text-green-400 mb-4">
                    References
                </h3>
                <ul className="list-disc list-inside space-y-2">
                    <li>
                        <a href="https://youtu.be/kbZejnPXyLM?si=oJ7nfhi7bMJIekCD" target="_blank" className="text-blue-400 underline">Video Tutorial 1</a>
                    </li>
                    <li>
                        <a href="https://help.figma.com/hc/en-us" target="_blank" className="text-blue-400 underline">Figma Documentation</a>
                    </li>
                    <li>
                        <a href="https://youtube.com/playlist?list=PLlHtucAD9KT2VKBwCZooIvDAiJQZ0Hrur&si=LGL21jr5PAhko7Cu" target="_blank" className="text-blue-400 underline">YouTube Playlist</a>
                    </li>
                    <li>
                        <a href="https://hemsreferencedesign.tiiny.site" target="_blank" className="text-blue-400 underline">HEMS Reference Design</a>
                    </li>
                    <li>
                        You can also take inspiration from other websites like Behance and Dribbble for your designs.
                    </li>
                </ul>
            </li>
        </ul>
    </div>
);

export default UiUx;
