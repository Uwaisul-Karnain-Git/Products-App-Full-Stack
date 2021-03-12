const ProductComment = require('../models/ProductComment.js');



const createProductComment = async (req, res) => {
    const productComment = req.body;

    try {
        await ProductComment.create(productComment);

        res.status(201).json(productComment);
    } catch (err) {
        res.status(409).json({ message: err.message });
    }
};


// Exports
module.exports = createProductComment;





