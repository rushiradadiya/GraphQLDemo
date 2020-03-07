const Sequelize = require('sequelize');
const { mysql } = require('../DbConnection/DbConnection');

const Category = mysql.define('tbl_Category', {
    Category_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    Category_Name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    active: {
        type: Sequelize.INTEGER(1),
        defaultValue: 0
    }
});

Category.sync({ force: false }).then((res) => {
    console.log('Category Table Create Succesfully');
}).catch((err) => {
    console.log('Error in creating Table', err);
})

module.exports = Category;

