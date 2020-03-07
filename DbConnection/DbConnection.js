const Sequelize = require('sequelize');
const Opation = Sequelize.Op;

    exports.mysql = new Sequelize('DemoGraphql', 'root', 'root', {
        host: 'localhost',
        port:8889,
        dialect: 'mysql',
        operatorsAliases: Opation,
    });

if (exports.mysql) {
    console.log("connected");
}
