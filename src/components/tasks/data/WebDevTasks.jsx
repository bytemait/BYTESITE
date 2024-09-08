import React from "react";
import { FaLaptopCode, FaGlobe, FaRocket } from "react-icons/fa"; // Import icons from react-icons

const WebDevTasks = () => (
  <div className="bg-black text-white px-8 py-12">
    <h2 className="text-4xl font-bold text-green-400 mb-6">
      <FaLaptopCode className="inline-block mr-2" />
      Web Development Tasks
    </h2>
    <p className="text-lg mb-8">
      Enhance your web development skills by working on tasks that focus on creating functional, well-structured applications with strong usability and consistent user experience.
    </p>
    <ul className="space-y-8">
      {/* Task 1 */}
      <li className="bg-gray-800 p-6 rounded-lg shadow-lg transform transition-transform hover:-translate-y-2">
        <h3 className="text-2xl font-semibold text-green-400 mb-4">
          Task 1: YouTube and GitHub Subscription Verification
        </h3>
        <p className="mb-4">
          Build a system that restricts access to a page using a private route system. Only users subscribed to B.Y.T.E.'s YouTube channel at https://www.youtube.com/@BYTE-mait or following the GitHub account at https://github.com/bytemait can access it.
          <br />
          <br />
          Note: you have to implement either one authentication youtube or github (both are not required for submission)
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>Create a private route to check subscription/follow status.</li>
          <li>Display user-friendly messages for unauthorized access.</li>
          <li>Ensure accurate and consistent verification logic.</li>
          <li>Prevent bypassing through URL manipulation or other methods.</li>
        </ul>
        <FaGlobe className="text-green-400 text-3xl mb-4" />
        {/* <pre className="bg-black text-white p-4 rounded-md">
          <code>Code for Task 1 goes here</code>
        </pre> */}
      </li>

      {/* Task 2 */}
      <li className="bg-gray-800 p-6 rounded-lg shadow-lg transform transition-transform hover:-translate-y-2">
        <h3 className="text-2xl font-semibold text-green-400 mb-4">
          Task 2 (Advanced): Public Deployment
        </h3>
        <p className="mb-4">
          Deploy the subscription verification system for public access, allowing any user to verify their subscription or follow status and access the private route.
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>Deploy on platforms like Netlify, Vercel, onrender, cloudflare, etc.</li>
          <li>Ensure scalability and performance for handling multiple users.</li>
          <li>Securely handle user data and authentication.</li>
          <li>Prevent unauthorized access post-deployment.</li>
        </ul>
        <FaRocket className="text-green-400 text-3xl mb-4" />
        {/* <pre className="bg-black text-white p-4 rounded-md">
          <code>Code for Task 2 (Advanced) goes here</code>
        </pre> */}
      </li>
    </ul>
  </div>
);

export default WebDevTasks;
