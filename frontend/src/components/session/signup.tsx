import { useState, useContext } from "react";
import { useNavigate } from "react-router";
import styles from "../../styles/auth.module.scss";
import { Authentication } from "../../states/contexts";
import { login } from "../../states/actions/auth";

const Signup: React.FC = (): JSX.Element => {
  const [username, setUsername] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordTwo, setPasswordTwo] = useState<string>("");
  const [checked, setChecked] = useState<boolean>(false);
  const [beErrors, setBeErrors] = useState<backendErrors>({});
  const navigate = useNavigate();
  const authGlobal = useContext(Authentication);
  
  interface backendErrors {
    username?: string;
    firstName?: string;
    lastName?: string;
    email?: string;
    password?: string;
    passwordTwo?: string;
    checked?: string;
  }
  interface ForAPI {
    username: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    passwordTwo: string;
    checked: boolean;
  }
  interface FromAPI {
    id: string;
    firstName: string;
    lastName: string;
    token: string;
    username: string;
    email: string;
  }

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const obj: ForAPI = {
      username,
      firstName,
      lastName,
      email,
      password,
      passwordTwo,
      checked,
    };
    try {
      const response = await fetch("/api/session/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(obj),
      });
      const parse = await response.json();
      if (response.ok) {
        const { email, first_name, last_name, token, username, user_id } = parse;
        const loginData: FromAPI = {
          id: user_id,
          firstName: first_name,
          lastName: last_name,
          token,
          username,
          email,
        };

        console.log(authGlobal)
        // dispatch login
        // authGlobal.dispatch(login(loginData))
        // set localStorage
      } else {
        setBeErrors(parse.err);
      }
    } catch (err) {
      console.log({ err: JSON.stringify(err) });
    }
  };

  return (
    <div className={styles.authDiv}>
      <div className={styles.authContainer}>
        <h3
          onClick={() => navigate("/", { replace: false })}
          className={styles.parentTitle}
        >
          <span>B</span>crypto
        </h3>
        <span className={styles.subLabel}>Create Account</span>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className={styles.rowContainer}>
            <input
              name="firstname"
              value={firstName}
              onChange={(e) => {
                if (beErrors?.firstName) delete beErrors.firstName;
                setFirstName(e.currentTarget.value);
              }}
              placeholder="First Name"
              style={{
                outline: beErrors?.firstName
                  ? "1px solid red"
                  : "0.5px solid #dcdee2",
              }}
            />
            <input
              name="lastname"
              value={lastName}
              onChange={(e) => {
                if (beErrors?.lastName) delete beErrors.lastName;
                setLastName(e.currentTarget.value);
              }}
              placeholder="Last Name"
              style={{
                outline: beErrors?.lastName
                  ? "1px solid red"
                  : "0.5px solid #dcdee2",
              }}
            />
          </div>
          {(beErrors?.firstName || beErrors?.lastName) && (
            <div className={styles.rowContainer}>
              <div className={styles.errors}>{beErrors.firstName}</div>
              <div className={styles.errors}>{beErrors.lastName}</div>
            </div>
          )}
          <input
            name="username"
            value={username}
            onChange={(e) => {
              if (beErrors?.username) delete beErrors.username;
              setUsername(e.currentTarget.value);
            }}
            placeholder="Username"
            style={{
              outline: beErrors?.username
                ? "1px solid red"
                : "0.5px solid #dcdee2",
            }}
          />
          {beErrors?.username && (
            <span className={styles.errors}>{beErrors?.username}</span>
          )}
          <input
            name="email"
            value={email}
            onChange={(e) => {
              if (beErrors?.email) delete beErrors.email;
              setEmail(e.currentTarget.value);
            }}
            placeholder="Email"
            style={{
              outline: beErrors?.email
                ? "1px solid red"
                : "0.5px solid #dcdee2",
            }}
          />
          {beErrors?.email && (
            <span className={styles.errors}>{beErrors?.email}</span>
          )}
          <div className={styles.rowContainer}>
            <input
              name="password"
              value={password}
              onChange={(e) => {
                if (beErrors?.password) delete beErrors.password;
                setPassword(e.currentTarget.value);
              }}
              placeholder="Password"
              style={{
                outline: beErrors?.password
                  ? "1px solid red"
                  : "0.5px solid #dcdee2",
              }}
            />
            <input
              name="password2"
              value={passwordTwo}
              onChange={(e) => {
                if (beErrors?.passwordTwo) delete beErrors.passwordTwo;
                setPasswordTwo(e.currentTarget.value);
              }}
              placeholder="Confirm Password"
              style={{
                outline: beErrors?.passwordTwo
                  ? "1px solid red"
                  : "0.5px solid #dcdee2",
              }}
            />
          </div>
          {(beErrors?.password || beErrors?.passwordTwo) && (
            <div className={styles.rowContainer}>
              <div className={styles.errors}>{beErrors.password}</div>
              <div className={styles.errors}>{beErrors.passwordTwo}</div>
            </div>
          )}
          <div className={styles.termsAndConditions}>
            <input
              type="checkbox"
              checked={checked}
              onChange={() => {
                if (beErrors?.checked) delete beErrors.checked;
                setChecked(!checked);
              }}
              style={{
                border: beErrors?.checked
                  ? "1px solid red"
                  : "0.5px solid #dcdee2",
              }}
            />
            By signing up, you agree are agreeing to our{" "}
            <span>Terms and Conditions</span>
          </div>
          {beErrors?.checked && (
            <span className={styles.errors} id={styles.termsError}>
              {beErrors.checked}
            </span>
          )}
          <button>Create Account</button>
        </form>
        <p onClick={() => navigate("/login", { replace: true })}>
          Already have an account?
        </p>
        <div className={styles.infoContainer}>
          <div>Privacy Policy</div>
          <ul>
            <li>Contact</li>
            <li>Support</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Signup;
