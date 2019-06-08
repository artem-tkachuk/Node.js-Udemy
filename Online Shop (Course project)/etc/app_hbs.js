//Core Modules
const path = require('path');

//Third-party packages
const express = require('express');
const bodyParser = require('body-parser');
const expressHbs = require('express-handlebars');

//routes
const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app_hbs = express();

app_hbs.engine('hbs', expressHbs({
        extname: 'hbs',
        layoutsDir: 'views/layouts',
        defaultLayout: 'main-layout'
    })
);
app_hbs.set('view engine', 'hbs');
app_hbs.set('views', 'views');

app_hbs.use(bodyParser.urlencoded({extended: false}));
app_hbs.use(express.static(path.join(__dirname, 'public')));

app_hbs.use(shopRoutes);
app_hbs.use('/admin', adminData.routes);

app_hbs.use((req, res, next) => {  //'/' is default
    res.status(404).render('404', {pageTitle: '404 Page not found'});
});


app_hbs.listen(3000);