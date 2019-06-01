const http = require('http');
const fs = require('fs');


/*function requestListerner(req, res) {
    //function body here...
}

http.createServer(requestListerner);*/
//process.exit(); is used to quit the server

const formHTML = `
        <!DOCTYPE html>
        <html>
            <head>
                <meta charset="UTF-8">
                <title>First node.js app</title>
             </head>
             
            <body>
                <form action = "/message" method = "POST">
                    <input type = "text" name = "message">
                    <button type = "submit">Send</button>
                </form>
            </body>
        </html>
    `;
const textHTML = `
        <!DOCTYPE html>
        <html>
            <head>
                <meta charset="UTF-8">
                <title>First node.js app</title>
             </head>
             
            <body>
                <h1>Hello from my first Node.js application!</h1>
            </body>
        </html>
    `;

const requestListener = (req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write(formHTML);
        return res.end();
    }

    if (url === '/message' && method === 'POST') {
        const body = [];

        req.on('data', (chunk) => {
            //console.log(chunk);
            body.push(chunk);
        });

        return req.on('end', () => {
           const parsedBody = Buffer.concat(body).toString();
           const message = parsedBody.split('=')[1];
           fs.writeFile('./message.txt', message, (err) => {
               res.statusCode = 302;
               res.setHeader('Location', '/');
               return res.end();
           });
        });

    }

    res.setHeader('Content-Type', 'text/html');
    res.write(textHTML);
    return res.end();
};

const server = http.createServer(requestListener);

server.listen(3000);
