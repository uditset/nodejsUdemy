//importing node modules
const express = require('express');
const path = require('path');


//importing our files & defining variables
const routesConstant = require('./routesConstant');
const router = express.Router();
const viewsPath = path.join(__dirname,'..','views');


//Main routes info
router.get(routesConstant?.homePage,(req,res) => {
    res.status(200).sendFile(path.join(viewsPath,'homePage.html'));
})

router.get(routesConstant?.user,(req,res) => {
    res.status(200).sendFile(path.join(viewsPath,'userPage.html'));
})

router.get('*',(_,res)=>{

    res.status(404).sendFile(path.join(viewsPath,'404.html'));
})

module.exports = router;