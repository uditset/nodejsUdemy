const routesPaths = require("./routes/routes")
const http = require('http');
const fs = require('fs');
const port = 50050;
const server = http.createServer((req, resp)=>{
    const urlRequested = req.url;
    console.log(urlRequested, " ", req.method);
    switch (urlRequested) {
        case routesPaths.home:
            resp.writeHead(200);
            resp.write( `Hey I am running an Home page because requested url was ${urlRequested}`);
            resp.end();
            break;

        case routesPaths.profile:
            const body = [];
            req.on('data',(chunk)=>{
                console.log(chunk);
                body.push(chunk);
            })
            req.on('end',()=>{
                const parsedBody = Buffer?.concat(body)?.toString();
                console.log(parsedBody);
                //fs.writeFileSync('Recieved Json Data From Request',parsedBody); //blocks the execeution of code after till the time file is not created successfully.
                fs.writeFile('Recieved Json Data From Request 2',parsedBody,err=>{
                    console.log(err);
                    if(err)
                    {
                        resp.writeHead(302);
                        return resp.write('There is some error in creating the file');
                    }
                });
            })
            resp.writeHead(200);
            resp.write( `Hey I am running an Profile page because requested url was ${urlRequested}`);
            resp.end();
            break;

        case routesPaths.form:
            const formElement = `<html>
            <head>
                <title>Form Page</title>
            </head>
            <body>
                <form method="POST" action="/createFile">
                    <input type="text" name="randomname" placeholder="Enter Random Name">
                    <button type="submit">Submit</button>
                </form>
            </body>
            </html>`
            resp.writeHead(200);
            resp.write(formElement);
            resp.end();
            break;
        
        case routesPaths.createFile:
            if(req.method==="POST")
            {
                const body = [];
                req.on('data',(chunk)=>{
                    body.push(chunk);
                    console.log(chunk);
                });
                req.on('end',()=>{
                    console.log('body: ', body);
                    const parsedBody = Buffer.concat(body).toString();
                    console.log('parsedBody: ',parsedBody);
                    const message = parsedBody?.split('=')?.[1];
                    console.log(message);
                    fs.writeFileSync("New File 2",message);
                })
                resp.writeHead(201);
                resp.write("Filte created successfully");
                resp.end();
            }
            break;
    
        default:
            resp.writeHead(200);
            resp.write( `Hey I am running on port ${port}`);
            resp.end();
            break;
    }
    // console.log(req);
    // console.log('..................................................................')
    // console.log(req.url);
    // console.log('..................................................................')
    // console.log(req.headers);
    // console.log('..................................................................')
    // console.log(req.method);
    // console.log('..................................................................')
});

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
