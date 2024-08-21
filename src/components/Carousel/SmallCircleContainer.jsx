import React from "react";
import SmallCircle from "./SmallCircle";

const SmallCircleContainer = ({
  size = 140,
  color = "gray",
  image1,
  image2,
}) => {
  return (
    <div className="small-circle-container">
      <SmallCircle size={size} color={color} image={image1} />
      <SmallCircle size={size} color={color} image={image2} />
    </div>
  );
};

export default SmallCircleContainer;
