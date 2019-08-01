"use strict";



const ProductReviewModel = require('../models/productReview.model');
const ProductModel = require('../models/product.model');


const create = async (req, res) => {
    if (Object.keys(req.body).length === 0) return res.status(400).json({
        error: 'Bad Request',
        message: 'The request body is empty'
    });


    await ProductReviewModel.create(req.body)
        .then(product_review =>{ new_review = product_review;
        })
        .catch(error => res.status(500).json({
            error: 'Internal server error',
            message: error.message
        }));
    await calucateReviewCountsAndRatingPerProduct(req.body.product_id, res);
 
};

const getAllReviewsForProduct   = (req, res) => {
    ProductReviewModel.find({product_id: req.params.product_id }).sort('-date').exec()
        .then(product_review => {

            if (!product_review) return res.status(404).json({
                error: 'Not Found',
                message: `ProductReviewModel not found`
            });

            res.status(200).json(product_review)

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

    ProductReviewModel.findByIdAndUpdate(req.params.id,req.body,{
        new: true,
        runValidators: true}).exec()
        .then(product_review => res.status(200).json(product_review))
        .catch(error => res.status(500).json({
            error: 'Internal server error',
            message: error.message
        }));
};



const remove = (req, res) => {
    ProductReviewModel.findOneAndRemove({id: req.params.id}).exec()
        .then(() => res.status(200).json({message: `ProductReview with id${req.params.id} was deleted`}))
        .catch(error => res.status(500).json({
            error: 'Internal server error',
            message: error.message
        }));
};

const calucateReviewCountsAndRatingPerProduct =  (product_id, final_response) => {
   // Find the max balance of all accounts
   try{
    ProductReviewModel.aggregate([ {$match: {product_id: {$eq: product_id}} },
            { $group: { _id: "$product_id", avgRating: { $avg: '$rating'}, reviewCount: {$sum: 1}}},
        ]).
        then(function (res) {
        
            ProductModel.findByIdAndUpdate(res[0]._id, {"rating": res[0].avgRating, "reviewCount": res[0].reviewCount},{
                new: true,
                runValidators: true}).exec()
                .then(product => final_response.status(200).json(product))
                .catch(error => final_response.status(500).json({
                    error: 'Internal server error',
                    message: error.message
                }));
        
        })
        .catch(error => res.status(500).json({
            error: 'Internal server error',
            message: error.message
        }));
    }
    catch (err){
        res.status(500).json({
            error: 'Internal Server Error',
            message: err.message
        })
    }

    
};



module.exports = {
    create,
    getAllReviewsForProduct,
    update,
    remove
};