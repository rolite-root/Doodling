require('dotenv').config();
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

// MySQL connection
const db = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'password',
  database: process.env.DB_NAME || 'doodling_db'
});

db.connect(err => {
  if (err) console.error('Database connection failed:', err);
  else console.log('Connected to MySQL database');
});

// Register user
app.post('/register', (req, res) => {
  const { publicKey, name } = req.body;
  db.query('INSERT INTO users (public_key, name) VALUES (?, ?)', [publicKey, name], (err, result) => {
    if (err) return res.status(500).send('User registration failed');
    res.status(200).send('User registered successfully');
  });
});

// Send message
app.post('/sendMessage', (req, res) => {
  const { senderPublicKey, receiverPublicKey, message } = req.body;
  db.query('INSERT INTO messages (sender_public_key, receiver_public_key, message) VALUES (?, ?, ?)',
    [senderPublicKey, receiverPublicKey, message], (err, result) => {
      if (err) return res.status(500).send('Error sending message');
      res.status(200).send('Message sent');
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
