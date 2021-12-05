const express = require("express");
require("dotenv").config();
const app = express();
const cors = require("cors");
// const path = require("path");

const port = 5000;

app.use(express.json());
app.use(cors());

app.use("/api/session", require("./routes/api/session"));

// test route
app.get("/test", (req, res) => {
  res.json({ message: "It's the test route" });
});

app.listen(port, () => {
  console.log(`Bcryto's server is running on Port ${port}`);
});
