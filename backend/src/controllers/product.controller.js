"use strict";



const ProductModel = require('../models/product.model');
var ObjectId = require('mongodb').ObjectId; 

const create = (req, res) => {
    if (Object.keys(req.body).length === 0) return res.status(400).json({
        error: 'Bad Request',
        message: 'The request body is empty'
    });

    ProductModel.create(req.body)
        .then(product => res.status(201).json(product))
        .catch(error => res.status(500).json({
            error: 'Internal server error',
            message: error.message
        }));
};

const read   = (req, res) => {
    ProductModel.findOne({_id:new ObjectId(req.params.id)}).exec()
        .then(product => {

            if (!product) return res.status(404).json({
                error: 'Not Found',
                message: `Product not found`
            });

            res.status(200).json(product)

        })
        .catch(error => res.status(500).json({
            error: 'Internal Server Error',
            message: error.message
        }));

};

const update = (req, res) => {
    if (Object.keys(req.body).length === 0)
    {
        return res.status(400).json({
            error: 'Bad Request',
            message: 'The request body is empty'
        });
    }

    ProductModel.findByIdAndUpdate(req.params.id,req.body,{
        new: true,
        runValidators: true}).exec()
        .then(product => res.status(200).json(product))
        .catch(error => res.status(500).json({
            error: 'Internal server error',
            message: error.message
        }));
};

const remove = (req, res) => {
    ProductModel.findByIdAndRemove(req.params.id).exec()
        .then(() => res.status(200).json({message: `Product with id${req.params.id} was deleted`}))
        .catch(error => res.status(500).json({
            error: 'Internal server error',
            message: error.message
        }));
};

const list  = (req, res) => {
    ProductModel.find({}).sort('-date').exec()
        .then(products => res.status(200).json(products))
        .catch(error => res.status(500).json({
            error: 'Internal server error',
            message: error.message
        }));
};

const filter  = (req, res) => {
    if(req.query.cat === 'Categories' || req.query.cat === 'All') {
        req.query.cat = ''
    }
    if(req.query.cat && req.query.price) {
        ProductModel.find({category: req.query.cat, price: {$lte: req.query.price}}).exec()
            .then(products => res.status(200).json(products))
            .catch(error => res.status(500).json({
                error: 'Internal server error',
                message: error.message
            }));
    } else if(req.query.cat && !req.query.price) {
        ProductModel.find({category: req.query.cat}).exec()
            .then(products => res.status(200).json(products))
            .catch(error => res.status(500).json({
                error: 'Internal server error',
                message: error.message
            }));
    } else if(!req.query.cat && req.query.price) {
        ProductModel.find({price: {$lte: req.query.price}}).exec()
            .then(products => res.status(200).json(products))
            .catch(error => res.status(500).json({
                error: 'Internal server error',
                message: error.message
            }));
    } else {
        ProductModel.find({ }).exec()
            .then(products => res.status(200).json(products))
            .catch(error => res.status(500).json({
                error: 'Internal server error',
                message: error.message
            }));
    }
};



module.exports = {
    create,
    read,
    update,
    remove,
    list,
    filter
};
