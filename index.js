const express = require("express");
const app = express();

// greeting
app.get("/greeting", (req, res) => {
  res.send("<h1>Hello, stranger</h1>");
});

app.listen("3000", (req, res) => {
  console.log("Server 300 is listening");
});
