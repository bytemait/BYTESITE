import React from "react";
import RippleButton from "./RippleButton";
import "./Carousel.css";

import image1 from "./image1.png";
import image2 from "./image2.png";
import image3 from "./image3.png";

const Carousel = () => {
  return (
    <div className="carousel-wrapper">
      <div className="carousel-container">
        <RippleButton
          image={image1}
          size={280}
          textAbove="Object Avoidance Bot"
          textBelow="Go To Project"
        />
        <RippleButton
          image={image2}
          size={280}
          textAbove="ByteLocker"
          textBelow="Go To Project"
        />
        <RippleButton
          image='/projects/bylexa.png'
          size={280}
          textAbove="Bylexa"
          textBelow="Go To Project"
        />
        <RippleButton
          image='/projects/eduverse.png'
          size={280}
          textAbove="Eduverse"
          textBelow="Go To Project"
        />
        <RippleButton
          image='/projects/metablocks.png'
          size={280}
          textAbove="Metablocks"
          textBelow="Go To Project"
        />
        <RippleButton
          image='/projects/progmatic.png'
          size={280}
          textAbove="Progmatic"
          textBelow="Go To Project"
        />
        <RippleButton
          image='/projects/erp.jpg'
          size={280}
          textAbove="ERP"
          textBelow="Go To Project"
        />
        <RippleButton
          image={image1}
          size={280}
          textAbove="Object Avoidance Bot"
          textBelow="Go To Project"
        />
        <RippleButton
          image={image2}
          size={280}
          textAbove="ByteLocker"
          textBelow="Go To Project"
        />
        <RippleButton
          image='/projects/bylexa.png'
          size={280}
          textAbove="Bylexa"
          textBelow="Go To Project"
        />
        <RippleButton
          image='/projects/eduverse.png'
          size={280}
          textAbove="Eduverse"
          textBelow="Go To Project"
        />
        <RippleButton
          image='/projects/metablocks.png'
          size={280}
          textAbove="Metablocks"
          textBelow="Go To Project"
        />
        <RippleButton
          image='/projects/progmatic.png'
          size={280}
          textAbove="Progmatic"
          textBelow="Go To Project"
        />
        <RippleButton
          image='/projects/erp.jpg'
          size={280}
          textAbove="ERP"
          textBelow="Go To Project"
        />
      </div>
    </div>
  );
};

export default Carousel;
