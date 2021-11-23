import React, { useContext } from "react";
import "./splash.css";
import { ThemeContext } from "../../states/actions/contexts";

const Splash = () => {
  const themeGlobal = useContext(ThemeContext);
  const { misc } = themeGlobal.currTheme;
  return (
    <div id="splash-container">
      <div id="splash-text"></div>
      {/* <img src="./undraw_instat_analysis_ajld.svg" alt="splash-art"></img> */}
      <div id="clip" style={{ backgroundColor: misc.artColor }}></div>
    </div>
  );
};

export default Splash;
