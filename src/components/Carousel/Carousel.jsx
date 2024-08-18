import React from "react";
import RippleButton from "./RippleButton";
import Rectangle from "./Rectangle";
import SmallCircleContainer from "./SmallCircleContainer";
import "./Carousel.css";

// Import images
import image1 from "./image1.png";
import image2 from "./image2.png";
import rectImage1 from "./rectImage1.png";
import rectImage2 from "./rectImage2.png";
import circleImage1 from "./circleImage1.png";
import circleImage2 from "./circleImage2.png";

const Carousel = () => {
  return (
    <div className="carousel-wrapper">
      <div className="carousel-container">
        <Rectangle image={rectImage1} />
        <RippleButton
          image={image1}
          size={200}
          textAbove="Hello"
          textBelow="World"
        />
        <SmallCircleContainer image1={circleImage1} image2={circleImage2} />
        <RippleButton
          image={image2}
          size={200}
          textAbove="React"
          textBelow="Component"
        />
        <Rectangle image={rectImage2} />
        <RippleButton
          image={image1}
          size={200}
          textAbove="Hello"
          textBelow="World"
        />
        <SmallCircleContainer image1={circleImage1} image2={circleImage2} />
        <RippleButton
          image={image2}
          size={200}
          textAbove="React"
          textBelow="Component"
        />
        <Rectangle image={rectImage1} />
        <RippleButton
          image={image1}
          size={200}
          textAbove="Hello"
          textBelow="World"
        />
        <SmallCircleContainer image1={circleImage1} image2={circleImage2} />
        <RippleButton
          image={image2}
          size={200}
          textAbove="React"
          textBelow="Component"
        />
        <Rectangle image={rectImage2} />
        <RippleButton
          image={image1}
          size={200}
          textAbove="Hello"
          textBelow="World"
        />
        <SmallCircleContainer image1={circleImage1} image2={circleImage2} />
        <RippleButton
          image={image2}
          size={200}
          textAbove="React"
          textBelow="Component"
        />
        <Rectangle image={rectImage1} />
        <RippleButton
          image={image1}
          size={200}
          textAbove="Hello"
          textBelow="World"
        />
        <SmallCircleContainer image1={circleImage1} image2={circleImage2} />
        <RippleButton
          image={image2}
          size={200}
          textAbove="React"
          textBelow="Component"
        />
        <Rectangle image={rectImage2} />
        <RippleButton
          image={image1}
          size={200}
          textAbove="Hello"
          textBelow="World"
        />
        <SmallCircleContainer image1={circleImage1} image2={circleImage2} />
        <RippleButton
          image={image2}
          size={200}
          textAbove="React"
          textBelow="Component"
        />
      </div>
    </div>
  );
};

export default Carousel;
