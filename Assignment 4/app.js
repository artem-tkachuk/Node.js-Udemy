const path = require('path');

const express = require('express');
const expressHbs = require('express-handlebars');
const bodyParser = require('body-parser');

const routes = require('./routes/routes');

const app = express();

//app.set('view engine', 'ejs');
app.set('view engine', 'pug');
/*app.engine('hbs', expressHbs({
    layoutsDir: 'views/layouts',
    defaultLayout: 'main-layout',
    extname: 'hbs'
}));*/
app.set('view engine', 'pug');
app.set('views', 'views');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

//Routes
app.use(routes);

//404
app.use((req, res, next) => {
    const parameters = {
        pageTitle: '404 Page not found!',
        path: '/404',
        formCSS: true,
        usersCSS: true,
        activeDisplayUsers: false,
        activeFormInput: false
    };
    res.render('404', parameters);
});

app.listen(3000);
