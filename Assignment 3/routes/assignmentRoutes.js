const path = require('path');

const express = require('express');
const router = express.Router();

const rootDir = require('../util/path');

router.get('/', (req, res, next) => {
    const pathIndex = path.join(rootDir, 'views', 'index.html');
    res.sendFile(pathIndex);
});

router.get('/new-creation', (req, res, next) => {
    const pathNewCreation = path.join(rootDir, 'views', 'new-creation.html');
    res.sendFile(pathNewCreation);
});

router.post('/new-creation', (req, res, next) => {
   console.log(req.body);
   res.redirect('/');
});

module.exports = router;