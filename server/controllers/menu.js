const models = require('../models');

module.exports = {
  createCategory: (req, res) => {
    const {korName, engName, korDetail, engDetail} = req.body;
    models.menu.createCategory(korName, engName, korDetail, engDetail, (data) => res.send(data));
  },
  getCategories: (req, res) => {
    models.menu.getCategories((data) => res.send(data));
  },
  changeCategoryOrder: (req, res) => {
    const {first, second} = req.query;
    // console.log(Number(second));
    // res.send('test');
    models.menu.changeCategoryOrder(Number(first), Number(second), (data) => {
      res.send(data);
    });
  },
  createMenu: (req, res) => {
    const {id, korName, engName, korDetail, engDetail, price, url} = req.body;
    models.menu.createMenu(id, korName, engName, korDetail, engDetail, price, url, (data) => {
      res.send(data);
    });
  },
  getMenuWithId: (req, res) => {
    models.menu.getMenuWithId(req.query.id, (data) => {
      res.send(data);
    });
  },
  deleteCategory: (req, res) => {
    models.menu.deleteCategory(req.query.id, (data) => res.send(data));
  },
  changeCategoryData: (req, res) => {
    const {id, korName, engName, korDetail, engDetail} = req.query;
    models.menu.changeCategoryData(id, korName, engName, korDetail, engDetail, (data) => res.send(data));
  },
  deleteMenu: (req, res) => {
    models.menu.deleteMenu(req.query.id, (data) => res.send(data));
  },
  changeMenuOrder: (req, res) => {
    const {first, second} = req.query;
    models.menu.changeMenuOrder(first, second, (data) => res.send(data));
  },
  changeMenuData: (req, res) => {
    const {id, korName, engName, korDetail, engDetail, price, url, cat_id} = req.query;
    models.menu.changeMenuData(id, korName, engName, korDetail, engDetail, price, url, cat_id, (data) => res.send(data));
  }
}