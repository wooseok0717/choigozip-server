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
  },
  getStats: (cb) => {
    // cb('hello from models');
    db.query(`SELECT
        ROUND(AVG(total_sales), 2) AS average_sales,
        MAX(total_sales) AS highest_sales,
        MIN(total_sales) AS lowest_sales,
        (SELECT total_sales FROM sales ORDER BY created_at DESC LIMIT 1) AS most_recent_sales,
        (SELECT created_at FROM sales ORDER BY created_at DESC LIMIT 1) AS most_recent_date
      FROM
        sales;`
    )
    .then(({rows}) => cb(rows[0]));
  },
  getSalesWithDate: (start, end, cb) => {
    const text = `SELECT ROUND(AVG(total_sales), 2) AS average_sales, ROUND(AVG(total_tip),2) AS average_tip, SUM(total_sales) AS total_sales, SUM(total_tip) AS total_tip, SUM(cash_sales) AS total_cash_sales, SUM(cash_tip) AS total_cash_tip FROM sales WHERE created_at BETWEEN $1 AND $2`;
    const values = [start, end];
    db.query(text,values)
    .then(({rows}) => cb(rows));
  }
}