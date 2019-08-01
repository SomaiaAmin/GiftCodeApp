"use strict";

const mongoose = require('mongoose');

// Define the user schema

const UserSchema  = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        unique: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    }
});

UserSchema.set('timestamps', true);
UserSchema.set('versionKey', false);

// Export the Product model
module.exports = mongoose.model('User', UserSchema);
