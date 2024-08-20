import React, { useState, useEffect } from 'react';
import Card from './Card/Card';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const cards = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1508341591423-4347099e1f19?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1hbnxlbnwwfHwwfHx8MA%3D%3D",
        name: "Sagar",
        designation: "Kuchtohu",
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1508341591423-4347099e1f19?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1hbnxlbnwwfHwwfHx8MA%3D%3D",
        name: "Sagar",
        designation: "Kuchtohu",
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1508341591423-4347099e1f19?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1hbnxlbnwwfHwwfHx8MA%3D%3D",
        name: "Sagar",
        designation: "Kuchtohu",
    },
    {
        id: 4,
        image: "https://images.unsplash.com/photo-1508341591423-4347099e1f19?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1hbnxlbnwwfHwwfHx8MA%3D%3D",
        name: "Sagar",
        designation: "Kuchtohu",
    },
    {
        id: 4,
        image: "https://images.unsplash.com/photo-1508341591423-4347099e1f19?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1hbnxlbnwwfHwwfHx8MA%3D%3D",
        name: "Sagar",
        designation: "Kuchtohu",
    }
];

const CardCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleCardClick = (index) => {
        setCurrentIndex(index);
    };

    useEffect(() => {
        // GSAP animation for scaling the carousel
        gsap.fromTo(
            ".card-carousel-container",
            { scale: 0 }, // Start with scale 0
            {
                scale: 1, // Scale to full size
                duration: 5, // Duration of the animation
                ease: "power3.out", // Smooth easing
                scrollTrigger: {
                    trigger: ".card-carousel-container", // Trigger when this element is in view
                    start: "top 80%", // Start the animation when the top of the element is 80% from the top of the viewport
                    end: "bottom 60%", // End when the bottom of the element is 60% from the top of the viewport
                    scrub: true, // Smooth scroll linking
                },
            }
        );
    }, []);

    return (
        <div className="card-carousel-container w-full max-w-4xl mb-48 mt py-12 relative ml-64">
            <div className="flex items-center justify-center">
                {cards.map((card, index) => {
                    const isActive = index === currentIndex;
                    const isPrev = index === (currentIndex - 1 + cards.length) % cards.length;
                    const isNext = index === (currentIndex + 1) % cards.length;

                    let translateX = 0;
                    let rotateY = 0;
                    let scale = 1;
                    let opacity = 1;

                    if (isActive) {
                        translateX = 0;
                        rotateY = 0;
                        scale = 1.1;
                        opacity = 1;
                    } else if (isPrev) {
                        translateX = -120; // Adjusted for a gap
                        rotateY = -10;
                        scale = 0.9;
                        opacity = 0.7;
                    } else if (isNext) {
                        translateX = 120; // Adjusted for a gap
                        rotateY = 10;
                        scale = 0.9;
                        opacity = 0.7;
                    } else {
                        opacity = 0.3;
                        scale = 0.8;
                    }

                    return (
                        <div
                            key={card.id}
                            className="absolute cursor-pointer transition-transform duration-500 ease-in-out"
                            style={{
                                transform: `translateX(${translateX}%) rotateY(${rotateY}deg) scale(${scale})`,
                                opacity,
                                zIndex: isActive ? 10 : 1,
                            }}
                            onClick={() => handleCardClick(index)}
                        >
                            <Card
                                image={card.image}
                                name={card.name}
                                designation={card.designation}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default CardCarousel;