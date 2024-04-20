const path = require("path");
const formData = require("../database/formData")
const fs = require('fs');
const userFilePath = path.join(__dirname,'..','database','userData.json');

module.exports = class User {
    constructor()
    {
        console.log("Creating new user");
    }

    save(curUser,cb)
    {
        this.name = curUser?.name;
        this.email = curUser?.email;
        this.gender = curUser?.gender;
        fs.readFile(userFilePath,(err,fileContent) => {
            let preData = [];
            if(!err)
            {
                preData = JSON.parse(fileContent);
            }
            preData.push(this);
            fs.writeFile(userFilePath,JSON.stringify(preData),err=>
            {
                if(err)
                {
                    console.log("there is error in saving the data to file",err)
                }
                else
                {
                    cb();
                }
            }
            );
        })
        // formData?.userDetails?.push(this);
    }

    static fetchAll(cb)
    {
        console.log("I am here in fetch")
        fs.readFile(userFilePath,(err,fileContent) => {
            if(err)
            {
                cb([]);
            }
            cb(JSON.parse(fileContent));
        })
    }
}