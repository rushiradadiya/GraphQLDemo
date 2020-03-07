const Sequelize = require('sequelize');
const Opation = Sequelize.Op;
const mysql = new Sequelize('relay', 'root', 'root', {
    host: 'localhost',
    port: 8889,
    dialect: 'mysql',
    operatorsAliases: Opation,
});
// const Person = mysql.define('person', {
//     firstName: {
//         type: Sequelize.STRING,
//         allowNull: false
//     },
//     lastName: {
//         type: Sequelize.STRING,
//         allowNull: false
//     },
//     email: {
//         type: Sequelize.STRING,
//         validate: {
//               isEmail: true
//         }
//     }
// });

const posts = mysql.define('posts', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    content: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

posts.sync({ force: false }).then((res) => {
    console.log('Posts Table Create Succesfully');
}).catch((err) => {
    console.log('Error in creating Table', err);
});
// Person.sync({ force: false }).then((res) => {
//     debugger
//     console.log('Person Table Create Succesfully');
// }).catch((err) => {
//     console.log('Error in creating Table', err);
// });

module.exports = {posts,
    // Person
};