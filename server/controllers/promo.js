const models = require('../models');

module.exports = {
  createPromo: (req, res) => {
    const {korTitle, engTitle, url, korDetail, engDetail} = req.body;
    models.promo.createPromo(korTitle, engTitle, url, korDetail, engDetail, (data) => res.send(data));
  }
}