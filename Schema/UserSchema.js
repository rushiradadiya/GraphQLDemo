const Sequelize = require('sequelize');
const { mysql } = require('../DbConnection/DbConnection');

const User = mysql.define('tbl_User', {
    user_Id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    fullName: {
        type: Sequelize.STRING,
        allowNull: false,
    } ,
    userName: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
    }
});

User.sync({ force: false }).then((res) => {
    console.log('User Table Create Successfully');
}).catch((err) => {
    console.log('Error in creating Table', err);
})

module.exports = User;

