const express = require("express");
const app = express();

const answers = [
  "It is certain",
  "It is decidedly so",
  "Without a doubt",
  "Yes definitely",
  "You may rely on it",
  "As I see it yes",
  "Most likely",
  "Outlook good",
  "Yes",
  "Signs point to yes",
  "Reply hazy try again",
  "Ask again later",
  "Better not tell you now",
  "Cannot predict now",
  "Concentrate and ask again",
  "Don't count on it",
  "My reply is no",
  "My sources say no",
  "Outlook not so good",
  "Very doubtful",
];

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

// Magic 8 Ball
app.get("/magic/:question", (req, res) => {
  let randomAnswer = answers[Math.floor(Math.random() * answers.length)];
  res.send(`${req.params.question}<h1>${randomAnswer}</h1>`);
});

app.listen("3000", (req, res) => {
  console.log("Server 300 is listening");
});
