"use strict";



const OrderModel = require('../models/order.model');
var ObjectId = require('mongodb').ObjectId; 

const addOrder = (req, res) => {
    if (Object.keys(req.body).length === 0) return res.status(400).json({
        error: 'Bad Request',
        message: 'The request body is empty'
    });

    OrderModel.create(req.body)
        .then(order => res.status(201).json(order))
        .catch(error => res.status(500).json({
            error: 'Internal server error',
            message: error.message
        }));
};

const getOrder   = (req, res) => {
    OrderModel.findOne({_id:new ObjectId(req.params.id)}).exec()
        .then(order => {

            if (!order) return res.status(404).json({
                error: 'Not Found',
                message: `order not found`
            });

            res.status(200).json(order)

        })
        .catch(error => res.status(500).json({
            error: 'Internal Server Error',
            message: error.message
        }));

};


const getAllOrdersForUser  = (req, res) => {
    OrderModel.find({user_id :req.params.user_id}).sort('-date').exec()
        .then(orders => res.status(200).json(orders))
        .catch(error => res.status(500).json({
            error: 'Internal server error',
            message: error.message
        }));
};

const updateOrder = (req, res) => {
    if (Object.keys(req.body).length === 0)
    {
        return res.status(400).json({
            error: 'Bad Request',
            message: 'The request body is empty'
        });
    }

    OrderModel.findByIdAndUpdate(req.params.id,req.body,{
        new: true,
        runValidators: true}).exec()
        .then(order => res.status(200).json(order))
        .catch(error => res.status(500).json({
            error: 'Internal server error',
            message: error.message
        }));
};



const removeOrder = (req, res) => {
    OrderModel.findOneAndRemove({id: req.params.id}).exec()
        .then(() => res.status(200).json({message: `order with id${req.params.id} was deleted`}))
        .catch(error => res.status(500).json({
            error: 'Internal server error',
            message: error.message
        }));
};


module.exports = {
    addOrder,
    getOrder,
    getAllOrdersForUser,
    updateOrder,
    removeOrder
};