const fs = require('fs');


const formHTML = () => {
    return `
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
};

const textHTML = () => {
    return `
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
};

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write(formHTML());
        return res.end();
    }

    if (url === '/message' && method === 'POST') {
        const body = [];

        //a couple of event listeners
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
    res.write(textHTML());
    return res.end();
};

module.exports = {
    handler: requestHandler,
    someText: 'Some hard coded text'
};

/*exports.handler = requestHandler;
exports.someText = 'Some hard coded text';*/



