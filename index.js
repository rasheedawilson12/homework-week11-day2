const express = require("express");
const app = express();

const names = ["Greg", "Peter", "Bobby", "Marcia", "Jan", "Cindy"];

// greeting
app.get("/greeting", (req, res) => {
  res.send("<h1>Hello, stranger</h1>");
});

app.get("/:indexOfNamesArray", (req, res) => {
  res.send("Hello, " + names[req.params.indexOfNamesArray]);
});

app.listen("3000", (req, res) => {
  console.log("Server 300 is listening");
});
