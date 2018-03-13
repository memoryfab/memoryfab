const Sequelize = require('sequelize')
const db = require('../db')

const Meta = db.define('meta', {
    //Typecast based upon classtype
    value: {
        type: Sequelize.STRING,
        allowNull: false
    }
 
})

module.exports = Meta

