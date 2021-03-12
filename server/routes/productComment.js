const express = require('express');
const connection = require('../config/database.js');
//const connection = require('../models/index.js');
const createProductComment  = require('../controllers/productComments.js');

const productCommentsRouter = express.Router();


productCommentsRouter.post('/', createProductComment);


module.exports = productCommentsRouter;


