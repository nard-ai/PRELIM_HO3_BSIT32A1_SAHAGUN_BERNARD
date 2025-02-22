import React, { useState } from "react";
import "./InputComponent.css";

const ConditionalComponent = ({ fullName }) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="output-container">
      <button className="toggle-btn" onClick={toggleVisibility}>
        {isVisible ? "Hide Name" : "Show Name"}
      </button>
      {isVisible && <p className="display-name">Full Name: {fullName}</p>}
    </div>
  );
};

export default ConditionalComponent;
