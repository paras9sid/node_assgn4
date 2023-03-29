const express = require("express");

const router = express.Router();

router.get("/users", (req, res, next) => {
  console.log("users page running");
  res.render("users", {
    pageTitle: "Users",
    path: "/users",
  });
});

module.exports = router;
