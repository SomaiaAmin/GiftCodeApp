"use strict";

const mongoose = require('mongoose');

// Define the product schema

const PurchasedProductSchema  = new mongoose.Schema({
    user_id: {
        type: String,
        required: true
    },
    order_id: {
        type: String,
        required: true
    },
    product_id: {
        type: String,
        required: true
    },
    productAmount: {
        type: Number,
        required: true
    },
    productQuantity: {
        type: Number,
        required: true
    }

});

PurchasedProductSchema.set('versionKey', false);
PurchasedProductSchema.set('timestamps', true);

// Export the PurchasedProduct model
module.exports = mongoose.model('Purchased_product', PurchasedProductSchema);