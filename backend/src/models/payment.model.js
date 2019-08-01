"use strict";

const mongoose = require('mongoose');

// Define the payment schema

const PaymentSchema  = new mongoose.Schema({
    user_id: {
        type: String,
        required: true
    },
    order_id: {
        type: String,
        required: true
    },
    payer_id: {
        type: String
    },
    payment_id: {
        type: String,
    },
    payment_token: {
        type: String
    },
    method: {
        type: String,
        required: true
    },
 
});

PaymentSchema.set('versionKey', false);
PaymentSchema.set('timestamps', true);

// Export the Payment model
module.exports = mongoose.model('Payment', PaymentSchema);
