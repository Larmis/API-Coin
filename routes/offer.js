const express = require('express');
const router = express.Router();

var bodyParser = require("body-parser");
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/coindb");
var controller = require('../offerController.js');

// route permettant d'obtenir une offre par id
router.get("/id/:id", (req, res) => {
controller.getById(req.params.id, function(cb){
  res.status(200).send(cb);
  });
});

router.get("/search/:name", (req, res) => {
  controller.findByName(req.params.name, function (cb) {
    res.status(200).send(cb);
  });
});

router.get("/all", (req, res) => {
  controller.getAll(function(cb) {
    res.status(200).send(cb);
  });
});

router.post("/add", (req, res) => {
  controller.create(req.body.name, req.body.description, req.body.price, req.body.seller, req.body.category, function (cb) {
    res.status(200).send(cb);
  });
});

router.put("/update", (req, res) => {
  controller.update(req.body._id, req.body.name, req.body.description, req.body.price, req.body.category, function (cb) {
    res.status(200).send(cb);
  });
});

router.delete("/delete", (req, res) => {
  controller.delete(req.body._id, function (cb) {
    res.status(200).send(cb);
  });
});

module.exports = router;