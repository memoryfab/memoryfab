const Sequelize = require('sequelize')
const db = require('../db')

// this is the current cart before checkout
// Double not null. Worth DRYing up?

const Order = db.define('order', {
    orderNumber: {
        type: Sequelize.INTEGER,// how to do 1-4000 range?
        allowNull: true
    },
    //orderDate handled by PostgreSQL
    totalAmount: {
        type: Sequelize.DECIMAL(12,2),
        allowNull: false
    }
});

module.exports = Order;
