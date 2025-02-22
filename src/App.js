import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import InputComponent from "./InputComponent";
import TodoList from "./TodoList";
import AnimeStyledHomepage from "./Home"; // Import Homepage

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<AnimeStyledHomepage />} /> {/* Homepage */}
          <Route path="/full-name-display" element={<InputComponent />} />
          <Route path="/todo-list" element={<TodoList />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
