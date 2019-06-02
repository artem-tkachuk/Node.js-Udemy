const express = require('express');

const app = express();

/*app.use((req, res, next) => {
    console.log('First middleware!');
    next();
});

app.use((req, res, next) => {
   console.log('Second middleware!');
   res.send('Assignment solved(almost)!');
});*/


app.use('/users', (req, res, next) => {
    console.log('/ middleware!');
    res.send('/users middleware');
});

app.use('/', (req, res, next) => {
    console.log('/users middleware!');
    res.send('/ middleware')
});

app.listen(3000);