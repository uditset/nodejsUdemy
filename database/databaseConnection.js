const Sequelize = require('sequelize');

const sequelize = new Sequelize("seq_working_node_app","root","admin@1234",{dialect: "mysql",host: "localhost"});
module.exports = sequelize;

