const routesConstant = require("../routes/routesConstant");

exports.homePage = (req,res)=>{
    res?.status(200)?.render('homePage',{pageTitle: "Home Page",path: routesConstant?.homePage});
};