const models = require('../models');

module.exports = {
  checkId: (req, res) => {
    models.signUp.checkId(req.query.id, (data) => res.send(data));
  },
  checkCred: (req, res) => {
    const {id, pw} = req.query;
    models.signUp.checkCred(id, pw, (data) => res.send(data));
  },
  createId: (req, res) => {
    const {id, pw, name} = req.body;
    models.signUp.createId(id, pw, name, (data) => {
      res.send(data);
    })
  },
  getCred: (req, res) => {
    models.signUp.getCred(req.query.id, (data) => {
      res.send(data);
    })
  }
}