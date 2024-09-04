const express = require('express');
const router = express.Router();
const controllers = require('./controllers')

// SIGN UP / LOG IN
router.get('/idExist', controllers.signUp.checkId);

router.get('/checkCred', controllers.signUp.checkCred);

router.get('/getCred', controllers.signUp.getCred);

router.post('/createId', controllers.signUp.createId);

// TIMECARD
router.get('/getActivities', controllers.timeCard.getActivities);

router.get('/timeData', controllers.timeCard.getTimeWithDate);

router.post('/createTimeStamp', controllers.timeCard.createTimeStamp);

router.delete('/deleteTimestamp', controllers.timeCard.deleteTimestamp);

// MENU
router.get('/getCategories', controllers.menu.getCategories);

router.get('/menuList', controllers.menu.getMenuWithId);

router.post('/createCategory', controllers.menu.createCategory);

router.post('/menu', controllers.menu.createMenu);

router.put('/changeOrder/Category', controllers.menu.changeCategoryOrder);

router.put('/category', controllers.menu.changeCategoryData);

router.put('/changeOrder/menu', controllers.menu.changeMenuOrder);

router.put('/menu', controllers.menu.changeMenuData);

router.delete('/category', controllers.menu.deleteCategory);

router.delete('/menu', controllers.menu.deleteMenu);

// USER
router.get('/users', controllers.users.getUsers);

router.put('/updateTier', controllers.users.updateTier);

// PROMO
router.get('/promos', controllers.promo.getPromos);

router.get('/activePromos', controllers.promo.loadActivePromos);

router.post('/promo', controllers.promo.createPromo);

router.put('/promo', controllers.promo.updatePromo);

router.put('/activatePromo',controllers.promo.activatePromo);

router.delete('/promo', controllers.promo.deletePromo);

// SALES
router.get('/salesReport', controllers.sales.loadSalesReport);

router.get('/salesReport/maxPage', controllers.sales.getMaxPage);

router.get('/stats', controllers.sales.getStats);

router.get('/salesDate', controllers.sales.getSalesWithDate);

router.post('/salesReport', controllers.sales.createSalesReport);

// RECORD
router.post('/record', controllers.record.createRecord);

router.get('/history', controllers.record.loadHistory);

module.exports = router;