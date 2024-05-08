const db = require('../db');

module.exports = {
  createRecord: (creator, action, cb) => {
    const text = 'INSERT INTO records (creator, message) VALUES ($1, $2);'
    const values = [creator, action];
    db.query(text, values)
    .then(() => cb('record has been created'));
  }
}