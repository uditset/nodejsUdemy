const express = require('express');
const {middleWare1,middleWare2} = require('./routes/middleware.js');
const adminRouter = require('./routes/admin-routes.js');
const shopRouter = require('./routes/shop-routes.js');
const pageNotFoundRouter = require('./routes/page-not-found.js')
const path = require('path');

const bodyParser = require('body-parser');

const app = express();
const PORT = 4000;

app.use(express.static(path.join(__dirname,'public'))); //and like this we can attach multiple path to our static category of express.
app.use(express.static(path.join(__dirname,'updated-public')));
app.use(bodyParser.urlencoded({extended: true}));
app.use(middleWare1);
app.use(middleWare2);

app.use(adminRouter);
app.use('/admin',shopRouter);
app.use(pageNotFoundRouter);

app.listen(PORT,()=>console.log(`Express Server has started at Port ${PORT}`));