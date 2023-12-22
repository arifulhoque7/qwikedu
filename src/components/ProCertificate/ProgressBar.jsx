import React from "react";

const ProgressBar = ({ width, primaryWidth, primaryColor, secondaryColor }) => {
  const containerStyle = {
    width: `${width}px`,
    height: "14px",
    backgroundColor: secondaryColor,
    borderRadius: "100px",
    overflow: "hidden",
    position: "relative",
  };

  const progressStyle = {
    width: `${primaryWidth}px`,
    height: "100%",
    backgroundColor: primaryColor,
    borderRadius: "100px",
    position: "absolute",
    top: 0,
    left: 0,
  };

  const percentageLabelStyle = {
    position: "absolute",
    left: `${primaryWidth - 25}px`, // Dynamic positioning based on primaryWidth
    top: "-26px",
    color: "#2CBA4D",
    fontWeight: "bold",
  };

  const percentage = Math.floor((primaryWidth / width) * 100); // Calculate the percentage

  return (
    <div className="my-8 relative">
      <p style={percentageLabelStyle}>{percentage}%</p>
      <div style={containerStyle}>
        <div style={progressStyle}></div>
      </div>
    </div>
  );
};

export default ProgressBar;
