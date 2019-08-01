"use strict";

const express    = require('express');
const bodyParser = require('body-parser');
const helmet     = require('helmet');

const middlewares = require('./middlewares');

const auth  = require('./routes/auth.routes');
const product = require('./routes/product.routes');
const shopping_cart = require('./routes/shoppingCart.routes');
const purchased_product = require('./routes/purchasedProduct.routes');
const product_review = require('./routes/productReview.routes');
const payment = require('./routes/payment.routes');
const order = require('./routes/order.routes');

const api = express();


// Adding Basic Middlewares
api.use(helmet());
api.use(bodyParser.json());
api.use(bodyParser.urlencoded({ extended: false }));
api.use(middlewares.allowCrossDomain);


// Basic route
api.get('/', (req, res) => {
    res.json({
        name: 'GiftCode Backend'
    });
});

// API routes
api.use('/auth'  , auth);
api.use('/products', product);


api.use('/shopping_carts', shopping_cart);
api.use('/orders', order);
api.use('/purchased_products', purchased_product);
api.use('/product_reviews', product_review);
api.use('/payments', payment);
module.exports = api;