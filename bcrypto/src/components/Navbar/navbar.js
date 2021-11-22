import React, { useContext } from "react";
import "./navbar.css";
import { useNavigate } from "react-router";
import DarkModeToggle from "react-dark-mode-toggle";
import { ThemeContext } from "../../states/actions/contexts";
const Navbar = () => {
  const navigate = useNavigate();
  const themeGlobal = useContext(ThemeContext);
  console.log(themeGlobal);
  const { fontProperties, misc } = themeGlobal.currTheme;

  return (
    <div
      id="navbar-background"
      style={{
        color: fontProperties.fontColor,
      }}
    >
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
          <button
            id="navbar-signup-button"
            onClick={() => navigate("/signup")}
            style={{ backgroundColor: misc.backgroundColor }}
          >
            Sign Up
          </button>
          <DarkModeToggle
            onChange={() => themeGlobal.changeTheme()}
            checked={themeGlobal.darkMode}
            size={100}
          />
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
