const models = require('../models');

module.exports = {
  createRecord: (req, res) => {
    const {creator, action,type} = req.body;
    models.record.createRecord(creator, action, type, (data) => res.send(data));
  }
}