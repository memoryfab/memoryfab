const Sequelize = require('sequelize')
const db = require('../db')

const Blob = db.define('blob', {
  lastUpdate: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.NOW
  },
  views: {
      type: Sequelize.BIGINT,
      allowNull: false
  },
  data: {
      type: Sequelize.BLOB(150)
  }
 
})

module.exports = Blob

