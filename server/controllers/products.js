const Product = require('../models/Product.js');
const Sequelize  = require('sequelize');


// Create Product
const createProduct = async (req, res) => {
    const product = req.body;

    try {
        await Product.create(product);
        //await Product.build(product).save();
        
        res.status(201).json(product);
    } catch (err) {
        res.status(409).json({ message: err.message });
    }
};

// const createProduct = (req, res) => {
//     const product = req.body;

//     return Product.create(product)
//         .then(function (products) {
//         if (products) {
//             res.send(products);
//         } else {
//             res.status(400).send('Error in inserting new record');
//         }
//     });
// };


// Get All Products
const getProducts = async (req, res) => {
    try {
        const products = await Product.findAll({
            where: {
                status: { 
                    [Sequelize.Op.not]: 'deleted'
                }
            }
        });    
        
        res.status(200).json(products);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
};

// Filter Products by 'Product Name' and 'Minimum Price' value
const getFilteredProducts = async (req, res) => {
    try {
        const { name, price } = req.params;

        const filteredProducts = await Product.findAll({
            where: {
                name: {
                    [Sequelize.Op.substring]: name
                },
                price: {
                    [Sequelize.Op.gte]: price
                },
                status: {                   // Don't fetch product that have a 'deleted' state
                    [Sequelize.Op.ne]: 'deleted'
                }
              }
          });
    
        res.status(200).json(filteredProducts);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
};

//// Update the Product to 'deleted' state
// const updateProductToDeleteState = async (req, res) => {
//     const { id } = req.params;

//     console.log(`id: ${id}`);
//     Product.findByPk(id).then(function(product) {
//         product.update({
//             status: 'deleted'
//         }).then((note) => {
//           res.json({ message: 'Status of the Product successfully updated to deleted' });
//         });
//       });
// };

// Update the Product to 'deleted' state
const updateMultipleProductsToDeleteState = async (req, res) => {
    const { ids } = req.body;
    
    Product.update({ status: 'deleted' },{ where : { id : ids }})
    .then((note) => {
        res.json({ message: 'Status of the Product(s) successfully updated to deleted' });
    });
};


// Exports
module.exports = {
    createProduct,
    getFilteredProducts,
    //updateProductToDeleteState,
    updateMultipleProductsToDeleteState,
    getProducts
}





