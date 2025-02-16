import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('doodling.db');

export const initDB = () => {
  db.transaction(tx => {
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS messages (
        id TEXT PRIMARY KEY,
        content TEXT,
        timestamp TEXT,
        sender TEXT
      );`,
      [],
      () => console.log('Database initialized'),
      (err) => console.error('DB Error:', err)
    );
  });
};

export const saveMessage = (message) => {
  db.transaction(tx => {
    tx.executeSql(
      'INSERT INTO messages (id, content, timestamp, sender) VALUES (?, ?, ?, ?);',
      [message.id, message.content, message.timestamp, message.sender],
      () => console.log('Message saved'),
      (err) => console.error('Save Error:', err)
    );
  });
};

export const loadMessages = () => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql('SELECT * FROM messages ORDER BY timestamp DESC;', [], (_, { rows }) => {
        resolve(rows._array);
      }, reject);
    });
  });
};
