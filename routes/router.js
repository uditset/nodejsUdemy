//importing node modules
const express = require('express');
const path = require('path');


//importing our files & defining variables
const routesConstant = require('./routesConstant');
const router = express.Router();
const viewsPath = path.join(__dirname,'..','views');
const formData = require('../database/formData');


//Main routes info
router.get(routesConstant?.homePage,(req,res) => {
    res.status(200).sendFile(path.join(viewsPath,'homePage.html'));
})

router.get(routesConstant?.user,(req,res) => {
    res.status(200).sendFile(path.join(viewsPath,'userPage.html'));
})

router.post(routesConstant?.userDetails,(req,res)=>{
    const obj = req?.body;
    console.log(req?.body);
    formData.userDetails = {...formData?.userDetails,...obj}
    res.render('displayUser',{...formData});
})

router.get(routesConstant?.dummyUserDetails,(req,res) => {
    //res.status(200).sendFile(path.join(viewsPath,'homePage.html'));
    res.render('userDetails');
})

router.get(routesConstant?.homePagePug,(req,res)=>{
    res.render('homePagePug',{pageTitle: "HOME PAGE PUG", pageContent: "THIS DATA IS SENT FROM THE ROUTER BRO"});
})

router.get(routesConstant?.userPug,(req,res)=>{
    res.render('userPagePug',{pageTitle: "U P Pug"});
})

router.get('*',(_,res)=>{

    res.status(404).sendFile(path.join(viewsPath,'404.html'));
})

module.exports = router;