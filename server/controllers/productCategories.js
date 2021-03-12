const ProductCategory = require('../models/ProductCategory.js');


const getProductCategories = async (req, res) => {
    try {
        const ProductCategories = await ProductCategory.findAll();
    
        res.status(200).json(ProductCategories);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
};

// Filter Products Categories by 'Category Name'
const getFilteredProductCategories = async (req, res) => {
    try {
        const { name } = req.params;
        const nameFilterValue = '%' + name;

        const filteredProductCategories = await ProductCategory.findAll({
            where: {
                name: {
                    //[Op.substring]: name
                    [Op.like]: nameFilterValue
                }
              }
          });
    
        res.status(200).json(filteredProductCategories);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
};


// Exports
module.exports = {
    getFilteredProductCategories,
    getProductCategories
}



