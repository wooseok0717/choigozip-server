const models = require('../models');

module.exports = {
  createRecord: (req, res) => {
    const {creator, action} = req.body;
    models.record.createRecord(creator, action, (data) => res.send(data));
  }
}