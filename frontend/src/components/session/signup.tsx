import { useState } from "react";
import { useNavigate } from "react-router";
import styles from "../../styles/auth.module.scss";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordTwo, setPasswordTwo] = useState("");
  const navigate = useNavigate();

  return (
    <div className={styles.authDiv}>
      <div className={styles.authContainer}>
        <h3>Bcrypto</h3>
        <span className={styles.subLabel}>Create Account</span>
        <form>
          <div className={styles.rowContainer}>
            <input
              name="firstname"
              value={firstName}
              onChange={(e) => setFirstName(e.currentTarget.value)}
              placeholder="First Name"
            />
            <input
              name="lastname"
              value={lastName}
              onChange={(e) => setLastName(e.currentTarget.value)}
              placeholder="Last Name"
            />
          </div>
          <input
            name="username"
            value={username}
            onChange={(e) => setUsername(e.currentTarget.value)}
            placeholder="Username"
          />
          <input
            name="email"
            value={email}
            onChange={(e) => setEmail(e.currentTarget.value)}
            placeholder="Email"
          />
          <div className={styles.rowContainer}>
            <input
              name="password"
              value={password}
              onChange={(e) => setPassword(e.currentTarget.value)}
              placeholder="Password"
            />
            <input
              name="password2"
              value={passwordTwo}
              onChange={(e) => setPasswordTwo(e.currentTarget.value)}
              placeholder="Confirm Password"
            />
          </div>
          <button>Create Account</button>
        </form>
        <p onClick={() => navigate("/login", { replace: true })}>
          Already have an account?
        </p>
      </div>
    </div>
  );
};

export default Signup;
