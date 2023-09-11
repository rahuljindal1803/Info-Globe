import React from "react";
import loading from "../loading.gif";
const Spinner = () => {
  const containerStyle = {
    minHeight: "100vh", // Set minimum height to full viewport height
    display: "flex",
    justifyContent: "center", // Vertical alignment to bottom
    alignItems: "center", // Horizontal alignment to center
  };
  return (
    <div className="text-center" style={containerStyle}>
      <img src={loading} alt="loading" />
    </div>
  );
};

export default Spinner;
