const express = require('express');
const routesConstant = require('./routesConstant');
const router = express?.Router();
const homeController = require('../controllers/homeController.js');
const userController = require('../controllers/userController.js');
const pageNotFoundController = require('../controllers/404Controller.js');

router?.get(routesConstant?.homePage,homeController?.homePage);

router?.get(routesConstant?.user,userController?.userPage);

router?.post(routesConstant?.updateUserInfo,userController?.updateUser);

router?.use(routesConstant?.pageNotFound,pageNotFoundController?.pageNotFound);

module.exports = router;