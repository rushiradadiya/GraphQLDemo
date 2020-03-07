const Sequelize = require('sequelize');
const { mysql } = require('../DbConnection/DbConnection');

const Brand = mysql.define('tbl_Brand', {
    brand_Id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    type: {
        type: Sequelize.STRING,
        allowNull: false,
    }
});

Brand.sync({ force: false }).then((res) => {
    console.log('Brand Table Create Successfully');
}).catch((err) => {
    console.log('Error in creating Table', err);
})

module.exports = Brand;

