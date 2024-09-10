import React from "react";
import { FaNetworkWired, FaMicrochip, FaCode } from "react-icons/fa";

const IotTasks = () => (
  <div className="bg-black text-white px-8 py-12">
    <h2 className="text-4xl font-bold text-green-400 mb-6">
      <FaNetworkWired className="inline-block mr-2" />
      IoT (Internet Of Things) Challenge
    </h2>
    <div className="text-gray-300">
      <h3 className="text-xl mb-4">
        <span className="text-green-500 font-bold text-2xl">What we expect: </span>
        <br />
        Basic: Arduino Circuit and C/C++ Programming
        <br />
        Advanced: Rust Programming on Ubuntu or Wowki
      </h3>
      <p className="mb-4">
        Upon completion, please submit the prototype video and github link to the submission form{" "}
        <a className="underline text-green-500" target="_blank" href="https://forms.gle/QsXxKEV2gi2pg8yF7">
        https://forms.gle/QsXxKEV2gi2pg8yF7
        </a>
      </p>
      <p className="text-green-500 mb-8">
        Below is an example to refer and you can always reach out to us for any doubts. Happy Developing!!
      </p>
    </div>

    <div className="space-y-8">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
        <h3 className="text-2xl font-semibold text-green-400 mb-4">Reference Video</h3>
        <div className="video-container flex gap-2 my-4">
          <iframe 
            width="300" 
            height="200" 
            src="https://www.youtube.com/embed/_5fUDcr7Gvw" 
            title="RUST Code Demo- BYTE Iot Challenge" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowFullScreen
          ></iframe>
        </div>
      </div>

      <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
        <h3 className="text-2xl font-semibold text-green-400 mb-4">
          Exploring Internet of Things (IoT) with Arduino and Rust
        </h3>
        <FaMicrochip className="text-green-400 text-3xl mb-4" />
        <h4 className="text-xl font-bold mb-2">Abstract</h4>
        <p className="mb-4">
          This paper introduces an engaging task for individuals interested in exploring the Internet of Things (IoT) domain. The task involves the use of Arduino boards to create a circuit controlling RGB LED lights through a push button. Participants are encouraged to delve into both traditional C/C++ programming (Part 1) and modern systems programming with Rust (Part 2). The paper provides a comprehensive guide to the task, including hardware setup, software requirements, and coding instructions.
        </p>
        {/* Add more sections from the research paper here */}
      </div>

      <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
        <h3 className="text-2xl font-semibold text-green-400 mb-4">
          Part 1: Arduino Circuit and C/C++ Programming
        </h3>
        <FaCode className="text-green-400 text-3xl mb-4" />
        <h4 className="text-lg font-bold mb-2">Hardware Setup</h4>
        <p className="mb-4">
          Participants are required to set up an Arduino circuit using a push button and RGB LED lights. The sequence of the lights should be as follows:
        </p>
        <ul className="list-disc pl-4 mb-4">
          <li>Red light on, Green light off, Blue light off when the circuit is switched on.</li>
          <li>Red light off, Green light on, Blue light off on the first press of the push button.</li>
          <li>Red light off, Green light off, Blue light on on the second press of the push button.</li>
        </ul>
        <h4 className="text-lg font-bold mb-2">Code Snippet</h4>
        <pre className="bg-black text-green-500 p-4 rounded-md overflow-x-auto">
          <code>{`
const int ledPin = 9; // Define the pin for the LED

void setup() {
    pinMode(ledPin, OUTPUT); // Set the LED pin as an output
}

void loop() {
    digitalWrite(ledPin, HIGH); // Turn on the LED
    delay(1000); // Wait for 1 second
    digitalWrite(ledPin, LOW); // Turn off the LED
    delay(1000); // Wait for 1 second
}
          `}</code>
        </pre>
      </div>

      <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
        <h3 className="text-2xl font-semibold text-green-400 mb-4">
          Part 2: Rust Programming on Ubuntu or Wowki
        </h3>
        <FaCode className="text-green-400 text-3xl mb-4" />
        <h4 className="text-lg font-bold mb-2">Code Snippet</h4>
        <pre className="bg-black text-green-500 p-4 rounded-md overflow-x-auto">
          <code>{`
extern crate rppal;
use rppal::gpio::{Gpio, Level};
use std::thread;
use std::time::Duration;

fn main() {
    let gpio = Gpio::new().unwrap();
    let pin = gpio.get(9).unwrap().into_output();

    loop {
        pin.set_high(); // Turn on the LED
        thread::sleep(Duration::from_secs(1)); // Wait for 1 second
        pin.set_low(); // Turn off the LED
        thread::sleep(Duration::from_secs(1)); // Wait for 1 second
    }
}
          `}</code>
        </pre>
      </div>

      <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
        <h3 className="text-2xl font-semibold text-green-400 mb-4">Resources</h3>
        <ul className="list-disc pl-4">
          <li><a href="https://www.arduino.cc/" className="text-green-500 hover:underline">Arduino Official Website</a></li>
          <li><a href="https://www.tinkercad.com" className="text-green-500 hover:underline">Tinkercad</a></li>
          <li><a href="https://www.rust-lang.org/" className="text-green-500 hover:underline">Rust Official Website</a></li>
          <li><a href="https://wowki.com" className="text-green-500 hover:underline">Wowki</a></li>
        </ul>
      </div>
    </div>
  </div>
);

export default IotTasks;