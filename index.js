const express = require("express");
const app = express();

// greeting
app.get("/greeting/:firstName", (req, res) => {
  res.send("Hello " + req.params.firstName);
});

// tip calculator
app.get("/tip/:total/:tipPercentage", (req, res) => {
  res.send(
    "Suggested tip is $" + req.params.total * (req.params.tipPercentage / 100)
  );
});

app.listen("3000", (req, res) => {
  console.log("Server 300 is listening");
});
