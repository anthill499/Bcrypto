import React, { useContext } from "react";
import "./splash.css";
import { ThemeContext } from "../../states/actions/contexts";
import Image from "../../assets/images/bcryptoart.png";
// import appleBlack from "../../assets/images/appleblack.svg";
// import googlePlay from "../../assets/images/google-play-badge.png";
import { useNavigate } from "react-router";

const Splash = () => {
  const themeGlobal = useContext(ThemeContext);
  const navigate = useNavigate();
  const { misc, general, fontProperties } = themeGlobal.currTheme;
  return (
    <div id="splash-container">
      <div id="clip" style={{ backgroundColor: misc.artColor }}></div>
      <div className="splash-text">
        <div>
          <h1>Cryptocurrency.</h1>
          <h2>Made simple.</h2>
        </div>
        <p>
          Stay up to date on the latest cryptocurrency news with Bcrypto, an
          easy-to-use and intuitive platform made for everyone.
        </p>
        <button
          className="splash-button"
          onClick={() => navigate("/signup")}
          style={{
            backgroundColor: general.backgroundColor,
            color: fontProperties.fontColor,
          }}
        >
          Get Started
        </button>
        {/* <div className="google-apple-buttons">
          <img src={appleBlack} alt="apple-icon" />
          <img src={googlePlay} alt="apple-icon" />
        </div> */}
      </div>
      <img src={Image} alt="art" className="splash-picture" />
    </div>
  );
};

export default Splash;
