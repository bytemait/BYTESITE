import React from "react";
import "./RippleButton.css";

const RippleButton = ({
  size = 280,
  image,
  textAbove = "Pop.In",
  textBelow = "Project",
}) => {
  const containerStyle = {
    width: `${size}px`,
    height: `${size}px`,
  };

  return (
    <div className="">
      <div className="circle-container" style={containerStyle}>
        <div className="large"></div>
        <div className="medium"></div>
        <div className="image-circle">
          <img src={image} alt="Inner Circle" />
        </div>
        <div className="text above w-[150px]">{textAbove}</div>{" "}
        {/* Dynamic text above the image */}
        <a target= "_blank"href="https://github.com/bytemait"><div className="text below">{textBelow}</div>{" "}</a>
        {/* Dynamic text below the image */}
      </div>
      
    </div>
  );
};

export default RippleButton;
