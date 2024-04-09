const http = require('http');
const port = 50050;
const request = require('./request.js')
const server = http.createServer(request?.handleIncomingRequests);

server.listen(port);

/*setTimeout(()=>{
    console.log(process.argv);
    process.exit();
},5000)*/

setTimeout(()=>{
    console.log("set time out after 10 s");
},9000)


setImmediate(()=>{
    console.log("set Immediate out after 10 s");
})

console.log("I am udit sethi");
console.log("Are u understanding my concernbro?");
console.log(request?.hardCodedText);
