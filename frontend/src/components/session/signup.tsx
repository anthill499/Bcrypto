import { useState } from "react";
import { useNavigate } from "react-router";
import styles from "../../styles/auth.module.scss";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordTwo, setPasswordTwo] = useState("");
  const navigate = useNavigate();

  return (
    <div className={styles.authContainer}>
      <h3>Create your Bcrypto account!</h3>
      <p></p>
      <form>
        <label htmlFor="username">Username</label>
        <input
          name="username"
          value={username}
          onChange={(e) => setUsername(e.currentTarget.value)}
        />
        <label htmlFor="password">Email</label>
        <input
          name="email"
          value={email}
          onChange={(e) => setEmail(e.currentTarget.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          name="password"
          value={password}
          onChange={(e) => setPassword(e.currentTarget.value)}
        />
        <label htmlFor="password2">Confirm Password</label>
        <input
          name="password2"
          value={passwordTwo}
          onChange={(e) => setPasswordTwo(e.currentTarget.value)}
        />
        <button>Create Account</button>
      </form>
      <p>
        Already have an account? Click{" "}
        <span
          className={styles.redirectLink}
          onClick={() => navigate("/login", { replace: true })}
        >
          Here
        </span>
      </p>
    </div>
  );
};

export default Signup;
