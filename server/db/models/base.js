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
    },
    timeStamp: {  
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW  
    }
    
})

module.exports = Base

