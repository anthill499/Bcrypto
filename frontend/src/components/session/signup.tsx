import { useState } from "react";
import { useNavigate } from "react-router";
import styles from "../../styles/auth.module.scss";

const Signup: React.FC = (): JSX.Element => {
  const [username, setUsername] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordTwo, setPasswordTwo] = useState<string>("");
  const [checked, setChecked] = useState<boolean>(false);

  const navigate = useNavigate();

  interface SignupData {
    username: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    passwordTwo: string;
    checked: boolean;
  }

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const obj: SignupData = {
      username,
      firstName,
      lastName,
      email,
      password,
      passwordTwo,
      checked,
    };
    try {
      // const response = await fetch("/api/session/signup", {
      //   method: "post",
      //   headers: {
      //     "Content-Type": "application/json",
      //     Accept: "application/json",
      //   },
      //   body: JSON.stringify(obj),
      // });
      // const parse = await response.json();
    } catch (err) {}
  };

  return (
    <div className={styles.authDiv}>
      <div className={styles.authContainer}>
        <h3 onClick={() => navigate("/", { replace: false })}>Bcrypto</h3>
        <span className={styles.subLabel}>Create Account</span>
        <form onSubmit={(e) => handleSubmit(e)}>
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
          <div className={styles.termsAndConditions}>
            <input
              type="checkbox"
              checked={checked}
              onChange={() => setChecked(!checked)}
            />
            By signing up, you agree are agreeing to our{" "}
            <span>Terms and Conditions</span>
          </div>
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
