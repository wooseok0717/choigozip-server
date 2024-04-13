const db = require('../db');

module.exports = {
  getUsers: (cb) => {
    db.query('SELECT user_id, name, tier FROM users')
    .then(({rows}) => cb(rows));
  },
  updateTier: (id, tier, cb) => {
    const text = 'UPDATE users SET tier = $1 WHERE user_id = $2'
    const values = [tier, id];
    db.query(text,values)
    .then(() => {
      cb('update has been made');
    })
  }
}