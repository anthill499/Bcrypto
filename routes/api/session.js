const router = require("express").Router();
const bcrypt = require("bcryptjs");

router.post("/signup", async (req, res) => {
  try {
    // postgresql logic
  } catch (err) {
    res.status(401).json({ error: err });
  }
});

router.post("/signin", async (req, res) => {});

// Test in postman
router.get("/test", async (req, res) => {
  try {
    res.status(200).json({ message: "Working test route" });
  } catch (err) {
    res.status(401).json({ error: "Test route error" });
  }
});

module.exports = router;
