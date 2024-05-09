const db = require('../db');

module.exports = {
  createRecord: (creator, action, type, cb) => {
    const text = 'INSERT INTO records (creator, message, type) VALUES ($1, $2, $3);'
    const values = [creator, action, type];
    db.query(text, values)
    .then(() => cb('record has been created'));
  }
}