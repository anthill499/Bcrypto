import * as express from "express";
const router = express.Router();
const bcrypt = require("bcryptjs");
const { validations } = require("../../middleware/authMiddleware");
const pool = require("../../postgres");
const jwtGenerator = require("../../util/jwtAuthorizer");
interface authErrors {
  username?: string;
  email?: string;
}

router.post(
  "/signup",
  validations,
  async (req: express.Request, res: express.Response): Promise<void> => {
    try {
      const errors: authErrors = {};
      const response = await req.body;
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
            errors["username"] = "Username already taken";
          if (user.email === email) errors["email"] = "Email already taken";
        });
        res.status(422).json({ err: { ...errors } });
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
      res.status(200).json(payload);
    } catch (err) {
      res.status(401).json({ err: "Failed to register user" });
    }
  }
);

router.post(
  "/signin",
  validations,
  async (req: express.Request, res: express.Response): Promise<void> => {
    try {
      const response = await req.body;
      const resp = await response.json();
      console.log(resp);
      // postgresql logic
      res.json(resp);
    } catch (err) {
      res.status(401).json({ error: err });
    }
  }
);

// Test in postman
router.get(
  "/test",
  async (req: express.Request, res: express.Response): Promise<void> => {
    try {
      res.status(200).json({ message: "Working test route" });
    } catch (err) {
      res.status(401).json({ error: "Test route error" });
    }
  }
);

module.exports = router;
