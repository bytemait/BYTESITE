import React from "react";
import TaskCard from "./TaskCard";

const tasks = [
  {
    id: 1,
    title: "Web Development",
    image: "/tasks/webd.jpg", // Placeholder image for Web Development
    link: "/tasks/webd",
  },
  {
    id: 2,
    title: "App Development",
    image: "/tasks/appd.jpg", // Placeholder image for App Development
    link: "/tasks/appd",
  },
  {
    id: 3,
    title: "Machine Learning",
    image: "/tasks/ml.jpg", // Placeholder image for ML
    link: "/tasks/ml",
  },
  {
    id: 4,
    title: "Cyber Security",
    image: "/tasks/cybersec.webp", // Placeholder image for ML
    link: "/tasks/cybersec",
  },
  {
    id: 5,
    title: "IOT(Internet of things)",
    image: "/tasks/iot.webp", // Placeholder image for ML
    link: "/tasks/iot",
  },
];

function TasksPage() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center pb-10 pt-24">
      <h1 className="text-4xl font-bold text-green-500 mb-8">Tasks</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl">
        {tasks.map((task) => (
          <TaskCard key={task.id} title={task.title} image={task.image} link={task.link} />
        ))}
      </div>
    </div>
  );
}

export default TasksPage;
