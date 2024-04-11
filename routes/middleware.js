const middleWare1 = (req,resp,next) => {
    console.log("I am in middle Ware 1");
    next();
}

const middleWare2 = (req,resp,next) => {
    console.log("I am in middle ware 2");
    resp.send('<h1>This is middle ware 2</h1>');
}

module.exports = {
    middleWare1: middleWare1,
    middleWare2: middleWare2,
}

