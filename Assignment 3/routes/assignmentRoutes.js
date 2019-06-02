const path = require('path');

const express = require('express');
const router = express.Router();

const rootDir = require('../util/path');

router.get('/', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'index.html'));
});

router.get('/new-creation', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'new-creation.html'));
});

router.post('/new-creation', (req, res, next) => {
   console.log(req.body);
   res.redirect('/');
});

module.exports = router;