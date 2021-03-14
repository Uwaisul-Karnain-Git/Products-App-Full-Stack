const express = require('express');
const connection = require('../config/database.js');
//const connection = require('../models/index.js');
const { getProducts, getFilteredProducts, createProduct, updateMultipleProductsToDeleteState }  = require('../controllers/products.js'); 
const Product = require('../models/Product.js');

const productRouter = express.Router();


// Get All Products
productRouter.get('/', getProducts);

// Get Filtered Products
productRouter.get('/:name/:price', getFilteredProducts);

// Add a New Product
productRouter.post('/', createProduct);

// productRouter.post('/', function (req, res) {
//     const product = req.body;

//     return Product.create(product)
//         .then(function (products) {
//         if (products) {
//             res.send(products);
//         } else {
//             res.status(400).send('Error in inserting new record');
//         }
//     });
// });

// Delete a Product - Update the 'Status' to 'deleted'
//productRouter.patch('/:id', updateProductToDeleteState);

// Delete Multiple Products - Update the 'Status' to 'deleted'
productRouter.patch('/', updateMultipleProductsToDeleteState);


module.exports = productRouter;


