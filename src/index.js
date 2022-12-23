// Import the React and ReactDOM libraries
import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";

// Import styles
import "./index.css";

// Import Home.jsx
import Home from "./Home";

// Get a reference to the div with ID root
const el = document.querySelector("#root");

// Tell React to take control of that element
const root = ReactDOM.createRoot(el);

// Show the component on the screen
root.render(
  <StrictMode>
    <Home />
  </StrictMode>
);
