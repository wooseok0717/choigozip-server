const db = require('../db');

module.exports = {
  createTimeStamp: (userId, action, time, cb) => {
    const text = `INSERT INTO timecard (interaction, user_id, time) VALUES ($1, $2, $3)`;
    const values = [action, userId, time];
    db.query(text,values)
    .then(() => cb('log has been created'));
  },
  getActivities: (id, cb) => {
    const text = `SELECT * FROM timecard WHERE user_id = $1 ORDER BY time DESC LIMIT 30`;
    const values = [id];
    db.query(text,values)
    .then(({rows}) => cb(rows));
  },
  deleteTimestamp: (id, cb) => {
    db.query(`DELETE FROM timecard WHERE id = ${id}`)
    .then(() => cb('item has been deleted'));
  },
  getTimeWithDate: (start, end, cb) => {
    const text = `SELECT timecard.*, users.name FROM timecard JOIN users ON timecard.user_id = users.user_id WHERE timecard.time BETWEEN $1 AND $2 ORDER BY timecard.user_id, timecard.time;`;
    const values = [start, end];
    db.query(text,values)
    .then(({rows}) => cb(rows))
  }
}