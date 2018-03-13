const Sequelize = require('sequelize')
const db = require('../db')

const ClassType = db.define('classtype', {
    className: {
        type: Sequelize.ENUM('Car', 'Parts', 'Show', 'Article'),
        allowNull: false
    }
})

module.exports = ClassType

