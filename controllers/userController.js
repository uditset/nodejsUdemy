// const formData = require("../database/formData");
const User = require("../modals/User");
const routesConstant = require("../routes/routesConstant");

exports.userPage = (_,res)=>{
    User?.fetchAll()?.then(userData => {
        console.log(userData?.[0]);
        res?.status(200)?.render('user',{pageTitle: "User Page",path: routesConstant?.user,userDet: userData?.[0]});
    }).catch(err => {
        console.log("There is some error in fetching the from database", err);
    })
};

exports.updateUser = (req,res)=>{
    const user = new User();
    user.save(req?.body)?.then(userData => {
        console.log("Hey bro");
        res?.status(200)?.render('user',{pageTitle: "User Page",path: routesConstant?.user,userDet: userData?.[0]})})
    ?.catch(err => console.log(err));   
}