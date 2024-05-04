const db = require('../db');

module.exports = {
  createSalesReport: (selectedDate, cashSales, creditSales, totalSales, creditTip, cashTip, totalTip, cb) => {
    db.query('SELECT * FROM sales WHERE created_at = $1',[selectedDate])
    .then(({rows}) => {
      if (rows.length) {
        cb('report with same date exists.')
      } else {
        const text = `INSERT INTO sales (created_at, cash_sales, credit_sales, total_sales, credit_tip, cash_tip, total_tip) VALUES ($1, $2, $3, $4, $5, $6, $7)`;
        const values = [selectedDate, cashSales, creditSales, totalSales, creditTip, cashTip, totalTip];
        db.query(text, values)
        .then(() => cb('hello report has been created'));
      }
    });
  },
  loadSalesReport: (page, offset, cb) => {
    db.query(`SELECT * FROM sales ORDER BY created_at DESC LIMIT ${Number(offset)} OFFSET ${Number(page - 1) * Number(offset)}`)
    .then(({rows}) => cb(rows));
  },
  getMaxPage: (offset, cb) => {
    db.query('SELECT id FROM sales')
    .then(({rows}) => {
      cb({maxPage: Math.ceil(rows.length/Number(offset))});
    });
  }
}