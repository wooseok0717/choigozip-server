const db = require('../db');

module.exports = {
  createTimeStamp: (userId, action, time, cb) => {
    const text = `INSERT INTO timecard (interaction, user_id, time) VALUES ($1, $2, $3)`;
    const values = [action, userId, time];
    db.query(text,values)
    .then(() => cb('log has been created'));
  },
  getActivities: (id, cb) => {
    const text = `SELECT * FROM timecard WHERE user_id = $1 ORDER BY time DESC LIMIT 6`;
    const values = [id];
    db.query(text,values)
    .then(({rows}) => cb(rows));
  }
}