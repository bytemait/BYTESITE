import React from "react";
import { FaQuestionCircle, FaFlagCheckered } from "react-icons/fa";

const CybersecTasks = () => (
  <div className="bg-black text-white px-8 py-12">
    <h2 className="text-4xl font-bold text-green-400 mb-6">
      <FaQuestionCircle className="inline-block mr-2" />
      Cybersecurity Challenges
    </h2>
    <p className="text-lg mb-8">
      Solve the QR code to access the link and embark on a series of tasks that
      will guide you closer to uncovering the flag. Each completed task brings
      you one step closer to the final goal.
    </p>
    
    {/* QR Code Section */}
    <div className="text-center mb-8">
      <img src="/tasks/cybersecqr2.jpg" alt="QR Code" className="h-1/4 w-1/4 m-auto"/>
      <p className="mt-4 text-lg text-gray-400">
        Scan the QR code to get started!
      </p>
    </div>

    {/* Task List Section */}
    <ul className="space-y-8">
      <li className="bg-gray-800 p-6 rounded-lg shadow-lg transform transition-transform hover:-translate-y-2">
        <h3 className="text-2xl font-semibold text-green-400 mb-4">
          Resources and References
        </h3>
        <p className="mb-4">
          Here are some useful resources to help you with the tasks:
        </p>
        <ul className="list-disc pl-6">
          <li>
            <a 
              href="https://www.thonky.com/qr-code-tutorial/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-green-400 hover:underline"
            >
              QR Code Tutorial
            </a>
          </li>
          <li>
            <a 
              href="https://www.geeksforgeeks.org/cryptography-and-its-types/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-green-400 hover:underline"
            >
              Cryptography and Its Types
            </a>
          </li>
          <li>
            <a 
              href="https://owasp.org/www-project-web-security-testing-guide/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-green-400 hover:underline"
            >
              OWASP Web Security Testing Guide
            </a>
          </li>
        </ul>
        <FaFlagCheckered className="text-green-400 text-3xl mb-4" />
      </li>
    </ul>
  </div>
);

export default CybersecTasks;
