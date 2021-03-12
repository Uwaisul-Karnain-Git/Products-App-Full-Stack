const express = require('express');
const connection = require('../config/database.js');
//const connection = require('../models/index.js');
const ProductCategory = require('../models/ProductCategory.js');
const { getProductCategories, getFilteredProductCategories }  = require('../controllers/productCategories.js'); 

const productCategoryRouter = express.Router();


productCategoryRouter.get('/', getProductCategories);

productCategoryRouter.get('/:name', getFilteredProductCategories);


module.exports = productCategoryRouter;


