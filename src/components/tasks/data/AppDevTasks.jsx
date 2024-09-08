import React from "react";
import { FaMobileAlt, FaMapMarkerAlt, FaCloudUploadAlt } from "react-icons/fa"; // Import icons from react-icons

const AppDevTasks = () => (
  <div className="bg-black text-white px-8 py-12">
    <h2 className="text-4xl font-bold text-green-400 mb-6">
      <FaMobileAlt className="inline-block mr-2" />
      App Development Tasks
    </h2>
    <p className="text-lg mb-8">
      Test your skills in creating mobile applications with functionalities like real-time user interaction, data storage and efficient backend integration.
    </p>
    <ul className="space-y-8">
      {/* Task 1 */}
      <li className="bg-gray-800 p-6 rounded-lg shadow-lg transform transition-transform hover:-translate-y-2">
        <h3 className="text-2xl font-semibold text-green-400 mb-4">
          Task 1: Location Tracking System
        </h3>
        <p className="mb-4">
          Develop an app that tracks user location in real-time or at intervals, storing data securely in a backend database.
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>Implement real-time location tracking.</li>
          <li>Ensure secure transmission and storage of location data.</li>
          <li>Design an efficient database schema for location data.</li>
          <li>Respect user privacy with consent and permissions.</li>
        </ul>
        <FaMapMarkerAlt className="text-green-400 text-3xl mb-4" />
        {/* <pre className="bg-black text-white p-4 rounded-md">
          <code>Code for Task 1 goes here</code>
        </pre> */}
      </li>

      {/* Task 2 */}
      <li className="bg-gray-800 p-6 rounded-lg shadow-lg transform transition-transform hover:-translate-y-2">
        <h3 className="text-2xl font-semibold text-green-400 mb-4">
          Task 2 (Advanced): Location Tracker Deployment
        </h3>
        <p className="mb-4">
          Deploy the location-tracking app for public use with robust backend support for handling multiple users.
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>Ensure public usability with easy onboarding.</li>
          <li>Optimize backend for efficient data storage and retrieval.</li>
          <li>Maintain app performance and accuracy under heavy usage.</li>
          <li>Prevent inconsistent location updates post-deployment.</li>
        </ul>
        <FaCloudUploadAlt className="text-green-400 text-3xl mb-4" />
        {/* <pre className="bg-black text-white p-4 rounded-md">
          <code>Code for Task 2 (Advanced) goes here</code>
        </pre> */}
      </li>
    </ul>
  </div>
);

export default AppDevTasks;
