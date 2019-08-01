"use strict";

const express  = require('express');
const router   = express.Router();

const middlewares    = require('../middlewares');
const ProductController = require('../controllers/product.controller');


router.get('/', ProductController.list); // List all products
router.post('/', middlewares.checkAuthentication, ProductController.create); // Create a new product
router.get('/search/', ProductController.filter)
router.get('/:id', ProductController.read); // Read a product by Id
router.put('/:id', middlewares.checkAuthentication, ProductController.update); // Update a product by Id
router.delete('/:id', ProductController.remove); // Delete a product by Id

module.exports = router;
