import React from "react";
import { FaBrain, FaRobot, FaChartLine } from "react-icons/fa"; // Import icons from react-icons

const MlTasks = () => (
  <div className=" bg-black text-white px-8 py-12">
    <h2 className="text-4xl font-bold text-green-400 mb-6">
      <FaBrain className="inline-block mr-2" />
      Machine Learning Tasks
    </h2>
    <p className="text-lg mb-8">
      Work on these machine learning tasks to develop predictive models, analyze
      data and build intelligent applications.
    </p>
    <ul className="space-y-8">
      <li className="bg-gray-800 p-6 rounded-lg shadow-lg transform transition-transform hover:-translate-y-2">
        <h3 className="text-2xl font-semibold text-green-400 mb-4">
          Task 1: Build a Regression Model for Sales Prediction
        </h3>
        <p className="mb-4">
          Create a regression model to predict future sales based on historical
          data.
        </p>
        <FaChartLine className="text-green-400 text-3xl mb-4" />
        <pre className="bg-black text-white p-4 rounded-md">
          <code>{/* Code for Task 1 goes here */}</code>
        </pre>
      </li>
      <li className="bg-gray-800 p-6 rounded-lg shadow-lg transform transition-transform hover:-translate-y-2">
        <h3 className="text-2xl font-semibold text-green-400 mb-4">
          Task 2 (Advanced): Real-Time Object Detection using Deep Learning
        </h3>
        <p className="mb-4">
          Develop a real-time object detection application using deep learning
          frameworks like TensorFlow or PyTorch.
        </p>
        <FaRobot className="text-green-400 text-3xl mb-4" />
        <pre className="bg-black text-white p-4 rounded-md">
          <code>{/* Code for Task 2 (Advanced) goes here */}</code>
        </pre>
      </li>
    </ul>
  </div>
);

export default MlTasks;
