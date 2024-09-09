import React from "react";
import { FaLaptopCode, FaGlobe, FaRocket } from "react-icons/fa";

const WebDevTasks = () => (
  <div className="bg-black text-white px-8 py-12">
    {/* Header Section */}
    <h2 className="text-4xl font-bold text-green-400 mb-6">
      <FaLaptopCode className="inline-block mr-2" />
      Web Development Tasks
    </h2>
    <p className="text-lg mb-8">
      Enhance your web development skills by working on tasks that focus on creating functional, well-structured applications with strong usability and consistent user experience.
    </p>

    {/* Task List */}
    <ul className="space-y-8">
      {/* Task 1 */}
      <li className="bg-gray-800 p-6 rounded-lg shadow-lg transform transition-transform hover:-translate-y-2">
        <h3 className="text-2xl font-semibold text-green-400 mb-4">
          Task 1: YouTube and GitHub Subscription Verification
        </h3>
        <p className="mb-4">
          Build a system that restricts access to a page using a private route. Only users subscribed to B.Y.T.E.'s YouTube channel at{" "}
          <a href="https://www.youtube.com/@BYTE-mait" target="_blank" className="text-blue-400 underline">YouTube</a> or following the GitHub account at{" "}
          <a href="https://github.com/bytemait" target="_blank" className="text-blue-400 underline">GitHub</a> can access it.
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>Create a private route to check subscription/follow status.</li>
          <li>Display user-friendly messages for unauthorized access.</li>
          <li>Ensure accurate and consistent verification logic.</li>
          <li>Prevent URL manipulation to bypass restrictions.</li>
        </ul>
        <FaGlobe className="text-green-400 text-3xl mb-4" />
        
        {/* Resources and Documentation */}
        <div className="text-lg mb-4">
          <h4 className="text-xl text-green-400 font-semibold mb-2">Resources:</h4>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <a href="https://developers.google.com/youtube/v3/docs" target="_blank" className="text-blue-400 underline">YouTube API Documentation</a> - Get started with verifying YouTube subscriptions.
            </li>
            <li>
              <a href="https://docs.github.com/en/developers/apps/building-oauth-apps/authorizing-oauth-apps" target="_blank" className="text-blue-400 underline">GitHub OAuth Documentation</a> - Use OAuth to verify GitHub follow status.
            </li>
          </ul>
        </div>

        {/* Implementation Hint */}
        <div className="text-lg mb-4">
          <h4 className="text-xl text-green-400 font-semibold mb-2">Implementation Tips:</h4>
          <p>To implement this feature, you can use <strong>Passport.js</strong> for OAuth authentication. It simplifies integration with GitHub and YouTube APIs.</p>
          <p>Steps to get started with <strong>Passport.js GitHub strategy</strong>:</p>
          <ol className="list-decimal list-inside space-y-2">
            <li>Install Passport.js: <code>npm install passport passport-github2</code></li>
            <li>Configure the GitHub strategy in Passport with your OAuth credentials.</li>
            <li>Use the <code>passport.authenticate()</code> method to handle the GitHub OAuth flow and verify the user’s follow status.</li>
            <li>Set up callback routes to handle OAuth tokens and redirect users.</li>
          </ol>
        </div>
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
          <li>Deploy on platforms like Netlify, Vercel, Render, or Cloudflare.</li>
          <li>Ensure scalability and performance for handling multiple users.</li>
          <li>Securely handle user data and authentication.</li>
          <li>Prevent unauthorized access post-deployment.</li>
        </ul>
        <FaRocket className="text-green-400 text-3xl mb-4" />
        
        {/* Resources and Documentation */}
        <div className="text-lg mb-4">
          <h4 className="text-xl text-green-400 font-semibold mb-2">Deployment Resources:</h4>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <a href="https://vercel.com/docs" target="_blank" className="text-blue-400 underline">Vercel Documentation</a> - Learn how to deploy your app on Vercel.
            </li>
            <li>
              <a href="https://render.com/docs" target="_blank" className="text-blue-400 underline">Render Docs</a> - Deploy your web applications on Render.
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
);

export default WebDevTasks;
