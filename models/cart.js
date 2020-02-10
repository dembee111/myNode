const Sequeilize = require('sequelize');

const sequelize = require('../util/database');

const Cart = sequelize.define('cart', {
  id:{
    type: Sequeilize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true

  }
});

module.exports = Cart;