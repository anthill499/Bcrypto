import React, { useContext } from "react";
import "./splash.css";
import { ThemeContext } from "../../states/actions/contexts";
import * as picture from "../../assets/images/bcryptoart.png";
const Splash = () => {
  const themeGlobal = useContext(ThemeContext);
  const { misc } = themeGlobal.currTheme;
  return (
    <div id="splash-container">
      <div id="clip" style={{ backgroundColor: misc.artColor }}></div>
      <div className="splash-text">
        <h1>Cryptocurrency.</h1>
        <h2>Made simple.</h2>
      </div>
      <img src={picture} alt="art" />
    </div>
  );
};

export default Splash;
