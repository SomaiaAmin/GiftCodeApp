"use strict";

const express  = require('express');
const router   = express.Router();

const middlewares    = require('../middlewares');
const ProductReviewController = require('../controllers/productReview.controller');


router.post('/', ProductReviewController.create); // add a new review
router.get('/:product_id', ProductReviewController.getAllReviewsForProduct); // get all reviews for a product
router.put('/:id', ProductReviewController.update); // update a review by id
router.delete('/:id', ProductReviewController.remove); // Delete a reviw by Id


module.exports = router;