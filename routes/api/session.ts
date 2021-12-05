import * as express from "express";
const router = express.Router();
const bcrypt = require("bcryptjs");
const { validations } = require("../../middleware/authMiddleware");

router.post(
  "/signup",
  validations,
  async (req: express.Request, res: express.Response) => {
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

router.post(
  "/signin",
  validations,
  async (req: express.Request, res: express.Response) => {
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

// // Test in postman
// router.get("/test", async (req, res) => {
//   try {
//     res.status(200).json({ message: "Working test route" });
//   } catch (err) {
//     res.status(401).json({ error: "Test route error" });
//   }
// });

module.exports = router;
