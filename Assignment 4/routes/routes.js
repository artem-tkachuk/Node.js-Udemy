const express = require('express');
const router = express.Router();

const users = [];

router.get('/', (req, res, next) => {
    const parameters = {
        pageTitle: 'Username input',
        path: '/'
    };
    res.render('formInput', parameters);
});

router.get('/users', (req, res, next) => {
    const parameters = {
        pageTitle: 'Table of users',
        path: '/users',
        users: users
   };
    res.render('displayUsers', parameters);
});

//form submitted
router.post('/users', (req, res, next) => {
    users.push({name: req.body.name});
    res.redirect('/users');
});

module.exports = router;