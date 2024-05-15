const models = require('../models');

module.exports = {
  createTimeStamp: (req, res) => {
    const {id, action, time} = req.body;
    models.timeCard.createTimeStamp(id, action, time, (data) => {
      res.send(data);
    });
  },
  getActivities: (req, res) => {
    models.timeCard.getActivities(req.query.id, (data) => {
      res.send(data);
    });
  },
  deleteTimestamp: (req, res) => {
    models.timeCard.deleteTimestamp(req.query.id, (data) => {
      res.send(data);
    })
  }
}