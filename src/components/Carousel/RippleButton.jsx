import React from "react";
import "./RippleButton.css";

const RippleButton = ({
  size = 200,
  image,
  textAbove = "Pop.In",
  textBelow = "Project",
}) => {
  const containerStyle = {
    width: `${size}px`,
    height: `${size}px`,
  };

  return (
    <div className="circle-container" style={containerStyle}>
      <div className="large"></div>
      <div className="medium"></div>
      <div className="image-circle">
        <img src={image} alt="Inner Circle" />
      </div>
      <div className="text above">{textAbove}</div>{" "}
      {/* Dynamic text above the image */}
      <div className="text below">{textBelow}</div>{" "}
      {/* Dynamic text below the image */}
    </div>
  );
};

export default RippleButton;
