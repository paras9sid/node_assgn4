const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const usersRoute = require("./routes/users");
const homeRoute = require("./routes/home");

app.use(bodyParser.urlencoded({ extended: false }));

app.use(homeRoute);
app.use(usersRoute);

app.use((req, res, next) => {
  res.status(404).render("404");
});

app.listen(3000);
console.log("server running success");
