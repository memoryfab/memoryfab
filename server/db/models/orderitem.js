const Sequelize = require('sequelize')
const db = require('../db')

const OrderItem = db.define('orderitem', {
  unitPrice: {
    type: Sequelize.DECIMAL(12,2),
    allowNull: false
  },
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
})

module.exports = OrderItem

