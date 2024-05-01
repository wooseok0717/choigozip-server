const models = require('../models');

module.exports = {
  createPromo: (req, res) => {
    const {korTitle, engTitle, url, korDetail, engDetail} = req.body;
    models.promo.createPromo(korTitle, engTitle, url, korDetail, engDetail, (data) => res.send(data));
  },
  getPromos: (req, res) => {
    models.promo.getPromos((data) => res.send(data));
  },
  deletePromo: (req, res) => {
    models.promo.deletePromo(req.query.id, (data) => res.send(data));
  }
}