const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const routes = require('./routes/assignmentRoutes');
const rootDir = require('./util/path');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(routes);

//404 error (page not found) handling
app.use((req, res, next) => {
    const path404 = path.join(__dirname, 'views', '404.html');
    res.status(404).sendFile(path404);
});

app.listen(3000);