const express = require('express');
const path = require('path');
const routes = require('./routesConstant.js')

const router = express.Router();

const viewsPath = path.join(__dirname,'../views');


router.get(routes.addProduct,(req,resp,next)=>{
    resp.status(200).send('<form action="/admin/created-successfully" method="POST"><input type="text" placeholder="Enter your product name" name="prodName"><input type="submit"></form>')
});

router.post(routes.createdSucc,(req,resp,next)=>{
    console.log(req.body);
    resp.status(201).send('Your product is successfully created');
})

router?.get(routes.product,(req,resp)=>{
    resp.status(200).sendFile(path.join(viewsPath,'products.html'));
})

module.exports = router;