const express = require("express");

const router = express.Router();

router.get("/users", (req, res, next) => {
  console.log("users page running");
  res.send("user route");
});

module.exports = router;
