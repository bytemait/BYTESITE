import React from "react";

const Rectangle = ({
  width = 77,
  height = 190,
  color = "gray",
  borderRadius = 10,
  image,
}) => {
  const rectangleStyle = {
    width: `${width}px`,
    height: `${height}px`,
    backgroundColor: color,
    borderRadius: `${borderRadius}px`,
    backgroundImage: `url(${image})`,
    backgroundSize: "cover", // Ensures the image covers the entire rectangle
    backgroundPosition: "center", // Centers the image
  };

  return <div style={rectangleStyle} className="rectangle"></div>;
};

export default Rectangle;
