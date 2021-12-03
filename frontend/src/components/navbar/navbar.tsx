import { useNavigate } from "react-router";
import styles from "../../styles/navbar.module.scss";
const Navbar: React.FC = (): JSX.Element => {
  const navigate = useNavigate();
  return (
    <div className={styles.navbarBackground}>
      <div className={styles.navbarContainer}>
        <ul id={styles.navbar}>
          <div id={styles.logo}>Bcrypto</div>
          <li className={styles.navbarItem}>News</li>
          <li className={styles.navbarItem}>Market</li>
          <li className={styles.navbarItem}>Contact Us</li>
          <li className={styles.navbarItem}>Our story</li>
        </ul>
        <ul id={styles.navbarAuthContainer}>
          <button
            id={styles.navbarLoginButton}
            onClick={() => navigate("/login")}
          >
            Log In
          </button>
          <button
            id={styles.navbarSignupButton}
            onClick={() => navigate("/register")}
          >
            Sign Up
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
