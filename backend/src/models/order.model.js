"use strict";

const mongoose = require('mongoose');

// Define the order schema

const OrderSchema  = new mongoose.Schema({
    user_id: {
        type: String,
        required: true
    },
    sum: {
        type: Number,
        required: true
    },
    currency: {
        type: String,
        required: true
    },
  

});

OrderSchema.set('versionKey', false);
OrderSchema.set('timestamps', true);

// Export the Order model
module.exports = mongoose.model('Order', OrderSchema);
