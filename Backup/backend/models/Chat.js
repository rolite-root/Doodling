const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Chat = sequelize.define('Chat', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  type: {
    type: DataTypes.ENUM('direct', 'group'),
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: true // Only required for group chats
  },
  lastMessage: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  lastMessageTime: {
    type: DataTypes.DATE,
    allowNull: true
  },
  retentionPeriod: {
    type: DataTypes.INTEGER, // in days
    defaultValue: 7 // default 7 days retention
  }
});

module.exports = Chat;