const models = require('../models');

module.exports = {
  getUsers: (req, res) => {
    models.users.getUsers((data) => res.send(data));
  },
  updateTier: (req, res) => {
    const {id, tier} = req.query;
    models.users.updateTier(id, tier, (data) => {
      res.send(data);
    })
  }
}