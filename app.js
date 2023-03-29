//package imports
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

//app created
const app = express();

//ejs engine
app.set("view engine", "ejs");
app.set("views", "views");

//routes calling
const usersRoute = require("./routes/users");
const homeRoute = require("./routes/home");

//body parser and static epress used
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

//routes rendered
app.use(homeRoute);
app.use(usersRoute);

//page 404 rendered
app.use((req, res, next) => {
  res.status(404).render("404", {
    pageTitle: "Page not found!",
    path: "Error",
  });
});

//server running
app.listen(3000);
console.log("server running success"); //to check server running
