import React from "react";

const CardContainer = () => {
  return (
    <div className="bg-gray-900 py-16 px-4 md:px-12 lg:px-24">
      <h1 className="text-white text-3xl md:text-5xl lg:text-6xl text-center leading-tight mb-12 font-bold tracking-tight">
        Harvesting Insights from <br /> Diligent Endeavors
      </h1>

      <div className="flex flex-col gap-16 md:gap-24">
        <div className="flex flex-col md:flex-row md:justify-center gap-10 md:gap-20">
          <div className="flex-1 bg-gray-800 bg-opacity-80 border border-gray-700 rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105 hover:bg-opacity-90 max-w-md">
            <div className="p-6 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl md:text-3xl font-semibold text-white mb-2">
                  BYTELOCKER
                </h2>
                <p className="text-gray-300">
                  College security system utilizing OpenCV and facial
                  recognition
                </p>
              </div>
              <div className="text-gray-400 mt-4">
                <span className="text-sm">#01</span>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://img.freepik.com/free-photo/face-recognition-personal-identification-collage_23-2150165599.jpg?t=st=1724369151~exp=1724372751~hmac=8dad7398986b0b1a0027138e1bc63b8b9dbe5e8e9e1be0618a947976915a2bdd&w=1800"
                alt="BYTELOCKER"
                className="w-full h-full object-cover rounded-b-lg"
              />
            </div>
          </div>

          <div className="flex-1 bg-gray-800 bg-opacity-80 border border-gray-700 rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105 hover:bg-opacity-90 max-w-md">
            <div className="p-6 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl md:text-3xl font-semibold text-white mb-2">
                  MR Glass
                </h2>
                <p className="text-gray-300">
                  A concept Glasses for Extended Reality (XR) and Mixed Reality
                  (MR)...
                </p>
              </div>
              <div className="text-gray-400 mt-4">
                <span className="text-sm">#02</span>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://img.freepik.com/free-photo/smart-glasses-with-interactive-lenses-seeing-future_53876-101153.jpg?t=st=1724369379~exp=1724372979~hmac=9acaedbb7ae9d5d92593752d40d466ce5f8de80526bcd198f9f26184e77bdfb7&w=1800"
                alt="MR Glass"
                className="w-full h-full object-cover rounded-b-lg"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="bg-gray-800 bg-opacity-80 border border-gray-700 rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105 hover:bg-opacity-90 max-w-4xl">
            <div className="p-6 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl md:text-3xl font-semibold text-white mb-2">
                  RoboSoccer
                </h2>
                <p className="text-gray-300">
                  A robot using Bluetooth commands sent from a smartphone or
                  another Bluetooth-capable device.
                </p>
              </div>
              <div className="text-gray-400 mt-4">
                <span className="text-sm">#03</span>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://i.imghippo.com/files/lwiKK1724369665.png"
                alt="RoboSoccer"
                className="w-full h-full object-cover rounded-b-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardContainer;
