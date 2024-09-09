import React from "react";
import { FaBrain, FaRobot, FaChartLine } from "react-icons/fa";

const MlTasks = () => (
  <div className="bg-black text-white px-8 py-12">
    <h2 className="text-4xl font-bold text-green-400 mb-6">
      <FaBrain className="inline-block mr-2" />
      Machine Learning Selection Tasks for BYTE Society
    </h2>
    <p className="text-lg mb-8">
      Welcome to the ML selection process! We present two machine learning tasks
      to evaluate your understanding and skills in data science and computer
      vision.
    </p>

    <ul className="space-y-8">
      {/* Task 1: Spam Detection */}
      <li className="bg-gray-800 p-6 rounded-lg shadow-lg transform transition-transform hover:-translate-y-2">
        <h3 className="text-2xl font-semibold text-green-400 mb-4">
          Task 1: Spam Detection (Text Classification)
        </h3>
        <p className="mb-4">
          The goal is to classify text data from English, French, and German as
          either Spam or Ham using a logistic regression model.
        </p>
        <pre className="bg-black text-white p-4 rounded-md overflow-x-auto max-w-full">
          <code>{`
Objective:
- Classify text as Spam or Ham using a logistic regression model.

Dataset:
- You will work with Task1.csv which contains text data labeled as Spam or Ham.

Instructions:
1. Data Preprocessing: Load and clean the dataset.
2. Feature Extraction: Use TfidfVectorizer for text vectorization.
3. Model Training: Train a logistic regression model on the data.
4. Model Evaluation: Print accuracy and visualize confusion matrix.
5. Hyperparameter Tuning: Improve the model performance.
          `}</code>
        </pre>
        <a
          href="https://drive.google.com/file/d/1RNtRUTEwBhNYO7fL-fLrX7Of15nqEZ_j/view?usp=sharing"
          className="text-green-400 hover:underline mt-4 block"
        >
          Dataset Link: Task1.csv
        </a>
        <FaChartLine className="text-green-400 text-3xl mb-4" />
      </li>

      {/* Task 2: Vehicle Detection */}
      <li className="bg-gray-800 p-6 rounded-lg shadow-lg transform transition-transform hover:-translate-y-2">
        <h3 className="text-2xl font-semibold text-green-400 mb-4">
          Task 2: Vehicle Detection and Classification
        </h3>
        <p className="mb-4">
          Detect, classify, and count vehicles passing through a specified
          polygon region in a video using models like YOLO or Faster R-CNN.
        </p>
        <pre className="bg-black text-white p-4 rounded-md overflow-x-auto max-w-full">
          <code>{`
Objective:
- Detect and classify vehicles within a specific region in a video.

Instructions:
1. Model Selection: Use YOLO or Faster R-CNN for vehicle detection.
2. Detection & Counting: Count and classify vehicles within the polygon zone.
3. Frame-by-Frame Output: Provide vehicle counts and types for each frame.
4. Tracking: Track vehicles passing through the polygon zone.

Polygon Zone Coordinates:
np.array([[472, 2119], [3384, 2103], [2604, 735], [1436, 711]])
          `}</code>
        </pre>
        <a
          href="https://drive.google.com/file/d/1sS1ojBw4skBhv9n7m9xiJrrY9sSmHv4G/view?usp=sharing"
          className="text-green-400 hover:underline mt-4 block"
        >
          Video Link: Task2.mp4
        </a>
        <FaRobot className="text-green-400 text-3xl mb-4" />
      </li>
    </ul>

    <div className="mt-10">
      <h3 className="text-3xl font-semibold text-green-400 mb-4">
        !! Attention Please !!
      </h3>
      <p className="text-lg mb-6">
        Participants who complete both tasks will have an advantage. However,
        even if you cannot fully implement a task, submit the completed portion.
      </p>
      <div className="flex space-x-4">
        <a
          href="https://drive.google.com/file/d/1RNtRUTEwBhNYO7fL-fLrX7Of15nqEZ_j/view?usp=sharing"
          className="text-green-400 hover:underline"
        >
          Task 1 Dataset (CSV)
        </a>
        <a
          href="https://drive.google.com/file/d/1sS1ojBw4skBhv9n7m9xiJrrY9sSmHv4G/view?usp=sharing"
          className="text-green-400 hover:underline"
        >
          Task 2 Video
        </a>
      </div>
    </div>
  </div>
);

export default MlTasks;
