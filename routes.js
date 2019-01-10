
const express = require('express');
const app = express();

var offerRouter = require('./routes/offer');

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(3000, () => {
  console.log("Example router listening on port 3000!");
});

app.use("/offer", offerRouter);

module.exports = app;