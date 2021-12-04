import { useState } from "react";
import { useNavigate } from "react-router";
import styles from "../../styles/auth.module.scss";

const Signin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  return (
    <div className={styles.authContainer}>
      <h3>Bcrypto</h3>
      <p>Sign in</p>
      <form>
        <label htmlFor="username">Username</label>
        <input
          name="username"
          value={username}
          onChange={(e) => setUsername(e.currentTarget.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          name="password"
          value={password}
          onChange={(e) => setPassword(e.currentTarget.value)}
        />
        <button>Sign In</button>
      </form>
      <p>
        New to Bcrypto? Click{" "}
        <span
          className={styles.redirectLink}
          onClick={() => navigate("/register", { replace: true })}
        >
          Here
        </span>
      </p>
    </div>
  );
};

export default Signin;
