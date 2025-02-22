import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";

const AnimeStyledNavbar = () => {
  return (
    <nav className="navbar navbar-expand-lg position-fixed top-0 w-50 p-2 rounded-pill mt-2 shadow" 
      style={{ 
        background: "linear-gradient(135deg, #ff007f, #7f00ff)", 
        boxShadow: "0 0 15px rgba(255, 0, 255, 0.6)", 
        border: "2px solid white", 
        zIndex: 1050,
        animation: "glow 1.5s infinite alternate",
        left: "50%",
        transform: "translateX(-50%)"
      }}>
      <div className="container-fluid">
        <Link className="navbar-brand text-white fw-bold" to="/">Bernard-todo-app</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link text-white fw-bold" to="/">🏠 Home</Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-white fw-bold"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                🎮 Projects
              </a>
              <ul className="dropdown-menu bg-dark text-white border-white">
                <li>
                  <Link className="dropdown-item text-white" to="/full-name-display">💡 Full Name Display</Link>
                </li>
                <li>
                  <Link className="dropdown-item text-white" to="/todo-list">📋 Todo List</Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <style>
        {`
          @keyframes glow {
            from { box-shadow: 0 0 10px rgba(255, 0, 255, 0.6); }
            to { box-shadow: 0 0 20px rgba(255, 0, 255, 1); }
          }
          body { padding-top: 60px; }
        `}
      </style>
    </nav>
  );
};

export default AnimeStyledNavbar;
