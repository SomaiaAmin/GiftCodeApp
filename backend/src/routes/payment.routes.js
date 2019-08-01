"use strict";

const express  = require('express');
const router   = express.Router();

const middlewares    = require('../middlewares');
const PaymentController = require('../controllers/payment.controller');


router.post('/add', PaymentController.addPayment);//add Payment

 
module.exports = router;