const PORT = 5000;
const express = require('express');
const path = require('path');
const mainRouter = require('./routes/router.js');

const app = express();
app.use(express?.static(path.join(__dirname,'public')));


//using our routes.

app.use(mainRouter);



app.listen(PORT,()=>console.log(`Express server started at port ${PORT}`));