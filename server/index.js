const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());

app.get("/", (_, res) => {
  res.status(200).json({ message: 'GET / success' });
});

app.post("/", (_, res) => {
  res.status(200).json({ message: 'POST / success' });
});

module.exports = app;
