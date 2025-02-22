import React, { useState } from "react";
import ConditionalComponent from "./ConditionalComponent";
import "./InputComponent.css";

const InputComponent = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");

  const handleSubmit = () => {
    if (firstName && lastName) {
      setFullName(`${firstName} ${lastName}`);
      setFirstName("");
      setLastName("");
    }
  };

  return (
    <div className="input-container">
      <h2 className="title">Enter Your Name</h2>
      <div className="input-group">
        <input
          type="text"
          className="custom-input"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          className="custom-input"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <button className="submit-btn" onClick={handleSubmit}>Submit</button>
      {fullName && <ConditionalComponent fullName={fullName} />}
    </div>
  );
};

export default InputComponent;
