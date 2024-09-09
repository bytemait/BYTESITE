import React from "react";
import { FaLaptopCode, FaGlobe, FaRocket } from "react-icons/fa";

const CADTasks = () => (
    <div className="bg-black text-white px-8 py-12">
        {/* Header Section */}
        <h2 className="text-4xl font-bold text-green-400 mb-6">
            <FaLaptopCode className="inline-block mr-2" />
            3D Design Tasks
        </h2>
        <p className="text-lg mb-8">
            Work on detailed 3D design tasks that challenge your modeling and animation skills, with a focus on realistic and autonomous mechanisms.
        </p>

        {/* Task List */}
        <ul className="space-y-8">
            {/* Task 1 */}
            <li className="bg-gray-800 p-6 rounded-lg shadow-lg transform transition-transform hover:-translate-y-2">
                <h3 className="text-2xl font-semibold text-green-400 mb-4">
                    Task 1: Anchor Design and Integration
                </h3>
                <p className="mb-4">
                    Follow the detailed requirements to create a realistic and functional anchor design with animations and autonomous mechanisms.
                </p>
                <ol className="list-decimal list-inside mb-4">
                    <li>Create a detailed 3D model of a ship's anchor.</li>
                    <li>Attach the anchor to a chain for realism (a chain is preferred over a rope).</li>
                    <li>
                        Design a basic wheel pulley system with a human-pulling mechanism inspired by historical pulley systems, like those used on the Black Pearl.
                    </li>
                    <li>Incorporate motors for autonomous functionality, with animations to demonstrate the system in action.</li>
                </ol>
                <FaGlobe className="text-green-400 text-3xl mb-4" />

                {/* Submission and Tools */}
                <div className="text-lg mb-4">
                    <h4 className="text-xl text-green-400 font-semibold mb-2">Additional Notes:</h4>
                    <ul className="list-disc list-inside space-y-2">
                        <li>Phased approach: break down the project into manageable phases and track progress.</li>
                        <li>Use any 3D design software like Fusion 360, Blender, AutoCAD, etc., according to your preference.</li>
                        <li>Submit designs in glTF format or share a link to the file.</li>
                    </ul>
                </div>

                {/* Implementation Hint */}
                <div className="text-lg mb-4">
                    <h4 className="text-xl text-green-400 font-semibold mb-2">Submission Guidelines:</h4>
                    <p>Submit videos of the animated components along with the 3D design file.</p>
                    <p>Focus on phased delivery and keep the team updated with your progress.</p>
                </div>
            </li>

            {/* Task 2 */}
            <li className="bg-gray-800 p-6 rounded-lg shadow-lg transform transition-transform hover:-translate-y-2">
                <h3 className="text-2xl font-semibold text-green-400 mb-4">
                    Task 2 (Advanced): Anchor Mechanism Automation
                </h3>
                <p className="mb-4">
                    Create a fully autonomous anchor mechanism with motor integration and realistic animations.
                </p>
                <ol className="list-decimal list-inside mb-4">
                    <li>Use motors to control the pulley and anchor system.</li>
                    <li>Animate the complete process, demonstrating the autonomous operation.</li>
                    <li>Ensure the design is scalable and realistic, simulating how it would work in a real-world scenario.</li>
                </ol>
                <FaRocket className="text-green-400 text-3xl mb-4" />
            </li>

            <li className="bg-gray-800 p-6 rounded-lg shadow-lg transform transition-transform hover:-translate-y-2">
                {/* Resources and References */}
                <div className="text-lg mb-4">
                    <h4 className="text-xl text-green-400 font-semibold mb-2">References:</h4>
                    <ul className="list-disc list-inside space-y-2">
                        <li>
                            <a href="https://youtube.com/shorts/AG59-HfoX1w?si=u9ytEkqTuuQ_hXow" target="_blank" className="text-blue-400 underline">Reference Video 1</a>
                        </li>
                        <li>
                            <a href="https://youtu.be/uSwVc8zcQJE?si=TbXNYPxJeWveuXuC" target="_blank" className="text-blue-400 underline">Reference Video 2</a>
                        </li>
                        <li>
                            <a href="https://youtube.com/shorts/ebAjHlGdkOQ?si=pgBz53XiKObLipsl" target="_blank" className="text-blue-400 underline">Reference Video 3</a>
                        </li>
                        <li>
                            <a href="https://youtu.be/YW-NdIPD_9Q?si=KTOFODfkR1l4fZmJ" target="_blank" className="text-blue-400 underline">Reference Video 4</a>
                        </li>
                        <li>
                            <a href="https://youtu.be/aBNyJzQVjbk?si=184UhO5QAuXA3mVS" target="_blank" className="text-blue-400 underline">Reference Video 5</a>
                        </li>
                    </ul>
                </div>
            </li>
        </ul>
    </div>
);

export default CADTasks;