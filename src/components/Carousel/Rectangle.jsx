import React from "react";
import image from "./rectImage1.png";

const Rectangle = ({
  width = 150,
  height = 300,
  color = "gray"
}) => {
  const rectangleStyle = {
    width: `${width}px`,
    height: `${height}px`,
    backgroundColor: color,
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return <div style={rectangleStyle} className="rectangle rounded-3xl"></div>;
};

export default Rectangle;
