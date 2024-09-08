# Machine Learning Selection Tasks for BYTE Society

Welcome to the ML selection process! In this repository, we present two machine learning tasks to evaluate your understanding and skills in data science and computer vision. The tasks will involve text classification and vehicle detection, both of which are essential applications of machine learning.

---
<br><br><br>

## **TASK 1: Spam Detection (Text Classification)**

### **Objective:**
The goal of this task is to classify text data from three different languages (English, French, and German) as either **Spam** or **Ham** (not spam). You are required to train a machine learning model that can accurately classify the given dataset based on the provided text features.

### **Dataset:**
You will work with a dataset labeled as "Spam" or "Ham," which is available in a CSV file named `Task1.csv`.
-[Dataset Link](https://drive.google.com/file/d/1RNtRUTEwBhNYO7fL-fLrX7Of15nqEZ_j/view?usp=sharing)

### **Instructions:**

1. **Data Loading & Preprocessing:**
   - Load the dataset into a DataFrame.
   - Check for missing values and clean or remove the data as necessary.
   - Ensure that the dataset is balanced or handle imbalanced data if needed.

2. **Feature Extraction:**
   - Use a `TfidfVectorizer` to convert the text data into numerical representations for machine learning.
   - The dataset contains text in multiple languages, so ensure that your vectorization is language-agnostic.

3. **Model Training:**
   - Train a `Logistic Regression` model on the preprocessed data.
   - Understand the underlying principles of logistic regression as this will help in effective model implementation.

4. **Model Evaluation:**
   - Print the model’s accuracy.
   - Create a **confusion matrix** to visualize the model’s performance on classifying Spam and Ham.

5. **Hyperparameter Tuning:**
   - Perform hyperparameter tuning on the logistic regression model to improve its accuracy.

### **Resources:**
- [TfidfVectorizer Documentation](https://scikit-learn.org/stable/modules/generated/sklearn.feature_extraction.text.TfidfVectorizer.html)
- [Confusion Matrix Explanation](https://www.youtube.com/watch?v=Kdsp6soqA7o)
- [Confusion Matrix Explanation](https://www.youtube.com/watch?v=vP06aMoz4v8)
- [Logistic Regression Explained (Video)](https://www.youtube.com/watch?v=het9HFqo1TQ&t=2778s)
- [TfidfVectorizer Explanation](https://www.youtube.com/watch?v=D2V1okCEsiE)

### **We encourage the participants to find more resources on their own and look for official documentaion if they face any difficulty while implementin the task** 

### **Submission:**
- Submit a link of your Google Colab or Kaggle notebook or .ipynb file 
- Ensure that the notebook is well-structured with comments explaining each step.
- Clearly show the accuracy of the model and confusion matrix in the notebook.




---
<br><br><br>




## **TASK 2: Vehicle Detection and Classification**

### **Objective:**
In this task, your objective is to detect, classify, and count vehicles passing through a specified polygon region in a video. You will implement a computer vision-based vehicle detection model to accomplish this.

### **Input:**
You are provided with the following:
1. A video showing vehicles passing through.
2. A numpy array containing the coordinates of a polygon zone where vehicle detection should be performed (Use only these coordinated to perform the task)

### **Instructions:**
1. **Model Selection:**
   - Use a vehicle detection model (e.g., YOLO, Faster R-CNN, etc.) to detect vehicles passing through the polygon zone.

2. **Detection and Counting:**
   - Detect, classify, and count vehicles (e.g., car, bus, truck) that pass through the polygon zone.
   - Ensure accurate tracking of vehicles and their types within the specified region.

3. **Frame-by-Frame Output:**
   - For the video, provide the count of vehicles for each frame and classify them into the correct categories.

4. **Tracking:**
   - Track vehicles over time as they pass through the bounding zone and provide a running count of each vehicle type.
### **Output Example:**
After performing the task, you should get an output similar to this video:

In video the yellow box signifies  the region in which the vehicles are detected and counted.

[Output Video For Reference](https://youtu.be/Th_IZ2NaPT8)

### **Resources:**
- [Polygon Zone Vehicle Detection (Blog)](https://blog.roboflow.com/polygonzone/)
- [Vehicle Detection and Tracking Tutorial (Video 1)](https://www.youtube.com/watch?v=l_kf9CfZ_8M)
- [Vehicle Detection and Tracking Tutorial (Video 2)](https://www.youtube.com/watch?v=3gL_p60Q70o)

### **We encourage the participants to find more resources on their own and look for official documentaion if they face any difficulty while implementin the task**

### **Submission:**
- Upload the final video showing your results to YouTube and provide the public link.
- Submit your Google Colab or Kaggle notebook with the solution.
- Ensure your code is well-structured with proper comments.

---
<br><br><br>

## **!! Attention Please !!**



### **Preferred Platforms for Task Completion:**
- Google Colab Notebooks
- Kaggle Notebooks
- Jupyter Notebooks

---

## Dataset and Video Links:

- **Task 1 Dataset (CSV):** [Download Task1.csv](https://drive.google.com/file/d/1RNtRUTEwBhNYO7fL-fLrX7Of15nqEZ_j/view?usp=sharing)
- **Task 2 Video:** [Download Video](https://drive.google.com/file/d/1sS1ojBw4skBhv9n7m9xiJrrY9sSmHv4G/view?usp=sharing)

---

## Coordinates for Task 2 Polygon Zone:
```python
np.array([[472, 2119], [3384, 2103], [2604, 735], [1436, 711]])
```

### **We encourage participants to attempt both tasks. Participants who complete both tasks will have an advantage over those who submit only one task. However, if you're unable to fully implement a task, you can submit the portion you've completed.**


### **Focus on undersyanding the underlying concepts of Logistic Regression  , Computer vision and object detection as it would help you in implementing the task more accurately and with correctness.**

