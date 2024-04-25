// const path = require("path");
// const formData = require("../database/formData")
// const fs = require('fs');
// const userFilePath = path.join(__dirname,'..','database','userData.json');
const databaseConnection = require('../database/databaseConnection.js');

module.exports = class User {
    constructor()
    {
        console.log("Creating new user");
    }

    save(curUser)
    {
        this.name = curUser?.name;
        this.email = curUser?.email;
        this.gender = curUser?.gender;
        return databaseConnection?.execute('INSERT INTO user_details (name,email,gender,password_hash) VALUES (?,?,?,?)',[this.name,this.email,this.gender,"DEF"])?.then(res => {
            console.log("I am here");
           return databaseConnection?.execute('SELECT * FROM user_Details');
        });
    }

    static fetchAll()
    {
        console.log("I am here in fetch")
        return databaseConnection?.execute('SELECT * FROM user_details');
    }
}