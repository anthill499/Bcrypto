import { useContext } from "react";
import { useNavigate } from "react-router";
import styles from "../../styles/navbar.module.scss";
import { Authentication } from "../../states/contexts/authContext";
import { logout } from "../../states/actions/auth";

const Navbar: React.FC = (): JSX.Element => {
  const navigate = useNavigate();
  const AuthGlobal = useContext(Authentication);

  const renderButtons = () => {
    return !AuthGlobal.authState.loggedIn ? (
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
    ) : (
      <ul id={styles.navbarAuthContainer}>
        <li className={styles.navbarItem}>Wallet</li>
        <li className={styles.navbarItem}>Messages</li>
        <li className={styles.navbarItem}>Account</li>
        <li
          className={styles.navbarItem}
          onClick={() => AuthGlobal.dispatchAuth(logout())}
        >
          Log Out
        </li>
      </ul>
    );
  };
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
        {renderButtons()}
      </div>
    </div>
  );
};

export default Navbar;
