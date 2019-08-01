"use strict";



const PurchasedProductModel = require('../models/purchasedProduct.model');
const ToPurchaseProductModel = require('../models/toPurchaseProduct.model');
const ProductModel = require('../models/product.model');
var ObjectId = require('mongodb').ObjectId; 


const listPurchasedProductUser  = async (req, res) => {
        try {
            var purchasedProductsWithDetails = [];
            const purchasedProducts = await PurchasedProductModel.find({user_id:req.params.user_id}).sort('-date')
        
            for (const product of purchasedProducts) {
                var newProduct = product.toObject();
                let originalProduct =  await ProductModel.findOne({_id:new ObjectId(product.product_id)})
                newProduct.supplier = originalProduct.supplier;
                newProduct.productName = originalProduct.name;
                newProduct.description = originalProduct.description;
                newProduct.img = originalProduct.img;
    
                purchasedProductsWithDetails.push(newProduct);
    
            }
        
            return res.status(200).json(purchasedProductsWithDetails);
         
        }
    
        catch (err){
            res.status(500).json({
                error: 'Internal Server Error',
                message: err.message
            })
        }
};

const moveFromCartToPurchase = async (req, res) => {   
    let productsList = await ToPurchaseProductModel.find({user_id :req.params.user_id});//.exec() //retrieving products from Cart
   
  
   
    if (productsList.length){
        var productListWithOrderId = [];

        productsList.forEach(product => {
            var objProduct = product.toObject();
            objProduct.order_id = req.params.order_id;
            delete objProduct._id;
            productListWithOrderId.push(objProduct);
            

        });
        
        PurchasedProductModel.create(productListWithOrderId) //adding the list to purchased products
        
        .then(ToPurchaseProductModel.remove({user_id :req.params.user_id}) .then(() => res.status(200).json({message: `Cart products for user_id${req.params.user_id} were deleted`})))  // remove products from Cart
        .catch(error => res.status(500).json({
            error: 'Internal server error',
            message: error.message
        }));
    }
      
};

const listPurchasedProductUserInOrder = async (req, res) => {
        try {
            var purchasedProductsWithDetails = [];
            const purchasedProducts = await PurchasedProductModel.find({user_id:req.params.user_id, order_id: req.params.order_id}).sort('-date')
        
            for (const product of purchasedProducts) {
                var newProduct = product.toObject();
                let originalProduct =  await ProductModel.findOne({_id:new ObjectId(product.product_id)})
                newProduct.supplier = originalProduct.supplier;
                newProduct.productName = originalProduct.name;
                newProduct.description = originalProduct.description;
                newProduct.img = originalProduct.img;
    
                purchasedProductsWithDetails.push(newProduct);
    
            }
        
            return res.status(200).json(purchasedProductsWithDetails);
         
        }
    
        catch (err){
            res.status(500).json({
                error: 'Internal Server Error',
                message: err.message
            })
        }
};


module.exports = {
    listPurchasedProductUser,
    moveFromCartToPurchase,
    listPurchasedProductUserInOrder

};