
---

# B.Y.T.E. Society Web & App Development Task Overview

## Introduction
This repository outlines the tasks for the B.Y.T.E. Society involving web development, app development and backend development. The goal is to challenge participants to create functional, well-structured applications with a focus on usability, user experience and consistency. Below are the detailed tasks along with expectations and deliverables for each.

---

## Task 1: Web Development – YouTube and GitHub Subscription Verification

### Objective:
Create an application that restricts access to a specific page using a private route system, ensuring that only users subscribed to **B.Y.T.E.'s YouTube channel** or following **B.Y.T.E.'s GitHub repository** can access the page.

### Description:
You are tasked with creating a subscription-based content access system for B.Y.T.E. Society’s website. The goal is to create a **private route** in your application that only allows access if the user meets the following conditions:
1. **YouTube Channel Subscription:** Users must be subscribed to B.Y.T.E.'s YouTube channel [https://www.youtube.com/@BYTE-mait](https://www.youtube.com/@BYTE-mait).
   
   OR

2. **GitHub Repository Follow:** Users must be following B.Y.T.E. on GitHub at [https://github.com/bytemait](https://github.com/bytemait).

The application should authenticate the user based on their YouTube or GitHub subscription and accordingly allow or deny access to the private page.

### Requirements:
- **Private Route:** The page should only be accessible if the subscription/follow check is successful. If the user is not subscribed/following, they should be redirected to an error page or prompted with a message.
- **Consistency:** The route guarding mechanism must be efficient and fail-safe. Inconsistent behavior, such as intermittent access without proper verification, is not acceptable.
- **User Experience:** The error messages or prompts should be user-friendly and clearly indicate the necessary action for gaining access.
- **No False Positives/Negatives:** The application should ensure that users are not accidentally denied or granted access due to faulty verification logic.
  
### Bugs to Avoid:
- **Unauthorized Access:** Users should not be able to bypass the subscription check through URL manipulation or other methods.
- **Subscription Sync Issues:** There should not be delays or inconsistencies in recognizing YouTube subscriptions or GitHub follows.
- **Misleading Prompts:** Users should not receive incorrect messages about their subscription status.

---

### Task 2: App Development & Backend – Location Tracking System

### Objective:
Develop a mobile application that **tracks the user's location** and stores the data in a database for analysis or future reference.

### Description:
The goal of this task is to create a mobile application that actively monitors the user's location and uploads this data to a backend server for storage in a database.

The key functionalities are as follows:
1. **Location Tracking:** The app should track the user's location in real-time or at specified intervals.
2. **Backend Storage:** The location data must be transmitted securely to a backend server and stored in a database for future retrieval.
3. **Database Structure:** Design a clean and efficient database schema for storing the user's location, including details such as timestamp, latitude, longitude, and user ID.
4. **Privacy and Security:** Make sure that the app respects user privacy and includes appropriate consent and permissions for location tracking.

### Requirements:
- **Real-time Accuracy:** Ensure that the location data is accurate and updated in near real-time to reflect the user’s movements.
- **Consistency Across Platforms:** The app should work seamlessly on both Android and iOS platforms (if applicable), with uniform behavior in how it tracks and stores location data.
- **Backend API:** Implement a secure API for receiving and storing the location data from the app. Ensure data validation and security protocols are followed.
  
### Bugs to Avoid:
- **Data Loss:** Ensure that no location data is lost during transmission to the backend. Retry mechanisms or error handling should be implemented to mitigate connection issues.
- **Inconsistent Tracking:** The app should not record incorrect or inconsistent location data.
- **Battery Drain:** Implement efficient location tracking that minimizes battery consumption on the user’s device.

---

## Level 2: Advanced Tasks

### Web Development Task (Level 2) – Public Deployment

**Objective:** Deploy the web application and make it available to a wider audience, allowing any user to verify their subscription and access the private route.

### Description:
Take your initial subscription verification system a step further by deploying it for public access. The goal is to allow any user to verify whether they are subscribed to B.Y.T.E.'s YouTube channel or following the GitHub repository. The application must handle multiple users simultaneously and offer a seamless experience.

**Key Expectations:**
- **Scalability:** The system should support multiple users concurrently, with no degradation in performance.
- **Public Access:** Make the application accessible via a publicly accessible URL (e.g., hosted on services such as Heroku, Vercel, or AWS).
- **Security:** Ensure that user data, especially YouTube and GitHub details, is handled securely and privately.

### Bugs to Avoid:
- **Unauthorized Access Post-Deployment:** Ensure that users still cannot bypass the subscription/follow check after deployment.
- **Performance Lag:** The app should not slow down under heavy traffic or have latency issues while verifying subscriptions or follows.

---

### App Development & Backend Task (Level 2) – Location Tracker Deployment

**Objective:** Deploy the location tracking application and make it usable by any user, with real-time location storage and accessible reporting.

### Description:
Expand the location-tracking system to a fully deployed mobile app that can be downloaded and used by any user. Ensure the backend is robust enough to handle multiple users and store location data efficiently.

**Key Expectations:**
- **Public Usability:** The app should be made available for download and use by the public, with a streamlined installation and onboarding process.
- **Efficient Data Storage:** Ensure that the backend can store and retrieve data for multiple users efficiently, with no data loss or corruption.
- **Scalability and Performance:** The app should work in real-time, and the backend should be capable of handling multiple users sending location data simultaneously.

### Bugs to Avoid:
- **Poor Performance with Multiple Users:** The app should not crash or experience significant performance issues when used by multiple users at once.
- **Inconsistent Location Updates Post-Deployment:** Ensure that location updates remain accurate and consistent after the app is deployed and used by different users.

---

## Key takeaways

These tasks aim to challenge your development skills across various aspects of web, app and backend development. Make sure to deliver a consistent and bug-free experience, ensuring that all features work seamlessly and scale well. The tasks should follow best practices in terms of security, performance and user experience.

Good luck and we look forward to seeing your implementations!
Please note that implementation and effort will be seen and what you implemented knowing your tech stack and what you tried to learn, try making and pushing something in submission even if it is incomplete
---

```
Happy hacking!!
```