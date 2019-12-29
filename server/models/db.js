const mongoose = require('mongoose');

const connection = 'mongodb://localhost:27017/ProductDB';

mongoose.connect(connection, { useNewUrlParser: true }, (err) => {
    if (!err) {
        console.log('MongoDB connection successfully connected.');
    }
    else {
        console.log('Error in DB connection : ' + err);
    }
});

require('./product.model');


// const mongoose = require('mongoose');
//
// mongoose.connect('mongodb://dheeraj:dheeraj123@ds117681.mlab.com:17681/resume',
//     {useNewUrlParser: true }, (err) => {
//         if (!err) { console.log('MongoDB connection succeeded.'); }
//         else { console.log('Error in MongoDB connection : ' + JSON.stringify(err, undefined, 2)); }
//     });
//
// require('./user.model');


