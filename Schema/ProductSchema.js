const Sequelize = require('sequelize');
const { mysql } = require('../DbConnection/DbConnection');
const Product = mysql.define('tbl_Product', {
    product_Id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    category: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    images: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    brand: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    price: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    cpu: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    memory: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    size: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    weight: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    battery: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    camera: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false,
    }
});

Product.sync({ force: false }).then((res) => {
    console.log('Product Table Create Successfully');
}).catch((err) => {
    console.log('Error in creating Table', err);
})

module.exports = Product;

