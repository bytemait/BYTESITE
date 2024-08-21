import React from "react";

const SmallCircle = ({ size = 160, color = "gray", image }) => {
  const circleStyle = {
    width: `${size}px`,
    height: `${size}px`,
    backgroundColor: color,
    borderRadius: "50%",
    backgroundImage: `url(${image})`,
    backgroundSize: "cover", // Ensures the image covers the entire circle
    backgroundPosition: "center", // Centers the image
  };

  return <div style={circleStyle} className="small-circle"></div>;
};

export default SmallCircle;
