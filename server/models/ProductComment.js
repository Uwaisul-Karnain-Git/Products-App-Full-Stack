const Sequelize  = require('sequelize');
const connection  = require('../config/database.js');
//const connection  = require('./index.js');

const ProductComment = connection.define('productComment', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false        
    },    
    productId: {   // Foreign key in 'Product' table       
        type: Sequelize.INTEGER,
        allowNull: false
    },
    comment: {
        type: Sequelize.TEXT,
        allowNull: false,
        validate: {
            len: {
                args: [1,300],
                msg: 'Please enter a Comment less than or equal to 300 characters'
            }
        }
    }
},
{
    //timestamps: false,
    freezeTableName: true   // Prevent sequelizer from automatically pluralizing the table name
});

ProductComment.associate = (models) => {
    Product.belongsTo(models.Product, {
        foreignKey: {
            allowNull: false
        }
    });
};

connection.sync({
    force: true
})
.then(() => {
    return ProductComment.bulkCreate([
        {
            productId: 1,
            comment: 'Test Comment 1 - Product 1'
        },
        {
            productId: 3,
            comment: 'Test Comment 2 - Product 3'
        },
        {
            productId: 1,
            comment: 'Test Comment 3 - Product 1'
        },
        {
            productId: 6,
            comment: 'Test Comment 4 - Product 6'
        }
    ], {
        validate: true
    })
})
.catch((err) => {
    console.log(err);
});

module.exports = ProductComment;

