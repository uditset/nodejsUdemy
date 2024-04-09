const routesInfo = require('./routesConstant.js');
const fs = require('fs');

const handleIncomingRequests = (req,res) => {
    const url = req.url;
    const method = req.method;
        if(url===routesInfo?.home)
        {
            res.writeHead(200);
            res.write(`Hey bro I am reached to home page.`);
            res.end();
        }
        else if(url===routesInfo?.users)
        {
            const dummyUsers = ['User 1','User 2','User 3','User 4','User 5','User 6'];
            res.writeHead(200);
            res.write(`
                <html>
                    <head><title>Dummy users</title></head>
                    <body>
                        <ul>
                          ${dummyUsers?.map(item => `<li>${item}</li>`).join()}
                        </ul>
                    </body>
                </html>
            `);
            res.end();
        }
        else if(url===routesInfo?.form)
        {
            res.writeHead(200);
            res.write(`
                <html>
                    <head><title>Dummy users</title></head>
                    <body>
                        <form method="POST" action='/create-user'>
                            <input type="text" placeholder="Enter your name" name="firstName">
                            <input type="submit" value="Submit It!">
                        </form>
                    </body>
                </html>
            `);
            res.end();
        }
        else if(url===routesInfo?.createUser && method==="POST")
        {
                const body = [];
                req.on('data',(chunk)=>{
                    body.push(chunk);
                })
                req.on('end',()=>{
                    const parsedBody = Buffer?.concat?.(body)?.toString();
                    fs.writeFile('User Details From Request',parsedBody,err=>{
                        if(err)
                        {
                            res.writeHead(203);
                            res.write(`There is some Issue in creating the data.`);
                            res.end();
                        }
                        else
                        {
                            res.writeHead(201);
                            res.write(`${parsedBody} Data created successfully`);
                            res.end();
                        }
                    })
                })
        }
        else
        {
            res.writeHead(404);
            res.write(`Page Not Found.`);
            res.end();
        }
}

exports.handleIncomingRequests = handleIncomingRequests;