import React from "react";
import RippleButton from "./RippleButton";
import "./Carousel.css";
import buttonsData from "./data.js";
import SmallCircleContainer from "./SmallCircleContainer.jsx";
import image1 from "./circleImage1.png";
import image2 from "./circleImage2.png";
import Rectangle from "./Rectangle.jsx";

const Carousel = () => {
  return (
    <div className="carousel-wrapper">
      <div className="carousel-container">
        {buttonsData.map((button, index) => (
          <div key={button.id} className="flex items-center">
            <RippleButton
              image={button.image}
              size={button.size}
              textAbove={button.textAbove}
              textBelow={button.textBelow}
            />
            {index % 2 === 0 ? (
              <SmallCircleContainer image1={image1} image2={image2} />
            ) : (
              <Rectangle />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
