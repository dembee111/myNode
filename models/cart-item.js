const Sequeilize = require('sequelize');

const sequelize = require('../util/database');

const CartItem = sequelize.define('cartItem', {
  id:{
    type: Sequeilize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true

  },
  quantity: Sequeilize.INTEGER
});

module.exports = CartItem;