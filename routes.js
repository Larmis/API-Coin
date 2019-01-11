
const express = require('express');
const app = express();
var cors = require('cors');
var offerRouter = require('./routes/offer');

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(3000, () => {
  console.log("Example router listening on port 3000!");
});

app.use("/offer", offerRouter);
app.use(cors());

module.exports = app;