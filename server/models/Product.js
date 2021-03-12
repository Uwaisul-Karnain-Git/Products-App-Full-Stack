const Sequelize  = require('sequelize');
const connection  = require('../config/database.js');
//const connection  = require('./index.js');

const Product = connection.define('product', {
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
                msg: 'Please enter a description less than or equal to 500 characters'
            }
        }
    },
    price: {
        type: Sequelize.DECIMAL(10,2),
        allowNull: false
    },
    categoryId: {   // Foreign key in 'category' table       
        type: Sequelize.INTEGER,
        allowNull: false
    },
    status: {
        type:   Sequelize.ENUM,
        values: ['published', 'unpublished', 'deleted']
    }
},
{
    //timestamps: false,
    freezeTableName: true   // Prevent sequelizer from automatically pluralizing the table name
});

Product.associate = (models) => {
    Product.belongsTo(models.ProductCategory, {
        foreignKey: {
            allowNull: false
        }
    });
};

connection.sync({
    force: true
})
.then(() => {
    return Product.bulkCreate([
        {
            name: 'Product 1',
            description: 'Test - Product 1',
            price: 2500.50,
            categoryId: 1,
            status: 'unpublished'
        },
        {
            name: 'Product 2',
            description: 'New Product 2',
            price: 780.00,
            categoryId: 2,
            status: 'published'
        },
        {
            name: 'Product 3',
            description: 'Test - Product 3',
            price: 10000.99,
            categoryId: 2,
            status: 'deleted'
        },
        {
            name: 'Product 4',
            description: 'Product 4',
            price: 125.00,
            categoryId: 2,
            status: 'unpublished'
        },
        {
            name: 'Product 5',
            description: 'Test - Product 5',
            price: 600.00,
            categoryId: 4,
            status: 'deleted'
        },
        {
            name: 'Product 6',
            description: 'Product 6',
            price: 1900.25,
            categoryId: 2,
            status: 'published'
        },
        {
            name: 'Product 7',
            description: 'Test - Product 7',
            price: 99.80,
            categoryId: 5,
            status: 'published'
        },
        {
            name: 'Product 8',
            description: 'Test - Product 8',
            price: 99.80,
            categoryId: 5,
            status: 'published'
        },
        // A duplicate record for 'Testing purposes'
        {
            name: 'Product 7',
            description: 'Test - Product 7',
            price: 99.80,
            categoryId: 5,
            status: 'published'
        }
    ], {
        validate: true,
        ignoreDuplicates: true
    })
})
.catch((err) => {
    console.log(err);
});

module.exports = Product;

