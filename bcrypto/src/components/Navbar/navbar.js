import React from 'react';
import './navbar.css';

const Navbar = () => {
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
          <button id="navbar-login-button">Log In</button>
          <button id="navbar-signup-button">Sign Up</button>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
