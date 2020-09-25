const express = require("express");
const { signup } = require("../controller/auth");
const router = express.Router();

router.post("/signin", (req, res) => {
  res.send("sign in");
});

router.post("/signup", signup);

module.exports = router;