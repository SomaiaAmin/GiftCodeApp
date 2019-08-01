"use strict";

const express  = require('express');
const router   = express.Router();

const middlewares    = require('../middlewares');
const ShoppingCartController = require('../controllers/shoppingCart.controller');

router.get('/count/:user_id', ShoppingCartController.getItemCountCart); //get the cart value
router.get('/:user_id', ShoppingCartController.listAllProductsInCart); //list all products in cart
router.post('/', ShoppingCartController.addProductToCart); // Add a product to Cart
router.put('/:user_id/:product_id', ShoppingCartController.updateProduct); // Update a productToPurchase by Id
router.delete('/:user_id/:product_id',  ShoppingCartController.removeProductFromCart); // Delete a product from cart
router.delete('/:user_id',  ShoppingCartController.removeAllProductsFromCart); // Delete all product from cart


module.exports = router;
