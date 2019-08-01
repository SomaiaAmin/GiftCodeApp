"use strict";



const PaymentModel = require('../models/payment.model');

const addPayment = (req, res) => {
    if (Object.keys(req.body).length === 0) return res.status(400).json({
        error: 'Bad Request',
        message: 'The request body is empty'
    });

    PaymentModel.create(req.body)
        .then(payment => res.status(201).json(payment))
        .catch(error => res.status(500).json({
            error: 'Internal server error',
            message: error.message
        }));
};



module.exports = {
    addPayment
};