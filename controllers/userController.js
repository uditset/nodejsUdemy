const formData = require("../database/formData");
const User = require("../modals/User");
const routesConstant = require("../routes/routesConstant");

exports.userPage = (req,res)=>{
    User?.fetchAll(users => {
        res?.status(200)?.render('user',{pageTitle: "User Page",path: routesConstant?.user,userDet: users});
    })
};

exports.updateUser = (req,res)=>{
    const user = new User();
    user.save(req?.body , () => {
        User?.fetchAll(users => {
            res?.status(200)?.render('user',{pageTitle: "User Page",path: routesConstant?.user,userDet: users});
        })
    });

    
}