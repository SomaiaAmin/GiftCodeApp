"use strict";

const mongoose = require('mongoose');

// Define the product schema

const ToPurchaseProductSchema  = new mongoose.Schema({
    user_id: {
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

ToPurchaseProductSchema.set('versionKey', false);
ToPurchaseProductSchema.set('timestamps', true);

// Export the Product model
module.exports = mongoose.model('To_purchase_product', ToPurchaseProductSchema);
