const express = require('express');
const cors = require('cors');
const sequelize = require('./config/database');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

// Initialize database
sequelize.sync({ alter: true }).then(() => {
  console.log('Database synchronized');
}).catch(err => {
  console.error('Error synchronizing database:', err);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});