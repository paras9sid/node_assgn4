const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
  console.log("home router running");
  res.send("Hello Home");
});

module.exports = router;
