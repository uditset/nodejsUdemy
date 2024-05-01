// const formData = require("../database/formData");
const User = require("../modals/User");
const routesConstant = require("../routes/routesConstant");

exports.userPage = (_,res)=>{

    User?.findAll()?.then(userDet => {
        const userDetails = userDet?.map(user => user?.dataValues);
        res?.status(200)?.render('user',{pageTitle: "User Page",path: routesConstant?.user,userDet: userDetails});
    })?.catch(err => console.log("Some Error in fetching the data from database",err));
};

exports.userByIdPage = (req,res) => {
    console.log(req?.query?.id)
     User.findByPk(req?.query?.id)?.then(userDet => {
        const userDetails = [userDet?.dataValues];
        res?.status(200)?.render('user',{pageTitle: "User Page By Id",path: routesConstant?.userById,userDet: userDetails});
     })?.catch(err => console.log(err));
}

exports.updateUser = (req,res)=>{
    User.create({
        name: req?.body?.name,
        email: req?.body?.email,
        gender: req?.body?.gender,
        password_hash: "dummy_password_hash",
    })?.then(result => {
        return User?.findAll();
    })?.then(userDet => {
            const userDetails = userDet?.map(user => user?.dataValues);
            res?.status(200)?.render('user',{pageTitle: "User Page",path: routesConstant?.user,userDet: userDetails});
        }
    )?.catch(err => console.log(err));
    //        res?.status(200)?.render('user',{pageTitle: "User Page",path: routesConstant?.user,userDet: userData?.[0]})})
}