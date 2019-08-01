"use strict";

//Configuration variables
const mongodb_username = "USERNAME"
const mongodb_pass = "PASSWORD"
const port      = process.env.PORT        || '3000';
const mongoURI  = process.env.MONGODB_URI || 'mongodb://'+mongodb_username+':'+mongodb_pass+'@giftcode-shard-00-00-aeuwg.mongodb.net:27017,giftcode-shard-00-01-aeuwg.mongodb.net:27017,giftcode-shard-00-02-aeuwg.mongodb.net:27017/giftcode_db?ssl=true&replicaSet=GiftCode-shard-0&authSource=admin&retryWrites=true&w=majority';
const JwtSecret = process.env.JWT_SECRET  ||'very secret secret';


module.exports = {
    port,
    mongoURI,
    JwtSecret,
};
