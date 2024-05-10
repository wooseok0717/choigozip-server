const models = require('../models');

module.exports = {
  createRecord: (req, res) => {
    const {creator, action,type} = req.body;
    models.record.createRecord(creator, action, type, (data) => res.send(data));
  },
  loadHistory: (req, res) => {
    const {page, offset} = req.query;
    models.record.loadHistory(page, offset, (data) => res.send(data));
  }
}