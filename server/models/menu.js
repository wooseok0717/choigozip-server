const db = require('../db');

module.exports = {
  createCategory: (korName, engName, korDesc, engDesc, cb) => {
    const text1 = 'SELECT * FROM category WHERE kor_name = $1 OR eng_name = $2';
    const values1 = [korName, engName];
    db.query(text1, values1)
    .then(({rows}) => {
      if (rows.length === 0) {
        const text2 = 'INSERT INTO category (kor_name, eng_name, kor_details, eng_details) VALUES ($1, $2, $3, $4)';
        const values2 = [korName, engName, korDesc, engDesc];
        db.query(text2, values2)
        .then(() => {
          cb('category has been successfuly added to the db.');
        });
      } else {
        cb('item with the same name already exists.');
      }
    });
  },
  getCategories: (cb) => {
    db.query('SELECT * FROM category ORDER BY order_id')
    .then(({rows}) => cb(rows));
  },
  changeCategoryOrder: (id1, id2, cb) => {
    db.query(`UPDATE category SET order_id = -1 WHERE order_id = ${id1}`)
    .then(() => {
      db.query(`UPDATE category SET order_id = ${id1} WHERE order_id = ${id2}`)
      .then(() => {
        db.query(`UPDATE category SET order_id = ${id2} WHERE order_id = -1`)
        .then(() => {
          cb('update has been successful');
        })
      })
    })
  },
  createMenu: (id, korName, engName, korDetail, engDetail, price, url, cb) => {
    const text1 = 'SELECT * FROM menu WHERE (kor_name = $1 OR eng_name = $2) AND category_id = $3';
    const values1 = [korName, engName, id];
    db.query(text1, values1)
    .then(({rows}) => {
      if (!rows.length) {
        const text2 = 'INSERT INTO menu (category_id, kor_name, eng_name, kor_details, eng_details, price, img_url) VALUES ($1, $2, $3, $4, $5, $6, $7)';
        const values2 = [id, korName, engName, korDetail, engDetail, price, url];
        db.query(text2, values2)
        .then(() => {
          cb('creation has been successful.');
        })
      } else {
        cb('item with same name already exists.')
      }
    })
  },
  getMenuWithId: (id, cb) => {
    db.query(`SELECT * FROM menu WHERE category_id = ${id} ORDER BY order_id`)
    .then(({rows}) => {
      cb(rows);
    });
  },
  deleteCategory: (id, cb) => {
    db.query(`DELETE FROM category WHERE id = ${id}`)
    .then(() => cb('deleted the item'));
  },
  changeCategoryData: (id, korName, engName, korDetail, engDetail, cb) => {
    const text1 = 'SELECT * FROM category WHERE (kor_name = $1 OR eng_name = $2) AND id != id';
    const values2 = [korName, engName];
    db.query(text1,values2)
    .then(({rows}) => {
      if (rows.length) {
        cb('item with same name already exists.');
      } else {
        const text2 = `UPDATE category SET kor_name = $1, eng_name = $2, kor_details = $3, eng_details = $4 WHERE id = $5`;
        const values2 = [korName, engName, korDetail, engDetail, id];
        db.query(text2, values2)
        .then(() => cb('it has been updated'));
      }
    })
  },
  deleteMenu: (id, cb) => {
    db.query(`DELETE FROM menu WHERE id = ${id}`)
    .then(() => {
      cb('it has been deleted');
    })
  },
  changeMenuOrder: (id1, id2, cb) => {
    db.query(`UPDATE menu SET order_id = -1 WHERE order_id = ${id1}`)
    .then(() => {
      db.query(`UPDATE menu SET order_id = ${id1} WHERE order_id = ${id2}`)
      .then(() => {
        db.query(`UPDATE menu SET order_id =${id2} WHERE order_id = -1`)
        .then(() => {
          cb('update has been made');
        })
      })
    })
  },
  changeMenuData: (id, korName, engName, korDetail, engDetail, price, url, cat_id, cb) => {
    const text1 = 'SELECT * FROM menu WHERE (kor_name = $1 OR eng_name = $2) AND id != $3 AND category_id = $4';
    const values1 = [korName, engName, id, cat_id];
    db.query(text1, values1)
    .then(({rows}) => {
      if (rows.length) {
        cb('item with same name already exists.')
      } else {
        const text = `UPDATE menu SET kor_name = $1, eng_name = $2, kor_details = $3, eng_details = $4, price = $5, img_url = $6 WHERE id = $7`;
        const values = [korName, engName, korDetail, engDetail, price, url, id];
        db.query(text, values)
        .then(() => cb('hello this is models'));
      }
    })
  }
}