"use strict";

const express  = require('express');
const router   = express.Router();

const middlewares    = require('../middlewares');
const OrderController = require('../controllers/order.controller');



router.post('/', OrderController.addOrder);//add order
//router.get('/cancel/:order_id', OrderController.cancelOrder);//cancel order
router.get('/:user_id', OrderController.getAllOrdersForUser);//list all orders by user
router.get('/:id', OrderController.getOrder); //get specific by id
router.put('/:id', middlewares.checkAuthentication, OrderController.updateOrder); // Update an order by Id
router.delete('/:id', middlewares.checkAuthentication, OrderController.removeOrder); // Delete an order by Id


module.exports = router;