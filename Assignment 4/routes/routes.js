const express = require('express');
const router = express.Router();

const users = [];

router.get('/', (req, res, next) => {
    const parameters = {
        pageTitle: 'Username input',
        path: '/',
        formCSS: true,
        usersCSS: true,
        activeDisplayUsers: false,  //making it explicit
        activeFormInput: true
    };
    res.render('formInput', parameters);
});

router.get('/users', (req, res, next) => {
    const parameters = {
        pageTitle: 'Table of users',
        path: '/users',
        users: users,
        formCSS: true,
        usersCSS: true,
        activeDisplayUsers: true,
        activeFormInput: false,
        hasUsers: users.length > 0
   };
    res.render('displayUsers', parameters);
});

//form submitted
router.post('/users', (req, res, next) => {
    users.push({name: req.body.name});
    res.redirect('/users');
});

module.exports = router;