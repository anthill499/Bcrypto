import * as express from "express";
const router = express.Router();
const bcrypt = require("bcryptjs");
const { validations } = require("../../middleware/authMiddleware");
const pool = require("../../postgres");
const jwtGenerator = require("../../util/jwtAuthorizer");
interface authErrors {
  username?: string;
  email?: string;
  auth?: string;
}

router.post(
  "/signup",
  validations,
  async (req: express.Request, res: express.Response): Promise<any> => {
    try {
      const response = await req.body;
      const signUpErrors: authErrors = {};
      // postgresql logic
      const { username, firstName, lastName, email, password } = await response;
      const newQuery = await pool.query(
        "SELECT * from users WHERE username = $1 OR email = $2",
        [username, email]
      );

      // if user is found in the database
      if (newQuery.rows.length !== 0) {
        newQuery.rows.forEach((user: any) => {
          if (user.username === username)
            signUpErrors["username"] = "Username already taken";
          if (user.email === email)
            signUpErrors["email"] = "Email already taken";
        });
        return res.status(422).json({ err: { ...signUpErrors } });
      }
      // Hashing password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      // Creating a new user
      const newUser = await pool.query(
        "INSERT INTO users (username, first_name, last_name, email, password) VALUES ($1, $2, $3, $4, $5) RETURNING *",
        [username, firstName, lastName, email, hashedPassword]
      );

      const currUser = await newUser.rows[0];
      // Session Cookies, Caching, Authenticator
      const token = jwtGenerator(currUser.user_id); // string
      const payload = await Object.assign(
        { token: `Bearer ${token}` },
        currUser,
        {}
      );
      delete payload["password"];
      return res.status(200).json(payload);
    } catch (err) {
      return res.status(401).json({ err: "Failed to register user" });
    }
  }
);

router.post(
  "/signin",
  validations,
  async (req: express.Request, res: express.Response): Promise<any> => {
    try {
      const response = await req.body;
      const signInErrors: authErrors = {};
      // postgresql logic
      const { username, password } = await response;
      const user = await pool.query("SELECT * FROM users WHERE username = $1", [
        username,
      ]);
      if (user.rows.length === 0) {
        signInErrors.username = "Username not found";
        return res.status(422).json({ err: signInErrors });
      }
      const foundUser = await user.rows[0];
      const isSameUser = await bcrypt.compare(password, foundUser.password);
      if (!isSameUser) {
        signInErrors.auth = "Invalid Credentials";
        return res.status(401).json({ err: signInErrors });
      }
      const token = jwtGenerator(foundUser.user_id); // string
      const payload = await Object.assign(
        { token: `Bearer ${token}` },
        foundUser,
        {}
      );
      delete payload["password"];
      return res.status(200).json(payload);
    } catch (err) {
      console.error("backend err is", err);
      return res.status(401).json({ err });
    }
  }
);

// Test in postman
router.get(
  "/test",
  async (req: express.Request, res: express.Response): Promise<any> => {
    try {
      return res.status(200).json({ message: "Working test route" });
    } catch (err) {
      return res.status(401).json({ error: "Test route error" });
    }
  }
);

module.exports = router;
