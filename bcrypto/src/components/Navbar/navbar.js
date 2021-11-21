import React, { useState } from "react";
import "./navbar.css";
import { useNavigate } from "react-router";
import DarkModeToggle from "react-dark-mode-toggle";
// import { themeReducer } from "../../states/reducers/darkModeReducer";
// import logger from "use-reducer-logger";

const Navbar = () => {
  // const [themeState, dispatch] = useReducer(logger(themeReducer), null);
  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate();
  return (
    <div id="navbar-background">
      <div id="navbar-container">
        <ul id="navbar">
          <div id="logo">Bcrypto</div>
          <li className="navbar-item">Pricing</li>
          <li className="navbar-item">Market</li>
          <li className="navbar-item">Support</li>
          <li className="navbar-item">Our story</li>
        </ul>
        <ul id="navbar-auth-container">
          <button id="navbar-login-button" onClick={() => navigate("/signin")}>
            Log In
          </button>
          <button id="navbar-signup-button" onClick={() => navigate("/signup")}>
            Sign Up
          </button>
          <DarkModeToggle
            onChange={() => setDarkMode(!darkMode)}
            checked={darkMode}
            size={100}
          />
          <li>{`${darkMode}`}</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
