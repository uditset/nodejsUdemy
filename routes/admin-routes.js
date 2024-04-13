const express = require('express');
const routes = require('./routesConstant.js');

const router = express.Router();  //Its similar to like const app = express(); but here we using Router of express which is like u can consider mini express application in itself

router.get(routes.users,(req,resp,next)=>{
    console.log(req.body);
    resp.status(200).send('<h1>This is the users page bro</h1>')
});

module.exports = router;