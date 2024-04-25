const mysql = require('mysql2');

const pool = mysql?.createPool({
    host: "localhost", //here we need to put the ip address of sql database server.
    user: "root",
    password: "admin@1234",
    //not till above we have give access of out database server but now we need to select our application database
    database: "working_node_app"
});

module.exports = pool.promise();

