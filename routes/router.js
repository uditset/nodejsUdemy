const express = require('express');
const routesConstant = require('./routesConstant');
const router = express?.Router();
const formData = require('../database/formData.js');

router?.get(routesConstant?.homePage,(req,res)=>{
    res?.status(200)?.render('homePage',{pageTitle: "Home Page",path: routesConstant?.homePage});
})

router?.get(routesConstant?.user,(req,res)=>{
    res?.status(200)?.render('user',{pageTitle: "User Page",path: routesConstant?.user,userDet: formData?.userDetails});
})

router?.post(routesConstant?.updateUserInfo,(req,res)=>{
    formData?.userDetails?.push(req?.body)
    res?.status(200)?.render('user',{pageTitle: "User Page",path: routesConstant?.user,userDet: formData?.userDetails})
})

router?.use(routesConstant?.pageNotFound,(req,res)=>{
    res?.status(404)?.render('404',{pageTitle: "Page Not Found"});
})

module.exports = router;