import React from "react";
import { FaShieldAlt, FaLock, FaUserSecret } from "react-icons/fa"; // Import icons from react-icons

const CybersecTasks = () => (
  <div className=" bg-black text-white px-8 py-12">
    <h2 className="text-4xl font-bold text-green-400 mb-6">
      <FaShieldAlt className="inline-block mr-2" />
      Cybersecurity Tasks
    </h2>
    <p className="text-lg mb-8">
      Enhance your cybersecurity skills with these tasks that focus on securing
      systems, networks and applications.
    </p>
    <ul className="space-y-8">
      <li className="bg-gray-800 p-6 rounded-lg shadow-lg transform transition-transform hover:-translate-y-2">
        <h3 className="text-2xl font-semibold text-green-400 mb-4">
          Task 1: Build a Secure Authentication System
        </h3>
        <p className="mb-4">
          Develop a secure user authentication system with encrypted
          communication.
        </p>
        <FaLock className="text-green-400 text-3xl mb-4" />
        <pre className="bg-black text-white p-4 rounded-md">
          <code>{/* Code for Task 1 goes here */}</code>
        </pre>
      </li>
      <li className="bg-gray-800 p-6 rounded-lg shadow-lg transform transition-transform hover:-translate-y-2">
        <h3 className="text-2xl font-semibold text-green-400 mb-4">
          Task 2 (Advanced): Penetration Testing of a Web Application
        </h3>
        <p className="mb-4">
          Perform a penetration test on a web application to identify and
          mitigate vulnerabilities.
        </p>
        <FaUserSecret className="text-green-400 text-3xl mb-4" />
        <pre className="bg-black text-white p-4 rounded-md">
          <code>{/* Code for Task 2 (Advanced) goes here */}</code>
        </pre>
      </li>
    </ul>
  </div>
);

export default CybersecTasks;
