const PORT = 5000;
const express = require('express');
const path = require('path');
const mainRouter = require('./routes/router.js');
const bodyParser = require('body-parser');
const mySqlDatabase = require('./database/databaseConnection.js');
const app = express();
app.use(express?.static(path.join(__dirname,'public')));
app.set('view engine','ejs');

//using our routes.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(mainRouter);

mySqlDatabase?.execute('SELECT DATABASE()')?.then((result) => console.log(result))?.catch(err => console.log(err)) //this is used to execute sql query.
//mySqlDatabase?.end() this is used to shut  down our connection of node app with database server

app.listen(PORT,()=>console.log(`Express server started at port ${PORT}`));