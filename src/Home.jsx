import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";

const AnimeStyledHomepage = () => {
  return (
    <div className="homepage-container d-flex flex-column justify-content-center align-items-center text-white">
      <h1 className="neon-text">Homepage</h1>
      <p className="subtext">Full name display and todo list</p>
    </div>
  );
};

export default AnimeStyledHomepage;