import React, { useContext, Fragment } from "react";
import "./splash.css";
import { ThemeContext } from "../../states/actions/contexts";
import Image from "../../assets/images/bcryptoart.png";
import { useNavigate } from "react-router";

const Splash = () => {
  const themeGlobal = useContext(ThemeContext);
  const navigate = useNavigate();
  const { misc, general, fontProperties, appleIcon } = themeGlobal.currTheme;
  return (
    <Fragment>
      <div id="splash-container">
        <div className="clip" style={{ backgroundColor: misc.artColor }}></div>
        <div className="splash-text" style={{ color: general.backgroundColor }}>
          <div id="title">
            <h1>Cryptocurrency.</h1>
            <h2>Made simple.</h2>
          </div>
          <p>
            Your next crypto wallet. Stay up to date on the latest
            cryptocurrency news with an easy-to-use and intuitive platform made
            for everyone. Sign up today and earn up to 7.5% APY. No lock-up or
            deposit limits guaranteed.
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
          <div className="google-apple-buttons">
            <img src={appleIcon} alt="apple-icon" />
          </div>
        </div>
        <img src={Image} alt="art" className="splash-picture" />
      </div>
      <div
        className="clip-two"
        style={{ backgroundColor: misc.artColor }}
      ></div>
    </Fragment>
  );
};

export default Splash;
