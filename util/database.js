const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complere', 'root', 'Dembee123', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;