import React from "react";
import { FaMobileAlt, FaMapMarkerAlt, FaCloudUploadAlt } from "react-icons/fa";

const DevOps = () => (
  <div className="bg-black text-white px-8 py-12">
    {/* Header Section */}
    <h2 className="text-4xl font-bold text-green-400 mb-6">
      <FaMobileAlt className="inline-block mr-2" />
      DevOps / 100x Developers Task
    </h2>
    {/* <p className="text-lg mb-8">
      Test your devops skills with a unique project.
    </p> */}

    <ul className="space-y-8">
      {/* Task 1 */}
      <li className="bg-gray-800 p-6 rounded-lg shadow-lg transform transition-transform hover:-translate-y-2">
        <h3 className="text-2xl font-semibold text-green-400 mb-4">
          Task 1: Setup and Run Quine Relay
        </h3>
        <p className="mb-4">
            What really happened with Aaron Swartz? <br />
          Setup and run the repository <a href="https://github.com/mame/quine-relay"  target="_blank" className="text-blue-400 underline">https://github.com/mame/quine-relay</a> on your device. Thats it! Enjoy Hacking! <br />
        </p>
        {/* <ul className="list-disc list-inside mb-4">
          <li>Implement real-time location tracking using geolocation services.</li>
          <li>Ensure secure transmission and storage of location data (e.g., using HTTPS).</li>
          <li>Design an efficient database schema for location data (Firebase, SQLite, or MongoDB).</li>
          <li>Respect user privacy by asking for consent and handling permissions correctly.</li>
        </ul>
        <FaMapMarkerAlt className="text-green-400 text-3xl mb-4" />
        
        <p className="text-sm mb-4">
          Approach: Start with obtaining location access in your app using geolocation APIs. Use <strong>sockets</strong> for live tracking, or alternatively, store location data in a local database if you're not comfortable with server-side integration.
        </p> */}

        {/* <div className="text-sm space-y-4">
          <strong>Resources & Documentation:</strong>
          <ul className="list-disc list-inside">
            <li><a href="https://developer.android.com/training/location" target="_blank" className="text-green-400 underline">Android Location Services Documentation (Java/Kotlin)</a></li>
            <li><a href="https://docs.expo.dev/versions/latest/sdk/location/" target="_blank" className="text-green-400 underline">Expo Location API for React Native</a></li>
            <li><a href="https://socket.io/" target="_blank" className="text-green-400 underline">Socket.io for live location tracking</a></li>
          </ul>
        </div> */}
        <br />
        {/* <pre className="bg-black text-white p-4 rounded-md">
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
        </pre> */}
      </li>

      {/* Task 2 */}
    </ul>
  </div>
);

export default DevOps;
