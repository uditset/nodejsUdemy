const routesPaths = require("./routes/routes")
const http = require('http');
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
                <form method="POST" action="/profile">
                    <input type="text" name="randomname" placeholder="Enter Random Name">
                    <button type="submit">Submit</button>
                </form>
            </body>
            </html>`
            resp.writeHead(200);
            resp.write(formElement);
            resp.end();
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