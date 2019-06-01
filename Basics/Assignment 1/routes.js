const dummyUsersList = () => {
    return `
        <!DOCTYPE html>
        <html>
            <head>
                <meta charset="UTF-8">
                <title>My first assignment's dummy users list!</title>
            </head>
            
            <body>
                <ul>
                    <li>User 1</li>
                    <li>User 2</li>
                    <li>User 3</li>
                </ul>
            </body>        
        </html>
    `;
};

const formHTML = () => {
    return `
        <!DOCTYPE html>
        <html>
            <head>
                <meta charset="UTF-8">
                <title>First node.js course assignments</title>
             </head>
             
            <body>
                <form action = "/create-user" method = "POST">
                    <input type = "text" name = "username">
                    <button type = "submit">Send</button>
                </form>
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

    if (url === '/users') {
        res.setHeader('Content-Type', 'text/html');
        res.write(dummyUsersList());
        return res.end();
    }

    if (url === '/create-user' && method === 'POST') {
        const body = [];

        req.on('data', (chunk) => {
            body.push(chunk);
        });

        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();  //username=abc
            const message = parsedBody.split('=')[1];  //abc
            console.log(message);
        });

        res.statusCode = 302;
        res.setHeader('Location', '/');
        res.end();
    }
};

exports.handler = requestHandler;