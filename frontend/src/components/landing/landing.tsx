import Navbar from "../navbar/navbar";
import Splash from "../splash/splash";
import styles from "../../styles/landing.module.scss";

const Landing: React.FC = (): JSX.Element => {
  return (
    <div
      className={styles.landingContainer}
    >
      <Navbar />
      <Splash />
    </div>
  );
};

export default Landing;
