import { Fragment } from "react";
import { useNavigate } from "react-router";
import styles from "../../styles/splash.module.scss";
import Image from "../../assets/images/bcryptoart.png";
const Splash: React.FC = (): JSX.Element => {
  const navigate = useNavigate();
  return (
    <Fragment>
      <div id={styles.splashContainer}>
        <div className={styles.clip}></div>
        <div className={styles.splashText}>
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
            className={styles.splashButton}
            onClick={() => navigate("/register")}
          >
            Get Started
          </button>
        </div>
        <img src={Image} alt="art" className={styles.splashPicture} />
      </div>
      <div className={styles.clipTwo}></div>
    </Fragment>
  );
};

export default Splash;
