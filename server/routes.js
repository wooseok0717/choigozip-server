const express = require('express');
const router = express.Router();
const controllers = require('./controllers')

router.get('/idExist', controllers.signUp.checkId);

router.get('/checkCred', controllers.signUp.checkCred);

router.post('/createId', controllers.signUp.createId);

router.get('/getCred', controllers.signUp.getCred);

router.post('/createTimeStamp', controllers.timeCard.createTimeStamp);

router.get('/getActivities', controllers.timeCard.getActivities);

router.post('/createCategory', controllers.menu.createCategory);

router.get('/getCategories', controllers.menu.getCategories);

router.put('/changeOrder/Category', controllers.menu.changeCategoryOrder);

router.post('/menu', controllers.menu.createMenu);

router.get('/menuList', controllers.menu.getMenuWithId);

router.delete('/category', controllers.menu.deleteCategory);

router.put('/category', controllers.menu.changeCategoryData);

router.delete('/menu', controllers.menu.deleteMenu);

router.put('/changeOrder/menu', controllers.menu.changeMenuOrder);

router.put('/menu', controllers.menu.changeMenuData);

router.get('/users', controllers.users.getUsers);

router.put('/updateTier', controllers.users.updateTier);

router.post('/promo', controllers.promo.createPromo);

module.exports = router;