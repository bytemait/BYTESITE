import React from "react";
import { FaMobileAlt, FaMapMarkerAlt, FaCloudUploadAlt } from "react-icons/fa";

const AppDevTasks = () => (
  <div className="bg-black text-white px-8 py-12">
    {/* Header Section */}
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
          Develop an app that tracks user location in real-time or at intervals, storing data securely in a backend database or locally on the device.
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>Implement real-time location tracking using geolocation services.</li>
          <li>Ensure secure transmission and storage of location data (e.g., using HTTPS).</li>
          <li>Design an efficient database schema for location data (Firebase, SQLite, or MongoDB).</li>
          <li>Respect user privacy by asking for consent and handling permissions correctly.</li>
        </ul>
        <FaMapMarkerAlt className="text-green-400 text-3xl mb-4" />
        
        <p className="text-sm mb-4">
          Approach: Start with obtaining location access in your app using geolocation APIs. Use <strong>sockets</strong> for live tracking, or alternatively, store location data in a local database if you're not comfortable with server-side integration.
        </p>

        <div className="text-sm space-y-4">
          <strong>Resources & Documentation:</strong>
          <ul className="list-disc list-inside">
            <li><a href="https://developer.android.com/training/location" target="_blank" className="text-green-400 underline">Android Location Services Documentation (Java/Kotlin)</a></li>
            <li><a href="https://docs.expo.dev/versions/latest/sdk/location/" target="_blank" className="text-green-400 underline">Expo Location API for React Native</a></li>
            <li><a href="https://socket.io/" target="_blank" className="text-green-400 underline">Socket.io for live location tracking</a></li>
          </ul>
        </div>
        <br />
        <pre className="bg-black text-white p-4 rounded-md">
          <code>{`
            // React Native Expo - Get User Location
            import * as Location from 'expo-location';

            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
              setErrorMsg('Permission to access location was denied');
              return;
            }

            let location = await Location.getCurrentPositionAsync({});
            console.log(location);
          `}</code>
        </pre>
      </li>

      {/* Task 2 */}
      <li className="bg-gray-800 p-6 rounded-lg shadow-lg transform transition-transform hover:-translate-y-2">
        <h3 className="text-2xl font-semibold text-green-400 mb-4">
          Task 2 (Advanced): Location Tracker Deployment
        </h3>
        <p className="mb-4">
          Deploy the location-tracking app for public use with robust backend support for handling multiple users. Implement real-time tracking with WebSockets or REST API integration.
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>Ensure public usability with smooth onboarding (e.g., OAuth, JWT tokens).</li>
          <li>Optimize backend for efficient data storage and retrieval (Node.js, Express, MongoDB).</li>
          <li>Maintain app performance and accuracy under heavy usage (scalability).</li>
          <li>Prevent inconsistent location updates post-deployment (use background services).</li>
        </ul>
        <FaCloudUploadAlt className="text-green-400 text-3xl mb-4" />
        
        <p className="text-sm mb-4">
          Approach: Use <strong>WebSockets</strong> for real-time updates of user location. In the absence of real-time features, focus on storing the last known location and updating it periodically on the server or in local storage.
        </p>

        <div className="text-sm space-y-4">
          <strong>Resources & Documentation:</strong>
          <ul className="list-disc list-inside">
            <li><a href="https://firebase.google.com/docs/firestore" target="_blank" className="text-green-400 underline">Firebase Firestore for data storage</a></li>
            <li><a href="https://docs.expo.dev/versions/latest/sdk/background-fetch/" target="_blank" className="text-green-400 underline">Expo Background Fetch for updating location in the background</a></li>
            <li><a href="https://docs.mongodb.com/" target="_blank" className="text-green-400 underline">MongoDB Documentation</a></li>
          </ul>
        </div>
        <br />
        <pre className="bg-black text-white p-4 rounded-md">
          <code>{`
            // Socket.io - Real-time Location Tracking
            const socket = io('http://localhost:3000');
            
            navigator.geolocation.watchPosition(position => {
              socket.emit('locationUpdate', {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
              });
            });

            // Backend - Listen to location updates (Node.js/Express)
            socket.on('locationUpdate', (data) => {
              console.log('User location:', data);
              // Store or process location data
            });
          `}</code>
        </pre>
      </li>
    </ul>
  </div>
);

export default AppDevTasks;
