const Sequelize = require('sequelize')
const db = require('../db')

// this is the current cart before checkout
// Double not null. Worth DRYing up?

const Order = db.define('order', {
    orderNumber: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    orderDate: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
    },
    totalAmount: {
        type: Sequelize.DECIMAL(12,2),
        allowNull: false
    }
});

module.exports = Order;
