const express = require("express");
const router = express.Router();

router.post("/signin", (req, res) => {
  res.send("sign in");
});

router.post("/signup", (req, res) => {
  res.send("sign up");
});

module.exports = router;
