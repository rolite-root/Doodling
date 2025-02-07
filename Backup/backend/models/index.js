const User = require('./User');
const Chat = require('./Chat');
const Message = require('./Message');

// User-Chat relationships
User.belongsToMany(Chat, { through: 'UserChats' });
Chat.belongsToMany(User, { through: 'UserChats' });

// Message relationships
Message.belongsTo(Chat);
Chat.hasMany(Message);

Message.belongsTo(User, { as: 'sender' });
User.hasMany(Message, { as: 'sentMessages' });

module.exports = {
  User,
  Chat,
  Message
};