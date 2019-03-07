require('./config/config');
require('./models/db');
require('./config/passportConfig');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
// const fs = require('fs');
// const pdf = require('html-pdf');

const rtsIndex = require('./routes/index.router');

var app = express();

// var html = fs.readFileSync('CV-Template/index.html', 'utf-8');
// var options = {format: 'A4', timeout: '100000'};
//
// pdf.create(html,options).toFile('abc.pdf', (err,res) => {
//     if(err) return console.log(err);
//     console.log(res);
// });

// middleware
app.use(bodyParser.json());
app.use(cors());
app.use(passport.initialize());
app.use('/api', rtsIndex);

// error handler
app.use((err, req, res, next) => {
    if (err.name === 'ValidationError') {
        var valErrors = [];
        Object.keys(err.errors).forEach(key => valErrors.push(err.errors[key].message));
        res.status(422).send(valErrors)
    }
    else{
        console.log(err);
    }
});

// start server
app.listen(process.env.PORT, () => console.log(`Server started at port : ${process.env.PORT}`));
