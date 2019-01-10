'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var OfferSchema = new Schema({
    name: String,
    description: String,
    price: Number,
    seller: String,
    created: { type: Date, default: Date.now },
    category: String
});

mongoose.model('Offer', OfferSchema);