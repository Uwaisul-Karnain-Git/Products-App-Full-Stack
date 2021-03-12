const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors');
const connection = require('./models/index.js');
const productRoutes = require('./routes/product.js');
const productCategoryRoutes = require('./routes/productCategory.js');
const productCommentRoutes = require('./routes/productComment.js');

const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

app.get('/', (req, res) => res.send('INDEX Page'));

// Product routes
app.use('/product', productRoutes);

// ProductCategory routes
app.use('/productCategory', productCategoryRoutes);

// ProductComment routes
app.use('/productComment', productCommentRoutes);

// Access the global variable - 'PORT' declared in our 'config.env'
const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running on port: ${PORT}`)); 




