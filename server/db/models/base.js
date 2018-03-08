const Sequelize = require('sequelize')
const db = require('../db')

const Base = db.define('base', {
    parentId: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    name: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    views: {
        type: Sequelize.BIGINT,
        allowNull: false
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: false
    }// timeStamp handled by PostgreSQL
    
})

module.exports = Base

