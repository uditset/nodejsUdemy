const express = require('express');
const {handleIncomingRequests} = require('./routes/routes.js');
const PORT = 3000;

const app = express();

const middleWare1 = (req,res,next) => {
    console.log("I am in middle ware 1");
    next();
}

const middleWare2 = (req,res,next) => {
    console.log("I am in middle ware 2");
    next();
}

const middleWare3 = (req,res,next) => {
    console.log("I am in middle ware 3");
    next();
    //res?.send(`<h1>Welcome to express Js Framework.</h1`)
}

app.use('/',middleWare1);  
app.use(middleWare2); //is equivalent to app.use('/',middleWare2);  / here means all request starting from '/'
app.use(middleWare3);

//one of the way of mapping request.
app.use('/product',(req,res,next)=>{
    console.log(req.url);
    console.log(req.method);
    console.log(req.body);
    console.log(req.body);
    res.send('<h1>Hi bro this is product page</h1>');
})
app.use('*',(req,res,next)=>{
    res?.send('<h1>Page not found bro</h1>');
})

app?.listen(PORT,()=>console.log(`Express App started at PORT ${PORT}`));


//Doubts arised switch case was not working in routes.js in handleIncomingRequests thats why I replaced with if else

