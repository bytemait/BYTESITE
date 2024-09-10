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
          TASK 1: Spam Detection (Text Classification)
        </h3>
        <h4 className="text-xl font-semibold mb-2">Objective:</h4>
        <p className="mb-4">
          The goal of this task is to classify text data from three different languages (English, French, and German) as either Spam or Ham (not spam). You are required to train a machine learning model that can accurately classify the given dataset based on the provided text features.
        </p>
        <h4 className="text-xl font-semibold mb-2">Dataset:</h4>
        <p className="mb-4">
          You will work with a dataset labeled as "Spam" or "Ham," which is available in a CSV file named Task1.csv. - <a className= 'text-green-400 hover:underline' href="https://drive.google.com/file/d/1RNtRUTEwBhNYO7fL-fLrX7Of15nqEZ_j/view?usp=sharing">Dataset Link</a>
        </p>
        <h4 className="text-xl font-semibold mb-2">Instructions:</h4>
        <ol className="list-decimal list-inside mb-4">
          <li className="mb-2">
            <strong>Data Loading & Preprocessing:</strong>
            <ul className="list-disc list-inside ml-4">
              <li>Load the dataset into a DataFrame.</li>
              <li>Check for missing values and clean or remove the data as necessary.</li>
              <li>Ensure that the dataset is balanced or handle imbalanced data if needed.</li>
            </ul>
          </li>
          <li className="mb-2">
            <strong>Feature Extraction:</strong>
            <ul className="list-disc list-inside ml-4">
              <li>Use a TfidfVectorizer to convert the text data into numerical representations for machine learning.</li>
              <li>The dataset contains text in multiple languages, so ensure that your vectorization is language-agnostic.</li>
            </ul>
          </li>
          <li className="mb-2">
            <strong>Model Training:</strong>
            <ul className="list-disc list-inside ml-4">
              <li>Train a Logistic Regression model on the preprocessed data.</li>
              <li>Understand the underlying principles of logistic regression as this will help in effective model implementation.</li>
            </ul>
          </li>
          <li className="mb-2">
            <strong>Model Evaluation:</strong>
            <ul className="list-disc list-inside ml-4">
              <li>Print the model's accuracy.</li>
              <li>Create a confusion matrix to visualize the model's performance on classifying Spam and Ham.</li>
            </ul>
          </li>
          <li className="mb-2">
            <strong>Hyperparameter Tuning:</strong>
            <ul className="list-disc list-inside ml-4">
              <li>Perform hyperparameter tuning on the logistic regression model to improve its accuracy.</li>
            </ul>
          </li>
        </ol>
        <h4 className="text-xl font-semibold mb-2">Resources:</h4>
        <ul className="list-disc list-inside mb-4">
          <li><a href="https://scikit-learn.org/stable/modules/generated/sklearn.feature_extraction.text.TfidfVectorizer.html" className="text-green-400 hover:underline">TfidfVectorizer Documentation</a></li>
          <li><a href="https://www.youtube.com/watch?v=Kdsp6soqA7o" className="text-green-400 hover:underline">Confusion Matrix Explanation 1</a></li>
          <li><a href="https://www.youtube.com/watch?v=vP06aMoz4v8" className="text-green-400 hover:underline">Confusion Matrix Explanation 2</a></li>
          <li><a href="https://www.youtube.com/watch?v=het9HFqo1TQ&t=2778s" className="text-green-400 hover:underline">Logistic Regression Explained (Video)</a></li>
          <li><a href="https://www.youtube.com/watch?v=D2V1okCEsiE" className="text-green-400 hover:underline">TfidfVectorizer Explanation</a></li>
        </ul>
        <p className="mb-4">
          We encourage the participants to find more resources on their own and look for official documentation if they face any difficulty while implementing the task.
        </p>
        <h4 className="text-xl font-semibold mb-2">Submission:</h4>
        <ul className="list-disc list-inside mb-4">
          <li>Submit a link of your Google Colab or Kaggle notebook or .ipynb file</li>
          <li>Ensure that the notebook is well-structured with comments explaining each step.</li>
          <li>Clearly show the accuracy of the model and confusion matrix in the notebook.</li>
        </ul>
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
          TASK 2: Vehicle Detection and Classification
        </h3>
        <h4 className="text-xl font-semibold mb-2">Objective:</h4>
        <p className="mb-4">
          In this task, your objective is to detect, classify, and count vehicles passing through a specified polygon region in a video. You will implement a computer vision-based vehicle detection model to accomplish this.
        </p>
        <h4 className="text-xl font-semibold mb-2">Input:</h4>
        <p className="mb-4">
          You are provided with the following:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>A video showing vehicles passing through.</li>
          <li>A numpy array containing the coordinates of a polygon zone where vehicle detection should be performed (Use only these coordinates to perform the task)</li>
        </ul>
        <h4 className="text-xl font-semibold mb-2">Instructions:</h4>
        <ol className="list-decimal list-inside mb-4">
          <li className="mb-2">
            <strong>Model Selection:</strong>
            <ul className="list-disc list-inside ml-4">
              <li>Use a vehicle detection model (e.g., YOLO, Faster R-CNN, etc.) to detect vehicles passing through the polygon zone.</li>
            </ul>
          </li>
          <li className="mb-2">
            <strong>Detection and Counting:</strong>
            <ul className="list-disc list-inside ml-4">
              <li>Detect, classify, and count vehicles (e.g., car, bus, truck) that pass through the polygon zone.</li>
              <li>Ensure accurate tracking of vehicles and their types within the specified region.</li>
            </ul>
          </li>
          <li className="mb-2">
            <strong>Frame-by-Frame Output:</strong>
            <ul className="list-disc list-inside ml-4">
              <li>For the video, provide the count of vehicles for each frame and classify them into the correct categories.</li>
            </ul>
          </li>
          <li className="mb-2">
            <strong>Tracking:</strong>
            <ul className="list-disc list-inside ml-4">
              <li>Track vehicles over time as they pass through the bounding zone and provide a running count of each vehicle type.</li>
            </ul>
          </li>
        </ol>
        <h4 className="text-xl font-semibold mb-2">Output Example:</h4>
        <p className="mb-4">
          After performing the task, you should get an output similar to this video:
        </p>
        <p className="mb-4">
          In video the yellow box signifies the region in which the vehicles are detected and counted.
        </p>
        <a href="https://youtu.be/Th_IZ2NaPT8" className="text-green-400 hover:underline mb-4 block">
          Output Video For Reference
        </a>
        <h4 className="text-xl font-semibold mb-2">Resources:</h4>
        <ul className="list-disc list-inside mb-4">
          <li><a href="https://blog.roboflow.com/polygonzone/" className="text-green-400 hover:underline">Polygon Zone Vehicle Detection (Blog)</a></li>
          <li><a href="https://www.youtube.com/watch?v=l_kf9CfZ_8M" className="text-green-400 hover:underline">Vehicle Detection and Tracking Tutorial (Video 1)</a></li>
          <li><a href="https://www.youtube.com/watch?v=3gL_p60Q70o" className="text-green-400 hover:underline">Vehicle Detection and Tracking Tutorial (Video 2)</a></li>
        </ul>
        <p className="mb-4">
          We encourage the participants to find more resources on their own and look for official documentation if they face any difficulty while implementing the task.
        </p>
        <h4 className="text-xl font-semibold mb-2">Submission:</h4>
        <ul className="list-disc list-inside mb-4">
          <li>Upload the final video showing your results to YouTube and provide the public link.</li>
          <li>Submit your Google Colab or Kaggle notebook with the solution.</li>
          <li>Ensure your code is well-structured with proper comments.</li>
        </ul>
        <a
          href="https://drive.google.com/file/d/1sS1ojBw4skBhv9n7m9xiJrrY9sSmHv4G/view?usp=sharing"
          className="text-green-400 hover:underline mt-4 block"
        >
          Video Link: Task2.mp4
        </a>
        <p className=" hover:underline">Note that you are not allowed to edit or modify the video by any means.</p>
        <FaRobot className="text-green-400 text-3xl mb-4" />
      </li>
    </ul>

    <div className="mt-10">
      <h3 className="text-3xl font-semibold text-green-400 mb-4">
        !! Attention Please !!
      </h3>
      <h4 className="text-xl font-semibold mb-2">Preferred Platforms for Task Completion:</h4>
      <ul className="list-disc list-inside mb-4">
        <li>Google Colab Notebooks</li>
        <li>Kaggle Notebooks</li>
        <li>Jupyter Notebooks</li>
      </ul>
      <h4 className="text-xl font-semibold mb-2">Dataset and Video Links:</h4>
      <ul className="list-disc list-inside mb-4">
        <li>
          <a
            href="https://drive.google.com/file/d/1RNtRUTEwBhNYO7fL-fLrX7Of15nqEZ_j/view?usp=sharing"
            className="text-green-400 hover:underline"
          >
            Task 1 Dataset (CSV): Download Task1.csv
          </a>
        </li>
        <li>
          <a
            href="https://drive.google.com/file/d/1sS1ojBw4skBhv9n7m9xiJrrY9sSmHv4G/view?usp=sharing"
            className="text-green-400 hover:underline"
          >
            Task 2 Video: Download Video
          </a>
        </li>
      </ul>
      <h4 className="text-xl font-semibold mb-2">Coordinates for Task 2 Polygon Zone:</h4>
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto mb-4">
        <code>
          np.array([[472, 2119], [3384, 2103], [2604, 735], [1436, 711]])
        </code>
      </pre>
      <p className="text-lg mb-6">
        We encourage participants to attempt both tasks. Participants who complete both tasks will have an advantage over those who submit only one task. However, if you're unable to fully implement a task, you can submit the portion you've completed.
      </p>
      <p className="text-lg">
        Focus on understanding the underlying concepts of Logistic Regression, Computer vision and object detection as it would help you in implementing the task more accurately and with correctness.
      </p>
    </div>
  </div>
);

export default MlTasks;