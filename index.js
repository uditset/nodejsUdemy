console.log("This is index.js file.");
const dummyArray = ["udit","gourav"];
console.log(dummyArray);
dummyArray[0] = "Rahul";
console.log(dummyArray);
const newArray = [...dummyArray,"sunny","mohit"];
console.log(newArray);
console.log(dummyArray);

const dummyArray2 = newArray.slice();
dummyArray2.push(5);
console.log(dummyArray2);
const http = require('http');
http.createServer((req,resp)=>{
    resp.writeHead(200,{'content-Type': 'application/json'});

}).listen(9000);

const restOperator = (...args) => {
    return args;
}

const withoutRestOperator = (arg1,arg2) => {
    return [arg1,arg2];
}
console.log(restOperator(1,2,3,4,5));
console.log(withoutRestOperator(1,2,3,4,5));
