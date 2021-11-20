import React, { useState } from "react";
import { useNavigate } from "react-router";
import "./auth.css";

const Signin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  return (
    <div>
      <h3>Sign in to your Bcrypto account!</h3>
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
          className="redirect-link"
          onClick={() => navigate("/signup", { replace: true })}
        >
          Here
        </span>
      </p>
    </div>
  );
};

export default Signin;
