import { useState, useContext } from "react";
import { useNavigate } from "react-router";
import styles from "../../styles/auth.module.scss";
import { Authentication } from "../../states/contexts/authContext";
import { login } from "../../states/actions/auth";
import Loading from "../loading/loading";

const Signin: React.FC = (): JSX.Element => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [beErrors, setBeErrors] = useState<backendErrors>({});
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const AuthGlobal = useContext(Authentication);
  const navigate = useNavigate();

  interface backendErrors {
    username?: string;
    password?: string;
    auth?: string;
  }
  interface SigninData {
    username: string;
    password: string;
  }

  interface FromSigninAPI {
    id: string;
    firstName: string;
    lastName: string;
    token: string;
    username: string;
    email: string;
  }
  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const obj: SigninData = {
      username,
      password,
    };
    const response = await fetch("/api/session/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(obj),
    });
    const parse = await response.json();
    if (response.ok) {
      setIsLoading(!isLoading);
      setTimeout(() => {
        const { email, first_name, last_name, token, username, user_id } =
          parse;
        const loginData: FromSigninAPI = {
          id: user_id,
          firstName: first_name,
          lastName: last_name,
          token,
          username,
          email,
        };
        AuthGlobal.dispatchAuth(login(loginData));
        localStorage.setItem(
          "authorizationCredentials",
          JSON.stringify(loginData)
        );
        setIsLoading(!isLoading);
      }, 2200);
    } else {
      console.log(parse, response);
      setBeErrors(parse.err);
    }
  };

  // Loading catch
  if (isLoading) return <Loading />;

  // return component
  return (
    <div className={styles.authDiv}>
      <div className={styles.authContainer}>
        <h3
          onClick={() => navigate("/", { replace: false })}
          className={styles.parentTitle}
        >
          <span>B</span>crypto
        </h3>
        <span
          className={styles.subLabel}
          style={{
            color: beErrors?.auth ? "red" : "black",
          }}
        >
          {beErrors?.auth ? beErrors.auth : "Sign In"}
        </span>
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
              outline:
                beErrors?.username || beErrors?.auth
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
              outline:
                beErrors?.password || beErrors?.auth
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
