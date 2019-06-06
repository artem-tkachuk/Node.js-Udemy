const path = require('path');

const express = require('express');

const bodyParser = require('body-parser');

const routes = require('./routes/routes');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

//Routes
app.use(routes);

//404
app.use((req, res, next) => {
    const parameters = {
      pageTitle: '404 Page not found!',
      path: '/404'
    };
    res.status(404).render('404', parameters);
});

app.listen(3000);
