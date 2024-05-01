const db = require('../db');

module.exports = {
  createPromo: (korTitle, engTitle, url, korDetail, engDetail, cb) => {
    const text = 'INSERT INTO promo (kor_title, eng_title, url, kor_details, eng_details) VALUES ($1, $2, $3, $4, $5)';
    const values = [korTitle, engTitle, url, korDetail, engDetail];
    db.query(text, values)
    .then(() => {
      cb('promo has been created');
    })
  },
  getPromos: (cb) => {
    db.query('SELECT * FROM promo')
    .then(({rows}) => cb(rows));
  },
  deletePromo: (id, cb) => {
    db.query(`DELETE FROM promo WHERE id = ${id}`)
    .then(() => cb('item has been deleted'));
  },
  updatePromo: (id, korTitle, engTitle, url, korDetail, engDetail, cb) => {
    const text = 'UPDATE promo SET kor_title = $1, eng_title = $2, url = $3, kor_details = $4, eng_details = $5 WHERE id = $6';
    const values = [korTitle, engTitle, url, korDetail, engDetail,id];
    db.query(text, values)
    .then(() => cb('data has been updated'));
  },
  loadActivePromos: (cb) => {
    db.query('SELECT * FROM promo WHERE active = TRUE')
    .then(({rows}) => cb(rows));
  }
}