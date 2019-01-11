const express = require('express');
const router = express.Router();

// parser
var bodyParser = require("body-parser");
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

//connection à la bd
var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/coindb");
var controller = require('../offerController.js');

//cors
var cors = require("cors");
router.use(cors());


// route permettant d'obtenir une offre par id
router.get("/id/:id", (req, res) => {
controller.getById(req.params.id, function(cb){
  console.log("id");
  res.status(200).send(cb);
  });
});

// route permettant d'obtenir les offres ayant le même nom
router.get("/search/:name", (req, res) => {
  console.log("search");
  controller.findByName(req.params.name, function (cb) {
    res.status(200).send(cb);
  });
});

// route permettant de récupérer toutes les offres
router.get("/all", (req, res) => {
  console.log("all");
  controller.getAll(function(cb) {
    res.status(200).send(cb);
  });
});

// route permettant d'ajouter une offre
router.post("/add", (req, res) => {
  console.log("add");
  controller.create(req.body.name, req.body.description, req.body.price, req.body.seller, req.body.category, function (cb) {
    res.status(200).send(cb);
  });
});

// route permettant de mettre à jour une offre
router.put("/update", (req, res) => {
  console.log("update");
  controller.update(req.body._id, req.body.name, req.body.description, req.body.price, req.body.category, function (cb) {
    res.status(200).send(cb);
  });
});

// route permettant de supprimer une offre
router.delete("/delete", (req, res) => {
  console.log("delete");
  controller.delete(req.body._id, function (cb) {
    res.status(200).send(cb);
  });
});

module.exports = router;