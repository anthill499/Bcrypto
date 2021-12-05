import { useState } from "react";
import { useNavigate } from "react-router";
import styles from "../../styles/auth.module.scss";

const Signin: React.FC = (): JSX.Element => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [beErrors, setBeErrors] = useState<backendErrors>({});

  const navigate = useNavigate();

  interface backendErrors {
    username?: string;
    password?: string;
  }
  interface SigninData {
    username: string;
    password: string;
  }

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const obj: SigninData = {
      username,
      password,
    };
    try {
      const response = await fetch("/api/session/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(obj),
      });
      const parse = await response.json();
      setBeErrors(parse.err);
      console.log(beErrors);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.authDiv}>
      <div className={styles.authContainer}>
        <h3 onClick={() => navigate("/", { replace: false })}>Bcrypto</h3>
        <span className={styles.subLabel}>Sign in</span>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            name="Username"
            value={username}
            onChange={(e) => {
              if (beErrors?.username) delete beErrors.username;
              setUsername(e.currentTarget.value);
            }}
            placeholder="Username"
            className={styles.authInput}
            style={{
              outline: beErrors.username
                ? "1px solid red"
                : "0.5px solid #dcdee2",
            }}
          />
          {beErrors?.username && (
            <span className={styles.errors}>{beErrors?.username}</span>
          )}
          <input
            name="password"
            value={password}
            onChange={(e) => {
              if (beErrors?.password) delete beErrors.password;
              setPassword(e.currentTarget.value);
            }}
            placeholder="Password"
            className={styles.authInput}
            style={{
              outline: beErrors.password
                ? "1px solid red"
                : "0.5px solid #dcdee2",
            }}
          />
          {beErrors?.password && (
            <span className={styles.errors}>{beErrors?.password}</span>
          )}
          <button>Sign In</button>
        </form>
        <p onClick={() => navigate("/register", { replace: true })}>
          New to Bcrypto?
        </p>
        <div className={styles.infoContainer}>
          <div>Privacy Policy</div>
          <ul>
            <li>Contact</li>
            <li>Forgot Password?</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Signin;
