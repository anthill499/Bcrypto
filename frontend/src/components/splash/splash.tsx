import { Fragment } from "react";
import { useNavigate } from "react-router";
import styles from "../../styles/splash.module.scss";
const Splash: React.FC = (): JSX.Element => {
  return (
    <Fragment>
      <div id={styles.splashContainer}></div>
    </Fragment>
  );
};

export default Splash;
