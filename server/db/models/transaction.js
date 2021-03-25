const Sequelize = require('sequelize')
const db = require('../db')

const Transaction = db.define('transaction', {
  transactionHash: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  smartContractAddress: {
    type: Sequelize.STRING,
    unique: false,
    allowNull: false
  },
  amountEther: {
    type: Sequelize.INTEGER,
    unique: false,
    allowNull: false
  }
})

module.exports = Transaction
