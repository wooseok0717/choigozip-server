const db = require('../db');

module.exports = {
  checkId: (id, cb) => {
    const text = `SELECT * FROM users WHERE user_id = $1`
    const values = [id];
    db.query(text,values)
    .then(({rows}) => {
      if (rows.length) {
        cb(true);
      } else {
        cb(false);
      }
    });
  },
  checkCred: (id, pw, cb) => {
    const text = `SELECT user_id, name, tier, pw FROM users WHERE user_id = $1`
    const values = [id];
    db.query(text, values)
    .then(({rows}) => {
      if (!rows.length) {
        cb('아이디가 존재하지 않습니다.');
      } else {
        if (rows[0].pw !== pw) {
          cb('비밀번호가 잘못되었습니다.');
        } else {
          rows[0].pw = null;
          cb(rows[0]);
        }
      }
    });
  },
  createId: (id, pw, name, cb) => {
    const text = `INSERT INTO users (user_id, pw, name) VALUES ($1, $2, $3)`;
    const values = [id, pw, name];
    db.query(text,values)
    .then(({rows}) => {
      cb(rows);
    });
  },
  getCred: (id, cb) => {
    const text = `SELECT user_id, name, tier FROM users WHERE user_id = $1`;
    const values = [id];
    db.query(text,values)
    .then(({rows}) => cb(rows[0]))
  }
}