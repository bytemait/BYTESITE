import React from 'react';

const Card = ({ image, name, designation }) => {
    return (
        <div className="relative bg-white shadow-lg rounded-lg overflow-hidden w-60 h-80 flex flex-col">
            {/* Background Image Section */}
            {image && (
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${image})` }}
                >
                    {/* Overlay to make text more readable */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                </div>
            )}
            {/* Text Content */}
            <div className="relative z-10 flex flex-col items-center justify-end p-6 text-center text-white flex-grow">
                <div className=" bg-opacity-50 p-4 rounded-lg">
                    <h2 className="text-5xl text-[#4afaab] font-extrabold mb-1">{name}</h2>
                    <p className="text-[#000319] font-bold text-lg">{designation}</p>
                </div>
            </div>
        </div>
    );
};

export default Card;