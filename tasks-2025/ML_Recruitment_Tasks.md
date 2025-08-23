# 🤖 Machine Learning Recruitment Tasks

---

## ✅ **Basic Task — Planetary Classifier**

**Objective:**
Build a **classifier** on a planetary dataset.

### **Dataset:**

* A **custom dataset** will be provided.

### **Steps:**

1. **Load and preprocess** the dataset.
2. **Extract features** from text (e.g., **TF-IDF**).
3. Train a classifier:

   * **Logistic Regression**
   * **Naive Bayes**
   * **Random Forest**
4. Report:

   * **Accuracy**
   * **Precision**
   * **Recall**
   * **F1 Score**

---

## ✅ **Advanced Task — Sentiment Analysis on Reviews**

**Objective:**
Build a **sentiment classifier** to predict whether a review is **positive** or **negative**.

### **Dataset:**

* **IMDb Reviews (25k labeled):**
  [Download Here](https://ai.stanford.edu/~amaas/data/sentiment/)
* **Amazon Reviews Polarity Dataset** (raw format)

### **Steps:**

1. **Preprocess text**: cleaning, tokenization.
2. **Baseline Approach:**

   * TF-IDF + Logistic Regression
3. **Advanced Approach:**

   * Train an **LSTM model**
   * Or **fine-tune a transformer** (e.g., DistilBERT)
4. Evaluate using:

   * **Accuracy**
   * **F1 Score**

---

## ✅ **GenAI Task — PDF QA Assistant**

**Objective:**
Build a tool where the **user uploads a PDF**, and the assistant **answers questions** about it.

### **Tools:**

* **LangChain**
* **ChromaDB** or **FAISS** for vector storage
* Any free **LLM endpoint** (OpenAI, HuggingFace, etc.)

### **Steps:**

1. **Chunk the text** from the PDF.
2. **Create embeddings** and store them in a vector database (e.g., Chroma).
3. Use an **LLM with RetrievalQA** to answer user queries from the document.
