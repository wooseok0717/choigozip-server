const models = require('../models');

module.exports = {
  createTimeStamp: (req, res) => {
    const {id, action, time} = req.body;
    models.timeCard.createTimeStamp(id, action, time, (data) => {
      res.send(data);
    });
  },
  getActivities: (req, res) => {
    console.log('router',req.query);
    models.timeCard.getActivities(req.query.id, (data) => {
      res.send(data);
    });
  }
}