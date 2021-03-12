const Sequelize = require('sequelize');
const connection = require('../config/database.js');
//const db = require('./index.js');
//const connection = db.sequelize;

const ProductCategory = connection.define('productCategory', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false        
    },
    name: {
        type: Sequelize.STRING(100),
        unique: true,        
        allowNull: false,
        validate: {
            is: /^[A-Za-z0-9 ]+$/   // To not allow 'Special Characters'
        }
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: true,
        validate: {
            len: {
                args: [0,500],
                msg: 'Please enter a description less than 500 characters'
            }
        }
    }

},
{
    freezeTableName: true   // Prevent sequelizer from automatically pluralizing the table name
});

// ProductCategory.associate = models => {
//     ProductCategory.hasMany(models.Product, {
//         onDelete:'cascade'
//     });
// };

ProductCategory.associate = models => {
    ProductCategory.hasMany(models.Product);
};

connection.sync({
    force: true
})
.then(() => {
    return ProductCategory.bulkCreate([
        {
            name: 'Category 1',
            description: 'Test - Product Category 0001'
        },
        {
            name: 'Consumer Products',
            description: 'Product Category 2'
        },
        {
            name: 'Convenient Products',
            description: 'Test - Product Category 3'
        },
        {
            name: 'Consumer Goods',
            description: 'Test - Product Category 4'
        },
        {
            name: 'Category 5',
            description: 'Product Category 5'
        },
        {
            name: 'Industrial Products',
            description: 'Product Category 6'
        },
        {
            name: 'Manufactured Goods',
            description: 'Product Category 7'
        }
    ], {
        validate: true,
        ignoreDuplicates: true
    })
})
.catch((err) => {
    console.log(err);
});

module.exports = ProductCategory;
