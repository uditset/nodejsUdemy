const http = require('http');
const {handleIncomingRequests} = require('./routes/routes.js');
const server = http?.createServer(handleIncomingRequests);
const PORT = 3000;

server?.listen(PORT,()=>console.log(`SERVER STARTED AT PORT ${PORT}`));


//Doubts arised switch case was not working in routes.js in handleIncomingRequests thats why I replaced with if else

