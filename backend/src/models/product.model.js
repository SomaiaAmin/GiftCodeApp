"use strict";

const mongoose = require('mongoose');

// Define the product schema

const ProductSchema  = new mongoose.Schema({
    supplier: String,
    name: {
        type: String
    },
    description: {
        type: String,
        required: true
    },
    price:  {
        type: Number,
        required: true
    },
    img: {
        type: String,
    },
    rating: {
        type: Number
    },
    reviewCount: {
        type: Number
    },
    isCard : {
        type: Boolean
    }
});

ProductSchema.set('versionKey', false);
ProductSchema.set('timestamps', true);

// Export the Product model
module.exports = mongoose.model('Product', ProductSchema);
