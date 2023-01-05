"use strict";
const express = require("express");
const path = require("path");

const app = express(); //! executed function

const publicPath = path.join(__dirname, "public"); //! accesing the public folder path (first we joined it with the directory from join method of the path module)

app.set("view engine", "ejs"); //!used to set template engine

// app.use(express.static(publicPath)); //! now using the html file inside the the path given

app.get("/profile", (_, res) => {
  const user = {
    name: "Mir Mannan",
    email: "mirmannan99@gmail.com",
    number: "7006163003",
    skills: ["php", "js", "c++", "java", "dart"],
  };
  res.render("profile", { user });
});

app.get("/login", (_, res) => {
  res.render("login");
});

app.get("", (_, res) => {
  res.sendFile(`${publicPath}/index.html`);
});

app.get("/about", (_, res) => {
  res.sendFile(`${publicPath}/about.html`);
});

app.get("/help", (_, res) => {
  res.sendFile(`${publicPath}/help.html`);
});

app.get("*", (_, res) => {
  res.sendFile(`${publicPath}/error404.html`);
});

app.listen(3000, () => {
  console.log("running on 3000");
});
