"use strict";

const express  = require('express');
const router   = express.Router();

const middlewares    = require('../middlewares');
const PurchasedProductController = require('../controllers/purchasedProduct.controller');


router.get('/:user_id', PurchasedProductController.listPurchasedProductUser); // List all purchasedProduct for one user
router.get('/:user_id/:order_id', PurchasedProductController.listPurchasedProductUserInOrder); // List all purchasedProduct for one user under one order
router.get('/move_from_cart_to_purchased/:user_id/:order_id', PurchasedProductController.moveFromCartToPurchase); // moving products from cart to purchased products
// router.get('/:id', PurchasedProductController.read); // Read a purchasedProduct by Id list by user id 
// router.put('/:user_id/:product_id/:order_id', PurchasedProductController.update); // Update a purchasedProduct by Id



module.exports = router;