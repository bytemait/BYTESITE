"use client";
import React, { useState } from "react";
import { X, Plus, Code, Clock, Users } from "lucide-react";

export default function TaskSubmissionForm() {
  const [technologies, setTechnologies] = useState([]);
  const [newTech, setNewTech] = useState("");

  const addTechnology = () => {
    if (newTech.trim() && !technologies.includes(newTech.trim())) {
      setTechnologies([...technologies, newTech.trim()]);
      setNewTech("");
    }
  };

  const removeTechnology = (tech) => {
    setTechnologies(technologies.filter((t) => t !== tech));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Task submitted!");
  };

  return (
    <div className="bg-gray-900 border mt-[10%] border-gray-800 rounded-xl shadow-lg max-w-4xl mx-auto p-6">
      {/* Header */}
      <div className="mb-6 flex items-center gap-2">
        <Code className="h-6 w-6 text-emerald-400" />
        <h2 className="text-2xl font-bold text-white">Task Details</h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Basic Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="taskName" className="block text-gray-300 mb-2">
              Task Name
            </label>
            <input
              id="taskName"
              placeholder="e.g., YouTube & GitHub Subscription Verification"
              className="w-full bg-gray-800 border border-gray-700 text-white placeholder-gray-500 rounded-lg px-4 py-2 focus:outline-none focus:border-emerald-400"
              required
            />
          </div>
          <div>
            <label htmlFor="difficulty" className="block text-gray-300 mb-2">
              Difficulty Level
            </label>
            <select
              id="difficulty"
              className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:border-emerald-400"
              required
            >
              <option value="">Select difficulty</option>
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </select>
          </div>
        </div>

        {/* Duration and Category */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="duration" className="flex items-center gap-2 text-gray-300 mb-2">
              <Clock className="h-4 w-4" />
              Estimated Duration
            </label>
            <input
              id="duration"
              placeholder="e.g., 4-6 hours"
              className="w-full bg-gray-800 border border-gray-700 text-white placeholder-gray-500 rounded-lg px-4 py-2 focus:outline-none focus:border-emerald-400"
              required
            />
          </div>
          <div>
            <label htmlFor="category" className="block text-gray-300 mb-2">
              Category
            </label>
            <select
              id="category"
              className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:border-emerald-400"
              required
            >
              <option value="">Select category</option>
              <option value="frontend">Frontend Development</option>
              <option value="backend">Backend Development</option>
              <option value="fullstack">Full Stack</option>
              <option value="authentication">Authentication</option>
              <option value="deployment">Deployment</option>
              <option value="api">API Development</option>
            </select>
          </div>
        </div>

        {/* Description */}
        <div>
          <label htmlFor="description" className="block text-gray-300 mb-2">
            Task Description
          </label>
          <textarea
            id="description"
            placeholder="Provide a detailed description of the task, including objectives and requirements..."
            className="w-full bg-gray-800 border border-gray-700 text-white placeholder-gray-500 rounded-lg px-4 py-2 min-h-32 focus:outline-none focus:border-emerald-400"
            required
          />
        </div>

        {/* Technologies */}
        <div>
          <label className="block text-gray-300 mb-2">Technologies & Tools</label>
          <div className="flex gap-2 mb-3">
            <input
              value={newTech}
              onChange={(e) => setNewTech(e.target.value)}
              placeholder="Add technology (e.g., React, Node.js)"
              className="flex-1 bg-gray-800 border border-gray-700 text-white placeholder-gray-500 rounded-lg px-4 py-2 focus:outline-none focus:border-emerald-400"
              onKeyPress={(e) => e.key === "Enter" && (e.preventDefault(), addTechnology())}
            />
            <button
              type="button"
              onClick={addTechnology}
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-2 rounded-lg flex items-center justify-center"
            >
              <Plus className="h-4 w-4" />
            </button>
          </div>
          {technologies.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="bg-emerald-600 text-white rounded-full px-3 py-1 text-sm flex items-center gap-1 cursor-pointer hover:bg-emerald-700"
                  onClick={() => removeTechnology(tech)}
                >
                  {tech}
                  <X className="h-3 w-3" />
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Learning Objectives */}
        <div>
          <label htmlFor="objectives" className="block text-gray-300 mb-2">
            Learning Objectives
          </label>
          <textarea
            id="objectives"
            placeholder="What will participants learn from completing this task?"
            className="w-full bg-gray-800 border border-gray-700 text-white placeholder-gray-500 rounded-lg px-4 py-2 focus:outline-none focus:border-emerald-400"
          />
        </div>

        {/* Resources */}
        <div>
          <label htmlFor="resources" className="block text-gray-300 mb-2">
            Additional Resources (Optional)
          </label>
          <textarea
            id="resources"
            placeholder="Links to documentation, tutorials, or other helpful resources..."
            className="w-full bg-gray-800 border border-gray-700 text-white placeholder-gray-500 rounded-lg px-4 py-2 focus:outline-none focus:border-emerald-400"
          />
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="submitterName" className="flex items-center gap-2 text-gray-300 mb-2">
              <Users className="h-4 w-4" />
              Your Name
            </label>
            <input
              id="submitterName"
              placeholder="Your full name"
              className="w-full bg-gray-800 border border-gray-700 text-white placeholder-gray-500 rounded-lg px-4 py-2 focus:outline-none focus:border-emerald-400"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-300 mb-2">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              placeholder="your.email@example.com"
              className="w-full bg-gray-800 border border-gray-700 text-white placeholder-gray-500 rounded-lg px-4 py-2 focus:outline-none focus:border-emerald-400"
              required
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end pt-6">
          <button
            type="submit"
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 text-lg font-semibold rounded-lg"
          >
            Submit Task
          </button>
        </div>
      </form>
    </div>
  );
}
