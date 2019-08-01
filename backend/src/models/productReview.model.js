"use strict";

const mongoose = require('mongoose');

// Define the product review schema

const ProductReviewSchema  = new mongoose.Schema({
    user_id: {
        type: String,
        required: true
    },
    username: {
        type: String,
    },
    product_id: {
        type: String,
    },
    review: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
    }
});

ProductReviewSchema.set('versionKey', false);
ProductReviewSchema.set('timestamps', true);

// Export the Product model
module.exports = mongoose.model('Product_review', ProductReviewSchema);
