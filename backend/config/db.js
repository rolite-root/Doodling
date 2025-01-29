const { Pool } = require('pg');

const pool = new Pool({
  user: 'doodle_user',
  host: 'localhost',
  database: 'doodling',
  password: 'yourpassword',
  port: 5432,
});

module.exports = pool;
