const PORT = 5000;
const express = require('express');
const path = require('path');
const mainRouter = require('./routes/router.js');
const bodyParser = require('body-parser');

const app = express();
app.use(express?.static(path.join(__dirname,'public')));
app.set('view engine','pug');

//using our routes.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(mainRouter);



app.listen(PORT,()=>console.log(`Express server started at port ${PORT}`));