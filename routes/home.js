const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
  console.log("home router running");
  res.render("home", {
    pageTitle: "Home",
    path: "/",
  });
});

module.exports = router;
