const models = require('../models');

module.exports = {
  createSalesReport: (req, res) => {
    const {selectedDate, cashSales, creditSales, totalSales, creditTip, cashTip, totalTip} = req.body;
    models.sales.createSalesReport(selectedDate, cashSales, creditSales, totalSales, creditTip, cashTip, totalTip, (data) => res.send(data));
  },
  loadSalesReport: (req, res) => {
    const {page, offset} = req.query;
    models.sales.loadSalesReport(page, offset, (data) => res.send(data));
  }
}