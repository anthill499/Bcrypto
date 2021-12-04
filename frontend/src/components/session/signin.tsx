import { useState } from "react";
import { useNavigate } from "react-router";
import styles from "../../styles/auth.module.scss";

const Signin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  return (
    <div className={styles.authDiv}>
      <div className={styles.authContainer}>
        <h3>Bcrypto</h3>
        <span className={styles.subLabel}>Sign in</span>
        <form>
          <input
            name="Username"
            value={username}
            onChange={(e) => setUsername(e.currentTarget.value)}
            placeholder="Username"
            className={styles.authInput}
          />
          <input
            name="password"
            value={password}
            onChange={(e) => setPassword(e.currentTarget.value)}
            placeholder="Password"
            className={styles.authInput}
          />
          <button>Sign In</button>
        </form>
        <p onClick={() => navigate("/register", { replace: true })}>
          New to Bcrypto?
        </p>
      </div>
    </div>
  );
};

export default Signin;
