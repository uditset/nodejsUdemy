const express = require('express');
const {middleWare1,middleWare2} = require('./routes/middleware.js');
const routes = require('./routes/routesConstant.js');
const bodyParser = require('body-parser');

const app = express();
const PORT = 4000;

app.use(bodyParser.urlencoded({extended: true}));
//app.use(bodyParser.json());

app.get(routes.users,(req,resp,next)=>{
    console.log(req.body);
    resp.send('<h1>This is the users page bro</h1>')
});
app.get(routes.addProduct,(req,resp,next)=>{
    resp.send('<form action="/created-successfully" method="POST"><input type="text" placeholder="Enter your product name" name="prodName"><input type="submit"></form>')
});
app.post(routes.createdSucc,(req,resp,next)=>{
    console.log(req.body);
    resp.send('Your product is successfully created');
})

app.use(middleWare1);
app.use(middleWare2);

app.listen(PORT,()=>console.log(`Express Server has started at Port ${PORT}`));