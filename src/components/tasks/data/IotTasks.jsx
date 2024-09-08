import React from "react";
import { FaNetworkWired, FaMicrochip, FaDatabase } from "react-icons/fa"; // Import icons from react-icons

const IotTasks = () => (
  <div className=" bg-black text-white px-8 py-12">
    <h2 className="text-4xl font-bold text-green-400 mb-6">
      <FaNetworkWired className="inline-block mr-2" />
      IoT (Internet Of Things) Tasks
    </h2>
    <p className="text-lg mb-8">
      Dive into these IoT tasks to enhance your knowledge of interconnected
      devices, sensors and data communication.
    </p>
    <ul className="space-y-8">
      <li className="bg-gray-800 p-6 rounded-lg shadow-lg transform transition-transform hover:-translate-y-2">
        <h3 className="text-2xl font-semibold text-green-400 mb-4">
          Task 1: IoT Device Integration with Cloud
        </h3>
        <p className="mb-4">
          Integrate an IoT device with a cloud platform to monitor and store
          real-time data securely.
        </p>
        <FaMicrochip className="text-green-400 text-3xl mb-4" />
        <pre className="bg-black text-white p-4 rounded-md">
          <code>{/* Code for Task 1 goes here */}</code>
        </pre>
      </li>
      <li className="bg-gray-800 p-6 rounded-lg shadow-lg transform transition-transform hover:-translate-y-2">
        <h3 className="text-2xl font-semibold text-green-400 mb-4">
          Task 2 (Advanced): IoT Data Analysis and Visualization
        </h3>
        <p className="mb-4">
          Develop a system to analyze and visualize IoT data on a dashboard,
          ensuring data integrity and scalability.
        </p>
        <FaDatabase className="text-green-400 text-3xl mb-4" />
        <pre className="bg-black text-white p-4 rounded-md">
          <code>{/* Code for Task 2 (Advanced) goes here */}</code>
        </pre>
      </li>
    </ul>
  </div>
);

export default IotTasks;
