'use strict';
require("./offerModel");


var mongoose = require('mongoose'),
    Offer = mongoose.model('Offer');

exports.getById = function(id, cb){
    Offer.findOne({_id: id}, function(err, offer){
        if (err) {
            cb(err);
        } else {
            cb(offer);
        }
    });
};

exports.findByName = function(name, cb){
    Offer.find({ name: name }, function (err, offer) {
        if (err) {
          cb(err);
        } else {
          cb(offer);
        }
    });
};

exports.getAll = function (cb) {
    Offer.find({ }, function (err, offer) {
        if (err) {
            cb(err);
        } else {
            cb(offer);
        }
    });
};

exports.create = function (name, description, price , seller, category, cb) {
    var newOffer = new Offer({
      name: name,
      description: description,
      price: price,
      seller: seller,
      category: category
    });
    //console.log(newOffer);
  newOffer.save(function(err, offer) {
      if (err) {
          cb(false);
      } else {
          console.log(offer);
          cb(true);
      }
  });
};

exports.update = function(id, name, description, price, category, cb) {
    Offer.findByIdAndUpdate(id, { "$set": { name: name, description: description, price: price, category: category } }, { upsert: true }, function (err, offer) {
        if (err) {
            cb(false);
        } else {
            cb(true);
        }
    });
};

exports.delete = function (id, cb) {
    Offer.findOneAndRemove({ _id: id }, function(err, offer) {
      if (err) {
        cb(false);
      } else {
        cb(true);
      }
    });
};