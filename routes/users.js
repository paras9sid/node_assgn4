const express = require("express");

const router = express.Router();
const users = []; // for populating data into array

router.get("/users", (req, res, next) => {
  res.render("users", {
    pageTitle: "User",
    users: users,
    hasUsers: users.length > 0,
  });
});

//post dummy req to render to another route
router.post("/add-user", (req, res, next) => {
  users.push({ name: req.body.username });
  res.redirect("/users");
});

module.exports = router;
