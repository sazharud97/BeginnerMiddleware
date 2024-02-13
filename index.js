const express = require('express');
const app = express();
const morgan = require('morgan');

// this is called for every single request
app.use(morgan('dev'))
app.use((req, res, next)=> {
    req.requestTime = Date.now();
    console.log(req.method.toUpperCase(), req.path, req.requestTime);
    next();
})
// app.use((req, res, next) => {
//     console.log('hi express middlewareuuhhh')
//     // allows app to continue instead of stopping at call
//     return next();
// })
// app.use((req, res, next) => {
//     console.log('hi second express middlewareuuhhh')
//     // allows app to continue instead of stopping at call
//     // returning next makes sure further code isn't executed in this function before moving on
//     return next();
// })

// app.get('/', (req, res) => {
//     res.send('HOME PAGE SAH')
// })

app.get('/dogs', (req, res) => {
    res.send('WOOF WOOF')
})

app.listen(3000, ()=> {
    console.log('App running on port localhost:3000')
})