"use strict";


const ToPurchaseProductModel = require('../models/toPurchaseProduct.model');
const ProductModel = require('../models/product.model');
var ObjectId = require('mongodb').ObjectId; 

const addProductToCart = (req, res) => {
    if (Object.keys(req.body).length === 0) return res.status(400).json({
        error: 'Bad Request',
        message: 'The request body is empty'
    });

    ToPurchaseProductModel.create(req.body)
        .then(to_purchase_product => res.status(201).json(to_purchase_product))
        .catch(error => res.status(500).json({
            error: 'Internal server error',
            message: error.message
        }));

};

const removeProductFromCart = (req, res) => {
    ToPurchaseProductModel.findOneAndRemove({user_id :req.params.user_id, product_id: req.params.product_id}).exec()
        .then(() => res.status(200).json({message: `product with id${req.params.product_id} was deleted`}))
        .catch(error => res.status(500).json({
            error: 'Internal server error',
            message: error.message
        }));
};

const listAllProductsInCart  = async (req, res) => {
    try {
        var cartProductsWithDetails = [];
        const cartProducts = await ToPurchaseProductModel.find({user_id :req.params.user_id}).sort('-date');
    
        for (const cartProduct of cartProducts) {
            var newCartProduct = cartProduct.toObject();
            let originalProduct =  await ProductModel.findOne({_id:new ObjectId(cartProduct.product_id)});
            newCartProduct.supplier = originalProduct.supplier;
            newCartProduct.productName = originalProduct.name;
            newCartProduct.description = originalProduct.description;
            newCartProduct.img = originalProduct.img;
            newCartProduct.isCard = originalProduct.isCard;

            cartProductsWithDetails.push(newCartProduct);

        }
    
        return res.status(200).json(cartProductsWithDetails);
     
    }

    catch (err){
        res.status(500).json({
            error: 'Internal Server Error',
            message: err.message
        })
    }
};
const updateProduct = (req, res) => {
    if (Object.keys(req.body).length === 0)
    {
        return res.status(400).json({
            error: 'Bad Request',
            message: 'The request body is empty'
        });
    }

    ToPurchaseProductModel.findOneAndUpdate({user_id :req.params.user_id, product_id: req.params.product_id},req.body,{
        new: true, upsert: true}).exec()
        .then(to_purchase_product => res.status(200).json(to_purchase_product))
        .catch(error => res.status(500).json({
            error: 'Internal server error',
            message: error.message
        }));
};

const removeAllProductsFromCart = (req, res) => {
    ToPurchaseProductModel.remove({user_id :req.params.user_id}).exec()
        .then(() => res.status(200).json({message: `product with id${req.params.product_id} was deleted`}))
        .catch(error => res.status(500).json({
            error: 'Internal server error',
            message: error.message
        }));
};

const getItemCountCart =  (req, res) => {
    // Find the max balance of all accounts
        ToPurchaseProductModel.countDocuments({user_id: req.params.user_id}).exec((err, count) => {
            if (err) {
                res.send(err);
                return;
            }
            res.json({ count: count });

        });
 };

module.exports = {
    addProductToCart,
    removeProductFromCart,
    listAllProductsInCart,
    updateProduct,
    removeAllProductsFromCart,
    getItemCountCart
};
