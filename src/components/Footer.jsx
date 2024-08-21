import React from 'react';

const Footer = () => {
    return (
        <div className=" text-gray-300 bg-black">
            <div className="container px-10 py-10 mx-auto flex justify-between items-center">
                <div>
                    <h1 className="text-4xl font-bold">
                        Solving Problems<br />
                        One <span className="text-green-400">Byte</span> At a Time
                    </h1>
                </div>
                <div>
                    <h2 className="text-3xl font-semibold mb-2">Explore</h2>
                    <ul className='text-xl'>
                        <li><a href="/home" className="hover:text-green-400">Home</a></li>
                        <li><a href="/achievements" className="hover:text-green-400">Achievements</a></li>
                        <li><a href="/projects" className="hover:text-green-400">Projects</a></li>
                        <li><a href="#" className="hover:text-green-400">Challenges</a></li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-3xl font-semibold mb-2">Contact Us</h2>
                    <ul className='text-xl'>
                        <li><a href="#" className="hover:text-green-400">Email</a></li>
                        <li><a href="#" className="hover:text-green-400">Phone no.</a></li>
                        <li><a href="#" className="hover:text-green-400">Kabutar</a></li>
                        <li><a href="#" className="hover:text-green-400">Address</a></li>
                    </ul>
                </div>
            </div>
            <div className="container mx-auto mt-8 border-t border-gray-700 pt-4 flex justify-between items-center">
                <p className='text-center'>© 2024 All Rights Reserved</p>
                <div className="flex space-x-4">
                    <a href="#" className="hover:text-green-400"><i className="fab fa-linkedin"></i></a>
                    <a href="#" className="hover:text-green-400"><i className="fab fa-instagram"></i></a>
                    <a href="#" className="hover:text-green-400"><i className="fab fa-github"></i></a>
                    <a href="#" className="hover:text-green-400"><i className="fab fa-twitter"></i></a>
                </div>
            </div>
        </div>
    );
};

export default Footer;