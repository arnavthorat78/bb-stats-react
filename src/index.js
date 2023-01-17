// Import the React and ReactDOM libraries
import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";

// Import styles
import "./index.css";

// Import Home.jsx
import Home from "./Home";

// Tell React to take control of that element
const root = ReactDOM.createRoot(document.querySelector("#root"));

// Show the component on the screen
root.render(
  <StrictMode>
    <Home />
  </StrictMode>
);
