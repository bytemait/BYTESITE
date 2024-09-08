import React from "react";
import { FaTasks } from "react-icons/fa";

const KeyTakeaways = () => (
    <div className="bg-gray-900 text-white px-8 py-12 rounded-lg shadow-md">
        <h2 className="text-4xl font-bold text-green-400 mb-6">Key Takeaways</h2>
        <p className="text-lg mb-6">
            These tasks aim to challenge your development skills across various aspects of web, app and backend development.
            Make sure to deliver a consistent and bug-free experience, ensuring that all features work seamlessly and scale well.
        </p>
        <p className="text-lg mb-6">
            The tasks should follow best practices in terms of <span className="text-green-400">security</span>,
            <span className="text-green-400">performance</span> and <span className="text-green-400">user experience</span>.
        </p>
        <div className="bg-green-800 p-4 rounded-lg text-white mb-6">
            <h3 className="text-2xl font-semibold mb-2">Good Luck!</h3>
            <p className="text-lg">
                We look forward to seeing your implementations! Please note that the implementation effort will be considered,
                along with your ability to learn and adapt within your tech stack.
                <span className="block mt-2 text-green-300">
                    Try making and pushing something for submission, even if it is incomplete.
                </span>
            </p>
        </div>
        <a target="_blank"
             href="https://forms.gle/QsXxKEV2gi2pg8yF7"
            className="flex !flex-row items-center bg-green-500 text-black px-4 py-2 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:bg-green-400 w-[190px] mb-3 m-auto"
        >
            <FaTasks className="mr-2" />
            Submission link
        </a>
    </div>
);

export default KeyTakeaways;
